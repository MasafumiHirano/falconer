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
      <main class="bg-gray-100">
        <div class="mx-auto pt-12" style={{ width: "1100px" }}>
          <div><h1 class="text-4xl text-center mb-6">TOPICS</h1></div>
          <div>
            <ul class="grid grid-cols-3 gap-x-4 gap-y-8 mt-12">
              {topics.map(topic => (
                <li key={topic.id} class="">
                  <Link href={`topics/${topic.id}`}>
                    <a>
                      <div>
                        <div><Image src={`${topic.main_image.url}`} width={360} height={210} alt=""/></div>
                        <div class="h-24">
                          <div class="text-xl font-bold mb-4">{topic.title}</div>
                          <div class="flex mb-12">
                            {topic.tag.map(tag => (
                              <span class="px-4 py-2 mr-2 bg-white rounded-full text-xs">{tag}</span>
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