// pages/topics/[id].js
import Head from 'next/head'
import Link from 'next/link'
import moment from 'moment';

import Layout from '../../components/layout'

export default function topicsId({ topics, topicslist }) {
  const getTopicDate = (date) => {
    var d = ''
    d = moment(date)
    return (
      d.format("YYYY.MM.DD")
    )
  }
  const topicsList = (read) => {
    return (
      read.contents?.map(topics => (
        <li key={topics.id} class="mt-2 lg:mt-0 hover:bg-gray-100 w-full px-4 md:px-0 md:mx-0 mb-4 md:mb-8">
          <Link legacyBehavior href={topics.link ? topics.link : `./${topics.id}`}>
            <a>
              <div class="lg:px-0">
                <div class="flex items-center my-2">
                  <time datetime={`${topics.datetime}`}>{getTopicDate(`${topics.datetime}`)}</time>
                  <div class={`${topics.category_color} rounded-2xl w-28 text-center ml-2 flex items-center justify-center h-6`}>
                    <span class="text-white text-xs NotoSans-L">{topics.category}</span>
                  </div>
                </div>
                <p class="flex items-center flex-wrap NotoSans-L text-base mt-3 w-full pb-4 border-b border-gray-900">{topics.title}</p>
              </div>
            </a>
          </Link>
        </li>
      ))
    )
  }
  return (
    <>
      <Head>
        <title>{topics.title}</title>
        <link rel="icon" href="/falconer_favicons.png" />
      </Head>
      <Layout>
        <main class="md:flex max-w-1520 mx-auto">
          <div class="mx-auto py-6 px-2 lg:px-12 lg:py-12 lg:w-1100 md:w-3/4">
            <h1 class="NotoSans-L text-lg flex items-center justify-start my-3 w-full">{topics.title}</h1>
            <div class="flex items-center mb-2">
              <time datetime={`${topics.datetime}`}>{getTopicDate(`${topics.datetime}`)}</time>
              <div class={`${topics.category_color} rounded-2xl w-32 text-center ml-2 flex items-center justify-center h-6`}>
                <span class="text-white text-xs NotoSans-L">{topics.category}</span>
              </div>
            </div>
            <img class="object-cover" src={`${topics.main_image.url}`} alt="" />
            <div class="flex mb-4 lg:mb-8">
              {topics.tag.map(tag => (
                <span class="px-1 lg:px-4 lg:py-2 bg-gray-100 rounded-full text-sm">{tag.tagname}</span>
              ))}
            </div>
            <div id="topics-rich-text" class="helvetica"
              dangerouslySetInnerHTML={{
                __html: `${topics.body}`,
              }}
            />
            <div id="topics-rich-text" class="helvetica"
              dangerouslySetInnerHTML={{
                __html: `${topics.body2}`,
              }}
            />
          </div>
          <div class=" md:w-1/4 py-6 lg:py-12">
            <h2 class="bg-black text-white text-center my-3 py-3 NotoSans-L text-lg">最新の記事</h2>
            <ul>
              {topicsList(topicslist)}
            </ul>
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
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  };
  const data = await fetch('https://falconer.microcms.io/api/v1/topics/' + id, key)
    .then(res => res.json())
    .catch(() => null);
  const topics = await fetch('https://falconer.microcms.io/api/v1/topics?limit=4', key)
    .then(res => res.json())
    .catch(() => null);
  return {
    props: {
      topics: data,
      topicslist: topics,
    },
  };
};