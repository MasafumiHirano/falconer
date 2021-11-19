import Head from 'next/head'
import Image from 'next/image'

import Layout from '../../components/layout'

export default function Message() {
  return (
    <div>
      <Head>
        <title>代表メッセージ</title>
        <link rel="icon" href="/falconer_favicons.png" />
      </Head>
      <Layout>
        <main class="-mb-4">
          {/*見出し部分*/}
          <div class="mb-6 lg:mb-12">
            <div class="relative">
              <h1 class="company_title futura-lt text-white text-center font-bold text-3xl lg:text-3xl h-405 flex items-center justify-center flex-col">MESSAGE<p class="NotoSans-L text-base font-normal">代表メッセージ</p></h1>
            </div>
            <div class="w-full md:w-1280">
              {/*社長紹介*/}
              <div class="">
                <div class="w-full md:w-1/4"></div>
                <div class="w-full md:w-3/4">
                  <div class=""></div>
                  <div class=""></div>
                  <div class=""></div>
                </div>
              </div>
            </div>
          </div>
          {/*見出し部分 終了*/}
        </main>
      </Layout>
    </div>
  )
}