import Head from 'next/head'
import Link from 'next/link'

import Layout from '../components/layout'

export default function Brand() {
  return (
    <div>
      <Head>
        <title>BRAND</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
      <main>
        <div class="mx-auto pt-12 mb-12 lg:w-1100">
          <div class="my-12 text-center">お問い合わせありがとうございました。</div>
          <p class="text-center"><Link href="/"><a class="hover:text-gray-500">TOPに戻る</a></Link></p>
        </div>
      </main>
      </Layout>
    </div>
  )
}