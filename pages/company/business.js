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
        <main class="">
          <div class="mb-6 lg:mb-12">
            <div class="relative">
              <h1 class="bussiness_title futura-lt text-white text-center font-bold text-3xl lg:text-3xl h-405 md:h-445 flex items-center justify-center flex-col">Business / Products<p class="NotoSans-L text-base font-normal">事業内容</p></h1>
            </div>
            {/* <div class="w-320 absolute text-center text-3xl text-white inset-1/2 transform -translate-x-1/2">
              <h2 class="futura-md leading-none">Business / Products<br /><span class="text-base NotoSans-L">事業内容</span></h2>
            </div> */}

          </div>
          {/* 事業内容セクション START */}
          <section class="pt-12 pb-6 lg:py-12">
            {/*<h1 class="text-xl lg:text-4xl text-center px-4 mb-6 font-bold">BUSINESS / PRODUCTSS</h1>*/}
            <h2 class="text-center futura-md text-3xl">Bussiness<span class="text-xl font-light block NotoSans-L">事業</span></h2>
            <div class="mx-auto mt-12 lg:w-1280">
              <div class="">
                <div class="w-full lg:mb-5">
                  <div class="business_detail bg-black h-250 lg:h-500">
                    <img src="/images/company/prod01.jpg" class="object-cover opacity-30 h-250 lg:h-500" />
                    <p class="absolute text-xs text-white NotoSans-L px-2 lg:pt-6 lg:px-0 lg:w-450 lg:ml-14">
                      <p class="w-11/12 lg:text-2xl lg:w-full mx-auto">レザーアイテム</p>
                      <p class="w-11/12 lg:text-sm lg:w-full mt-1 lg:mt-3 mx-auto lg:leading-loose">イタリアのなめし手法を用いたイタリアンレザーを中心にグラデーションレザーなど独自の素材を抱え、小売/卸売事業の中～高単価商材として財布やバッグなどのレザー商品を提供します。マーケットの需要を予測するだけでなく、潜在需要の掘り起こしを戦略的に行い、ずっと使えるモノ作りを続けています。</p>
                    </p>
                  </div>
                </div>
                <div class="w-full lg:mb-5">
                  <div class="business_detail bg-black h-250 lg:h-500">
                    <img src="/images/company/prod02.jpg" class="object-cover opacity-30 h-250 lg:h-500" />
                    <p class="absolute text-xs text-white NotoSans-L px-2 lg:pt-6 lg:px-0 lg:w-450 lg:ml-14">
                      <p class="w-11/12 lg:text-2xl lg:w-full mx-auto">アパレル</p>
                      <p class="w-11/12 lg:text-sm lg:w-full mt-1 lg:mt-3 mx-auto lg:leading-loose">私たちが毎日肌に触れる衣類。いいものを身につけることによる気分の高揚や満足感をFALCONERは大切にします。市場で求められる製品はもちろん、FALCONER自ら発信するコンセプトブランドも展開。品質を求め、生地・パーツ・デザインを数百パターンから選りすぐったアイテムをプロデュース。ここでもFALCONERのならではの、潜在需要を掘り起こすこだわりのモノづくりでお客様に「高揚感・満足感」を提供します。</p>
                    </p>
                  </div>
                </div>
                <div class="w-full lg:mb-5">
                  <div class="business_detail bg-black h-250 lg:h-500">
                    <img src="/images/company/prod03.jpg" class="object-cover opacity-30 h-250 lg:h-500" />
                    <p class="absolute text-xs text-white NotoSans-L px-2 lg:pt-6 lg:px-0 lg:w-450 lg:ml-14">
                      <p class="w-11/12 lg:text-2xl lg:w-full mx-auto">OEM事業</p>
                      <p class="w-11/12 lg:text-sm lg:w-full mt-1 lg:mt-3 mx-auto lg:leading-loose">自社ブランドの運営・運用の経験をベースに、マーケット調査から製造・販売まで全ての独自技術と能力を結集。新たな商品群の開発から既存製品のブラッシュアップまで、弊社にしかできないモノ作りを提供します。</p>
                    </p>
                  </div>
                </div>
                <div class="w-full lg:mb-5">
                  <div class="business_detail bg-black h-250 lg:h-500">
                    <img src="/images/company/prod04.jpg" class="object-cover opacity-30 h-250 lg:h-500" />
                    <p class="absolute text-xs text-white NotoSans-L px-2 lg:pt-6 lg:px-0 lg:w-450 lg:ml-14">
                      <p class="w-11/12 lg:text-2xl lg:w-full mx-auto">海外事業</p>
                      <p class="w-11/12 lg:text-sm lg:w-full mt-1 lg:mt-3 mx-auto lg:leading-loose">今や日本人ではスマートフォンの保有率が70%を超え、個人が気軽に世界と接点を持てる時代。ビジネスの市場は日本国内だけでなく、世界へと広がっています。FALCONERでは日本国内販売で培った販売ノウハウを海外展開へも応用し、北米Amazonでの販売・物流・対応を行っています。</p>
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </section>
          {/* 事業内容セクション END */}
          <section class="w-11/12 max-w-850 mx-auto pt-10" id="site">
            <h2 class="text-center mb-12 futura-md text-3xl">SHOPS<span class="text-lg font-light block NotoSans-L">販売サイト</span></h2>
            <p class="NotoSans-L text-xs font-bold border-b-2 border-gray-400 pb-2 lg:text-base NotoSans-L text-center lg:text-left w-full mx-auto lg:px-4">ALL Right Leather</p>
            <div class="lg:flex lg:mt-2 lg:px-4 lg:justify-between">
              <p class="leading-loose  w-10/12 lg:w-7/12 mx-auto lg:mx-0 text-xs NotoSans-L my-4">All Right Leatherは、財布・バッグなどの高品質レザーアイテムを中心に、IOQS・glo・Ploom TECH等の電子タバコケースなどメインに取り扱うオンラインショップです。楽天市場店舗にて展開しています。</p>
              <div class="text-center lg:4/12 ">
                <a class="block w-300 mx-auto" href='https://www.rakuten.ne.jp/gold/allrightleather/index.html' target="_blank">
                  <Image src="/images/company/allrightleather_rakuten.jpg" width={300} height={180} />
                </a>
                <a class="block w-300 mt-6 mx-auto" href='https://shopping.geocities.jp/allrightleather/' target="_blank">
                  <Image src="/images/company/allrightleather_yahoo.jpg" width={300} height={180} />
                </a>
              </div>
            </div>

            <p class="NotoSans-L text-xs font-bold border-b-2 border-gray-400 pb-2 lg:text-base NotoSans-L text-center lg:text-left w-full mx-auto lg:px-4 mt-24">CASE BANK</p>
            <div class="lg:flex lg:mt-2 lg:px-4 lg:justify-between">
              <p class="leading-loose w-10/12 lg:w-7/12 mx-auto lg:mx-0 text-xs NotoSans-L my-4">自社ブランドのBtoC販売を行っています。</p>
              <div class="text-center lg:4/12 ">
                <a class="block w-300 mx-auto" href='https://www.amazon.co.jp/shops/A3CBIU477KWLAF/' target="_blank">
                  <Image src="/images/company/amazon_casebank.jpg" width={300} height={180} />
                </a>
              </div>
            </div>

            <p class="NotoSans-L text-xs font-bold border-b-2 border-gray-400 pb-2 lg:text-base NotoSans-L text-center lg:text-left w-full mx-auto lg:px-4 mt-24">RafiCaro Amazon</p>
            <div class="lg:flex lg:mt-2 lg:px-4 lg:justify-between">
              <p class="leading-loose w-10/12 lg:w-7/12 mx-auto lg:mx-0 text-xs NotoSans-L my-4">自社ブランド・RafiCaroのAmazon旗艦店です。自社直販として最新商品も随時アップロードされます。</p>
              <div class="text-center lg:4/12 ">
                <a class="block w-300 mx-auto" href='https://www.amazon.co.jp/raficaro/' target="_blank">
                  <Image src="/images/company/amazon_raficaro.jpg" width={300} height={180} />
                </a>
              </div>
            </div>

            <p class="NotoSans-L text-xs font-bold border-b-2 border-gray-400 pb-2 lg:text-base NotoSans-L text-center lg:text-left w-full mx-auto lg:px-4 mt-24">Yossy’s Good Time</p>
            <div class="lg:flex lg:mt-2 lg:px-4 lg:justify-between">
              <p class="leading-loose w-10/12 lg:w-7/12 mx-auto lg:mx-0 text-xs NotoSans-L my-4">財布・バッグなどの北米向けに選定された自社ブランド製品に加え独自の北米向け製品を展開・販売しています。</p>
              <div class="text-center lg:4/12 ">
                <a class="block w-300 mx-auto" href='https://www.amazon.com/shops/A1L2ZFITS8JG/' target="_blank">
                  <Image src="/images/company/amazon_yossy.jpg" width={300} height={180} />
                </a>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </div>
  )
}