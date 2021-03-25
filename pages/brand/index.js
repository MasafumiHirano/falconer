import Head from 'next/head'
import Image from 'next/image'

import Layout from '../../components/layout'

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
          <div><h1 class="text-4xl text-center mb-6">BRAND</h1></div>
          <div class="block mx-auto lg:flex lg:px-0 mt-12">
            <div className="lg:w-1/2 relative w-full h-48 lg:h-72">
              <Image className="object-cover" src="/images/brand/bachicashley_hero.jpg" alt="bachicashley" layout={'fill'}/>
            </div>
            <div className="lg:w-1/2 relative w-full h-48 lg:ml-8 mt-12 lg:mt-0 lg:h-72">
              <Image className="object-cover" src="/images/brand/lv_hero.jpg" alt="bachicashley" layout={'fill'}/>
            </div>
          </div>
        </div>
      </main>
      </Layout>
    </div>
  )
}
