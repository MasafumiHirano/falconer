import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import Layout from '../../components/layout'

export default function Statement() {
  return (
    <div>
      <Head>
        <title>企業理念</title>
        <link rel="icon" href="/falconer_favicons.png" />
      </Head>
      <Layout>
        <main class="-mb-4 NotoSans">
          <div class="mb-12 md:mb-24">
            <div class="relative">
              <h1 class="mission_title futura-lt text-white text-center font-bold text-3xl lg:text-3xl h-405 flex items-center justify-center flex-col">PHILOSOPHY<p class="NotoSans text-base font-normal">経営思想</p></h1>
            </div>
            {/*ナビゲーション*/}
            <div class="flex w-11/12 lg:w-768 mx-auto mt-20 lg:mt-24 NotoSans font-normal text-sm lg:text-base">
              <p class="w-32% border-r-2 text-comGOLD border-comGOLD text-center">ミッション</p>
              <p class="w-32% border-r-2 border-comGOLD text-center"><a href="/company/strength">弊社の強み</a></p>
              <p class="w-32% text-center"><a href="/company/about_ceo">代表紹介</a></p>
            </div>
            <section class="flex flex-wrap lg:flex-nowrap md:justify-end w-full md:w-93% md:ml-auto mt-16 md:mt-28 relative">
              <div class="text-black px-4 md:px-0 w-full md:w-3/5 max-w-1050 z-10 order-2 lg:order-1">
                <div class="border-t-4 border-comGOLD mr-0 md:mr-11">
                  <h2 class="NotoSans text-comGOLD text-2xl md:text-4xl mb-10 py-4 border-b border-gray-700">STATEMENT</h2>
                  <div class="flex text-left">
                    <h3 class="text-2xl md:text-4xl md:pl-4 md:mb-8 NotoSans">モノづくりを通じ、<span class="block md:inline-block">人々に幸せを広げ、</span><span class="block">世界をより良くする。</span></h3>
                  </div>
                  <div class="md:pl-4 mt-4 md:m-0 lg:block text-md md:text-xl md:leading-8 font-light">
                    <p class="">
                      私たちが創り出す、最高の商品とは、<br class="hidden lg:block" />上質な素材でデザイン・機能性を意識し、<br class="hidden lg:block" />一流の技術力を持って作り上げられたモノというだけではありません｡<br class="hidden lg:block" /></p>
                    <p class="">{`　`}</p>
                    <p class="">生産者の労働環境や地球環境まで配慮し、<br class="hidden lg:block" />フェアな金額でお客様が優しさや強さに包まれ笑顔になって頂ける商品のことです。<br class="hidden lg:block" /></p>
                    <p class="">{`　`}</p>
                    <p class="">また我々はそのような「最高の商品」を創り出すことでお客様はもちろん<br class="hidden lg:block" />商品が生まれるまでに携わった全ての人々や世界、<br class="hidden lg:block" />素材を提供してくれる地球を幸せにしていきたいと考えています。</p>
                  </div>
                </div>
              </div>
              <picture class="w-full md:w-4/12 max-w-650 lg:static order-1 lg:order-2 mb-12 lg:mb-0">
                <source media="(min-width: 960px)" srcSet="/images/company/statement_image.jpg" />
                <img class="w-full" src="/images/company/statement_image_sp.jpg" />
              </picture>
            </section>

            <section class="flex flex-wrap lg:flex-nowrap md:justify-start w-full md:w-93% md:mr-auto mt-16 md:mt-28 relative">
              <picture class="w-full md:w-4/12 max-w-650 lg:static mb-12 lg:mb-0">
                <source media="(min-width: 960px)" srcSet="/images/company/vision_image.jpg" />
                <img class="w-full" src="/images/company/vision_image_sp.jpg" />
              </picture>
              <div class="text-black px-4 md:px-0 md:w-3/5 max-w-1050 z-10">
                <div class="border-t-4 border-comGOLD ml-0 md:ml-11">
                  <h2 class="NotoSans text-comGOLD text-2xl md:text-4xl mb-10 py-4 border-b border-gray-700">VISION</h2>
                  <div class="flex text-left">
                    <h3 class="text-2xl md:text-4xl md:pl-4 md:mb-8 NotoSans">今日よりも、<span class="block md:inline-block">もっと幸せな明日を。</span></h3>
                  </div>
                  <div class="md:pl-4 mt-4 md:mt-0 lg:block text-md md:text-2xl md:leading-10 font-light">
                    <div class="mb-8 text-base lg:text-xl">
                      <p class="">高品質かつワクワクする商品を生み出し<br class="hidden lg:block" />お客様の生活をより豊かで幸せなものにします。</p>
                    </div>
                    <div class="mb-8 text-base lg:text-xl">
                      <p class="">社員やお取引企業様はもちろん、<br class="block lg:hidden" />商品がお客様のお手元に<br class="hidden lg:block" />届くまでに関わる全ての人々や世界の幸せと発展に貢献します。</p>
                    </div>
                    <div class="mb-8 text-base lg:text-xl">
                      <p class="">地球環境の保全を心がけ、永続的な発展をするために<br class="hidden lg:block" />無駄のない流通・運営を行い、毎日の成長を続けます。</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section class="flex flex-wrap lg:flex-nowrap md:justify-end w-full md:w-93% md:ml-auto mt-16 md:mt-28 relative">
              <div class="text-black px-4 md:px-0 md:w-3/5 max-w-1050 z-10 order-2 lg:order-1">
                <div class="border-t-4 border-comGOLD mr-0 md:mr-11">
                  <h2 class="NotoSans text-comGOLD text-2xl md:text-4xl mb-10 py-4 border-b border-gray-700">VALUE</h2>
                  <div class="md:pl-4 flex flex-wrap text-lg">
                    <div class="w-full md:w-1/2 mb-8 NotoSans">
                      <h3 class="text-2xl md:text-4xl mb-4 md:mb-6">強くあれ</h3>
                      <p class="">大胆かつ、スピーディに実行すること</p>
                      <p class="">諦めてはいけないときに諦めないこと</p>
                      <p class="">怒らず、恐れず、悲しまないこと</p>
                    </div>
                    <div class="w-full md:w-1/2 mb-8">
                      <h3 class="text-2xl md:text-4xl mb-4 md:mb-6">賢くあれ</h3>
                      <p class="">改善点を常に模索すること</p>
                      <p class="">常識を疑い打破すること</p>
                      <p class="">全ての人が幸せになる方法を探すこと</p>
                    </div>
                    <div class="w-full md:w-1/2 mb-8">
                      <h3 class="text-2xl md:text-4xl mb-4 md:mb-6">優しくあれ</h3>
                      <p class="">常に暖かい気持ちで考えること</p>
                      <p class="">常に相手の立場で考えること</p>
                      <p class="">第三者への影響を考え<br class="block lg:hidden" />バランスを取ること</p>
                    </div>
                    <div class="w-full md:w-1/2 mb-8">
                      <h3 class="text-2xl md:text-4xl mb-4 md:mb-6">幸せであれ</h3>
                      <p class="">感謝の気持ちを忘れないこと</p>
                      <p class="">楽しみを見つけること</p>
                      <p class="">相手と自分を同じくらい大切にすること</p>
                    </div>
                  </div>
                </div>
              </div>
              <picture class="w-full md:w-4/12 max-w-650 lg:static order-1 lg:order-2 mb-12 lg:mb-0">
                <source media="(min-width: 960px)" srcSet="/images/company/value_image.jpg" />
                <img class="w-full" src="/images/company/value_image_sp.jpg" />
              </picture>
            </section>

            <section class="flex flex-wrap lg:flex-nowrap md:justify-start w-full md:w-93% md:mr-auto mt-16 md:mt-28 relative">
              <picture class="w-full md:w-4/12 max-w-650 lg:static mb-12 lg:mb-0">
                <source media="(min-width: 960px)" srcSet="/images/company/slogan_image.jpg" />
                <img class="w-full" src="/images/company/slogan_image_sp.jpg" />
              </picture>
              <div class="text-black px-4 md:px-0 md:w-3/5 max-w-1050 z-10">
                <div class="border-t-4 border-comGOLD ml-0 md:ml-11">
                  <h2 class="NotoSans text-comGOLD text-2xl md:text-4xl mb-10 py-4 border-b border-gray-700">SLOGAN</h2>
                  <div class="md:pl-4 text-center tracking-widest mt-5 lg:mt-8">
                    <div class="flex futura-md text-comGOLD text-3xl md:text-5xl flex-col md:flex-row md:mb-8">
                      <span class="">Stay Strong, </span>
                      <span class="">Stay Kind,</span>
                      <span class="">Stay Happy</span>
                    </div>
                  </div>
                  <div class="md:pl-4 text-base md:text-lg">
                    <div class="mt-4 lg:mt-12 mb-2">
                      <h3 class="mb-8 lg:mb-4 text-2xl md:text-4xl">Stay Strong</h3>
                      <p class="">私たちの商品は身に着けるお客様の心を強くします。<br class="hidden lg:block" />商品は最上級の素材と製法にこだわります。<br class="hidden lg:block" /></p>
                      <p>{`　`}</p>
                      <p class="">人や社会、世界に対して常に「強さ」を大切にすることで、<br class="hidden lg:block" />弱きものが苦しまない正しい社会を目指します。</p>
                    </div>
                    <div class="mt-12 mb-2">
                      <h3 class="mb-8 lg:mb-4 text-2xl md:text-4xl">Stay Kind</h3>
                      <p class="">私たちの商品は身に着けるお客様の心を温かくします。<br class="hidden lg:block" />商品は常に最高の使い易さを提供します。</p>
                      <p>{`　`}</p>
                      <p class="">人や社会、世界に対して常に「優しさ」を大切にすることで、<br class="hidden lg:block" />我々のビジネスが世界を幸せにできるよう努めます。</p>
                    </div>
                    <div class="mt-12 mb-2">
                      <h3 class="mb-8 lg:mb-4 text-2xl md:text-4xl">Stay Happy</h3>
                      <p class="">私たちの商品は身に着けるお客様の心を幸せにします。<br class="hidden lg:block" />商品は常に理屈を超えた満足感を与えます。</p>
                      <p>{`　`}</p>
                      <p class="">我々はビジネスを通じて一時的な幸せではなく、<br class="hidden lg:block" />全ての人々や世界が永続的に幸せでいられるよう、常に考え努力していきます。</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div class="flex justify-center items-center mb-8 mt-24">
              <h1 class="text-2xl lg:text-3xl font-bold ml-4 midashiGo text-center leading-10">Falconerは、強く、優しく、<br class="block lg:hidden" />人々を幸せにします。</h1>
            </div>

            <div class="flex w-11/12 lg:w-768 mx-auto my-20 lg:my-24 NotoSans font-normal text-sm lg:text-base">
              <p class="w-32% border-r-2 text-comGOLD border-comGOLD text-center">ミッション</p>
              <p class="w-32% border-r-2 border-comGOLD text-center"><a href="/company/strength">弊社の強み</a></p>
              <p class="w-32% text-center"><a href="/company/about_ceo">代表紹介</a></p>
            </div>

            {/*<section class="py-12 lg:py-24 px-3 lg:px-6">
              <div class="text-black lg:w-1100 mx-auto flex justify-center">
                <div class="px-4 lg:px-0 lg:w-1/2">
                <Link legacyBehavior href="/company/message"><a>
                    <div class="flex justify-center items-center text-md w-full lg:text-2xl text-center font-bold helvetica tracking-widest border-black border-solid border-4 py-4 px-4">
                      <div class="leading-4 w-1/5 hidden lg:block"></div>
                      <div class="leading-4 lg:w-2/5 lg:ext-right">代表メッセージ</div>
                      <div class="w-1/5 ml-2">
                        <img class="block pb-0.5 w-4/5" src="/images/company/three_arrow.png" width={48} height={12} />
                      </div>
                      <div class="leading-4 w-1/5 hidden lg:block"></div>
                    </div>
                </a></Link>
                </div>
              </div>
  </section>*/}
          </div>
        </main>
      </Layout>
    </div>
  )
}