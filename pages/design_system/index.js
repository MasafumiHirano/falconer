import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import Layout from '../../components/layout'

export default function design_system({ medias }) {
  const youtubePosts = medias.filter((media) => (
    media.medianame[0] == 'youtube'
  ))
  //youtubeの投稿は、4つとりだす。
  const visibleYoutubePosts = youtubePosts.slice(0, 4)

  return (
    <div>
      {/* サイドメニュー */}
      <aside class="fixed w-60 left-0 top-0 bg-black text-white h-screen">
        <h1 class="futura-md text-4xl mt-9 ml-8">FALCONER<br />Design<br />Notes</h1>
        <ul class="w-full pl-10 mt-10">
          <li><a class="flex flex-row"><span class="w-4/6">商品ページ</span><span><img src="/images/design/arrow_wh.png" /></span></a></li>
          <li><a class="flex flex-row mt-7"><span class="w-4/6">ロゴ・素材</span><span><img src="/images/design/arrow_wh.png" /></span></a></li>
        </ul>
      </aside>
      {/* 本文 */}
      <main class="NotoSans pl-60 ">
        {/* インデックス */}
        <section>
          <h2 class="text-center NotoSans font-bold text-3xl mt-20 mb-14">商品ページ周り仕様</h2>
          <div class="mx-auto w-2/3">
            <div class="flex flex-wrap">
              <a href="#goods_info" class="flex justify-between w-1/2 px-8">
                <div class="flex w-3/12 items-center">
                  <img class="w-9 h-9" src="/images/design/rakuten.png" />
                  <img class="w-9 h-9 ml-2" src="/images/design/amazon.png" />
                  <img class="w-9 h-9 ml-2" src="/images/design/yahoo.png" />
                </div>
                <div class="w-7/12 flex items-center text-xl">商品ページ全体概要</div>
                <div class="w-1/12 flex items-center justify-center"><img src="/images/design/arrow.png" /></div>
              </a>
              <a href="#goods_info" class="flex justify-between w-1/2 px-8">
                <div class="flex w-3/12 items-center">
                  <img class="w-9 h-9" src="/images/design/rakuten.png" />
                  <img class="w-9 h-9 ml-2" src="/images/design/amazon.png" />
                  <img class="w-9 h-9 ml-2" src="/images/design/yahoo.png" />
                </div>
                <div class="w-7/12 flex items-center text-xl">商品ページ共通コンセプト</div>
                <div class="w-1/12 flex items-center justify-center"><img src="/images/design/arrow.png" /></div>
              </a>
              <a href="#goods_info" class="flex justify-between w-1/2 px-8 mt-7">
                <div class="flex w-3/12 items-center">
                  <img class="w-9 h-9" src="/images/design/rakuten.png" />
                  <img class="w-9 h-9 ml-2" src="/images/design/amazon.png" />
                  <img class="w-9 h-9 ml-2" src="/images/design/yahoo.png" />
                </div>
                <div class="w-7/12 flex items-center text-xl">商品ページサンプル</div>
                <div class="w-1/12 flex items-center justify-center"><img src="/images/design/arrow.png" /></div>
              </a>
              <a href="#goods_info" class="flex justify-between w-1/2 px-8 mt-7">
                <div class="flex w-3/12 items-center">
                  <img class="w-9 h-9" src="/images/design/amazon.png" />
                  <img class="w-9 h-9 ml-2" src="/images/design/yahoo.png" />
                </div>
                <div class="w-7/12 flex items-center text-xl">商品ページサムネイル</div>
                <div class="w-1/12 flex items-center justify-center"><img src="/images/design/arrow.png" /></div>
              </a>
              <a href="#goods_info" class="flex justify-between w-1/2 px-8 mt-7">
                <div class="flex w-3/12 items-center">
                  <img class="w-9 h-9" src="/images/design/rakuten.png" />
                  <img class="w-9 h-9 ml-2" src="/images/design/amazon.png" />
                  <img class="w-9 h-9 ml-2" src="/images/design/yahoo.png" />
                </div>
                <div class="w-7/12 flex items-center text-xl">カラ―仕様</div>
                <div class="w-1/12 flex items-center justify-center"><img src="/images/design/arrow.png" /></div>
              </a>
              <a href="#goods_info" class="flex justify-between w-1/2 px-8 mt-7">
                <div class="flex w-3/12 items-center">
                  <img class="w-9 h-9" src="/images/design/amazon.png" />
                </div>
                <div class="w-7/12 flex items-center text-xl">Amazonサムネイル</div>
                <div class="w-1/12 flex items-center justify-center"><img src="/images/design/arrow.png" /></div>
              </a>
              <a href="#goods_info" class="flex justify-between w-1/2 px-8 mt-7">
                <div class="flex w-3/12 items-center">
                  <img class="w-9 h-9" src="/images/design/amazon.png" />
                </div>
                <div class="w-7/12 flex items-center text-xl">商品画像</div>
                <div class="w-1/12 flex items-center justify-center"><img src="/images/design/arrow.png" /></div>
              </a>
              <a href="#goods_info" class="flex justify-between w-1/2 px-8 mt-7">
                <div class="flex w-3/12 items-center">
                  <img class="w-9 h-9" src="/images/design/amazon.png" />
                </div>
                <div class="w-7/12 flex items-center text-xl">Amazon商品紹介コンテンツ</div>
                <div class="w-1/12 flex items-center justify-center"><img src="/images/design/arrow.png" /></div>
              </a>
            </div>
          </div>
        </section>
        {/* 楽天商品ページ仕様 */}
        <section class="mt-52">
          {/* モールロゴ */}
          <div class="w-500 mx-auto flex justify-between">
            <div class="flex items-end"><img src="/images/design/rakuten_l.png" /></div>
            <div class="flex items-end"><img src="/images/design/amazon_l.png" /></div>
            <div class="flex items-end"><img src="/images/design/yahoo_l.png"/></div>
          </div>
          <h2 class="text-center NotoSans font-bold text-3xl mt-8">楽天商品ページ仕様</h2>
          <h3 class="text-center NotoSans font-bold text-3xl mt-16">全体概要</h3>
          <p class="mt-3 text-center text-3xl">商品ページの商品詳細に全て画像で挿入する。</p>
          <div class="w-450 h-44 mx-auto bg-blue-200 flex justify-center items-center mt-7">
            <p class="w-60 text-xl">ファイル名 : ○○○(品番)<br/>横幅 : 1200px<br/>解像度 : 72ppi</p>
          </div>
          <div class="mt-11">
            <p class="w-500 mx-auto text-xl leading-7">・幅1200pxのワイヤーフレーム<br/>・各モール向けに1200px×1200pxの正方形で区切り<br/>・サムネイル / イメージ / 詳細 / バリエーションで構成</p>
          </div>
          <div class="flex justify-center mt-14">
            <a class="w-300 h-12 rounded-full flex justify-between items-center bg-green-400 text-white" href=""><span class="w-93% NotoSans font-medium text-base text-center">楽天商品ページ一例へ</span><span><img class="mr-4" src="/images/design/arrow_wh.png"/></span></a>
          </div>
          <div class="mt-24">
            <img class="block mx-auto" src="/images/design/rakuten_layout.jpg"/>
          </div>
          <div class="mt-20 w-1050 mx-auto px-6">
            <h3 class="text-xl font-bold">違和感なくカートボタンへたどり着けるように。</h3>
            <p class="mt-3 text-xl">サムネから商品ページに入り(興味を引く)、商品のポジティブなイメージや使用イメージをすり込んだのち(イメージの拡大)、仕様を説明し(疑問・不安を除く)。基本的な流れとしてはこのようなイメージ。<br/><br/>
              楽天やAmazonのスライドを想定して基本的に1200px×1200px画像の連結。<br/>
              目安としてイメージ写真を全体の半分程度。構成の配列は絶対的なものではなく、商品により多少変更を加えてもOK。<br/><br/>              
              例えば機能よりもデザイン重視によりイメージで押し切りたい商品の場合、詳細エリアの後にさらにイメージエリアを差し込む、など。</p>
          </div>
        </section>
      </main>
      <footer class="bg-black h-36 flex justify-end items-end mt-52">
        <p class="futura-lt text-sm text-right pr-10 pb-4 text-white">Copyright © Falconer Corp. All Rights Reserved.</p>
      </footer>
    </div>
  )
}

export const getStaticProps = async () => {
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  };
  const data = await fetch('https://falconer.microcms.io/api/v1/media', key)
    .then(res => res.json())
    .catch(() => null);
  return {
    props: {
      medias: data.contents
    },
  };
}