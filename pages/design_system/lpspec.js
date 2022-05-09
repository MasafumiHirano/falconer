
import Layout from '../../components/layout'
import LeftMenu from '../../components/design_leftmenu'

export default function lpspec() {
  return (
    <div>
      <LeftMenu />
      {/* 本文 */}
      <main class="NotoSans pl-36 lg:pl-60 ">
        <section>
          <h2 class="text-center NotoSans font-bold text-3xl mt-20 mb-14">LP仕様</h2>
          <div class="w-500 mx-auto flex justify-center">
            <div class="flex items-end"><img src="/images/design/rakuten_l.png" /></div>
          </div>
          <h2 class="text-center NotoSans font-bold text-3xl mt-36">セールLP</h2>
          <div class="mt-16 max-w-1000 w-10/12 mx-auto px-6">
            <p class="mt-3 text-xl font-normal max-w-1050">
              楽天での各々月でのイベントの際に公開するセールを特集したLP。目的としてはスーパーセール、マラソンなどの楽天イベントでお買い物モードになっているお客様をLPへ誘導し、お得な情報をわかりやすく表示・まとめることにより障害なく購入へ案内する旨にある。<br /><br />
              ポイントは大規模に営業をかけないこと。「売るLP」ではなく、「買わない理由がないLP」と言ったイメージ。<br />
              イベント中はお客様が比較的「買うつもり」であり、「ポジティブな状態」であるのでこちらがポジティブな営業をかけて買う気にさせる必要がない。それよりもいかにネガティブな要素を排除して「ポジティブな状態のまま購入までいけるか」を重視する。<br /><br />
              ここで言うネガティブな要素とは主に複雑で分かりづらいこと。情報を過多に入れ込みすぎ、見づらく、欲しい情報を探さないと見つけられないなど。値段で勝負するセール中は、(特に新規客は)当店でなくても安い条件の店はいくらでもあるので分かりづらい場所で買い物を続ける意味は多くない。<br /><br />
              よって、<span class=" text-red-700">シンプルに、見やすく、必要な情報を必要なだけ、必要な場所に入れ込む。</span><br />
              そんなイメージで制作する。
            </p>
          </div>
          <div class="w-450 h-44 mx-auto bg-blue-200 flex justify-center items-center mt-36">
            <p class="w-64 text-xl">レスポンシブ<br />スマートフォン / 375×667<br />PC / 1920×1080</p>
          </div>
          <div class="mt-16 max-w-1000 w-10/12 mx-auto px-6">
            <p class="mt-3 text-xl font-normal max-w-1050">
              トーンマナーはその時のテーマで自由に設定する。ただし基本として、商品ページと同じカラートーンでの構築を推奨。
            </p>
            <h3 class="mt-5 text-xl text-center font-bold max-w-1050">商品ページカラートーンへのリンクURL。</h3>
            <p class="mt-32 text-xl font-normal max-w-1050">
              また、他店舗との差別化としてアニメーションや動き、動作エフェクトなどを加えてページをリッチに仕上げる。店舗コンセプトとして「安っぽさの排除」を念頭に入れる。
            </p>
            <h3 class="mt-5 text-xl text-center font-bold max-w-1050">ページ内エフェクトのサンプル(ページ内リンク)</h3>
          </div>
          <div class="mt-40"><img src="/images/design/effect_sample.png" class="block mx-auto w-1100" /></div>
          <div class="mt-24 max-w-1520 px-20 w-10/12 mx-auto">
            <dl class="flex justify-around flex-row">
              <dt class="w-1/6 font-bold">PocketPengulns</dt>
              <dd class="w-2/6"><a target="blank_" href="https://www.pocketpenguins.com/">https://www.pocketpenguins.com/</a></dd>
              <dt class="w-1/6 font-bold">yogibo</dt>
              <dd class="w-2/6"><a target="blank_" href="https://yogibo.jp/">https://yogibo.jp/</a></dd>
            </dl>
            <dl class="flex justify-around flex-row mt-11">
              <dt class="w-1/6 font-bold">タマチャンショップ</dt>
              <dd class="w-2/6"><a target="blank_" href="https://www.rakuten.ne.jp/gold/kyunan/">https://www.rakuten.ne.jp/gold/kyunan/</a></dd>
              <dt class="w-1/6 font-bold">soulberry</dt>
              <dd class="w-2/6"><a target="blank_" href="https://item.rakuten.co.jp/soulberry/c/0000000175/">https://item.rakuten.co.jp/soulberry/c/0000000175/</a></dd>
            </dl>
            <dl class="flex justify-around flex-row mt-11">
              <dt class="w-1/6 font-bold">神戸レタス</dt>
              <dd class="w-2/6"><a target="blank_" href="https://www.rakuten.ne.jp/gold/mobacaba/">https://www.rakuten.ne.jp/gold/mobacaba/</a></dd>
              <dt class="w-1/6 font-bold">STYLE on BAG</dt>
              <dd class="w-2/6"><a target="blank_" href="https://www.rakuten.ne.jp/gold/style-on-bag/">https://www.rakuten.ne.jp/gold/style-on-bag/</a></dd>
            </dl>
            <dl class="flex justify-around flex-row mt-11">
              <dt class="w-1/6 font-bold">The Garden</dt>
              <dd class="w-2/6"><a target="blank_" href="https://www.rakuten.ne.jp/gold/thegarden/">https://www.rakuten.ne.jp/gold/thegarden/</a></dd>
              <dt class="w-1/6 font-bold">MODERN DECO</dt>
              <dd class="w-2/6"><a target="blank_" href="https://www.rakuten.ne.jp/gold/dondon/">https://www.rakuten.ne.jp/gold/dondon/</a></dd>
            </dl>
          </div>
          <div class="flex w-650 mx-auto justify-around mt-52">
            <img class="w-320" src="/images/design/lpspec_image_pc.jpg" />
            <img class="w-48" src="/images/design/lpspec_image_sp.jpg" />
          </div>
        </section>
        <section>
          <h2 class="text-center NotoSans font-bold text-3xl mt-48 mb-14">フォント</h2>
          <div class="mt-2 w-920 mx-auto">
            <div class="flex justify-between">
              <p class="Jost font-medium text-4.5xl w-320">Jost*</p>
              <p class="NotoSans text-xl w-450 pt-4 text-left">Jost*-各ウェイト(元Renner*)<br /><br />最大90px - 見出しなど。<br />最大45px - 値段。<br />30~45px - 通常文・ボタンなど。</p>
            </div>
            <div class="flex justify-end">
              <a class="mr-10 w-250 h-11 rounded-full flex justify-between items-center bg-green-500 text-white mt-4" href="https://fonts.google.com/specimen/Jost" target="_blank">
                <span class="w-93% NotoSans font-medium text-base text-center">ダウンロードサイトへ</span>
                <span><img class="h-5 mr-8" src="/images/design/dl_icon.png" /></span>
              </a>
            </div>
            <div class="flex justify-between mt-8">
              <p class="NotoSans font-medium text-4.5xl w-320">Noto Sans JP</p>
              <p class="NotoSans text-xl w-450 pt-4 text-left">Noto Sans JP - 日本語・現行使用 / 各ウェイト<br /><br />最大35px - 見出しなど。<br />10~20px - 通常文・ボタンなど。</p>
            </div>
            <div class="flex justify-end">
              <a class="mr-10 w-250 h-11 rounded-full flex justify-between items-center bg-green-500 text-white mt-4" href="https://fonts.google.com/noto/specimen/Noto+Sans+JP?query=noto" target="_blank">
                <span class="w-93% NotoSans font-medium text-base text-center">ダウンロードサイトへ</span>
                <span><img class="h-5 mr-8" src="/images/design/dl_icon.png" /></span>
              </a>
            </div>
            <div class="flex justify-between mt-8">
              <p class="Oswald font-medium text-4.5xl w-320">Oswald</p>
              <p class="NotoSans text-xl w-450 pt-4 text-left">Oswald - 各ウェイト(英数のみ)<br /><br />最大75px - 見出しなど。<br />最大40px - 値段。<br />25~40px - 通常文・ボタンなど。</p>
            </div>
            <div class="flex justify-end">
              <a class="mr-10 w-250 h-11 rounded-full flex justify-between items-center bg-green-500 text-white mt-4" href="https://fonts.google.com/specimen/Oswald?query=oswald" target="_blank">
                <span class="w-93% NotoSans font-medium text-base text-center">ダウンロードサイトへ</span>
                <span><img class="h-5 mr-8" src="/images/design/dl_icon.png" /></span>
              </a>
            </div>
          </div>
        </section>
        <section>
          <h2 class="text-left w-300 mx-auto NotoSans font-bold text-3xl mt-48 mb-14">セール対象商品リスト<br />商品レイアウト</h2>
          <p class="NotoSans text-xl mt-8 text-center">3カラム、または4カラムで展開。必要であれば割引率のバッジや二重価格の表示も挿入。情報は最低限にとどめる。</p>
          <div class="w-920 mx-auto mt-10 flex justify-between">
            <div class="flex flex-col w-4/12">
              <img src="/images/design/goods_image.jpg" />
              <p class="NotoSans text-sm text-center mt-5">イタリアンレザー 二つ折りコンパクト財布</p>
              <p class="Jost font-light text-4xl text-red-600 text-center mt-8">¥2,086</p>
              <img src="/images/design/goods_button.jpg" class="block mx-auto w-200 mt-4" />
            </div>
            <div class="w-7/12">
              <p class="NotoSans text-xl font-bold">セール対象商品情報基本レイアウト</p>
              <p class="NotoSans text-xl font-normal leading-8">
                ・商品画像(サムネイルなど)<br />
                ・商品タイトル(短く、シンプルに)<br />
                ・割引前の斜線価格<br />
                ・割引後価格<br />
                ・割引率(バッヂなど)<br />
                ・リンクボタン
              </p>
              <p class="NotoSans text-xl font-bold mt-8">リンクボタン</p>
              <p class="NotoSans text-xl font-normal leading-8">
                デフォルト文言 : 詳細はこちら<br />
                その他特別な事例の場合、他の文言可<br />
                例:<br />
                クーポン獲得、20%OFF割引、おすすめ商品、など。
              </p>
            </div>
          </div>
        </section>
        <section>
          <h2 class="text-left w-400 mx-auto NotoSans font-bold text-3xl mt-48 mb-14">カラム別デザイン ex. <img class="inline-block ml-6" src="/images/design/Arrow_down.png" /></h2>
          <p class="w-1100 Jost text-xl mx-auto">1100px</p>
          <img class="block mx-auto" src="/images/design/1100line.png" />
          <div class="w-1100 mx-auto flex">
            <div class="w-500"><img src="/images/design/waa7019_01.png" class="w-full" /></div>
            <div class="w-600 flex flex-wrap justify-around">
              <img src="/images/design/bge7223_01.png" class="w-290" />
              <img src="/images/design/bge7223_02.png" class="w-290" />
              <p class="NotoSans w-full text-sm text-center mt-5">イタリアンレザーの小さい財布</p>
              <p class="Jost font-light w-full text-4xl text-red-600 text-center mt-8"><span class="text-gray-400 line-through text-xl">¥3,480</span><img class="inline-block w-2 ml-3 mr-3" src="/images/design/arrow-right.jpg" />¥3,480<span class="NotoSans font-bold text-0.55rem text-black">送料無料</span></p>
              <img src="/images/design/goods_button.jpg" class="block mx-auto w-200 mt-4" />
            </div>
          </div>
          <div class="w-1100 mx-auto flex mt-16">
            <div class="w-500"><img src="/images/design/waa7019_01.png" class="w-full" /></div>
            <div class="w-600 flex flex-wrap justify-around">
              <img src="/images/design/bge7223_01.png" class="w-290" />
              <img src="/images/design/bge7223_02.png" class="w-290" />
              <p class="NotoSans w-full text-sm text-center mt-5">イタリアンレザーの小さい財布</p>
              <p class="Jost font-light w-full text-4xl text-red-600 text-center mt-8"><span class="text-gray-400 line-through text-xl">¥3,480</span><img class="inline-block w-2 ml-3 mr-3" src="/images/design/arrow-right.jpg" />¥3,480<span class="NotoSans font-bold text-0.55rem text-black">送料無料</span></p>
              <img src="/images/design/goods_button.jpg" class="block mx-auto w-200 mt-4" />
            </div>
          </div>
          <div class="w-1100 mx-auto flex mt-16">
            <div class="w-600 flex flex-wrap justify-around">
              <img src="/images/design/bge7223_01.png" class="w-290" />
              <img src="/images/design/bge7223_02.png" class="w-290" />
              <p class="NotoSans w-full text-sm text-center mt-5">イタリアンレザーの小さい財布</p>
              <p class="Jost font-light w-full text-4xl text-red-600 text-center mt-8"><span class="text-gray-400 line-through text-xl">¥3,480</span><img class="inline-block w-2 ml-3 mr-3" src="/images/design/arrow-right.jpg" />¥3,480<span class="NotoSans font-bold text-0.55rem text-black">送料無料</span></p>
              <img src="/images/design/goods_button.jpg" class="block mx-auto w-200 mt-4" />
            </div>
            <div class="w-500"><img src="/images/design/waa7019_01.png" class="w-full" /></div>
          </div>
          <div class="w-1100 mx-auto flex mt-16">
            <div class="w-600 flex flex-wrap justify-around">
              <img src="/images/design/bge7223_01.png" class="w-290" />
              <img src="/images/design/bge7223_02.png" class="w-290" />
              <p class="NotoSans w-full text-sm text-center mt-5">イタリアンレザーの小さい財布</p>
              <p class="Jost font-light w-full text-4xl text-red-600 text-center mt-8"><span class="text-gray-400 line-through text-xl">¥3,480</span><img class="inline-block w-2 ml-3 mr-3" src="/images/design/arrow-right.jpg" />¥3,480<span class="NotoSans font-bold text-0.55rem text-black">送料無料</span></p>
              <img src="/images/design/goods_button.jpg" class="block mx-auto w-200 mt-4" />
            </div>
            <div class="w-500"><img src="/images/design/waa7019_01.png" class="w-full" /></div>
          </div>
        </section>
        <section>
          <p class="w-1100 Jost text-xl mx-auto mt-56">1100px</p>
          <img class="block mx-auto" src="/images/design/1100line.png" />
          <p class="w-1100 Jost text-xl mx-auto mt-2">300px</p>
          <div class="w-1100 mx-auto"><img class="" src="/images/design/300line.png" /></div>
          <div class="w-1100 mx-auto mt-4 flex justify-between">
            <div class="flex flex-col w-300">
              <img src="/images/design/goods_image.jpg" />
              <p class="NotoSans text-sm text-center mt-5">イタリアンレザー 二つ折りコンパクト財布</p>
              <p class="Jost font-light text-4xl text-red-600 text-center mt-8">¥2,086</p>
              <img src="/images/design/goods_button.jpg" class="block mx-auto w-200 mt-4" />
            </div>
            <div class="flex flex-col w-300">
              <img src="/images/design/goods_image.jpg" />
              <p class="NotoSans text-sm text-center mt-5">イタリアンレザー 二つ折りコンパクト財布</p>
              <p class="Jost font-light text-4xl text-red-600 text-center mt-8">¥2,086</p>
              <img src="/images/design/goods_button.jpg" class="block mx-auto w-200 mt-4" />
            </div>
            <div class="flex flex-col w-300 relative">
              <img src="/images/design/goods_image.jpg" />
              <p class="NotoSans text-sm text-center mt-5">イタリアンレザー 二つ折りコンパクト財布</p>
              <p class="text-gray-400 line-through text-xl text-center mt-8">¥3,480</p>
              <p class="Jost font-light text-4xl text-red-600 text-center">¥2,086</p>
              <img src="/images/design/goods_button.jpg" class="block mx-auto w-200 mt-4" />
              <img src="/images/design/30off.png" class="-top-8 -left-8 absolute" />
            </div>
          </div>
          <p class="w-1100 Jost text-xl mx-auto mt-10">300px</p>
          <div class="w-1100 mx-auto"><img class="" src="/images/design/300line.png" /></div>
          <div class="w-1100 mx-auto mt-4 flex justify-between">
            <div class="flex flex-col w-300">
              <img src="/images/design/goods_image.jpg" />
              <p class="NotoSans text-sm text-center mt-5">イタリアンレザー 二つ折りコンパクト財布</p>
              <p class="Jost font-light text-4xl text-red-600 text-center mt-8">¥2,086</p>
              <img src="/images/design/goods_button2.png" class="block mx-auto w-200 mt-4" />
            </div>
            <div class="flex flex-col w-300">
              <img src="/images/design/goods_image.jpg" />
              <p class="NotoSans text-sm text-center mt-5">イタリアンレザー 二つ折りコンパクト財布</p>
              <p class="Jost font-light text-4xl text-red-600 text-center mt-8">¥2,086</p>
              <img src="/images/design/goods_button2.png" class="block mx-auto w-200 mt-4" />
            </div>
            <div class="flex flex-col w-300 relative">
              <img src="/images/design/goods_image.jpg" />
              <p class="NotoSans text-sm text-center mt-5">イタリアンレザー 二つ折りコンパクト財布</p>
              <p class="text-gray-400 line-through text-xl text-center mt-8">¥3,480</p>
              <p class="Jost font-light text-4xl text-red-600 text-center">¥2,086</p>
              <img src="/images/design/goods_button2.png" class="block mx-auto w-200 mt-4" />
              <img src="/images/design/30off.png" class="-top-8 -left-8 absolute" />
            </div>
          </div>
          <p class="w-1100 Jost text-xl mx-auto mt-10">200px</p>
          <div class="w-1100 mx-auto"><img class="w-200" src="/images/design/200line.png" /></div>
          <div class="w-1100 mx-auto mt-4 flex justify-between">
            <div class="flex flex-col w-200">
              <img src="/images/design/goods_image.jpg" />
              <p class="NotoSans text-sm text-center mt-5">イタリアンレザー 二つ折りコンパクト財布</p>
              <p class="Jost font-light text-4xl text-red-600 text-center mt-8">¥2,086</p>
              <img src="/images/design/goods_button.jpg" class="block mx-auto w-40 mt-4" />
            </div>
            <div class="flex flex-col w-200">
              <img src="/images/design/goods_image.jpg" />
              <p class="NotoSans text-sm text-center mt-5">イタリアンレザー 二つ折りコンパクト財布</p>
              <p class="Jost font-light text-4xl text-red-600 text-center mt-8">¥2,086</p>
              <img src="/images/design/goods_button.jpg" class="block mx-auto w-40 mt-4" />
            </div>
            <div class="flex flex-col w-200">
              <img src="/images/design/goods_image.jpg" />
              <p class="NotoSans text-sm text-center mt-5">イタリアンレザー 二つ折りコンパクト財布</p>
              <p class="Jost font-light text-4xl text-red-600 text-center mt-8">¥2,086</p>
              <img src="/images/design/goods_button.jpg" class="block mx-auto w-40 mt-4" />
            </div>
            <div class="flex flex-col w-200 relative">
              <img src="/images/design/goods_image.jpg" />
              <p class="NotoSans text-sm text-center mt-5">イタリアンレザー 二つ折りコンパクト財布</p>
              <p class="text-gray-400 line-through text-xl text-center mt-8">¥3,480</p>
              <p class="Jost font-light text-4xl text-red-600 text-center">¥2,086</p>
              <img src="/images/design/goods_button.jpg" class="block mx-auto w-40 mt-4" />
              <img src="/images/design/30off.png" class="-top-8 -left-8 absolute" />
            </div>
          </div>
          <p class="w-1100 Jost text-xl mx-auto mt-10">200px</p>
          <div class="w-1100 mx-auto"><img class="w-200" src="/images/design/200line.png" /></div>
          <div class="w-1100 mx-auto mt-4 flex justify-between">
            <div class="flex flex-col w-200">
              <img src="/images/design/goods_image.jpg" />
              <p class="NotoSans text-sm text-center mt-5">イタリアンレザー 二つ折りコンパクト財布</p>
              <p class="Jost font-light text-4xl text-red-600 text-center mt-8">¥2,086</p>
              <img src="/images/design/goods_button2.png" class="block mx-auto w-40 mt-4" />
            </div>
            <div class="flex flex-col w-200">
              <img src="/images/design/goods_image.jpg" />
              <p class="NotoSans text-sm text-center mt-5">イタリアンレザー 二つ折りコンパクト財布</p>
              <p class="Jost font-light text-4xl text-red-600 text-center mt-8">¥2,086</p>
              <img src="/images/design/goods_button2.png" class="block mx-auto w-40 mt-4" />
            </div>
            <div class="flex flex-col w-200">
              <img src="/images/design/goods_image.jpg" />
              <p class="NotoSans text-sm text-center mt-5">イタリアンレザー 二つ折りコンパクト財布</p>
              <p class="Jost font-light text-4xl text-red-600 text-center mt-8">¥2,086</p>
              <img src="/images/design/goods_button2.png" class="block mx-auto w-40 mt-4" />
            </div>
            <div class="flex flex-col w-200 relative">
              <img src="/images/design/goods_image.jpg" />
              <p class="NotoSans text-sm text-center mt-5">イタリアンレザー 二つ折りコンパクト財布</p>
              <p class="text-gray-400 line-through text-xl text-center mt-8">¥3,480</p>
              <p class="Jost font-light text-4xl text-red-600 text-center">¥2,086</p>
              <img src="/images/design/goods_button2.png" class="block mx-auto w-40 mt-4" />
              <img src="/images/design/30off.png" class="-top-8 -left-8 absolute" />
            </div>
          </div>
        </section>
        <section>
          <div class="mt-40">
            <h3 class="text-center font-bold text-3xl">スマートフォン</h3>
            <p class="text-center font-medium text-xl">2カラムで横幅いっぱいに表示が基本。</p>
            <div class="bg_smartphon mx-auto px-20 pt-36 mt-10 flex flex-wrap justify-around">
              <div class="flex flex-col w-52">
                <img src="/images/design/goods_image.jpg" />
                <p class="NotoSans text-sm text-center mt-5">イタリアンレザー 二つ折りコンパクト財布</p>
                <p class="Jost font-light text-4xl text-red-600 text-center mt-8">¥2,086</p>
                <img src="/images/design/goods_button.jpg" class="block mx-auto w-40 mt-4" />
              </div>
              <div class="flex flex-col w-52 relative">
                <img src="/images/design/goods_image.jpg" />
                <p class="NotoSans text-sm text-center mt-5">イタリアンレザー 二つ折りコンパクト財布</p>
                <p class="text-gray-400 line-through text-xl text-center mt-8">¥3,480</p>
                <p class="Jost font-light text-4xl text-red-600 text-center">¥2,086</p>
                <img src="/images/design/goods_button.jpg" class="block mx-auto w-40 mt-4" />
                <img src="/images/design/30off.png" class="-top-8 -left-8 absolute" />
              </div>
              <div class="flex flex-col w-52">
                <img src="/images/design/goods_image.jpg" />
                <p class="NotoSans text-sm text-center mt-5">イタリアンレザー 二つ折りコンパクト財布</p>
                <p class="Jost font-light text-4xl text-red-600 text-center mt-8">¥2,086</p>
                <img src="/images/design/goods_button2.png" class="block mx-auto w-40 mt-4" />
              </div>
              <div class="flex flex-col w-52 relative">
                <img src="/images/design/goods_image.jpg" />
                <p class="NotoSans text-sm text-center mt-5">イタリアンレザー 二つ折りコンパクト財布</p>
                <p class="text-gray-400 line-through text-xl text-center mt-8">¥3,480</p>
                <p class="Jost font-light text-4xl text-red-600 text-center">¥2,086</p>
                <img src="/images/design/goods_button2.png" class="block mx-auto w-40 mt-4" />
                <img src="/images/design/30off.png" class="-top-8 -left-8 absolute" />
              </div>
            </div>
          </div>
          {/* 
          <div class="mt-16 flex justify-center">
            <a class="mr-10 w-450 h-24 py-1 rounded-full flex justify-around items-center bg-green-500 text-white" href="" target="_blank"><img class="ml-4" src="/images/design/zip_icon.png" /><span class="NotoSans font-bold text-xl text-center">サンプルXDダウンロード</span><span><img class="mr-4" src="/images/design/dl_icon.png" /></span></a>
          </div>
          <p class="text-center text-sm">※Googleドライブからのダウンロードになります</p>
          */}
        </section>
        <section>
          <div class="mt-80 text-center">
            <img src="/images/design/lpsample.jpg" class="block mx-auto"/>
          </div>
        </section>
      </main>
      <footer class="bg-black h-36 flex justify-end items-end mt-52">
        <p class="futura-lt text-sm text-right pr-10 pb-4 text-white">Copyright © Falconer Corp. All Rights Reserved.</p>
      </footer>
    </div>
  )
}
