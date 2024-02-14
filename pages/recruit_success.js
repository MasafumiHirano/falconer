import Head from 'next/head'
import Link from 'next/link'

import Layout from '../components/layout'

export default function Recruit() {
  return (
    <div>
      <Head>
        <title>ご応募完了</title>
        <link rel="icon" href="/falconer_favicons.png" />
      </Head>
      <Layout>
      <main>
        <div class="mx-auto pt-12 mb-12 lg:w-1100">
          <div class="my-12 text-center">ご応募ありがとうございました。</div>
          <p class="text-center"><Link legacyBehavior href="/"><a class="hover:text-gray-500">TOPに戻る</a></Link></p>
        </div>
      </main>
      </Layout>
    </div>
  )
}
