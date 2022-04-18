import Head from 'next/head'

import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Layout from '../../components/layout'

export default function catalog0294() {
  return (
    <div>
      <Head>
        <title>AC-Z-0294</title>
        <link rel="icon" href="/falconer_favicons.png" />
      </Head>
      <Layout>
        <main role="main" class="pt-8 NotoSans">
          <section class="flex flex-wrap justify-center p-7">
            <h2 class="text-center w-1050 text-3xl font-bold mx-auto mt-3 mb-8 border-b-4 border-double border-black pb-2">商品カタログ</h2>
            <p class="py-10 text-black-900 text-xl font-bold w-4/5">[HIGH FIVE] IQOS対応ケース ケース カバー サフィアーノレザー コンパクト ポーチ</p>
            <div class="w-5/12"><img src="https://m.media-amazon.com/images/I/612ID0yAe9L._AC_SL1200_.jpg" /></div>
            <dl class="w-6/12 pl-8">
              <dt class="bg-red-200 px-4 flex items-center font-bold">型番</dt><dd class="pt-4 pb-7 ml-7">ac-z-0294</dd>
              <dt class="bg-red-200 px-4 flex items-center font-bold">売価</dt><dd class="pt-4 pb-7 ml-7">メーカー希望小売価格：2,980円</dd>
              <dt class="bg-red-200 px-4 flex items-center font-bold">ブランド</dt><dd class="pt-4 pb-7 ml-7">HIGH FIVE</dd>
              <dt class="bg-red-200 px-4 flex items-center font-bold">サイズ</dt><dd class="pt-4 pb-7 ml-7"> 縦 70mm × 横 120mm × 厚 50mm 重さ 52g</dd>
              <dt class="bg-red-200 px-4 flex items-center font-bold">カラー</dt><dd class="pt-4 pb-7 ml-7">black (JAN:4589681951598)  / navy (JAN:4589681951604) / brown (JAN:4589681951611) / pinkgold (JAN:4589681951628)</dd>
              <dt class="bg-red-200 px-4 flex items-center font-bold">製造販売元</dt><dd class="pt-4 pb-7 ml-7">株式会社FALCONER (株式会社ファルコナー)</dd>
              <dt class="bg-red-200 px-4 flex items-center font-bold">商品説明</dt><dd class="pt-4 pb-7 ml-7">
                <ul class="list-disc">
                  <li>【互換する機種】ILUMA対応ケース 3DUO対応ケース　IQOS3対応ケース　※ケースのみの販売となります。</li>
                  <li>本体とヒートスティックをまとめて持ち運びできるケース</li>
                  <li>▼ 全て収納したままアクション ▼ 本体をホルダーから取り出しはもちろん ヒートスティックの取り出しも 電源ON/OFFも 充電も 全てはケースに入れたままスムーズに。</li>
                  <li>素材もPoint PUサフィアーノレザーを使用しているので、 汚れた時にはさっとヒト拭きでメンテナンス完了。 内側は柔らかなスウェード調の生地を使用し 大切なでデバイスを優しく守ります。</li>
                  <li>人気の4カラーをラインナップ。かわいい、おしゃれ、クール、カジュアル、ビジネス、フォーマルなどスタイル問わずにお選び頂けます。 Black (ブラック) / Navy(ネイビー) / Brown (ブラウン) / PinkGold (ピンクゴールド)</li>
                </ul>
              </dd>
            </dl>
          </section>
        </main>
      </Layout>
    </div>
  )
}
