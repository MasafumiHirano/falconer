// pages/topics/[id].js
import Head from 'next/head'
import Image from 'next/image'
import moment from 'moment'

import Layout from '../../components/layout'

var topic_id = "";

export default function topicId({ topic }) {
  return (
    <>
      <Head>
        <title>{topic.title}</title>
        <link rel="icon" href="/falconer_favicons.png" />
      </Head>
      <Layout>
        <main class="bg-gray-100">
          <div class="flex justify-aroud flex-col lg:flex-row  lg:w-1280">
            <div class="mx-auto px-4 lg:px-12 lg:py-12 bg-white w-full lg:w-9/12">
              <h1 class="text-2xl lg:text-3xl helvetica">{topic.title}</h1>
              <div class="flex justify-start items-center mb-4">
                <span class="text-xs">{getTopicDate(`${topic.datetime}`)}</span>
                <div class={`${topic.category_color} rounded-2xl w-28 ml-2 text-center`}>
                  <span class="text-white hiraginoGo">{topic.category}</span>
                </div>
              </div>
              <Image class="object-cover" src={`${topic.main_image.url}`} width={1100} height={550} alt="" />
              <div id="topic-rich-text" class="helvetica mt-4"
                dangerouslySetInnerHTML={{
                  __html: `${topic.body}`,
                }}
              />
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}

// 静的生成のためのパスを指定
export const getStaticPaths = async () => {
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  };
  const data = await fetch('https://falconer.microcms.io/api/v1/topics', key)
    .then(res => res.json())
    .catch(() => null);
  const paths = data.contents.map(content => `/topics/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async context => {
  const id = context.params.id;
  topic_id = id;
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  };
  const data = await fetch(
    'https://falconer.microcms.io/api/v1/topics/' + id,
    key,
  )
    .then(res => res.json())
    .catch(() => null);
  return {
    props: {
      topic: data
    },
  };
};

const getTopicDate = (date) => {
  var d = ''
  d = moment(date)
  return (
    d.format("YYYY.MM.DD")
  )
}