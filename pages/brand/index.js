import Head from 'next/head'
import Image from 'next/image'

import Layout from '../../components/layout'

export default function Brand() {
  return (
    <div>
      <Head>
        <title>BRAND</title>
        <link rel="icon" href="/falconer_favicons.png" />
      </Head>
      <Layout>
      <main>
        <div class="mx-auto pt-6 lg:pt-12 lg:mb-12 lg:w-1100">
          <div class="flex justify-center Osaka mb-6 py-2 font-bold text-3xl bg-falGLD text-white">
            <p class="inline-block">ブ</p>
            <p class="inline-block">ラ</p>
            <p class="inline-block">ン</p>
            <p class="inline-block -ml-0.5">ド</p>
          </div>
          <div class="block mx-auto lg:flex lg:px-0 mt-6 mb-6 lg:mt-12">
            <div className="lg:w-1/2 relative w-full">
              <Image className="object-cover" src="/images/brand/bachicashley_hero.jpg" alt="bachicashley" width={720} height={360} />
              <p class="mt-2 lg:mt-6 px-2">BachicAshleyは、人生における全ての時間を幸せに過ごしていくために、「最上級の上質さ」を提供します。</p>
            </div>
            <div className="lg:w-1/2 relative w-full lg:ml-8 mt-12 lg:mt-0">
              <Image className="object-cover" src="/images/brand/lv_hero.jpg" alt="bachicashley" width={720} height={360} />
              <p class="mt-2 lg:mt-6 px-2">Lurverriは、あなたとレザーが幸せな時間を過ごしていくために、あなたとレザーの幸せなLife Timeを提供します。</p>
            </div>
          </div>
        </div>
      </main>
      </Layout>
    </div>
  )
}
