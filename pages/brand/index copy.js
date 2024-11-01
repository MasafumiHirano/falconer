import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import Layout from '../../components/layout'

export default function Brand() {
  return (
    <div>
      <Head>
        <title>ブランド</title>
        <link rel="icon" href="/falconer_favicons.png" />
      </Head>
      <Layout>
        <main>
          <div class="mx-auto pt-6 lg:pt-12 lg:mb-12 lg:w-1100">
            <h1 class="Osaka font-bold text-xl lg:text-3xl text-center mb-6 py-2">ブランド</h1>
            <div class="block mx-auto lg:flex lg:px-0 mt-6 mb-6 lg:mt-12">
              <div class="lg:w-1/2 relative w-full">
                <Link legacyBehavior href="//bachicashley.com/"><a target="blank_"><Image className="object-cover" src="/images/brand/brand-ba2.jpg" alt="bachicashley" width={1100} height={550} /></a></Link>
                <p class="mt-2 lg:mt-6 px-2">BachicAshleyは、人生における全ての時間を幸せに過ごしていくために、「最上級の上質さ」を提供します。</p>
              </div>
              <div class="lg:w-1/2 relative w-full lg:ml-8 mt-12 lg:mt-0">
                <Link legacyBehavior href="//lurverri.com/"><a target="blank_"><Image className="object-cover" src="/images/brand/lv_hero.jpg" alt="bachicashley" width={1100} height={550} /></a></Link>
                <p class="mt-2 lg:mt-6 px-2">Lurverriは、あなたとレザーが幸せな時間を過ごしていくために、あなたとレザーの幸せなLife Timeを提供します。</p>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </div>
  )
}
