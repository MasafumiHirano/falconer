
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
          <h1 class="text-center mt-20 mb-4"><img src="/images/design/raficaro.png" alt="" class="block mx-auto" /></h1>
          <h2 class="text-center NotoSans font-bold text-3xl">ブランドIV</h2>
          <div class="mt-32 max-w-1100 w-10/12 mx-auto px-6">
            <h2 class="text-center NotoSans font-bold text-3xl mt-2">コンセプト</h2>
            <p class="mt-3 text-xl font-normal max-w-1100">
              イタリア語で「洗練する」を意味する「Raffunare」と「かわいい」を意味する「Caro」を合わせた造語「RafiCaro」。<br />
              レザーの本場、イタリアの製法で仕上げられたイタリアンレザーを軸に、日常生活にあたたかみと明るさをプラスする、洗練された「かわいい」アイテムを提案していく。
            </p>
          </div>
          <h2 class="text-center NotoSans font-bold text-3xl mt-36">イメージ</h2>
          <div class="max-w-1000 w-10/12 mx-auto px-6">
            <p class="mt-3 text-xl font-normal max-w-1100">
              エネルギッシュ/あたたかい/イタリアンレザー/かわいい/オーガニック/ナチュラルな魅力/太陽・サニーサイド/イタリア・地中海/昼/奇跡(MIRACOLOから継承)
            </p>
          </div>
        </section>
        <section>
          <div class="mt-10 w-full mx-auto flex flex-wrap justify-center">
            <div class="flex items-center mx-2"><img src="/images/design/raficaro_brand_image1.png" /></div>
            <div class="flex items-center mx-2"><img src="/images/design/raficaro_brand_image2.png" /></div>
            <div class="flex items-center mx-2"><img src="/images/design/raficaro_brand_image3.png" /></div>
            <div class="flex items-center mx-2 mt-4"><img src="/images/design/raficaro_brand_image4.png" /></div>
            <div class="flex items-center mx-2 mt-4"><img src="/images/design/raficaro_brand_image5.png" /></div>
          </div>
        </section>
        <section class="mt-40">
          <div class="bg-rafi-FFF5DE flex justify-items-center flex-wrap py-20">
            <h2 class="text-3xl text-center w-full">ロゴ</h2>
            <div class="w-full max-w-1280 flex mt-10 mx-auto">
              <div class="w-2/4 flex justify-center flex-wrap items-center">
                <div class="mr-4"><img src="/images/design/raficaro_log1.png" /></div>
                <div class="ml-4"><img src="/images/design/raficaro_log2.png" /></div>
                <h3 class="w-full text-center mt-4">テキスト・シンボル混合</h3>
              </div>
              <div class="w-1/4 flex justify-around flex-wrap items-center">
                <div><img src="/images/design/raficaro_log3.png" /></div>
                <h3 class="w-full text-center mt-4">テキストロゴ</h3>
              </div>
              <div class="w-1/4 flex justify-around flex-wrap items-center">
                <div><img src="/images/design/raficaro_log4.png" /></div>
                <h3 class="w-full text-center mt-4">シンボルマーク</h3>
              </div>
            </div>
          </div>
          <div class="mt-48">
            <h3 class="text-center text-3xl font-bold">ロゴテキスト・シンボルレイアウト</h3>
            <img class="mt-20 block mx-auto max-w-1280" src="/images/design/raficaro_log_layout.png" />
          </div>
        </section>
        <section>
          <h2 class="text-center NotoSans font-bold text-3xl mt-36">ブランドカラー</h2>
          <p class="mt-4 text-gray-500 text-base text-center">※カラーチップクリックでクリップボードにコピー</p>
          <h3 class="text-center NotoSans font-bold text-xl mt-14">メインカラー</h3>
          <div>
            <div class="mx-auto flex w-580 px-5 mt-10 flex-wrap">
              <CopyToClipboard text="FFCE59">
                <div class="colorbox bg-rafi-FFCE59 cursor-pointer">
                  <span></span>
                </div>
              </CopyToClipboard>
              <div class="ml-6 flex flex-col">
                <p class="NotoSans font-bold text-xl">#ffce59</p>
                <p class="NotoSans font-normal text-xl mt-2">
                  RGB / R255 : G206 : B89<br />
                  CMYK / C0% : M19% : Y76% : K0%<br />
                  Lab / L86 : a9 : b63<br />
                  HSB / H42 : S65 : B100</p>
              </div>
              <p class="text-sm w-full">※カラーチップクリックで<br/>クリップボードにコピー</p>
            </div>
            <h3 class="text-center NotoSans font-bold text-xl mt-28">サブカラー</h3>
            <div class="flex max-w-1280 px-12 mx-auto flex-wrap justify-around">
              <div class="mt-10 w-250 mx-10">
                <CopyToClipboard text="000000">
                  <div class="colorbox_mini bg-black cursor-pointer"></div>
                </CopyToClipboard>
                <p class="text-xs w-full">※カラーチップクリックで<br/>クリップボードにコピー</p>
                <div class="flex flex-col w-full">
                  <p class="NotoSans font-bold text-xl mt-1">#000000</p>
                  <p class="NotoSans font-normal text-base_s mt-1">
                    RGB / R0 : G0 : B0<br />
                    CMYK / C75% : M68% : Y67% : K90%<br />
                    Lab / L0 : a0 : b0<br />
                    HSB / H0 : S0 : B0
                  </p>
                </div>
              </div>
              <div class="mt-10 w-250 mx-10">
                <CopyToClipboard text="303030">
                  <div class="colorbox_mini bg-rafi-303030 cursor-pointer"></div>
                </CopyToClipboard>
                <p class="text-xs w-full">※カラーチップクリックで<br/>クリップボードにコピー</p>
                <div class="flex flex-col w-full">
                  <p class="NotoSans font-bold text-xl mt-1">#303030</p>
                  <p class="NotoSans font-normal text-base_s mt-1">
                    RGB / R48 : G48 : B48<br />
                    CMYK / C70% : M64% : Y63% : K61%<br />
                    Lab / L20 : a0 : b0<br />
                    HSB / H0 : S0 : B19
                  </p>
                </div>
              </div>
              <div class="mt-10 w-250 mx-10">
                <CopyToClipboard text="5F5F5F">
                  <div class="colorbox_mini bg-rafi-5F5F5F cursor-pointer"></div>
                </CopyToClipboard>
                <p class="text-xs w-full">※カラーチップクリックで<br/>クリップボードにコピー</p>
                <div class="flex flex-col w-full">
                  <p class="NotoSans font-bold text-xl mt-1">#5f5f5f</p>
                  <p class="NotoSans font-normal text-base_s mt-1">
                    RGB / R95 : G95 : B95<br />
                    CMYK / C62% : M53% : Y53% : K24%<br />
                    Lab / L40 : a0 : b0<br />
                    HSB / H0 : S0 : B37
                  </p>
                </div>
              </div>
              <div class="mt-10 w-250 mx-10">
                <CopyToClipboard text="8F8F8F">
                  <div class="colorbox_mini bg-rafi-8F8F8F cursor-pointer"></div>
                </CopyToClipboard>
                <p class="text-xs w-full">※カラーチップクリックで<br/>クリップボードにコピー</p>
                <div class="flex flex-col w-full">
                  <p class="NotoSans font-bold text-xl mt-1">#8f8f8f</p>
                  <p class="NotoSans font-normal text-base_s mt-1">
                    RGB / R143 : G143 : B143<br />
                    CMYK / C46% : M38% : Y38% : K3%<br />
                    Lab / L59 : a0 : b0<br />
                    HSB / H0 : S0 : B56<br />
                    HSB / H0 : S0 : B0
                  </p>
                </div>
              </div>
              <div class="mt-10 w-250 mx-10">
                <CopyToClipboard text="BEBEBE">
                  <div class="colorbox_mini bg-rafi-BEBEBE cursor-pointer"></div>
                </CopyToClipboard>
                <p class="text-xs w-full">※カラーチップクリックで<br/>クリップボードにコピー</p>
                <div class="flex flex-col w-full">
                  <p class="NotoSans font-bold text-xl mt-1">#bebebe</p>
                  <p class="NotoSans font-normal text-base_s mt-1">
                    RGB / R190 : G190 : B190<br />
                    CMYK / C26% : M20% : Y21% : K0%<br />
                    Lab / L77 : a0 : b0<br />
                    HSB / H0 : S0 : B75
                  </p>
                </div>
              </div>
              <div class="mt-10 w-250 mx-10">
                <CopyToClipboard text="EDEDED">
                  <div class="colorbox_mini bg-rafi-EDEDED cursor-pointer"></div>
                </CopyToClipboard>
                <p class="text-xs w-full">※カラーチップクリックで<br/>クリップボードにコピー</p>
                <div class="flex flex-col w-full">
                  <p class="NotoSans font-bold text-xl mt-1">#ededed</p>
                  <p class="NotoSans font-normal text-base_s mt-1">
                    RGB / R237 : G237 : B237<br />
                    CMYK / C6% : M4% : Y4% : K0%<br />
                    Lab / L94 : a0 : b0<br />
                    HSB / H0 : S0 : B93
                  </p>
                </div>
              </div>
              <div class="mt-10 w-250 mx-10">
                <CopyToClipboard text="FFE29B">
                  <div class="colorbox_mini bg-rafi-FFE29B cursor-pointer"></div>
                </CopyToClipboard>
                <p class="text-xs w-full">※カラーチップクリックで<br/>クリップボードにコピー</p>
                <div class="flex flex-col w-full">
                  <p class="NotoSans font-bold text-xl mt-1">#ffe29b</p>
                  <p class="NotoSans font-normal text-base_s mt-1">
                    RGB / R255 : G226 : B155<br />
                    CMYK / C1% : M10% : Y46% : K0%<br />
                    Lab / Ｌ91 : a3 : b39<br />
                    HSB / H43 : S39 : B100
                  </p>
                </div>
              </div>
              <div class="mt-10 w-250 mx-10">
                <CopyToClipboard text="FFF5DE">
                  <div class="colorbox_mini bg-rafi-FFF5DE cursor-pointer"></div>
                </CopyToClipboard>
                <p class="text-xs w-full">※カラーチップクリックで<br/>クリップボードにコピー</p>
                <div class="flex flex-col w-full">
                  <p class="NotoSans font-bold text-xl mt-1">#fff5de</p>
                  <p class="NotoSans font-normal text-base_s mt-1">
                    RGB / R255 : G245 : B222<br />
                    CMYK / C0% : M2% : Y13% : K0%<br />
                    Lab / L97 : a1 : b12<br />
                    HSB / H42 : S13 : B100
                  </p>
                </div>
              </div>
              <div class="mt-10 w-250 mx-10">
                <CopyToClipboard text="FFFFFF">
                  <div class="colorbox_mini bg-white cursor-pointer border"></div>
                </CopyToClipboard>
                <p class="text-xs w-full">※カラーチップクリックで<br/>クリップボードにコピー</p>
                <div class="flex flex-col w-full">
                  <p class="NotoSans font-bold text-xl mt-1">#ffffff</p>
                  <p class="NotoSans font-normal text-base_s mt-1">
                    RGB / R255 : G255 : B255<br />
                    CMYK / C0% : M0% : Y0% : K0%<br />
                    Lab / L100 : a0 : b0<br />
                    HSB / H0 : S0 : B100
                  </p>
                </div>
              </div>
            </div>
            <div class="mt-16 flex justify-center">
              <a class="mr-10 w-450 h-24 py-1 rounded-full flex justify-around items-center bg-rafi-FFCE59 text-arl_brown" href="https://drive.google.com/file/d/1MkXDo5dkibICdqrowpZIP5F_RJzukqWA/view?usp=sharing" target="blank_" ><img class="ml-8" src="/images/design/zip_icon2.png" /><span class="NotoSans font-bold text-xl text-left">PSDカラースウォッチ<br />ダウンロード</span><span><img class="mr-8" src="/images/design/dl_icon2.png" /></span></a>
            </div>
            <p class="text-center font-sm">※Googleドライブからのダウンロードになります</p>
          </div>
        </section>
        <section>
          <h2 class="text-center NotoSans font-bold text-3xl mt-20 mb-14">フォント</h2>
          <div class="mt-2 w-768 mx-auto">
            <div class="flex justify-between">
              <p class="Jost font-medium text-4.5xl">Jost*</p>
              <p class="NotoSans text-xl pt-4">Jost*-各ウェイト(元Renner*)</p>
            </div>
            <div class="flex justify-end">
              <a class="mr-10 w-250 h-11 rounded-full flex justify-between items-center bg-rafi-FFCE59 text-arl_brown" href="https://fonts.google.com/specimen/Jost" target="_blank">
                <span class="w-93% NotoSans font-medium text-base text-center">ダウンロードサイトへ</span>
                <span><img class="h-5 mr-8" src="/images/design/dl_icon2.png" /></span>
              </a>
            </div>
          </div>
          <div class="mt-20 w-768 mx-auto">
            <div class="flex justify-between">
              <p class="NotoSans font-light text-4xl leading-loose">Noto Sans JP</p>
              <p class="NotoSans text-xl pt-4">Noto Sans JP - 日本語・現行使用 / 各ウェイト</p>
            </div>
            <div class="flex justify-end">
              <a class="mr-10 w-250 h-11 rounded-full flex justify-between items-center bg-rafi-FFCE59 text-arl_brown" href="https://fonts.google.com/noto/specimen/Noto+Sans+JP?query=noto" target="_blank">
                <span class="w-93% NotoSans font-medium text-base text-center">ダウンロードサイトへ</span>
                <span><img class="h-5 mr-8" src="/images/design/dl_icon2.png" /></span>
              </a>
            </div>
          </div>
          <div class="mt-20 w-768 mx-auto text-gray-400">
            <div class="flex justify-between">
              <p class="NotoSans font-light text-4xl">Hiragino Sans</p>
              <p class="NotoSans text-xl pt-4">Hiragino Sans - 日本語・現行使用 / 各ウェイト</p>
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
