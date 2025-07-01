import Head from 'next/head'
import React from "react";
import Layout from '../../components/layout'

export default function catalog7146() {
  return (
    <div>
      <Head>
        <title>waa7146</title>
        <link rel="icon" href="/falconer_favicons.png" />
      </Head>
      <Layout>
        <main role="main" class="pt-8 NotoSans">
          <section class="flex flex-wrap justify-center p-7">
            <h2 class="text-center w-1050 text-3xl font-bold mx-auto mt-3 mb-2 border-b-4 border-double border-black pb-4">[RafiCaro]</h2>
            <p class="py-6 text-black-900 text-xl font-bold w-4/5 text-center">財布</p>
            <div class="w-5/12"><img src="/images/catalog/7146.jpg" /></div>
            <dl class="w-6/12 pl-8">
              <dt class="bg-red-200 px-4 flex items-center font-bold">型番</dt><dd class="pt-4 pb-7 ml-7">7146</dd>
              <dt class="bg-red-200 px-4 flex items-center font-bold">売価</dt><dd class="pt-4 pb-7 ml-7">メーカー希望小売価格：¥6,900</dd>
              <dt class="bg-red-200 px-4 flex items-center font-bold">ブランド</dt><dd class="pt-4 pb-7 ml-7">RafiCaro</dd>
              <dt class="bg-red-200 px-4 flex items-center font-bold">サイズ</dt><dd class="pt-4 pb-7 ml-7">縦 95mm × 横 200mm × 厚み 25mm ・重さ 217g</dd>
              <dt class="bg-red-200 px-4 flex items-center font-bold">素材</dt><dd class="pt-4 pb-7 ml-7">外側：牛革 シボ革 ／ 内側：ナイロン マイクロファイバ</dd>
              <dt class="bg-red-200 px-4 flex items-center font-bold">カラー</dt>
              <dd class="pt-4 pb-7 ml-7">
                black (JAN:4589681963492) / red (JAN:4589681963508) / green (JAN:4589681963515) / orange (JAN:4589681963522) / ashgrey (JAN:4589681975808) / greige (JAN:4589681975815) / camel (JAN:4589681975822) / dustypink (JAN:4589681975839) / ivory (JAN:4589681975846) / yellow (JAN:4589681975228) / blue (JAN:4589681975211) / leafgreen (JAN:4589681976867) / olive (JAN:4589681976874) / bordeaux (JAN:4589681976881) / gold (JAN:4589681981847) / saffianoblack (JAN:4589681981854) / silver (JAN:4589681982592)
              </dd>
              <dt class="bg-red-200 px-4 flex items-center font-bold">販売元</dt><dd class="pt-4 pb-7 ml-7">株式会社FALCONER (株式会社ファルコナー)</dd>
              <dt class="bg-red-200 px-4 flex items-center font-bold">販売元住所</dt><dd class="pt-4 pb-7 ml-7">〒465-0068　愛知県名古屋市名東区牧の里三丁目104番地の2</dd>
            </dl>

            {/* カートボタン */}
            <div class="w-full text-center mt-4">
              {["black","red","green","orange","ashgrey","greige","camel","dustypink","ivory","yellow","blue","leafgreen","olive","bordeaux","gold","saffianoblack","silver"].map((color) => (
                <a
                  key={color}
                  href={`https://www.casebank.jp/CART/cart.php?ITM=waa7146_CL&CNT=1&VAR1=${color}`}
                  class="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded m-1"
                >
                  {color} をカートに追加
                </a>
              ))}
            </div>
          </section>
        </main>
      </Layout>
    </div>
  )
}
