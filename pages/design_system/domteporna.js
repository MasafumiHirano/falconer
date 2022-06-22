
import Layout from '../../components/layout'
import LeftMenu from '../../components/design_leftmenu'
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function productspec() {

  return (
    <div>

      {/* サイドメニュー */}
      <LeftMenu />
      {/* 本文 */}
      <main class="NotoSans pl-36 lg:pl-60 ">
        <section>
          <h1 class="text-center mt-20 mb-4 flex w-450 mx-auto justify-between items-start">
            <div class="flex items-center"><img src="/images/design/domteporna.png" alt="DomTeporna" class="block mx-auto my-auto h-10" /></div>
            <div><img src="/images/design/domtepornaitaly.png" alt="DomTepornaItaly" class="block mx-auto h-12" /></div>
          </h1>
          <h2 class="text-center NotoSans font-bold text-3xl mt-8">ブランドIV</h2>
          <div class="mt-32 max-w-1100 w-10/12 mx-auto">
            <h2 class="text-center NotoSans font-bold text-3xl mt-2">コンセプト</h2>
            <p class="mt-3 text-xl font-normal max-w-1100">
              本質を知る、大人へ。<br />
              世の中の風潮に惑わされずに物事の本質を見抜きたい。無駄に見栄を張るのではなく、しっかりとした良い物を持ちたい。<br /><br />
              外見を整え、内面を磨き、他人を考えた立ち振る舞いをする。「DomTeporna / ドンテポーナ」はそんな本質を知る大人に向けたこだわりのレザーブランドです。
            </p>
          </div>
          <h2 class="text-center NotoSans font-bold text-3xl mt-36">イメージ</h2>
          <div class="max-w-1000 w-10/12 mx-auto px-6">
            <p class="mt-3 text-xl font-normal max-w-1100">
              大人の魅力 / 大人の男性 / かっこいい女性 / 渋い / クール / 低いトーン / ビジネス / 高コスパ / 先進的かつ伝統的 / 都会 / 夜 / 大人の嗜み / レザー / 本質的 / 挑戦
            </p>
          </div>
        </section>
        <section>
          <div class="mt-10 w-full mx-auto flex flex-wrap justify-center">
            <div class="flex items-center mx-2"><img src="/images/design/domteporna_brand_image1.jpg" /></div>
            <div class="flex items-center mx-2"><img src="/images/design/domteporna_brand_image2.jpg" /></div>
            <div class="flex items-center mx-2"><img src="/images/design/domteporna_brand_image3.jpg" /></div>
            <div class="flex items-center mx-2 mt-4"><img src="/images/design/domteporna_brand_image4.jpg" /></div>
            <div class="flex items-center mx-2 mt-4"><img src="/images/design/domteporna_brand_image5.jpg" /></div>
          </div>
        </section>
        <section class="mt-40">
          <div class="bg-gray-50 flex justify-items-center flex-wrap py-20">
            <h2 class="text-3xl text-center w-full">ロゴ</h2>
            <div class="w-full max-w-1280 flex mt-10 mx-auto">
              <div class="w-1/2 flex justify-center flex-wrap items-center">
                <div class="mr-4"><img src="/images/design/domteporna.png" class="w-64"/></div>
                <div class="ml-4"><img src="/images/design/domtepornaitaly.png"  class="w-64"/></div>
                <h3 class="w-full text-center mt-4">テキストロゴ</h3>
              </div>
              <div class="w-1/2 flex justify-around flex-wrap items-center">
                <div><img src="/images/design/domteporna_logo.png" /></div>
                <h3 class="w-full text-center mt-4">シンボルマーク</h3>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h2 class="text-center NotoSans font-bold text-3xl mt-36">ブランドカラー</h2>
          <div>
            <div class="mx-auto flex w-580 px-5 mt-10 flex-wrap">
              <CopyToClipboard text="000000">
                <div class="colorbox bg-black cursor-pointer">
                  <span></span>
                </div>
              </CopyToClipboard>
              <div class="ml-6 flex flex-col">
                <p class="NotoSans font-bold text-xl">#000000</p>
                <p class="NotoSans font-normal text-xl mt-2">
                  RGB / R255 : G206 : B89<br />
                  CMYK / C0% : M19% : Y76% : K0%<br />
                  Lab / L86 : a9 : b63<br />
                  HSB / H42 : S65 : B100</p>
              </div>
              <p class="text-sm w-full">※カラーチップクリックで<br />クリップボードにコピー</p>
            </div>
            <div class="mx-auto flex w-full mt-10 flex-wrap px-10">
              <div class="flex flex-col">
                <CopyToClipboard text="FFB629">
                  <div class="colorbox cursor-pointer bgdonteporna_gold">
                  </div>
                </CopyToClipboard>
                <p class="text-sm">※カラーチップクリックで<br />クリップボードにコピー</p>
              </div>
              <div class="ml-6 flex flex-col">
                <div class=""><img src="/images/design/domteporna_goldlogo.png" /></div>
                <p class="NotoSans font-bold text-xl">ゴールド / 参考グラデーション</p>
                <div class="flex justify-between mt-2">
                  <p class="NotoSans font-normal text-xl">
                    <span class="font-bold block">#FFB629</span>
                    RGB / R255 : G182 : B41<br />
                    CMYK / C0% : M32% : Y94% : K0%<br />
                    Lab / L80 : a19 : b75<br />
                    HSB / H40 : S84 : B100
                  </p>
                  <p class="NotoSans font-normal text-xl ml-4">
                    <span class="font-bold block">#9B7323</span>
                    RGB / R155 : G115 : B35<br />
                    CMYK / C35% : M50% : Y100% : K15%<br />
                    Lab / L51 : a11 : b48<br />
                    HSB / H40 : S77 : B61
                  </p>
                  <p class="NotoSans font-normal text-xl ml-4">
                    <span class="font-bold block">#EDC984</span>
                    RGB / R237 : G201 : B132<br />
                    CMYK / C7% : M20% : Y56% : K0%<br />
                    Lab / L83 : a7 : b39<br />
                    HSB / H39 : S44 : B93
                  </p>
                  <p class="NotoSans font-normal text-xl ml-4">
                    <span class="font-bold block">#D9AA4E</span>
                    RGB / R217 : G170 : B78<br />
                    CMYK / C15% : M33% : Y82% : K1%<br />
                    Lab / L73 : a11 : b53<br />
                    HSB / H40 : S64 : B85
                  </p>
                </div>
              </div>
            </div>
            <div class="mt-28 flex justify-center">
              <a class="mr-10 w-450 h-24 py-1 rounded-full flex justify-around items-center bg-black text-white" href="https://drive.google.com/file/d/1eFqr00QQz0h_0b3Y5IVTfk6on9D3CTrm/view?usp=sharing" target="blank_" ><img class="ml-8" src="/images/design/zip_icon.png" /><span class="NotoSans font-bold text-xl text-left">PSDカラースウォッチ<br />ダウンロード</span><span><img class="mr-8" src="/images/design/dl_icon.png" /></span></a>
            </div>
            <p class="text-center font-sm">※Googleドライブからのダウンロードになります</p>
          </div>
        </section>
        <section>
          <h2 class="text-center NotoSans font-bold text-3xl mt-28 mb-14">フォント</h2>
          <div class="mt-10 w-768 mx-auto">
            <div class="flex justify-between">
              <p class="NotoSans font-light text-4xl leading-loose">Noto Sans JP</p>
              <p class="NotoSans text-xl pt-4">Noto Sans JP - 日本語・現行使用 / 各ウェイト</p>
            </div>
            <div class="flex justify-end">
              <a class="mr-10 w-250 h-11 rounded-full flex justify-between items-center bg-black text-white" href="https://fonts.google.com/noto/specimen/Noto+Sans+JP?query=noto" target="_blank">
                <span class="w-93% NotoSans font-medium text-base text-center">ダウンロードサイトへ</span>
                <span><img class="h-5 mr-8" src="/images/design/dl_icon.png" /></span>
              </a>
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
