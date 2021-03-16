import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import Layout from '../../components/layout'

export default function Topics({topics}) {
  return (
    <div>
      <Head>
        <title>TOPICS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
      <main style={{backgroundColor: "#cecece" }}>
        <div class="mx-auto py-8 lg:py-12 lg:w-1100">
          <div><h1 class="text-4xl text-center">TOPICS</h1></div>
          <div>
            <ul class="grid grid-cols-3 gap-x-3 lg:gap-x-4 gap-y-8 lg:gap-y-16 mt-12">
              {topics.map(topic => (
                <li key={topic.id} class="">
                  <Link href={`topics/${topic.id}`}>
                    <a>
                      <div>
                        <div><Image src={`${topic.main_image.url}`} width={360} height={210} alt=""/></div>
                        <div class="h-24">
                          <div class="lg:text-xl font-bold lg:mb-4">{topic.title}</div>
                          <div class="lg:flex">
                            {topic.tag.map(tag => (
                              <div class="block">
                                <span class="px-2 lg:px-4 lg:py-2 mr-2 mb-2 bg-white rounded-full text-xs">{tag}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
      </Layout>
    </div>
  )
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const key = {
    headers: {'X-API-KEY': process.env.API_KEY},
  };
  const data = await fetch('https://falconer.microcms.io/api/v1/topics', key)
    .then(res => res.json())
    .catch(() => null);
  return {
    props: {
      topics: data.contents,
    },
  };
};