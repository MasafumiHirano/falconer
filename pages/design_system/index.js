import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import Layout from '../../components/layout'
import LeftMenu from '../../components/design_leftmenu'

export default function design_system({ medias }) {

  return (
    <div>
      <LeftMenu />
      {/* 本文 */}
      <main class="NotoSans pl-36 lg:pl-60 ">
        {/* インデックス */}
        <section>
          <h2 class="text-left futura-md font-bold text-4.5xl mt-20 mb-14 w-56 mx-auto md:leading-none">FALCONER<br />Design<br />Notes</h2>
          <h3 class="text-center text-3xl mt-24">株式会社FALCONERデザインコンセプト＆ガイドライン</h3>
          <div class="mx-auto w-full max-w-1050 mt-52">
            <div class="flex flex-wrap text-center w-20 border-b-2 border-gray-500 mx-auto">
              <p class="Jost text-3xl">INDEX</p>
            </div>
            <div class="mx-auto w-full max-w-650 mt-24">
              <a class="flex flex-wrap" href="/design_system/productpage">
                <div class="flex w-24 items-center justify-around">
                  <img class="w-6 h-6" src="/images/design/rakuten.png" />
                  <img class="w-6 h-6" src="/images/design/amazon.png" />
                  <img class="w-6 h-6" src="/images/design/yahoo.png" />
                </div>
                <div class="w-8/12 flex items-center text-xl pl-16">楽天・Yahoo・Amazon商品ページ</div>
                <div class="w-1/12 flex items-center justify-between"><img src="/images/design/arrow.png" /></div>
              </a>
              <a class="flex flex-wrap mt-16" href="/design_system/lpspec">
                <div class="flex w-24 items-center justify-around">
                  <img class="w-16" src="/images/design/sale_icon.png" />
                </div>
                <div class="w-8/12 flex items-center text-xl pl-16">楽天セールLP</div>
                <div class="w-1/12 flex items-center justify-between"><img src="/images/design/arrow.png" /></div>
              </a>
              <a class="flex flex-wrap mt-16" href="/design_system/productspec">
                <div class="flex w-24 items-center justify-around">
                  <img class="w-12" src="/images/design/allrightleather_logo.png" />
                </div>
                <div class="w-8/12 flex items-center text-xl pl-16">All Right Leather</div>
                <div class="w-1/12 flex items-center justify-between"><img src="/images/design/arrow.png" /></div>
              </a>
              <a class="flex flex-wrap mt-16" href="/design_system/raficaro">
                <div class="flex w-24 items-center justify-around">
                  <img class="w-8" src="/images/design/raficaro_log4.png" />
                </div>
                <div class="w-8/12 flex items-center text-xl pl-16">RafiCaro</div>
                <div class="w-1/12 flex items-center justify-between"><img src="/images/design/arrow.png" /></div>
              </a>
              <a class="flex flex-wrap mt-16" href="/design_system/domteporna">
                <div class="flex w-24 items-center justify-around">
                  <img class="w-8" src="/images/design/domteporna_logo.png" />
                </div>
                <div class="w-8/12 flex items-center text-xl pl-16">DomTeporna</div>
                <div class="w-1/12 flex items-center justify-between"><img src="/images/design/arrow.png" /></div>
              </a>
              <a class="flex flex-wrap mt-16" href="/design_system/material">
                <div class="flex w-24 items-center justify-around">
                  <img class="w-9" src="/images/design/material_icon.png" />
                </div>
                <div class="w-8/12 flex items-center text-xl pl-16">素材集</div>
                <div class="w-1/12 flex items-center justify-between"><img src="/images/design/arrow.png" /></div>
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