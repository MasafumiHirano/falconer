import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import Layout from '../../components/layout'

export default function Statement() {
  return (
    <div>
      <Head>
        <title>VISION</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
      <main>
        <div class="flex justify-center">
          <div class="pt-8 bg-opacity-75 w-full" style={{backgroundColor: "#786b58"}}>
            <section class="lg:w-1100 px-6 mx-auto pb-16 ">
              <div class="text-white lg:w-1100 mx-auto">
                <div>
                  <h1 class="text-3xl lg:text-5xl text-center border-b-4 pb-2 futura-co">STATEMENT</h1>
                </div>
                <div class="tracking-widest mt-5 lg:mt-16" >
                  <div class="lg:flex lg:justify-center text-center">
                    <h1 class="text-2xl lg:text-3xl lg:mb-8 font-bold">モノづくりを通じ、</h1>
                    <h1 class="text-2xl lg:text-3xl lg:mb-8 font-bold">人々に幸せを広げ、</h1>
                    <h1 class="text-2xl lg:text-3xl mb-8 font-bold">世界をより良くする。</h1>
                  </div>
                  <div class="hidden lg:block text-md lg:text-xl leading-10 lg:text-center">
                    <p class="lg:leading-10">
                    私たちが創り出す、最高の商品とは、<br class="hidden lg:block" />上質な素材でデザイン・機能性を意識し、<br class="hidden lg:block" />一流の技術力を持って作り上げられたモノというだけではありません｡<br class="hidden lg:block" /></p>
                    <p class="">{`　`}</p>
                    <p class="lg:leading-10">生産者の労働環境や地球環境まで配慮し、<br class="hidden lg:block" />フェアな金額でお客様が優しさや強さに包まれ笑顔になって頂ける商品のことです。<br class="hidden lg:block" /></p>
                    <p class="">{`　`}</p>
                    <p class="lg:leading-10">また我々はそのような「最高の商品」を創り出すことでお客様はもちろん<br class="hidden lg:block" />商品が生まれるまでに携わった全ての人々や世界、<br class="hidden lg:block" />素材を提供してくれる地球を幸せにしていきたいと考えています。</p>
                  </div>
                  <div class="block lg:hidden leading-10">
                    <p class="lg:leading-10">私たちが創り出す、最高の商品とは、上質な素材でデザイン・機能性を意識し、一流の技術力を持って作り上げられたモノというだけではありません｡</p>
                    <p class="lg:leading-10">生産者の労働環境や地球環境まで配慮し、フェアな金額でお客様が優しさや強さに包まれ笑顔になって頂ける商品のことです。</p>
                    <p class="lg:leading-10">また我々はそのような「最高の商品」を創り出すことでお客様はもちろん、商品が生まれるまでに携わった全ての人々や世界、素材を提供してくれる地球を幸せにしていきたいと考えています。</p>
                  </div>
                </div>
              </div>
            </section>

            <section class="py-16 px-6" style={{backgroundColor: "#241916"}}>
              <div class="text-white lg:w-1100 mx-auto">
                <div>
                  <h1 class="text-3xl lg:text-5xl text-center border-b-4 pb-2 futura-co">VISION</h1>
                </div>
                <div class="lg:text-center tracking-widest mt-5" >
                  <div class="lg:flex lg:justify-center">
                    <h1 class="text-2xl lg:text-3xl lg:mb-8 font-bold text-center">今日よりも、</h1>
                    <h1 class="text-2xl lg:text-3xl mb-8 font-bold text-center">もっと幸せな明日を。</h1>
                  </div>
                  {/* pc のときはこちらを表示*/}
                  <div class="hidden lg:block text-md lg:text-xl leading-10 lg:text-center">
                    <div class="mb-8 text-base lg:text-xl leading-8 lg:text-center">
                      <p class="leading-10">高品質かつワクワクする商品を生み出し<br class="hidden lg:block" />お客様の生活をより豊かで幸せなものにします。</p>
                    </div>
                    <div class="mb-8 text-base lg:text-xl leading-8 lg:text-center">
                      <p class="leading-10">社員やお取引企業様はもちろん、<br class="block lg:hidden" />商品がお客様のお手元に<br class="hidden lg:block" />届くまでに関わる全ての人々や世界の幸せと発展に貢献します。</p>
                    </div>
                    <div class="mb-8 text-base lg:text-xl leading-8 lg:text-center">
                      <p class="leading-10">地球環境の保全を心がけ、永続的な発展をするために<br class="hidden lg:block" />無駄のない流通・運営を行い、毎日の成長を続けます。</p>
                    </div>
                  </div>
                  {/* sp のときはこちらを表示*/}
                  <div class="block lg:hidden leading-10">
                    <p class="lg:leading-10">高品質かつワクワクする商品を生み出しお客様の生活をより豊かで幸せなものにします。</p>
                    <p class="lg:leading-10">社員やお取引企業様はもちろん、商品がお客様のお手元に届くまでに関わる全ての人々や世界の幸せと発展に貢献します。</p>
                    <p class="lg:leading-10">地球環境の保全を心がけ、永続的な発展をするために無駄のない流通・運営を行い、毎日の成長を続けます。</p>
                  </div>
                </div>
              </div>
            </section>

            <section class="lg:w-1100 mx-auto py-16 px-6">
              <div class="text-white lg:w-1100 mx-auto">
                <div>
                  <h1 class="text-3xl lg:text-5xl text-center border-b-4 pb-2 futura-co">VALUE</h1>
                </div>
                <div class="text-center tracking-widest mt-5 lg:mt-16" >
                  <div class="flex justify-center items-center mb-2 lg:mb-8">
                    <div class="w-4 h-4 bg-red-600"></div>
                    <h1 class="text-2xl lg:text-3xl font-bold ml-4">強くあれ</h1>
                  </div>
                  <div class="text-base lg:text-xl">
                    <p class="leading-10">大胆かつ、スピーディに実行すること</p>
                    <p class="leading-10">諦めてはいけないときに諦めないこと</p>
                    <p class="leading-10">怒らず、恐れず、悲しまないこと</p>
                  </div>
                </div>
                <div class="text-center tracking-widest mt-5 lg:mt-16" >
                  <div class="flex justify-center items-center mb-2 lg:mb-8">
                    <div class="w-4 h-4 bg-red-600"></div>
                    <h1 class="text-2xl lg:text-3xl font-bold ml-4">賢くあれ</h1>
                  </div>
                  <div class="text-base lg:text-xl leading-8">
                    <p class="leading-10">改善点を常に模索すること</p>
                    <p class="leading-10">常識を疑い打破すること</p>
                    <p class="leading-10">全ての人が幸せになる方法を探すこと</p>
                  </div>
                </div>
                <div class="text-center tracking-widest mt-5 lg:mt-16" >
                  <div class="flex justify-center items-center mb-2 lg:mb-8">
                    <div class="w-4 h-4 bg-red-600"></div>
                    <h1 class="text-2xl lg:text-3xl font-bold ml-4">優しくあれ</h1>
                  </div>
                  <div class="text-base lg:text-xl leading-8">
                    <p class="leading-10">常に暖かい気持ちで考えること</p>
                    <p class="leading-10">常に相手の立場で考えること</p>
                    <p class="leading-10">第三者への影響を考え<br class="block lg:hidden" />バランスを取ること</p>
                  </div>
                </div>
                <div class="text-center tracking-widest mt-5 lg:mt-16" >
                  <div class="flex justify-center items-center mb-2 lg:mb-8">
                    <div class="w-4 h-4 bg-red-600"></div>
                    <h1 class="text-2xl lg:text-3xl font-bold ml-4">幸せであれ</h1>
                  </div>
                  <div class="text-base lg:text-xl leading-8">
                    <p class="leading-10">感謝の気持ちを忘れないこと</p>
                    <p class="leading-10">楽しみを見つけること</p>
                    <p class="leading-10">相手と自分を同じくらい大切にすること</p>
                  </div>
                </div>
              </div>
            </section>

            <section class="py-16 px-6" style={{backgroundColor: "#241916"}}>
              <div class="text-white lg:w-1100 mx-auto">
                <div>
                  <h1 class="text-3xl lg:text-5xl text-center border-b-4 pb-2 futura-co">SLOGAN</h1>
                </div>
                <div class="text-center tracking-widest mt-5 lg:mt-8" >
                  <div class="lg:flex lg:justify-center">
                  <h1 class="text-2xl lg:text-3xl lg:mb-8 font-bold midashiGo lg:mr-3">Stay Strong, </h1>
                  <h1 class="text-2xl lg:text-3xl lg:mb-8 font-bold midashiGo lg:mr-3">Stay Kind,</h1>
                  <h1 class="text-2xl lg:text-3xl mb-8 font-bold midashiGo">Stay Happy</h1>
                  </div>
                </div>
                <div class="tracking-widest mt-8 lg:mt-16" >
                  <div class="flex justify-center items-center mb-2 lg:mb-8">
                    <div class="w-6 h-6 bg-red-600"></div>
                    <h1 class="text-2xl lg:text-3xl font-bold ml-4 midashiGo">Stay Strong</h1>
                  </div>
                  <div class="text-base lg:text-xl lg:text-center">
                    <p class="leading-10">私たちの商品は身に着けるお客様の心を強くします。<br class="hidden lg:block" />商品は最上級の素材と製法にこだわります。<br class="hidden lg:block" /></p>
                    <p>{`　`}</p>
                    <p class="leading-10">人や社会、世界に対して常に「強さ」を大切にすることで、<br class="hidden lg:block" />弱きものが苦しまない正しい社会を目指します。</p>
                  </div>
                </div>
                <div class="tracking-widest mt-8 lg:mt-16" >
                  <div class="flex justify-center items-center mb-2 lg:mb-8">
                    <div class="w-6 h-6 bg-red-600"></div>
                    <h1 class="text-2xl lg:text-3xl font-bold ml-4 midashiGo">Stay Kind</h1>
                  </div>
                  <div class="text-base lg:text-xl lg:text-center">
                    <p class="leading-10">私たちの商品は身に着けるお客様の心を温かくします。<br class="hidden lg:block" />商品は常に最高の使い易さを提供します。</p>
                    <p>{`　`}</p>
                    <p class="leading-10">人や社会、世界に対して常に「優しさ」を大切にすることで、<br class="hidden lg:block" />我々のビジネスが世界を幸せにできるよう努めます。</p>
                  </div>
                </div>
                <div class="tracking-widest mt-8 lg:mt-16" >
                  <div class="flex justify-center items-center mb-2 lg:mb-8">
                    <div class="w-6 h-6 bg-red-600"></div>
                    <h1 class="text-2xl lg:text-3xl font-bold ml-4 midashiGo">Stay Happy</h1>
                  </div>
                  <div class="text-base lg:text-xl lg:text-center">
                    <p class="leading-10">私たちの商品は身に着けるお客様の心を幸せにします。<br class="hidden lg:block" />商品は常に理屈を超えた満足感を与えます。</p>
                    <p>{`　`}</p>
                    <p class="leading-10">我々はビジネスを通じて一時的な幸せではなく、<br class="hidden lg:block" />全ての人々や世界が永続的に幸せでいられるよう、常に考え努力していきます。</p>
                  </div>
                </div>
                <div class="flex justify-center items-center mb-8 mt-24">
                    <h1 class="text-2xl lg:text-3xl font-bold ml-4 midashiGo text-center leading-10">Falconerは、<br class="block lg:hidden" />強く、優しく、人々を<br class="block lg:hidden" />幸せにします。</h1>
                  </div>
              </div>
            </section>

            <section class="py-12 lg:py-24 px-3 lg:px-6">
              <div class="text-white lg:w-1100 mx-auto flex justify-center">
                <div class="px-4 lg:px-0 lg:w-1/2">
                <Link href="/company/message"><a>
                    <div class="flex justify-center items-center text-md w-full lg:text-2xl text-center font-bold helvetica tracking-widest border-white border-solid border-4 py-4 px-4">
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
            </section>
          </div>
        </div>
      </main>
      </Layout>
    </div>
  )
}