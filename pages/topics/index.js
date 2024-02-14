import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import moment from 'moment';
import Layout from '../../components/layout'
import { Pagination } from '../../components/PaginationTopics';

export default function Topics({ topics, totalCount }) {
  
  //プレスリリース分のみ抽出
  const topic_pr = topics.filter((topic) => (
    topic.category[0] == 'プレスリリース'
  ))
  const visibletopic_pr = topic_pr
  //お知らせ分のみ抽出
  const topic_info = topics.filter((topic) => (
    topic.category[0] == 'お知らせ'
  ))
  const visibletopic_info = topic_info
  //メディア分のみ抽出
  const topic_media = topics.filter((topic) => (
    topic.category[0] == 'メディア'
  ))
  const visibletopic_media = topic_media

  const filterList = (e) => {
    const updateList = topics.filter((topic) => {
      topic.category[0] == e.target.value
    })
    this.setState({ topics: updateList })
  }

  return (
    <div>
      <Head>
        <title>新着情報</title>
        <link rel="icon" href="/falconer_favicons.png" />
      </Head>
      <Layout>
        <main class="">
          {/*見出し部分*/}
          <div class="mb-6 lg:mb-12">
            <div class="relative">
              <h1 class="futura-lt text-white text-center font-bold text-3xl lg:text-3xl topics_title h-405 md:h-445 flex items-center justify-center flex-col">News<p class="NotoSans-L text-base font-normal">ニュース</p></h1>
            </div>
          </div>
          {/*見出し部分 終了*/}
          <div class="mx-auto mt-20 pb-6 lg:py-12 lg:w-1100">
            <h1 class="futura-lt font-bold lg:mb-12 text-3xl text-center py-2 tracking-wider">News List<p class="NotoSans-L text-base font-normal">ニュース一覧</p></h1>
            <div>
              {/* <form action="">
                <div class="custom_select relative w-64 block mx-auto">
                  <select class="bg-black w-full h-14  text-white text-center" onChange={(event) => { filterList(event) }}>
                    <option value=''>カテゴリ</option>
                    <option value="プレスリリース">プレスリリース</option>
                    <option value="お知らせ">お知らせ</option>
                    <option value="メディア">メディア</option>
                  </select>
                </div>
              </form> */}
              <ul class="mx-auto w-11/12 md:w-full mt-12">
                {topics.map(topic => (
                  <li key={topic.id} class="py-4 border-b">
                    <Link legacyBehavior href={topic.link ? topic.link : `topics/${topic.id}`}>
                      <a class="flex flex-wrap md:flex-row md:justify-center" target="blank_">
                        <div class="w-28 md:w-32 md:text-center">{getTopicDate(`${topic.datetime}`)}</div>
                        <div class={`${topic.category_color} rounded-2xl w-32 text-center max-h-6`}>
                          <span class="text-white NotoSans-L">{topic.category}</span>
                        </div>
                        <p class="w-full mt-2 md:mt-0 md:w-9/12 md:ml-4 NotoSans-L break-words">{topic.title}</p>
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
              <Pagination totalCount={totalCount} />
            </div>
          </div>
        </main>
      </Layout>
    </div>
  )
}

const getTopicDate = (date) => {
  var d = ''
  d = moment(date)
  return (
    d.format("YYYY.MM.DD")
  )
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  };
  const data = await fetch('https://falconer.microcms.io/api/v1/topics', key)
    .then(res => res.json())
    .catch(() => null);
  return {
    props: {
      topics: data.contents,
      totalCount: data.totalCount,
    },
  };
};