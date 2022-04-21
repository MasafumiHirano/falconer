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
      <aside class="fixed w-32 lg:w-60 left-0 top-0 bg-black text-white h-screen">
        <h1 class="futura-md text-xl lg:text-4xl mt-9 ml-4">FALCONER<br />Design<br />Notes</h1>
        <ul class="w-full pl-1 lg:pl-10 mt-10">
          <li><a class="flex flex-row"><span class="w-4/6">商品ページ</span><span><img src="/images/design/arrow_wh.png" /></span></a></li>
          <li><a class="flex flex-row mt-7"><span class="w-4/6">ロゴ・素材</span><span><img src="/images/design/arrow_wh.png" /></span></a></li>
        </ul>
      </aside>
      {/* 本文 */}
      <main class="NotoSans pl-36 lg:pl-60 ">
        {/* インデックス */}
        <section>
          <h2 class="text-center NotoSans font-bold text-3xl mt-20 mb-14">商品ページ周り仕様</h2>
          <div class="mx-auto w-full max-w-1050">
            <div class="flex flex-wrap">
              <a href="#page_spec" class="flex justify-between w-1/2 px-8">
                <div class="flex w-3/12 items-center justify-end">
                  <img class="w-8 h-8 lg:w-10 lg:h-10" src="/images/design/rakuten.png" />
                  <img class="w-8 h-8 lg:w-10 lg:h-10 ml-2" src="/images/design/amazon.png" />
                  <img class="w-8 h-8 lg:w-10 lg:h-10 ml-2" src="/images/design/yahoo.png" />
                </div>
                <div class="w-7/12 flex items-center text-xl">全体概要</div>
                <div class="w-1/12 flex items-center justify-center"><img src="/images/design/arrow.png" /></div>
              </a>
              <a href="#thumbnail" class="flex justify-between w-1/2 px-8">
                <div class="flex w-3/12 items-center justify-end">
                  <img class="w-8 h-8 lg:w-10 lg:h-10" src="/images/design/rakuten.png" />
                  <img class="w-8 h-8 lg:w-10 lg:h-10 ml-2" src="/images/design/amazon.png" />
                  <img class="w-8 h-8 lg:w-10 lg:h-10 ml-2" src="/images/design/yahoo.png" />
                </div>
                <div class="w-7/12 flex items-center text-xl">サムネイル</div>
                <div class="w-1/12 flex items-center justify-center"><img src="/images/design/arrow.png" /></div>
              </a>
              <a href="#ec_spec" class="flex justify-between w-1/2 px-8 mt-7">
                <div class="flex w-3/12 items-center justify-end">
                  <img class="w-8 h-8 lg:w-10 lg:h-10" src="/images/design/rakuten.png" />
                  <img class="w-8 h-8 lg:w-10 lg:h-10 ml-2" src="/images/design/amazon.png" />
                  <img class="w-8 h-8 lg:w-10 lg:h-10 ml-2" src="/images/design/yahoo.png" />
                </div>
                <div class="w-7/12 flex items-center text-xl">共通コンセプト(EC向け)</div>
                <div class="w-1/12 flex items-center justify-center"><img src="/images/design/arrow.png" /></div>
              </a>
              <a href="#page_sample" class="flex justify-between w-1/2 px-8 mt-7">
                <div class="flex w-3/12 items-center justify-end">
                  <img class="w-8 h-8 lg:w-10 lg:h-10" src="/images/design/rakuten.png" />
                  <img class="w-8 h-8 lg:w-10 lg:h-10 ml-2" src="/images/design/yahoo.png" />
                </div>
                <div class="w-7/12 flex items-center text-xl">商品ページサンプル</div>
                <div class="w-1/12 flex items-center justify-center"><img src="/images/design/arrow.png" /></div>
              </a>
              <a href="#color_spec" class="flex justify-between w-1/2 px-8 mt-7">
                <div class="flex w-3/12 items-center justify-end">
                  <img class="w-8 h-8 lg:w-10 lg:h-10" src="/images/design/rakuten.png" />
                  <img class="w-8 h-8 lg:w-10 lg:h-10 ml-2" src="/images/design/amazon.png" />
                  <img class="w-8 h-8 lg:w-10 lg:h-10 ml-2" src="/images/design/yahoo.png" />
                </div>
                <div class="w-7/12 flex items-center text-xl">カラ―仕様</div>
                <div class="w-1/12 flex items-center justify-center"><img src="/images/design/arrow.png" /></div>
              </a>
              <a href="#amazon_thumbnail" class="flex justify-between w-1/2 px-8 mt-7">
                <div class="flex w-3/12 items-center justify-end">
                  <img class="w-8 h-8 lg:w-10 lg:h-10" src="/images/design/amazon.png" />
                </div>
                <div class="w-7/12 flex items-center text-xl">Amazonサムネイル</div>
                <div class="w-1/12 flex items-center justify-center"><img src="/images/design/arrow.png" /></div>
              </a>
              <a href="#amazon_goodsimage" class="flex justify-between w-1/2 px-8 mt-7">
                <div class="flex w-3/12 items-center justify-end">
                  <img class="w-8 h-8 lg:w-10 lg:h-10" src="/images/design/amazon.png" />
                </div>
                <div class="w-7/12 flex items-center text-xl">商品画像</div>
                <div class="w-1/12 flex items-center justify-center"><img src="/images/design/arrow.png" /></div>
              </a>
              <a href="#amazon_contents " class="flex justify-between w-1/2 px-8 mt-7">
                <div class="flex w-3/12 items-cente justify-end">
                  <img class="w-8 h-8 lg:w-10 lg:h-10" src="/images/design/amazon.png" />
                </div>
                <div class="w-7/12 flex items-center text-xl">Amazon商品紹介コンテンツ</div>
                <div class="w-1/12 flex items-center justify-center"><img src="/images/design/arrow.png" /></div>
              </a>
            </div>
            <div class="justify-center mt-24 hidden">
              <a class="w-300 h-12 rounded-full flex justify-between items-center bg-green-500 text-white" href=""><span class="w-93% NotoSans font-medium text-base text-center">外部委託業者様へ</span><span><img class="mr-4" src="/images/design/arrow_wh.png" /></span></a>
            </div>
          </div>
        </section>
        {/* 商品ページ仕様 */}
        <section class="mt-52" id="page_spec">
          <div class="w-500 mx-auto flex justify-between">
            <div class="flex items-end"><img src="/images/design/rakuten_l.png" /></div>
            <div class="flex items-end"><img src="/images/design/amazon_l.png" /></div>
            <div class="flex items-end"><img src="/images/design/yahoo_l.png" /></div>
          </div>
          <h2 class="text-center NotoSans font-bold text-3xl mt-8">商品ページ仕様</h2>
          <h3 class="text-center NotoSans font-bold text-3xl mt-16">全体概要</h3>
          <p class="mt-3 text-center text-3xl">商品ページの商品詳細に全て画像で挿入する。</p>
          <div class="w-450 h-44 mx-auto bg-blue-200 flex justify-center items-center mt-7">
            <p class="w-60 text-xl">ファイル名 : ○○○(品番)<br />横幅 : 1200px<br />解像度 : 72ppi</p>
          </div>
          <div class="mt-11">
            <p class="w-500 mx-auto text-xl leading-7">・幅1200pxのワイヤーフレーム<br />・各モール向けに1200px×1200pxの正方形で区切り<br />・サムネイル / イメージ / 詳細 / バリエーションで構成</p>
          </div>
          <div class="flex justify-center mt-14">
            <a class="w-300 h-12 rounded-full flex justify-between items-center bg-green-500 text-white" href="https://item.rakuten.co.jp/allrightleather/waa7146/" target="_blank"><span class="w-93% NotoSans font-medium text-base text-center">全体概要商品ページ一例へ</span><span><img class="mr-4" src="/images/design/arrow_wh.png" /></span></a>
          </div>
          <div class="mt-24">
            <img class="block mx-auto" src="/images/design/rakuten_layout.jpg" />
          </div>
          <div class="mt-20 max-w-1000 w-10/12 mx-auto">
            <h3 class="text-xl font-bold">違和感なくカートボタンへたどり着けるように。</h3>
            <p class="mt-3 text-xl">サムネから商品ページに入り(興味を引く)、商品のポジティブなイメージや使用イメージをすり込んだのち(イメージの拡大)、仕様を説明し(疑問・不安を除く)。基本的な流れとしてはこのようなイメージ。<br /><br />
              楽天やAmazonのスライドを想定して基本的に1200px×1200px画像の連結。<br />
              目安としてイメージ写真を全体の半分程度。構成の配列は絶対的なものではなく、商品により多少変更を加えてもOK。<br /><br />
              例えば機能よりもデザイン重視によりイメージで押し切りたい商品の場合、詳細エリアの後にさらにイメージエリアを差し込む、など。</p>
          </div>
        </section>
        {/* サムネイル */}
        <section class="mt-52" id="thumbnail">
          <div class="w-500 mx-auto flex justify-between">
            <div class="flex items-end"><img src="/images/design/rakuten_l.png" /></div>
            <div class="flex items-end"><img src="/images/design/amazon_l.png" /></div>
            <div class="flex items-end"><img src="/images/design/yahoo_l.png" /></div>
          </div>
          <h2 class="text-center NotoSans font-bold text-3xl mt-8">サムネイル</h2>
          <div class="w-450 h-44 mx-auto bg-blue-200 flex justify-center items-center mt-7">
            <p class="w-60 text-xl">ファイル名 / ○○○(品番)1<br />サイズ / 1200px × 1200px<br />解像度 / 72ppi</p>
          </div>
          <div class="mt-11">
            <p class="w-full text-center mx-auto text-xl leading-7">背景に物撮り、またはモデル写真を配置、その上にカラーバリエーションとして商品の切り抜き画像をのせる。</p>
          </div>
          <div class="flex justify-center mt-14">
            <a class="w-300 h-12 rounded-full flex justify-between items-center bg-green-500 text-white" href="https://item.rakuten.co.jp/allrightleather/bge7315/" target="_blank"><span class="w-93% NotoSans font-medium text-base text-center">サムネイル商品ページ一例へ</span><span><img class="mr-4" src="/images/design/arrow_wh.png" /></span></a>
          </div>
          <div class="mt-24">
            <h3 class="text-red-700 text-center text-xl font-bold">禁止事項</h3>
            <div class="mt-8 flex justify-center">
              <img src="/images/design/thumbnail_rule.jpg" />
            </div>
          </div>
          <div class="mt-20 max-w-1000 w-10/12 mx-auto px-6">
            <p class="mt-3 text-xl font-normal">
              商品ページ全体とも共通したコンセプト”シンプルに、直感的に。”<br />
              バッグ類はファッション全体を含めたコーディネートの一部としてとらえ、サムネイルも引き気味の写真を使用。<br />
              一方、財布や小物類などは特徴がわかりやすい寄り気味の写真を使用。写真選定はクオリティを特に留意する。
            </p>
            <p class="mt-3 text-xl font-normal">
              ・メインの被写体と切り抜き＆テキストなどの区分を約5:5程度でレイアウトする。<br />
              ・背景はテキストや切り抜きが認識しやすいように色数や色の種類が少ないものを選ぶ。色の指定は特になし。<br />
              ・バッグ類は引き気味でコーディネートの一部として、財布類や小物類は寄り気味で詳細をより見せる意識。<br />
              ・商品がどんなものかわかるならテキスト挿入なしでもOK。逆に短いシンプルなキャッチフレーズ程度は挿入OK。<span class="text-red-700">複雑で雑多な商品タイトルなどはNG。</span><br />
              ・バリエーションのカラーチップを入れる。わかりづらくてもバリエーションが存在してることがわかればOK。<br /><br />
              ・各ブランドのロゴは挿入。<br />
              ・商品の全貌がわかる切り抜きを一点は挿入(背景のイメージ写真が物撮りなどで全貌が見えるものなら不要)
            </p>
          </div>
          <div class="mt-16 flex justify-center">
            <img src="/images/design/thumbnail_example.jpg" />
          </div>
          <div class="w-768 mx-auto mt-10">
            <h3 class="font-bold text-xl">レイアウト目安</h3>
            <p class="text-xl text-justify">目安として半分を商品のメイン写真、半分をバリエーションなどの詳細表示の領域に。あくまで目安であり、商品に応じて多少はみ出したりなど臨機応変に。</p>
          </div>
          <div class="mt-16 flex justify-center">
            <img src="/images/design/thumbnail_example2.jpg" />
          </div>
        </section>
        {/* 共通コンセプト(EC向け) */}
        <section class="mt-52" id="ec_spec">
          <div class="w-500 mx-auto flex justify-between">
            <div class="flex items-end"><img src="/images/design/rakuten_l.png" /></div>
            <div class="flex items-end"><img src="/images/design/amazon_l.png" /></div>
            <div class="flex items-end"><img src="/images/design/yahoo_l.png" /></div>
          </div>
          <h2 class="text-center NotoSans font-bold text-3xl mt-8">共通コンセプト(EC向け)</h2>
          <div class="mt-16 max-w-1000 w-10/12 mx-auto px-6">
            <h3 class="text-xl font-bold">シンプルに、直感的に。</h3>
            <p class="mt-3 text-xl font-normal">
              高クオリティの写真をベースに、”見てわかる”商品ページを目指す。<br />
              商品単体やセール・イベントではなくショップにお客様をつけることを目指し(特に楽天)、雰囲気や世界観を重視した上で直感的に商品の良さをアピールすることに重点を置く。<br /><br />
              <span class="font-bold">理想は言葉を用いずに写真や、図、アイコンのみで商品の訴求を完結する</span><br />
              現実的には不可能なのでそれに準じたマインドで制作を行う。<br /><br />
              ・画像を除いた、ページで使用する色数、面積を絞る。<br />
              ・準備する画像の素材のクオリティにも重点を置く。<br />
              ・訴求などにおいて文字数を減らす。<br />
              ・全体的にイメージ写真の割合を増やす。
            </p>
          </div>
          <div class="mt-32 max-w-1000 w-10/12 mx-auto px-6">
            <h2 class="text-3xl pb-3 font-bold border-b-2 border-green-800">レイアウト目安</h2>
            <h3 class="mt-7 text-xl font-bold">商品ページLPを制作→ブロックをトリミングしてスライド画像に。</h3>
            <p class="text-xl text-justify mt-3">前提として、あくまで構成は上からスクロールして見ていく商品ページLPとして制作し、各々ブロックを1200px×1200pxでトリミングした物を楽天のスライド用画像として使用する。</p>
            <h3 class="mt-24 text-xl font-bold">画像内ブロック分けの目安に。</h3>
            <p class="text-xl text-justify mt-3">必ずしも明確に境界線など分ける必要はなく、オブジェクトの区分けや配置としてのレイアウトを統一する。</p>
          </div>
          <div class="mt-16 flex justify-center">
            <img src="/images/design/concept.jpg" />
          </div>
          <div class="mt-32 max-w-1000 w-10/12 mx-auto px-6">
            <p class="text-xl text-justify">実際は中央分けではないがそういったレイアウトをページ全体で徹底することにより、中央で分けたレイアウトのように見せる。</p>
            <p class="mt-7 text-xl text-justify">個々で明確にレイアウトを区切るというよりもグループで「こういう区切りをしている傾向がある」くらいの感覚でレイアウトを整理し、見る側に自動的に「しっかりとルール化されたされたレイアウト」と認識させる。</p>
          </div>
          <div class="mt-16 flex justify-center">
            <img src="/images/design/concept2.jpg" />
          </div>
          <div class="mt-32 max-w-1000 w-10/12 mx-auto px-6">
            <h3 class="mt-7 text-xl font-bold">LPとしてのデザインを第一に保った上で、ブロック内のレイアウトを構想する。</h3>
            <div class="mt-7"><img class="inline-block -ml-3" src="/images/design/caution.jpg"/><span class="text-xl">ブロックでのレイアウトを整えたとしても、それらがLPに仕上がった際にレイアウトのバランスが悪くならないよう、LPを前提としたレイアウトバランスを構想する。</span></div>
          </div>
          <div class="mt-10">
          <h3 class="mt-32 max-w-1000 w-10/12 mx-auto text-3xl pb-3 mb-3 font-bold border-b-2 border-green-800">フォント</h3>
            <p class="max-w-1000 w-10/12 mx-auto text-xl text-justify">フォントは説明などの長尺の文章はNoto Sans JPを使用。<span class="text-red-700">ただし、見出しやキャッチコピーなどデザイン性を考慮したいような部分であったり、特定の個性を表現したい商品</span>であれば長尺文であっても他のフォントの使用は可。</p>
          </div>
          <div class="mt-20 w-768 mx-auto">
            <h4>説明や長尺の文章など、「読ませる」部分に使用。</h4>
            <div class="flex justify-between">
              <p class="NotoSans font-medium text-4.5xl">Noto Sans JP</p>
              <p class="NotoSans text-xl pt-4">Noto Sans JP - 日本語・現行使用 / 各ウェイト</p>
            </div>
            <div class="flex justify-end"><a class="mr-10 w-250 h-10 rounded-full flex justify-between items-center bg-green-500 text-white" href="https://fonts.google.com/noto/specimen/Noto+Sans+JP?query=noto" target="_blank"><span class="w-93% NotoSans font-medium text-base text-center">ダウンロードサイトへ</span><span><img class="mr-4" src="/images/design/arrow_wh.png" /></span></a></div>
          </div>
          <div class="mt-16 flex justify-center">
            <a class="mr-10 w-450 h-24 py-1 rounded-full flex justify-around items-center bg-green-500 text-white" href="https://drive.google.com/file/d/1HmFP-tU9fYQR0edjuvHQO8X2Hds0vJDx/view?usp=sharing" target="_blank"><img class="ml-4" src="/images/design/zip_icon.png" /><span class="NotoSans font-bold text-xl text-center">サンプルPSDダウンロード</span><span><img class="mr-4" src="/images/design/dl_icon.png" /></span></a>
          </div>
          <p class="text-center text-sm">※Googleドライブからのダウンロードになります</p>
        </section>
        {/* 商品ページサンプル */}
        <section class="mt-52" id="page_sample">
          <div class="w-400 mx-auto flex justify-between">
            <div class="flex items-end"><img src="/images/design/rakuten_l.png" /></div>
            <div class="flex items-center"><img src="/images/design/yahoo_l.png" /></div>
          </div>
          <h2 class="text-center NotoSans font-bold text-3xl mt-8">商品ページサンプル</h2>
          <div class="mt-16 flex justify-center max-w-1050 mx-auto">
            <img class="w-full" src="/images/design/goodspage_sample.jpg" />
          </div>
        </section>
        {/* カラ―仕様 */}
        <section class="mt-52" id="color_spec">
          <div class="w-500 mx-auto flex justify-between">
            <div class="flex items-end"><img src="/images/design/rakuten_l.png" /></div>
            <div class="flex items-end"><img src="/images/design/amazon_l.png" /></div>
            <div class="flex items-end"><img src="/images/design/yahoo_l.png" /></div>
          </div>
          <h2 class="text-center NotoSans font-bold text-3xl mt-8">カラー仕様</h2>
          <div class="mt-16 max-w-1000 w-10/12 mx-auto px-6">
            <h3 class="text-xl font-bold">全体のトーン・彩度を落として安っぽさの排除</h3>
            <p class="mt-3 text-xl font-normal">高級感を出すと言うよりは安っぽさを削っていくイメージで全体のトーンを統一。</p>
          </div>
          <div class="mt-24 flex justify-center">
            <img src="/images/design/color.jpg" />
          </div>
          <div class="mt-32 max-w-1000 w-10/12 mx-auto px-6">
            <p class="text-xl font-normal">上記は仕様としてして設定するものの、例外はその理由を以って認められる。例えば商品によりポップに見せたい場合などや、鮮やかなカラーを訴求として打ち出したい、など。</p>
          </div>
          <div class="mt-16 max-w-1000 w-10/12 mx-auto px-6">
            <h3 class="text-xl font-bold">個々の商品ページによるカラー指定はなし。</h3>
            <p class="mt-3 text-xl font-normal">個々の商品ページによるカラー指定は特になし。ターゲット、商品のイメージ、ブランドなどに要素によりそれぞれのページに合ったカラー選択を行う。</p>
          </div>
          <div class="mt-32 max-w-1000 w-10/12 mx-auto px-6">
            <h3 class="text-xl font-bold text-red-700"><img class="inline-block mr-2" src="/images/design/caution.jpg"/>注意</h3>
            <div class="mt-1"><span class="text-xl">レディースだからと言ってピンクや赤の多用は禁物。「男性がつくった女性向け」感の元凶となる場合が多い。また、同じく、ピンクや赤の多用はわかりやすくレディースっぽさが出てしまう。</span></div>
          </div>
        </section>
        {/* Amazonサムネイル */}
        <section class="mt-52" id="amazon_thumbnail">
          <div class="w-500 mx-auto flex justify-center">
            <div class="flex items-end"><img src="/images/design/amazon_l.png" /></div>
          </div>
          <h2 class="text-center NotoSans font-bold text-3xl mt-8">Amazonサムネイル仕様</h2>
          <div class="w-450 h-44 mx-auto bg-blue-200 flex justify-center items-center mt-7">
            <p class="w-64 text-xl">サイズ / 長い方の辺 1800px<br/>解像度 / 72ppi</p>
          </div>
          <div class="mt-32 max-w-1000 w-10/12 mx-auto px-6">
            <p class="text-xl text-justify">背景を#ffffffホワイトに設定し、写真の切り抜きを載せる。サムネイルがバリエーションの画像にもなるのでバリエーションの分だけ制作。</p>
          </div>
          <div class="mt-32 max-w-1000 w-10/12 mx-auto px-6">
            <p class="text-xl text-center">スタイリッシュさを重視</p>
            <p class="mt-1 text-xl text-justify">
              Amaoznというモールの特性上、クオリティの低いもの(所謂中華っぽい)だけは避ける。<br />
              ・解像度が低い<br />
              ・コントラストが低い<br />
              ・切り抜きが粗い<br />
              ・真正面などありきたりなアングル etc,<br />
              全てのネガティブ要素を取り払うことは難しいが、極力避けていくことによりクオリティを保つことは可能。
            </p>
          </div>
          <div class="mt-16 flex justify-center">
            <img src="/images/design/amazon_thumbnail.jpg" />
          </div>
          <div class="w-500 h-44 mx-auto flex items-center mt-7">
            ・写真の解像度(画質)を高くする<br />
            ・被写体に動きをつける<br />
            ・陽陰のコントラストをつける<br />
            ・斜めアングルなどを取り入れてみる<br />
            ・商品の外見の概要の伝わりやすさを考慮する
          </div>
          <div class="mt-16 w-720 mx-auto px-6">
            <p class="mt-3 text-xl font-normal">
              上記全てを考慮する必要はないが(全ての要素を入れようとするとかえって混沌とする)、被写体に動きをつける、斜めアングルなどは他との差別化をつけることができるため意識したい。<br /><br />
              影、映り込みなどの加工は禁止。
            </p>
          </div>
          <div class="mt-16 flex justify-center">
            <a class="mr-10 w-450 h-24 py-1 rounded-full flex justify-around items-center bg-green-500 text-white" href="https://drive.google.com/file/d/1HmFP-tU9fYQR0edjuvHQO8X2Hds0vJDx/view?usp=sharing" target="blank_" ><img class="ml-4" src="/images/design/zip_icon.png" /><span class="NotoSans font-bold text-xl text-center">サンプルPSDダウンロード</span><span><img class="mr-4" src="/images/design/dl_icon.png" /></span></a>
          </div>
          <p class="text-center text-sm">※Googleドライブからのダウンロードになります</p>
        </section>
        {/* Amazon商品画像 */}
        <section class="mt-52" id="amazon_goodsimage">
          <div class="w-500 mx-auto flex justify-center">
            <div class="flex items-end"><img src="/images/design/amazon_l.png" /></div>
          </div>
          <h2 class="text-center NotoSans font-bold text-3xl mt-8">Amazon商品画像仕様</h2>
          <div class="w-450 h-44 mx-auto bg-blue-200 flex justify-center items-center mt-7">
            <p class="w-64 text-xl">サイズ / 1200px×1200px<br/>解像度 / 72ppi</p>
          </div>
          <div class="mt-12 max-w-1000 w-10/12 mx-auto px-6">
            <p class="text-xl text-center">画像は白抜きサムネイル1枚＋訴求画像5~6枚(動画を入れる場合、5枚)。</p>
          </div>
          <div class="w-96 mx-auto flex justify-center items-center mt-12 text-xl">
            ・基本的に1イメージ＋4~5訴求画像<br />
            ・基本的に画像1枚につき、1訴求<br />
            ・大見出し＋シンプルな説明文
          </div>
          <div class="mt-12 max-w-1000 w-10/12 mx-auto px-6">
            <p class="text-xl text-center text-red-700">注 : #ffffffホワイト部分はは画像なしと判断され、自動トリミングされます。</p>
          </div>
          <div class="flex justify-center mt-14">
            <a class="w-300 h-12 rounded-full flex justify-between items-center bg-green-500 text-white" href="https://www.amazon.co.jp/dp/B08MF5VWLD" target="_blank" ><span class="w-93% NotoSans font-medium text-base text-center">Amazon商品ページ一例へ</span><span><img class="mr-4" src="/images/design/arrow_wh.png" /></span></a>
          </div>
          <div class="mt-16 flex mx-auto justify-center max-w-1000">
            <img class="w-full max-w-1000" src="/images/design/amazon_imagespec.jpg" />
          </div>
        </section>
        {/* Amazon商品紹介コンテンツ */}
        <section class="mt-52" id="amazon_contents">
          <div class="w-500 mx-auto flex justify-center">
            <div class="flex items-end"><img src="/images/design/amazon_l.png" /></div>
          </div>
          <h2 class="text-center NotoSans font-bold text-3xl mt-8">商品紹介コンテンツ</h2>
          <div class="mt-12 w-650 mx-auto px-6">
            <p class="text-xl text-justify">ページ下部でLPのように商品を訴求できる。ページ上部(画像や箇条書きなど)で一通りのウリの訴求を行い、こちらの商品紹介コンテンツでは商品の詳細を説明していく。</p>
          </div>
          <div class="w-450 h-44 mx-auto bg-blue-200 flex justify-center items-center mt-7">
            <p class="w-64 text-xl">サイズ / 1200px×1200px<br/>解像度 / 72ppi</p>
          </div>
          <div class="mt-10 NotoSans text-xl font-bold flex w-950 mx-auto justify-between">
            <span class="pl-4">PC</span>
            <span class="pr-12">SP</span>
          </div>
          <div class="mt-2 flex mx-auto justify-center">
            <img class="block mx-auto" src="/images/design/amazon_imagespec2.jpg" />
          </div>
          <div class="mt-16 flex mx-auto justify-center">
            <img class="block mx-auto" src="/images/design/amazon_imagespec3.jpg" />
          </div>
          <div class="mt-16 flex mx-auto justify-center">
            <div class=" mr-10">
              <img class="block mx-auto" src="/images/design/amazon_imagespec4.jpg" />
              <div class="NotoSans w-300 mx-auto">
                <p class="text-xl">スペック</p>
                <p class=" text-base">
                  サイズ ： 横 105mm × 縦 90mm × 厚さ 10mm 重さ 46g<br/><br/>
                  ・お札入れ × 1 ・小銭入れ × 1 ・カードポケット × 6 ・日本製YKKファスナー採用
                </p>
              </div>
            </div>
            <div><img class="block mx-auto" src="/images/design/amazon_imagespec5.jpg" /></div>
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