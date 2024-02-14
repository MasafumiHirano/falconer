import Head from 'next/head'

import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Layout from '../../components/layout'

export default function catalog0294() {
  return (
    <div>
      <Head>
        <title>waa7066</title>
        <link rel="icon" href="/falconer_favicons.png" />
      </Head>
      <Layout>
        <main role="main" class="pt-8 NotoSans">
          <section class="flex flex-wrap justify-center p-7">
            <h2 class="text-center w-1050 text-3xl font-bold mx-auto mt-3 mb-8 border-b-4 border-double border-black pb-2">商品カタログ</h2>
            <p class="py-10 text-black-900 text-xl font-bold w-4/5">[MALTA] 三つ折り財布 レディース ボックス型 小銭入れ 牛革 レザー カード入れ 大容量 ミニ財布</p>
            <div class="w-5/12"><img src="/images/catalog/waa7066.jpg" /></div>
            <dl class="w-6/12 pl-8">
              <dt class="bg-red-200 px-4 flex items-center font-bold">型番</dt><dd class="pt-4 pb-7 ml-7">waa7066</dd>
              <dt class="bg-red-200 px-4 flex items-center font-bold">売価</dt><dd class="pt-4 pb-7 ml-7">メーカー希望小売価格：5,400円</dd>
              <dt class="bg-red-200 px-4 flex items-center font-bold">ブランド</dt><dd class="pt-4 pb-7 ml-7">MALTA - マルタ -</dd>
              <dt class="bg-red-200 px-4 flex items-center font-bold">サイズ</dt><dd class="pt-4 pb-7 ml-7"> 横 100mm × 縦 85mm × 厚み 35mm 重さ 90g</dd>
              <dt class="bg-red-200 px-4 flex items-center font-bold">カラー</dt><dd class="pt-4 pb-7 ml-7">olive (JAN:4589681982004)  / etoupe (JAN:4589681982011)  / brownyellow (JAN:4589681978830)  / greyblue (JAN:4589681977093)  / brownred (JAN:4589681951253)  / blackpink (JAN:4589681957132)  / greyyellow (JAN:4589681954490)  / blackyellow (JAN:4589681951222)  </dd>
              <dt class="bg-red-200 px-4 flex items-center font-bold">販売元</dt><dd class="pt-4 pb-7 ml-7">株式会社FALCONER (株式会社ファルコナー)</dd>
              <dt class="bg-red-200 px-4 flex items-center font-bold">販売元住所</dt><dd class="pt-4 pb-7 ml-7">〒465-0068　愛知県名古屋市名東区牧の里三丁目104番地の2</dd>
              <dt class="bg-red-200 px-4 flex items-center font-bold">商品説明</dt><dd class="pt-4 pb-7 ml-7">
                <ul class="list-disc">
                  <li>【収納力とコンパクトさを両立】無駄のない三つ折り設計にボックス型の小銭入れの組み合わせ。</li>
                  <li>カードも本当に必要なものだけを4枚選んで収納。</li>
                  <li>ツートンの魅力：コントラストと遊び心がオシャレにに引き立つツートンカラー</li>
                  <li>カジュアルからクールなど個性を表現するのにピッタリのカラーリング。 olive (オリーブ) / etoupe(エトゥープ) / brownyellow (ブラウンイエロー) / greyblue (グレイブルー) / brownred（ブラウンレッド） / blackpink（ブラックピンク） / greyyellow（グレイイエロー） / blackyellow（ブラックイエロー）</li>
                </ul>
              </dd>
            </dl>
          </section>
        </main>
      </Layout>
    </div>
  )
}
