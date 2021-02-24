import Head from 'next/head'

import Layout from '../../components/layout'

export default function Vision() {
  return (
    <div>
      <Head>
        <title>VISION</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
      <main>
        <div class="mx-auto pt-12 mb-12" style={{ width: "1100px" }}>
          <div><h1 class="text-4xl text-center mb-6">VISION</h1></div>
          <div><h1 class="text-xl text-center mb-6">coming soon</h1></div>
        </div>
      </main>
      </Layout>
    </div>
  )
}
