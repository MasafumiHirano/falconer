import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import Layout from '../../components/layout'

export default function Business() {
  return (
    <div>
      <Head>
        <title>事業内容</title>
        <link rel="icon" href="/falconer_favicons.png" />
      </Head>
      <Layout>
      <main>
        {/* 事業内容セクション START */}
        <div class="py-6 lg:py-12">
            <h1 class="text-xl lg:text-4xl text-center px-4 mb-6 font-bold">BUSINESS / PRODUCTSS</h1>
            <div class="mx-auto lg:w-1100 lg:px-20">
              
              <div class="lg:flex lg:justify-center">
                <div class="pb-4 w-full lg:w-1/2 lg:mr-5">
                  <div class="relative">
                    <div
                      class="Osaka absolute z-10 w-170 text-white text-center text-md lg:text-base py-2 px-2 lg:px-4 bg-falGLD border border-solid border-white tracking-widest"
                      style={{ backgroundColor: "rgba(121,107,88,0.7)", top:"50%", left:"50%", transform: "translate(-50%,-50%)"}}
                    >
                      レザーアイテム
                    </div>
                    <Image className="object-cover" src="/images/company/prod01.png" width={1100} height={730} />
                  </div>
                  <p class="text-sm Osaka px-2 lg:px-0" style={{ lineHeight: "1.8" }}>
                    イタリアのなめし手法を用いたイタリアンレザーを中心にグラデーションレザーなど独自の素材を抱え、小売/卸売事業の中～高単価商材として財布やバッグなどのレザー商品を提供します。マーケットの需要を予測するだけでなく、潜在需要の掘り起こしを戦略的に行い、ずっと使えるモノ作りを続けています。
                  </p>
                </div>

                <div class="pb-4 w-full lg:w-1/2">
                  <div class="relative">
                    <div
                      class="Osaka absolute z-10 w-170 text-white text-center text-md lg:text-base py-2 px-2 lg:px-4 bg-falGLD border border-solid border-white tracking-widest"
                      style={{ backgroundColor: "rgba(121,107,88,0.7)", top:"50%", left:"50%", transform: "translate(-50%,-50%)"}}
                    >
                      アパレル
                    </div>
                    <Image className="object-cover" src="/images/company/apa.jpg" width={1100} height={730} />
                  </div>
                  <p class="text-sm Osaka px-2 lg:px-0" style={{ lineHeight: "1.8"}}>
                  私たちが毎日肌に触れる衣類。いいものを身につけることによる気分の高揚や満足感をFALCONERは大切にします。市場で求められる製品はもちろん、FALCONER自ら発信するコンセプトブランドも展開。品質を求め、生地・パーツ・デザインを数百パターンから選りすぐったアイテムをプロデュース。ここでもFALCONERのならではの、潜在需要を掘り起こすこだわりのモノづくりでお客様に「高揚感・満足感」を提供します。
                  </p>
                </div> 
              </div>
              
              <div class="lg:flex lg:justify-center">
                <div class="pb-4 w-full lg:w-1/2 lg:mr-5">
                  <div class="relative">
                    <div
                      class="Osaka absolute z-10 w-170 text-white text-center text-md lg:text-base py-2 px-1 lg:px-0 bg-falGLD border border-solid border-white tracking-widest"
                      style={{ backgroundColor: "rgba(121,107,88,0.7)", top:"50%", left:"50%", transform: "translate(-50%,-50%)"}}
                    >
                      OEM/ODM 事業
                    </div>
                    <Image className="object-cover" src="/images/company/prod02.png" width={1100} height={730} />
                  </div>
                  <p class="text-sm Osaka px-2 lg:px-0" style={{ lineHeight: "1.8"}}>
                    自社ブランドの運営・運用の経験をベースに、マーケット調査から製造・販売まで全ての独自技術と能力を結集。新たな商品群の開発から既存製品のブラッシュアップまで、弊社にしかできないモノ作りを提供します。
                  </p>
                </div>

                <div class="pb-4 w-full lg:w-1/2">
                  <div class="relative">
                    <div
                      class="Osaka absolute z-10 w-170 text-white text-center text-md lg:text-base py-2 px-2 lg:px-4 bg-falGLD border border-solid border-white tracking-widest"
                      style={{ backgroundColor: "rgba(121,107,88,0.7)", top:"50%", left:"50%", transform: "translate(-50%,-50%)"}}
                    >
                      海外事業
                    </div>
                    <Image className="object-cover" src="/images/company/prod05.png" width={1100} height={730} />
                  </div>
                  <p class="text-sm Osaka px-2 lg:px-0"  style={{lineHeight: "1.8"}}>
                    今マーケットが欲しているモノを戦略的に市場にリリース。ユーザーの信頼感を意識した自社ブランド展開を行っております。PUレザー、本革、牛革、PC、TPUなどの複数の素材を採用し、小売/卸事業の低単価高回転商材として提供します。
                  </p>
                </div>
              </div>

            </div>
          </div>
          {/* 事業内容セクション END */}
      </main>
      </Layout>
    </div>
  )
}