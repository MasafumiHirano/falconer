import Head from 'next/head'
import Link from 'next/link'

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
          <div class="pt-8 pb-16 bg-opacity-75 w-full" style={{backgroundColor: "#786b58"}}>
            <section class="lg:w-1100 px-6 mx-auto pb-16 ">
              <div class="text-white lg:w-1100 mx-auto">
                <div>
                  <h1 class="text-3xl lg:text-5xl text-center border-b-4 pb-2 futura-co">STATEMENT</h1>
                </div>
                <div class="text-center tracking-widest mt-5 lg:mt-16" >
                  <h1 class="text-2xl lg:text-3xl mb-8 font-bold">モノづくりを通じ、人々に幸せを広げ、世界をより良くする。</h1>
                  <div class="text-base lg:text-xl leading-8">
                    <p class="leading-10">私たちが創り出す、最高の商品とは、</p>
                    <p class="leading-10">上質な素材でデザイン・機能性を意識し、一流の技術力を</p>
                    <p class="leading-10">持って作り上げられたモノというだけではありません。</p>
                    <p class="leading-10">生産者の労働環境や地球環境まで配慮し、フェアな金額で</p>
                    <p class="leading-10">お客様が優しさや強さに包まれ笑顔になって頂ける商品のことです。</p>
                    <p class="leading-10">{`　`}</p>
                    <p class="leading-10">また我々はそのような「最高の商品」を創り出すことで</p>
                    <p class="leading-10">お客様はもちろん、商品が生まれるまでに携わった全ての人々や世界、</p>
                    <p class="leading-10">素材を提供してくれる地球を幸せにしていきたいと考えています。</p>
                  </div>
                </div>
              </div>
            </section>

            <section class="py-16 px-6" style={{backgroundColor: "#241916"}}>
              <div class="text-white lg:w-1100 mx-auto">
                <div>
                  <h1 class="text-3xl lg:text-5xl text-center border-b-4 pb-2 futura-co">VISION</h1>
                </div>
                <div class="text-center tracking-widest mt-5" >
                  <h1 class="text-2xl lg:text-3xl mb-8 font-bold">今日よりも、もっと幸せな明日を。</h1>
                  <div class="mb-8 text-base lg:text-xl leading-8">
                    <p class="leading-10">高品質かつワクワクする商品を生み出し、</p>
                    <p class="leading-10">お客様の生活をより豊かで幸せなものにします。</p>
                  </div>
                  <div class="mb-8 text-base lg:text-xl leading-8">
                    <p class="leading-10">社員やお取引企業様はもちろん、商品がお客様のお手元に</p>
                    <p class="leading-10">届くまでに関わる全ての人々や世界の幸せと発展に貢献します。</p>
                  </div>
                  <div class="mb-8 text-base lg:text-xl leading-8">
                    <p class="leading-10">地球環境の保全を心がけ、永続的な発展をするために</p>
                    <p class="leading-10">無駄のない流通・運営を行い、毎日の成長を続けます。</p>
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
                  <div class="flex justify-center items-center mb-8">
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
                  <div class="flex justify-center items-center mb-8">
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
                  <div class="flex justify-center items-center mb-8">
                    <div class="w-4 h-4 bg-red-600"></div>
                    <h1 class="text-2xl lg:text-3xl font-bold ml-4">優しくあれ</h1>
                  </div>
                  <div class="text-base lg:text-xl leading-8">
                    <p class="leading-10">常に暖かい気持ちで考えること</p>
                    <p class="leading-10">常に相手の立場で考えること</p>
                    <p class="leading-10">第三者への影響を考えバランスを取ること</p>
                  </div>
                </div>
                <div class="text-center tracking-widest mt-5 lg:mt-16" >
                  <div class="flex justify-center items-center mb-8">
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
                <div class="text-center tracking-widest mt-8" >
                  <h1 class="text-2xl lg:text-3xl mb-8 font-bold midashiGo">Stay Strong, Stay Kind, Stay Happy</h1>
                </div>
                <div class="text-center tracking-widest mt-8 lg:mt-16" >
                  <div class="flex justify-center items-center mb-8">
                    <div class="w-6 h-6 bg-red-600"></div>
                    <h1 class="text-2xl lg:text-3xl font-bold ml-4 midashiGo">Stay Strong</h1>
                  </div>
                  <div class="text-base lg:text-xl">
                    <p class="leading-10">私たちの商品は身に着けるお客様の心を強くします。</p>
                    <p class="leading-10">商品は最上級の素材と製法にこだわります。</p>
                    <p class="leading-10">{`　`}</p>
                    <p class="leading-10">人や社会、世界に対して常に「強さ」を大切にすることで、</p>
                    <p class="leading-10">弱きものが苦しまない正しい社会を目指します。</p>
                  </div>
                </div>
                <div class="text-center tracking-widest mt-8 lg:mt-16" >
                  <div class="flex justify-center items-center mb-8">
                    <div class="w-6 h-6 bg-red-600"></div>
                    <h1 class="text-2xl lg:text-3xl font-bold ml-4 midashiGo">Stay Kind</h1>
                  </div>
                  <div class="text-base lg:text-xl">
                    <p class="leading-10">私たちの商品は身に着けるお客様の心を温かくします。</p>
                    <p class="leading-10">商品は常に最高の使い易さを提供します。</p>
                    <p class="leading-10">{`　`}</p>
                    <p class="leading-10">人や社会、世界に対して常に「優しさ」を大切にすることで、</p>
                    <p class="leading-10">我々のビジネスが世界を幸せにできるよう努めます。</p>
                  </div>
                </div>
                <div class="text-center tracking-widest mt-8 lg:mt-16" >
                  <div class="flex justify-center items-center mb-8">
                    <div class="w-6 h-6 bg-red-600"></div>
                    <h1 class="text-2xl lg:text-3xl font-bold ml-4 midashiGo">Stay Happy</h1>
                  </div>
                  <div class="text-base lg:text-xl">
                    <p class="leading-10">私たちの商品は身に着けるお客様の心を幸せにします。</p>
                    <p class="leading-10">商品は常に理屈を超えた満足感を与えます。</p>
                    <p class="leading-10">{`　`}</p>
                    <p class="leading-10">我々はビジネスを通じて一時的な幸せではなく、</p>
                    <p class="leading-10">全ての人々や世界が永続的に幸せでいられるよう、常に考え努力していきます。</p>
                  </div>
                </div>
                <div class="flex justify-center items-center mb-8 mt-24">
                    <h1 class="text-sm lg:text-3xl font-bold ml-4 midashiGo">Falconerは、強く、優しく、人々を幸せにします。</h1>
                  </div>
              </div>
            </section>

            <section class="pt-24 px-6">
              <div class="text-white lg:w-1100 mx-auto flex justify-center">
                <div class="px-4 lg:px-0 lg:w-1/2">
                <Link href="/company/message"><a>
                  <h1 class="text-md lg:text-2xl text-center font-bold helvetica tracking-widest border-white border-solid border-4 py-4 px-4">代表メッセージ ▶▶▶</h1>
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