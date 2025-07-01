import Head from 'next/head'
import React from "react";
import Layout from '../../components/layout'

export default function catalog7101() {
  return (
    <div>
      <Head>
        <title>waa7101</title>
        <link rel="icon" href="/falconer_favicons.png" />
      </Head>
      <Layout>
        <main role="main" class="pt-8 NotoSans">
          <section class="flex flex-wrap justify-center p-7">
            <h2 class="text-center w-1050 text-3xl font-bold mx-auto mt-3 mb-2 border-b-4 border-double border-black pb-4">[RafiCaro]</h2>
            <p class="py-6 text-black-900 text-xl font-bold w-4/5 text-center">二つ折り財布</p>
            <div class="w-5/12"><img src="/images/catalog/7101.jpg" /></div>
            <dl class="w-6/12 pl-8">
              <dt class="bg-red-200 px-4 flex items-center font-bold">型番</dt><dd class="pt-4 pb-7 ml-7">7101</dd>
              <dt class="bg-red-200 px-4 flex items-center font-bold">売価</dt><dd class="pt-4 pb-7 ml-7">メーカー希望小売価格：¥8,700</dd>
              <dt class="bg-red-200 px-4 flex items-center font-bold">ブランド</dt><dd class="pt-4 pb-7 ml-7">RafiCaro</dd>
              <dt class="bg-red-200 px-4 flex items-center font-bold">サイズ</dt><dd class="pt-4 pb-7 ml-7">縦 90mm × 横 125mm × 厚さ 25mm ・重さ 98g</dd>
              <dt class="bg-red-200 px-4 flex items-center font-bold">スペック</dt><dd class="pt-4 pb-7 ml-7">お札入れ × 2 ／ 小銭入れ × 1 ／ カードポケット × 6 ／ フリーポケット × 2</dd>
              <dt class="bg-red-200 px-4 flex items-center font-bold">素材</dt><dd class="pt-4 pb-7 ml-7">イタリアンレザー 本革</dd>
              <dt class="bg-red-200 px-4 flex items-center font-bold">カラー</dt>
              <dd class="pt-4 pb-7 ml-7">brown (JAN:4589681979288) / red (JAN:4589681979264) / black (JAN:4589681979271) / dustyblue (JAN:4589681979226) / dustypink (JAN:4589681979240) / olive (JAN:4589681979233) / babypink (JAN:4589681979257) / gold (JAN:4589681982660) / silver (JAN:4589681982677)</dd>
              <dt class="bg-red-200 px-4 flex items-center font-bold">販売元</dt><dd class="pt-4 pb-7 ml-7">株式会社FALCONER (株式会社ファルコナー)</dd>
              <dt class="bg-red-200 px-4 flex items-center font-bold">販売元住所</dt><dd class="pt-4 pb-7 ml-7">〒465-0068　愛知県名古屋市名東区牧の里三丁目104番地の2</dd>
            </dl>

            {/* カートボタン */}
            <div class="w-full text-center mt-4">
              <a href="https://www.casebank.jp/CART/cart.php?ITM=waa7101_CL&CNT=1&VAR1=brown" class="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded m-1">brown をカートに追加</a>
              <a href="https://www.casebank.jp/CART/cart.php?ITM=waa7101_CL&CNT=1&VAR1=red" class="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded m-1">red をカートに追加</a>
              <a href="https://www.casebank.jp/CART/cart.php?ITM=waa7101_CL&CNT=1&VAR1=black" class="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded m-1">black をカートに追加</a>
              <a href="https://www.casebank.jp/CART/cart.php?ITM=waa7101_CL&CNT=1&VAR1=dustyblue" class="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded m-1">dustyblue をカートに追加</a>
              <a href="https://www.casebank.jp/CART/cart.php?ITM=waa7101_CL&CNT=1&VAR1=dustypink" class="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded m-1">dustypink をカートに追加</a>
              <a href="https://www.casebank.jp/CART/cart.php?ITM=waa7101_CL&CNT=1&VAR1=olive" class="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded m-1">olive をカートに追加</a>
              <a href="https://www.casebank.jp/CART/cart.php?ITM=waa7101_CL&CNT=1&VAR1=babypink" class="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded m-1">babypink をカートに追加</a>
              <a href="https://www.casebank.jp/CART/cart.php?ITM=waa7101_CL&CNT=1&VAR1=gold" class="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded m-1">gold をカートに追加</a>
              <a href="https://www.casebank.jp/CART/cart.php?ITM=waa7101_CL&CNT=1&VAR1=silver" class="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded m-1">silver をカートに追加</a>
            </div>
          </section>
        </main>
      </Layout>
    </div>
  )
}
