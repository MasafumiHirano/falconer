import Head from 'next/head'

import Layout from '../../components/layout'

export default function Media() {
  return (
    <div>
      <Head>
        <title>MEDIA</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
      <main>
        <div class="mx-auto pt-12 mb-12" style={{ width: "1100px" }}>
          <div><h1 class="text-4xl text-center mb-6">MEDIA</h1></div>
          <div><h1 class="text-xl text-center mb-6">coming soon</h1></div>
        </div>
      </main>
      </Layout>
    </div>
  )
}
<<<<<<< HEAD

export const getStaticProps = async() => {
  const key = {
    headers: {'X-API-KEY': process.env.API_KEY},
  };
  const data = await fetch('https://falconer.microcms.io/api/v1/media', key)
    .then(res => res.json())
    .catch(() => null);
  return {
    props: {
      videos: data.contents,
    },
  };
}
=======
>>>>>>> 77df7cf4e99abf73f207c664351ac9fd721f0e3f
