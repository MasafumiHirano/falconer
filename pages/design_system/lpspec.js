
import Layout from '../../components/layout'
import LeftMenu  from '../../components/design_leftmenu'

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
          <div class="mt-40"><img src="/images/design/effect_sample.png" class="block mx-auto" /></div>
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
        </section>
        <section>
          <h2 class="text-center NotoSans font-bold text-3xl mt-36">ロゴ</h2>
          <div class="mt-10 text-xl font-normal max-w-850 mx-auto flex justify-around">
            <div class="flex items-center"><img src="/images/design/allrightleather_logo.png" /></div>
            <div class="flex items-center"><img src="/images/design/allrightleather_logo2.png" /></div>
          </div>
          <p class="mt-10 text-xl font-normal max-w-500 px-10 mx-auto">
            載せたい箇所により2つの形態を選んで使用。
          </p>
        </section>
        <section>
          <h2 class="text-center NotoSans font-bold text-3xl mt-36">ブランドカラー</h2>
          <h3 class="text-center NotoSans font-bold text-xl mt-14">ショップカラー</h3>
          <p class="mt-10 text-xl font-normal max-w-1050 px-10 mx-auto">
            個々のオリジナルページ(商品ページ・コンテンツページ・ブランドページetc.,)を除いた、箱側のデザインでの使用カラー。
          </p>
          <div>
            <div class="mx-auto flex w-580 px-5 mt-20">
              <div class="colorbox bg-arl_brown"></div>
              <div class="ml-6 flex flex-col">
                <p class="NotoSans font-bold text-xl">#60554a</p>
                <p class="NotoSans font-normal text-xl mt-2">
                  RGB / R96 : G85 : B74<br />
                  CMYK / C55% : M56% : Y64% : K33%<br />
                  Lab / L37 : a3 : b8<br />
                  HSB / H30 : S23 : B38</p>
              </div>
            </div>
            <div class="mx-auto flex mt-16 w-580 px-5">
              <div class="colorbox bg-arl_grey"></div>
              <div class="ml-6 flex flex-col">
                <p class="NotoSans font-bold text-xl">#60554a</p>
                <p class="NotoSans font-normal text-xl mt-2">
                  RGB / 237 : G236 : B235<br />
                  CMYK / C6% : M5% : Y5% : K0%<br />
                  Lab / L93 : a0 : b1<br />
                  HSB / H30 : S1 : B93
                </p>
              </div>
            </div>
            <p class="mt-24 text-xl font-normal max-w-850 mx-auto">
              その他、内包するコンテンツや表示内容により、サブカラー、アクセントカラーを各々選定して使用。トーンに関して、後述を参照。
            </p>
            <div class="mt-16 flex justify-center">
              <a class="mr-10 w-450 h-24 py-1 rounded-full flex justify-around items-center bg-arl_grey text-arl_brown" href="https://drive.google.com/file/d/1MkXDo5dkibICdqrowpZIP5F_RJzukqWA/view?usp=sharing" target="blank_" ><img class="ml-8" src="/images/design/zip_icon2.png" /><span class="NotoSans font-bold text-xl text-left">PSDカラースウォッチ<br />ダウンロード</span><span><img class="mr-8" src="/images/design/dl_icon2.png" /></span></a>
            </div>
            <p class="text-center font-sm">※Googleドライブからのダウンロードになります</p>
          </div>
        </section>
        <section class="mt-80">
          <h2 class="text-center NotoSans font-bold text-3xl">カラ―仕様</h2>
          <p class="mt-10 text-xl font-bold max-w-850 px-10 mx-auto">
            全体のトーン・彩度を落として安っぽさの排除
          </p>
          <p class="text-xl font-normal max-w-850 px-10 mx-auto">
            高級感を出すと言うよりは安っぽさを削っていくイメージで全体のトーンを統一。
          </p>
          <div class="mt-24 flex justify-center"><img src="/images/design/color.jpg"/></div>
          <p class="text-xl font-normal max-w-850 px-10 mx-auto mt-6">
          メインカラーは前述の通り。サブカラーやアクセントカラーとしてこれらのトーンを使用する(個々のコンテンツやブランドページなどはそれぞれ規定のカラー設定をしている場合があるため)。
          </p>
        </section>
        <section>
          <h2 class="text-center NotoSans font-bold text-3xl mt-20 mb-14">フォント</h2>
          <h3 class="NotoSans font-bold text-xl mt-36 max-w-850 mx-auto">無機質・中性的・スマートを念頭に。</h3>
          <p class="text-xl font-normal max-w-850 mx-auto">
            文章はフォントウェイト軽めのシンプルなゴシック体、見出しは個性フォントの使用も可。
          </p>
          <h3 class="NotoSans font-bold text-xl mt-32 max-w-850 mx-auto">説明や長尺の文章など、「読ませる」部分に使用。</h3>
          <div class="mt-2 w-768 mx-auto">
            <div class="flex justify-between">
              <p class="NotoSans font-medium text-4.5xl">Noto Sans JP</p>
              <p class="NotoSans text-xl pt-4">Noto Sans JP - 日本語・現行使用 / 各ウェイト</p>
            </div>
            <div class="flex justify-end">
              <a class="mr-10 w-250 h-11 rounded-full flex justify-between items-center bg-arl_grey text-arl_brown" href="https://fonts.google.com/noto/specimen/Noto+Sans+JP?query=noto" target="_blank">
                <span class="w-93% NotoSans font-medium text-base text-center">ダウンロードサイトへ</span>
                <span><img class="h-5 mr-8" src="/images/design/dl_icon2.png" /></span>
              </a>
            </div>
            <div class="mt-14 w-450 mx-auto">
              <div class="flex justify-between">
                <p class="text-4xl w-40 text-right">見出し１</p>
                <p class="flex items-center">フォントサイズ : 30px~40px</p>
              </div>
              <div class="flex justify-between mt-8">
                <p class="text-3xl w-40 text-right">見出し２</p>
                <p class="flex items-center">フォントサイズ : 20px~30px</p>
              </div>
              <div class="flex justify-between mt-8">
                <p class="text-2xl w-40 text-right">見出し３</p>
                <p class="flex items-center">フォントサイズ : 15px~20px</p>
              </div>
              <div class="flex justify-between mt-8">
                <p class="text-xl w-40 text-right">通常分</p>
                <p class="flex items-center">フォントサイズ : 10px~20px</p>
              </div>
            </div>
          </div>
          <h3 class="NotoSans font-bold text-xl mt-52 max-w-850 mx-auto">見出しや、値段など、英数部分でアクセントとして使用。</h3>
          <div class="mt-2 w-768 mx-auto">
            <div class="flex justify-between">
              <p class="Jost font-medium text-4.5xl">Jost*</p>
              <p class="NotoSans text-xl pt-4">Jost - 英数・現行使用 / 各ウェイト</p>
            </div>
            <div class="flex justify-end">
              <a class="mr-10 w-250 h-11 rounded-full flex justify-between items-center bg-arl_grey text-arl_brown" href="https://fonts.google.com/specimen/Jost" target="_blank">
                <span class="w-93% NotoSans font-medium text-base text-center">ダウンロードサイトへ</span>
                <span><img class="h-5 mr-8" src="/images/design/dl_icon2.png" /></span>
              </a>
            </div>
            <div class="mt-14 w-450 mx-auto Jost">
              <div class="flex justify-between">
                <p class="text-4xl w-40 text-right">Heading1</p>
                <p class="flex items-center">Font size : 30px~40px</p>
              </div>
              <div class="flex justify-between mt-8">
                <p class="text-3xl w-40 text-right">Heading2</p>
                <p class="flex items-center">Font size : 20px~30px</p>
              </div>
              <div class="flex justify-between mt-8">
                <p class="text-2xl w-40 text-right">Heading3</p>
                <p class="flex items-center">Font size : 15px~20px</p>
              </div>
              <div class="flex justify-between mt-8">
                <p class="text-xl w-40 text-right">Paragraph</p>
                <p class="flex items-center">Font size : 10px~20px</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer class="bg-black h-36 flex justify-end items-end mt-52">
        <p class="futura-lt text-sm text-right pr-10 pb-4 text-white">Copyright © Falconer Corp. All Rights Reserved.</p>
      </footer>
    </div>
  )
}