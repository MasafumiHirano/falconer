import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import Layout from '../../components/layout'

export default function Company() {
  return (
    <div>
      <Head>
        <title>Falconer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main>
          <div class="mx-auto py-6 text-white text-center" style={{backgroundColor: "#000000" }}>
            <h1 class="text-xl">ABOUT</h1>
              <Image src="/images/logo/falconer_co_ltd_logo.jpg" width={720} height={150} alt="falconer_logo"/>
            <p class="text-3xl font-bold mb-6 tracking-widest">最高品質の戦略的モノ作りカンパニー</p>
            <p class="mb-2">市場の求めているモノ作り。市場を創造するモノ作り。</p>
            <p class="mb-2">変わり続ける時代と需要に応え続ける企業として存在します。</p>
            <p class="mt-8 mb-4"><Link href="/company/strength"><a>Falconer の強み...</a></Link></p>
          </div>
          {/* BUSINESS/PRODUCTS 開始 */}
          <div class="py-12" style={{backgroundColor: "#cecece" }}>
            <div class="mx-auto lg:w-1100 px-4 lg:px-20">
              <h1 class="flex justify-center text-4xl text-center mb-6">BUSINESS / PRODUCTS</h1>
              <div class="flex justify-center">
                <div class="pb-4" style={{ width: "450px", marginRight: "20px" }}>
                  <div class="relative">
                    <div
                      class="absolute z-10 text-white text-xs lg:text-base py-2 px-2 lg:px-4 font-bold bg-black border border-solid border-white tracking-widest"
                      style={{backgroundColor: "rgba(0,0,0,0.3)", top:"50%", left:"50%", transform: "translate(-50%,-50%)"}}
                    >
                      レザーアイテム
                    </div>
                    <Image src="/images/company/prod01.png" width={450} height={300} />
                  </div>
                  <p class="text-xs lg:text-base">
                    イタリアのなめし手法を用いたイタリアンレザーを中心にグラデーションレザーなど独自の素材を抱え、
                    小売/卸売事業の中～高単価商材として財布やバッグなどのレザー商品を提供します。
                    マーケットの需要を予測するだけでなく、潜在需要の掘り起こしを戦略的に行い、
                    ずっと使えるモノ作りを続けています。
                  </p>
                </div>
                <div class="pb-4" style={{ width: "450px"}}>
                <div class="relative">
                  <div
                      class="absolute z-10 text-white text-xs lg:text-base py-2 px-2 lg:px-4 font-bold bg-black border border-solid border-white tracking-widest"
                      style={{backgroundColor: "rgba(0,0,0,0.3)", top:"50%", left:"50%", transform: "translate(-50%,-50%)"}}
                  >
                    OEM/ODM 事業
                  </div>
                  <Image src="/images/company/prod02.png" width={450} height={300} />
                  </div>
                  <p class="text-xs lg:text-base">
                    自社ブランドの運営・運用の経験をベースに、マーケット調査から製造・販売まで全ての独自技術と能力を結集。
                    新たな商品群の開発から既存製品のブラッシュアップまで、弊社にしかできないモノ作りを提供します。
                  </p>
                </div>
              </div>
              <div class="flex justify-center">
                <div class="pb-4 relative w-450" style={{marginRight: "20px" }}>
                  <div class="relative">
                    <div
                      class="absolute z-10 text-white text-xs lg:text-base py-2 px-2 lg:px-4 font-bold bg-black border border-solid border-white tracking-widest"
                      style={{backgroundColor: "rgba(0,0,0,0.3)", top:"50%", left:"50%", transform: "translate(-50%,-50%)"}}
                    >
                      電化製品
                    </div>
                    <Image src="/images/company/prod03.png" width={450} height={300} />
                  </div>
                  <p class="text-xs lg:text-base">
                    私たちが日々暮らしていく中で必要不可欠な電化製品。最近は生活に豊かな彩りを加えるためにAIを取り入れたり、
                    ネットワークと接続し、音声認識で指示を出したり。より直感的でシームレスな製品の開発・販売を行っております。
                  </p>
                </div>
                <div class="pb-4 w-450">
                  <div class="relative">
                    <div
                      class="absolute z-10 text-white text-xs lg:text-base py-2 px-2 lg:px-4 font-bold bg-black border border-solid border-white tracking-widest"
                      style={{backgroundColor: "rgba(0,0,0,0.3)", top:"50%", left:"50%", transform: "translate(-50%,-50%)"}}
                    >
                      電子タバコ用品
                    </div>
                    <Image src="/images/company/prod04.png" width={450} height={300} />
                  </div>
                  <p class="text-xs lg:text-base">
                    今マーケットが欲しているモノを戦略的に市場にリリース。ユーザーの信頼感を意識した自社ブランド展開を行っております。
                    PUレザー、本革、牛革、PC、TPUなどの複数の素材を採用し、小売/卸事業の低単価高回転商材として提供します。
                  </p>
                </div>
              </div>
              <div class="flex justify-center">
                <div class="pb-4 relative w-450" style={{marginRight: "20px" }}>
                  <div class="relative">
                    <div
                      class="absolute z-10 text-white text-xs lg:text-base py-2 px-2 lg:px-4 font-bold bg-black border border-solid border-white tracking-widest"
                      style={{backgroundColor: "rgba(0,0,0,0.3)", top:"50%", left:"50%", transform: "translate(-50%,-50%)"}}
                    >
                      電化製品
                    </div>
                    <Image src="/images/company/prod03.png" width={450} height={300} />
                  </div>
                  <p class="text-xs lg:text-base">
                    私たちが日々暮らしていく中で必要不可欠な電化製品。最近は生活に豊かな彩りを加えるためにAIを取り入れたり、
                    ネットワークと接続し、音声認識で指示を出したり。より直感的でシームレスな製品の開発・販売を行っております。
                  </p>
                </div>

                {/* <div class="pb-4 w-450" style={{marginRight: "20px" }}>
                  <div class="relative">
                    <div
                      class="absolute z-10 text-white text-xs lg:text-base py-2 px-2 lg:px-4 font-bold bg-black border border-solid border-white tracking-widest"
                      style={{backgroundColor: "rgba(0,0,0,0.3)", top:"50%", left:"50%", transform: "translate(-50%,-50%)"}}
                    >
                      アパレル
                    </div>
                    <div style={{ width: "450px", height: "300px", backgroundColor: "#241916"}}></div>
                  </div>
                  <p class="text-xs lg:text-base mt-1">
                    私たちが日々暮らしていく中で必要不可欠な電化製品。最近は生活に豊かな彩りを加えるためにAIを取り入れたり、
                    ネットワークと接続し、音声認識で指示を出したり。より直感的でシームレスな製品の開発・販売を行っております。
                  </p>
                </div> */}
                <div class="pb-4 w-450">
                  <div class="relative">
                    <div
                      class="absolute z-10 text-white text-xs lg:text-base py-2 px-2 lg:px-4 font-bold bg-black border border-solid border-white tracking-widest"
                      style={{backgroundColor: "rgba(0,0,0,0.3)", top:"50%", left:"50%", transform: "translate(-50%,-50%)"}}
                    >
                      海外事業
                    </div>
                    <Image src="/images/company/prod05.png" width={450} height={300} />
                  </div>
                  <p class="text-xs lg:text-base">
                    今マーケットが欲しているモノを戦略的に市場にリリース。ユーザーの信頼感を意識した自社ブランド展開を行っております。
                    PUレザー、本革、牛革、PC、TPUなどの複数の素材を採用し、小売/卸事業の低単価高回転商材として提供します。
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* BUSINESS/PRODUCTS 終了 */}

          <div class="mx-auto pt-6 mb-6 lg:w-1100 px-4 lg:px-20">
            <Link href="/company/statement"><a>
            <div class="relative flex justify-center">
              <div class="absolute text-center z-10" style={{top:"50%", left:"50%", transform: "translate(-50%,-50%)"}}>
                <div class="text-5xl text-white futura-co-md">STATEMENT</div>
                <div class="mt-6 text-2xl text-white">代表メッセージ</div>
              </div>
              <Image src="/images/company/vision01.jpg" width={920} height={280} alt="vision" />
            </div>
            </a></Link>
          </div>

          <div class="mx-auto mb-6 lg:w-1100 px-4 lg:px-20">
            <div class="flex justify-center mb-6">
              <div class="border-4 border-solid border-black w-450 h-300 flex justify-center items-center" style={{marginRight: "20px" }}>
                <div class="text-2xl font-bold tracking-widest">企業概要</div>
              </div>
              <div class="border-4 border-solid border-black w-450 h-300 flex justify-center items-center">
                <div class="text-2xl font-bold tracking-widest">採用情報</div>
              </div>
            </div>
          </div>
          <div class="mx-auto mb-6 lg:w-1100 px-4 lg:px-20 flex justify-center">
            <div class="flex justify-center w-920" style={{backgroundColor: "#241916"}}>
              <div class="py-6 px-6 mb-6">
                <h1 class="text-4xl text-white text-center mb-2">MEDIA</h1>
                <div class="flex justify-center">
                  <div class="inline-block">
                    <a href="https://www.instagram.com/masaki.s_japan/">
                      <Image src="/images/media/instagram_white_bg_bk.jpg" width={36} height={36} alt="instagaram_social" />
                    </a>
                  </div>
                  <div class="inline-block"><Image src="/images/media/facebook_white_bg_bk.jpg" width={36} height={36} alt="instagaram_social" /></div>
                  <div class="inline-block"><Image src="/images/media/youtube_white_bg_bk.jpg" width={36} height={36} alt="instagaram_social" /></div>
                  <div class="inline-block"><Image src="/images/media/twitter_white_bg_bk.jpg" width={36} height={36} alt="instagaram_social" /></div>
                </div>
                <div class="flex justify-center">
                  <div class="mx-auto md:w-720 md:h-405">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/k5oSVWFyOqE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="mx-auto mb-12 lg:w-1100 px-4 lg:px-20">
              <div class="flex justify-center">
                <div class="border-4 border-solid border-black flex justify-center items-center w-full" style={{ width: "920px", height: "150px"}}>
                  <div class="text-2xl font-bold tracking-widest">お問い合わせ</div>
                </div>
              </div>
          </div>

        </main>
      </Layout>
    </div>
  )
}