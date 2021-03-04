import Head from 'next/head'
import Link from 'next/link'

import Layout from '../../components/layout'

export default function Topics({topics}) {
  return (
    <div>
      <Head>
        <title>TOPICS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
      <main>
        <div class="mx-auto pt-12 mb-12" style={{ width: "1100px" }}>
          <div><h1 class="text-4xl text-center mb-6">TOPICS</h1></div>
          <div>
            <ul>
              {topics.map(topic => (
                <li key={topic.id}>
                  <Link href={`topics/${topic.id}`}>
                    <a>{topic.title}</a>
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