import Head from 'next/head'
import React from "react";
import Layout from '../../components/layout'

export default function catalog7060() {
  return (
    <div>
      <Head>
        <title>wab7060</title>
        <link rel="icon" href="/falconer_favicons.png" />
      </Head>
      <Layout>
        <main role="main" class="pt-8 NotoSans">
          <section class="flex flex-wrap justify-center p-7">
            <h2 class="text-center w-1050 text-3xl font-bold mx-auto mt-3 mb-8 border-b-4 border-double border-black pb-2">商品カタログ</h2>
            <p class="py-10 text-black-900 text-xl font-bold w-4/5">[RafiCaro] wab7060</p>
            <div class="w-5/12"><img src="/images/catalog/7060.jpg" /></div>
            <dl class="w-6/12 pl-8">
              <dt class="bg-red-200 px-4 flex items-center font-bold">型番</dt><dd class="pt-4 pb-7 ml-7">7060</dd>
              <dt class="bg-red-200 px-4 flex items-center font-bold">売価</dt><dd class="pt-4 pb-7 ml-7">メーカー希望小売価格：¥4,000</dd>
              <dt class="bg-red-200 px-4 flex items-center font-bold">ブランド</dt><dd class="pt-4 pb-7 ml-7">RafiCaro</dd>
              <dt class="bg-red-200 px-4 flex items-center font-bold">サイズ</dt><dd class="pt-4 pb-7 ml-7">[サイズ] 縦 70mm × 横 90mm × 厚み 35mm 重さ 43g</dd>
              <dt class="bg-red-200 px-4 flex items-center font-bold">カラー</dt><dd class="pt-4 pb-7 ml-7">brown (JAN:4589681964147)</dd>
              <dt class="bg-red-200 px-4 flex items-center font-bold">販売元</dt><dd class="pt-4 pb-7 ml-7">株式会社FALCONER (株式会社ファルコナー)</dd>
              <dt class="bg-red-200 px-4 flex items-center font-bold">販売元住所</dt><dd class="pt-4 pb-7 ml-7">〒465-0068　愛知県名古屋市名東区牧の里三丁目104番地の2</dd>
            </dl>

            <div class="w-full text-center mt-4">
              <a href="https://www.casebank.jp/CART/cart.php?ITM=wab7060&CNT=1&VAR1=brown" class="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded m-1">brown をカートに追加</a>
            </div>
          </section>
        </main>
      </Layout>
    </div>
  )
}