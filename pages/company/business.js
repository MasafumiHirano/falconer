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
            <h2 class="text-center futura-md text-1.7rem md:text-3xl">Bussiness<span class="text-base md:text-xl font-light block NotoSans-L">事業</span></h2>
            <div class="mx-auto mt-12 lg:w-1280">
              <div class="">
                <div class="w-full lg:mb-5">
                  <div class="business_detail bg-black h-250 lg:h-500">
                    <img src="/images/company/prod01.jpg" class="object-cover opacity-30 h-250 lg:h-500" />
                    <p class="absolute text-xs text-white NotoSans-L px-2 lg:pt-6 lg:px-0 lg:w-450 lg:ml-14">
                      <p class="w-11/12 text-base lg:text-2xl lg:w-full mx-auto">レザーアイテム</p>
                      <p class="w-11/12 text-sm text-justify lg:text-sm lg:w-full mt-1 lg:mt-3 mx-auto lg:leading-loose">イタリアのなめし手法を用いたイタリアンレザーを中心にグラデーションレザーなど独自の素材を抱え、小売/卸売事業の中～高単価商材として財布やバッグなどのレザー商品を提供します。マーケットの需要を予測するだけでなく、潜在需要の掘り起こしを戦略的に行い、ずっと使えるモノ作りを続けています。</p>
                    </p>
                  </div>
                </div>
                <div class="w-full lg:mb-5">
                  <div class="business_detail bg-black h-250 lg:h-500">
                    <img src="/images/company/prod02.jpg" class="object-cover opacity-30 h-250 lg:h-500" />
                    <p class="absolute text-xs text-white NotoSans-L px-2 lg:pt-6 lg:px-0 lg:w-450 lg:ml-14">
                      <p class="w-11/12 text-base lg:text-2xl lg:w-full mx-auto">アパレル</p>
                      <p class="w-11/12 text-sm text-justify lg:text-sm lg:w-full mt-1 lg:mt-3 mx-auto lg:leading-loose">私たちが毎日肌に触れる衣類。いいものを身につけることによる気分の高揚や満足感をFALCONERは大切にします。市場で求められる製品はもちろん、FALCONER自ら発信するコンセプトブランドも展開。品質を求め、生地・パーツ・デザインを数百パターンから選りすぐったアイテムをプロデュース。ここでもFALCONERのならではの、潜在需要を掘り起こすこだわりのモノづくりでお客様に「高揚感・満足感」を提供します。</p>
                    </p>
                  </div>
                </div>
                <div class="w-full lg:mb-5">
                  <div class="business_detail bg-black h-250 lg:h-500">
                    <img src="/images/company/prod06.jpg" class="object-cover opacity-30 h-250 lg:h-500" />
                    <p class="absolute text-xs text-white NotoSans-L px-2 lg:pt-6 lg:px-0 lg:w-450 lg:ml-14">
                      <p class="w-11/12 text-base lg:text-2xl lg:w-full mx-auto">ビューティヘルスケア</p>
                      <p class="w-11/12 text-sm text-justify lg:text-sm lg:w-full mt-1 lg:mt-3 mx-auto lg:leading-loose">人生100年時代が構想される現代。健康で美しく在るための商品が多く世に出回る一方、情報が溢れかえり本質的に正しい商品を見つけることができなくなっているのが現状です。FALCONERはひとつひとつの成分と向き合い、既成概念にとらわれない独自の研究開発を進め、誰もが安心して過ごすことができる日々を実感できるよう、最適な選択肢を提案していきます。</p>
                    </p>
                  </div>
                </div>
                <div class="w-full lg:mb-5">
                  <div class="business_detail bg-black h-250 lg:h-500">
                    <img src="/images/company/prod03.jpg" class="object-cover opacity-30 h-250 lg:h-500" />
                    <p class="absolute text-xs text-white NotoSans-L px-2 lg:pt-6 lg:px-0 lg:w-450 lg:ml-14">
                      <p class="w-11/12 text-base lg:text-2xl lg:w-full mx-auto">OEM事業</p>
                      <p class="w-11/12 text-sm text-justify lg:text-sm lg:w-full mt-1 lg:mt-3 mx-auto lg:leading-loose">自社ブランドの運営・運用の経験をベースに、マーケット調査から製造・販売まで全ての独自技術と能力を結集。新たな商品群の開発から既存製品のブラッシュアップまで、弊社にしかできないモノ作りを提供します。</p>
                    </p>
                  </div>
                </div>
                <div class="w-full lg:mb-5">
                  <div class="business_detail bg-black h-250 lg:h-500">
                    <img src="/images/company/prod04.jpg" class="object-cover opacity-30 h-250 lg:h-500" />
                    <p class="absolute text-xs text-white NotoSans-L px-2 lg:pt-6 lg:px-0 lg:w-450 lg:ml-14">
                      <p class="w-11/12 text-base lg:text-2xl lg:w-full mx-auto">海外事業</p>
                      <p class="w-11/12 text-sm text-justify lg:text-sm lg:w-full mt-1 lg:mt-3 mx-auto lg:leading-loose">今や日本人ではスマートフォンの保有率が70%を超え、個人が気軽に世界と接点を持てる時代。ビジネスの市場は日本国内だけでなく、世界へと広がっています。FALCONERでは日本国内販売で培った販売ノウハウを海外展開へも応用し、北米Amazonでの販売・物流・対応を行っています。</p>
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </section>
          {/* 事業内容セクション END */}
          <section class="w-11/12 max-w-850 mx-auto pt-10" id="site">
            <h2 class="text-center futura-md text-1.7rem md:text-3xl">SHOPS<span class="text-base md:text-xl font-light block NotoSans-L">販売サイト</span></h2>
            <p class="NotoSans-L border-b-2 border-gray-400 pb-2 text-base md:text-2xl NotoSans-L text-center lg:text-left w-full mx-auto lg:px-4 mt-8">All Right Leather</p>
            <div class="lg:flex lg:mt-2 lg:px-4 lg:justify-between">
              <p class="w-10/12 lg:w-7/12 mx-auto lg:mx-0 text-sm md:text-base_s text-justify leading-normal NotoSans-L mt-4 mb-8">All Right Leatherは、財布・バッグなどの高品質レザーアイテムを中心に、IOQS・glo・Ploom TECH等の電子タバコケースなどメインに取り扱うオンラインショップです。楽天市場店舗にて展開しています。</p>
              <div class="text-center lg:4/12 mt-4">
                <a class="block w-300 mx-auto" href='https://www.rakuten.ne.jp/gold/allrightleather/index.html' target="_blank">
                  <Image src="/images/company/allrightleather_rakuten.jpg" width={300} height={180} class="rounded-2xl" />
                </a>
                <a class="block w-300 mt-6 mx-auto" href='https://shopping.geocities.jp/allrightleather/' target="_blank">
                  <Image src="/images/company/allrightleather_yahoo.jpg" width={300} height={180} class="rounded-2xl" />
                </a>
              </div>
            </div>

            <p class="NotoSans-L border-b-2 border-gray-400 pb-2 text-base md:text-2xl NotoSans-L text-center lg:text-left w-full mx-auto lg:px-4 mt-24">All Right Leather Amazon</p>
            <div class="lg:flex lg:mt-2 lg:px-4 lg:justify-between">
              <div class="w-10/12 lg:w-7/12 mx-auto lg:mx-0 text-sm md:text-base_s text-justify NotoSans-L mt-4 mb-8 flex flex-row flex-wrap">
                <p class="leading-normal w-full">AllRightLeatherのAmazon販売店です。</p>
                <img class="mt-2 max-w-300 w-full" src="/images/company/seller_award_2023_emblem_timesale_400x200_a.jpg" />
                <p>2023年販売事業者アワードを取得しました。</p>
              </div>
              <div class="text-center lg:4/12 mt-4">
                <a class="block w-300 mx-auto" href='https://www.amazon.co.jp/shops/A3CBIU477KWLAF/' target="_blank">
                  <Image src="/images/company/arl_ama.jpg" width={300} height={180} class="rounded-2xl" />
                </a>
              </div>
            </div>

            <p class="NotoSans-L border-b-2 border-gray-400 pb-2 text-base md:text-2xl NotoSans-L text-center lg:text-left w-full mx-auto lg:px-4 mt-24">RafiCaro amazon</p>
            <div class="lg:flex lg:mt-2 lg:px-4 lg:justify-between">
              <p class="leading-normal w-10/12 lg:w-7/12 mx-auto lg:mx-0 text-sm md:text-base_s text-justify NotoSans-L mt-4 mb-8">自社ブランド・RafiCaroのamazon販売店です。自社直販として最新商品も随時アップロードされます。</p>
              <div class="text-center lg:4/12 mt-4">
                <a class="block w-300 mx-auto" href='https://www.amazon.co.jp/raficaro/' target="_blank">
                  <Image src="/images/company/amazon_raficaro.jpg" width={300} height={180} class="rounded-2xl" />
                </a>
              </div>
            </div>

            <p class="NotoSans-L border-b-2 border-gray-400 pb-2 text-base md:text-2xl NotoSans-L text-center lg:text-left w-full mx-auto lg:px-4 mt-24">Yossy’s Good Time</p>
            <div class="lg:flex lg:mt-2 lg:px-4 lg:justify-between mb-12">
              <p class="leading-normal w-10/12 lg:w-7/12 mx-auto lg:mx-0 text-sm md:text-base_s text-justify NotoSans-L mt-4 mb-8">財布・バッグなどの北米向けに選定された自社ブランド製品に加え独自の北米向け製品を展開・販売しています。</p>
              <div class="text-center lg:4/12 mt-4">
                <a class="block w-300 mx-auto" href='https://www.amazon.com/shops/A1L2ZFITS8JG/' target="_blank">
                  <Image src="/images/company/amazon_yossy.jpg" width={300} height={180} class="rounded-2xl" />
                </a>
              </div>
            </div>
            <div>
              <p className='mb-24 text-left break-normal text-sm'>※Amazonおよびそのロゴは、Amazon.com, Inc.またはその関連会社の商標です。</p>
            </div>
          </section>
        </main>
      </Layout>
    </div>
  )
}