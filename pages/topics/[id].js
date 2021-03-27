// pages/topics/[id].js
import Image from 'next/image'

import Layout from '../../components/layout'

export default function topicId({ topic }) {
  return (
    <Layout>
      <main class="bg-gray-100 py-6 lg:py-12">
        <div class="mx-auto px-4 py-6 lg:px-12 lg:py-12 bg-white lg:w-1100">
          <Image src={`${topic.main_image.url}`} width={1100} height={500} alt=""/>
          <h1 class="font-bold text-2xl lg:text-3xl my-4 lg:my-8 helvetica">{topic.title}</h1>
          <div class="flex mb-4 lg:mb-8">
            {topic.tag.map(tag => (
              <span class="px-1 lg:px-4 lg:py-2 bg-gray-100 rounded-full text-sm">{tag.tagname}</span>
            ))}
          </div>
          <div id="topic-rich-text" class="helvetica"
            dangerouslySetInnerHTML={{
              __html: `${topic.body}`,
            }}
          />
        </div>
      </main>
    </Layout>
  );
}

// 静的生成のためのパスを指定
export const getStaticPaths = async () => {
  const key = {
    headers: {'X-API-KEY': process.env.API_KEY},
  };
  const data = await fetch('https://falconer.microcms.io/api/v1/topics', key)
    .then(res => res.json())
    .catch(() => null);
  const paths = data.contents.map(content => `/topics/${content.id}`);
  return {paths, fallback: false};
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async context => {
  const id = context.params.id;
  const key = {
    headers: {'X-API-KEY': process.env.API_KEY},
  };
  const data = await fetch(
    'https://falconer.microcms.io/api/v1/topics/' + id,
    key,
  )
    .then(res => res.json())
    .catch(() => null);
  return {
    props: {
      topic: data,
    },
  };
};