import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import Layout from '../../components/layout'

export default function Business() {
  return (
    <div>
      <Head>
        <title>事業内容</title>
        <link rel="icon" href="/falconer_favicons.png" />
      </Head>
      <Layout>
        <main class="">
          <div class="mb-6 lg:mb-12">
            <div class="relative">
              <h1 class="brand_title futura-lt text-white text-center font-bold text-3xl lg:text-3xl h-405 md:h-445 flex items-center justify-center flex-col">BRAND<p class="NotoSans-L text-base font-normal">自社ブランド一覧</p></h1>
            </div>
            {/* <div class="w-320 absolute text-center text-3xl text-white inset-1/2 transform -translate-x-1/2">
              <h2 class="futura-md leading-none">Business / Products<br /><span class="text-base NotoSans-L">事業内容</span></h2>
            </div> */}

          </div>
          <section>
            <ul class="flex flex-wrap justify-between mx-auto pt-12 lg:pt-52 px-5 w-full max-w-xl pb-56">
              <li class="w-40 pb-4 lg:w-64 lg:pb-6"><img src="/images/brand/brandlogo_dom.jpg" /></li>
              <li class="w-40 pb-4 lg:w-64 lg:pb-6"><img src="/images/brand/brandlogo_domita.jpg" /></li>
              <li class="w-40 pb-4 lg:w-64 lg:pb-6"><img src="/images/brand/brandlogo_malta.jpg" /></li>
              <li class="w-40 pb-4 lg:w-64 lg:pb-6"><img src="/images/brand/brandlogo_raficaro.jpg" /></li>
              <li class="w-40 lg:w-64"><img src="/images/brand/brandlogo_highfive.jpg" /></li>
              <li class="w-40 lg:w-64"><img src="/images/brand/brandlogo_charis.jpg" /></li>
            </ul>
          </section>
          {/* 事業内容セクション START */}
          <section class="px-5 pb-6 lg:py-12">
            <div class="mx-auto w-full max-w-1050 pb-40">
              <div class="">{/* DomTeporna */}
                <img src="/images/brand/title_dom.jpg" class="block mx-auto w-200 lg:w-max" />
                <hr class="mt-6 lg:mt-7 bg-black" />
              </div>
              <ul class="flex flex-wrap justify-center lg:justify-between">
                <li class="py-10 lg:py-20"><img class="w-max lg:w-56" src="/images/brand/item_dom1.jpg"/></li>
                <li class="pb-10 lg:py-20"><img class="w-max lg:w-56" src="/images/brand/item_dom2.jpg"/></li>
                <li class="pb-10 lg:py-20"><img class="w-max lg:w-56" src="/images/brand/item_dom3.jpg"/></li>
                <li class="pb-10 lg:py-20"><img class="w-max lg:w-56" src="/images/brand/item_dom4.jpg"/></li>
                <li class="pb-10 lg:pb-20"><img class="w-max lg:w-56" src="/images/brand/item_dom5.jpg"/></li>
                <li class="pb-10 lg:pb-20"><img class="w-max lg:w-56" src="/images/brand/item_dom6.jpg"/></li>
                <li class="pb-10 lg:pb-20"><img class="w-max lg:w-56" src="/images/brand/item_dom7.jpg"/></li>
                <li class="pb-10 lg:pb-20"><img class="w-max lg:w-56" src="/images/brand/item_dom8.jpg"/></li>
              </ul>
            </div>
            <div class="mx-auto w-full max-w-1050 pb-40">
              <div class="">{/* DomTepornaItaly */}
                <img src="/images/brand/title_domi.jpg" class="block mx-auto w-200 lg:w-max" />
                <hr class="mt-6 lg:mt-7 bg-black" />
              </div>
              <ul class="flex flex-wrap justify-center lg:justify-between">
                <li class="py-10 lg:py-20"><img class="w-max lg:w-56" src="/images/brand/item_domi1.jpg"/></li>
                <li class="pb-10 lg:py-20"><img class="w-max lg:w-56" src="/images/brand/item_domi2.jpg"/></li>
                <li class="pb-10 lg:py-20"><img class="w-max lg:w-56" src="/images/brand/item_domi3.jpg"/></li>
                <li class="pb-10 lg:py-20"><img class="w-max lg:w-56" src="/images/brand/item_domi4.jpg"/></li>
                <li class="pb-10 lg:pb-20"><img class="w-max lg:w-56" src="/images/brand/item_domi5.jpg"/></li>
                <li class="pb-10 lg:pb-20"><img class="w-max lg:w-56" src="/images/brand/item_domi6.jpg"/></li>
                <li class="pb-10 lg:pb-20"><img class="w-max lg:w-56" src="/images/brand/item_domi7.jpg"/></li>
                <li class="pb-10 lg:pb-20"><img class="w-max lg:w-56" src="/images/brand/item_domi8.jpg"/></li>
              </ul>
            </div>
            <div class="mx-auto w-full max-w-1050 pb-40">
              <div class="">{/* MALTA */}
                <img src="/images/brand/title_malta.jpg" class="block mx-auto w-200 lg:w-max" />
                <hr class="mt-6 lg:mt-7 bg-black" />
              </div>
              <ul class="flex flex-wrap justify-center lg:justify-between">
                <li class="py-10 lg:py-20"><img class="w-max lg:w-56" src="/images/brand/item_dom1.jpg"/></li>
                <li class="pb-10 lg:py-20"><img class="w-max lg:w-56" src="/images/brand/item_dom2.jpg"/></li>
                <li class="pb-10 lg:py-20"><img class="w-max lg:w-56" src="/images/brand/item_dom3.jpg"/></li>
                <li class="pb-10 lg:py-20"><img class="w-max lg:w-56" src="/images/brand/item_dom4.jpg"/></li>
                <li class="pb-10 lg:pb-20"><img class="w-max lg:w-56" src="/images/brand/item_dom5.jpg"/></li>
                <li class="pb-10 lg:pb-20"><img class="w-max lg:w-56" src="/images/brand/item_dom6.jpg"/></li>
                <li class="pb-10 lg:pb-20"><img class="w-max lg:w-56" src="/images/brand/item_dom7.jpg"/></li>
                <li class="pb-10 lg:pb-20"><img class="w-max lg:w-56" src="/images/brand/item_dom8.jpg"/></li>
              </ul>
            </div>
            <div class="mx-auto w-full max-w-1050 pb-40">
              <div class="">{/* RafiCaro */}
                <img src="/images/brand/title_raficaro.jpg" class="block mx-auto w-200 lg:w-max" />
                <hr class="mt-6 lg:mt-7 bg-black" />
              </div>
              <ul class="flex flex-wrap justify-center lg:justify-between">
                <li class="py-10 lg:py-20"><img class="w-max lg:w-56" src="/images/brand/item_rafi1.jpg"/></li>
                <li class="pb-10 lg:py-20"><img class="w-max lg:w-56" src="/images/brand/item_rafi2.jpg"/></li>
                <li class="pb-10 lg:py-20"><img class="w-max lg:w-56" src="/images/brand/item_rafi3.jpg"/></li>
                <li class="pb-10 lg:py-20"><img class="w-max lg:w-56" src="/images/brand/item_rafi4.jpg"/></li>
                <li class="pb-10 lg:pb-20"><img class="w-max lg:w-56" src="/images/brand/item_rafi5.jpg"/></li>
                <li class="pb-10 lg:pb-20"><img class="w-max lg:w-56" src="/images/brand/item_rafi6.jpg"/></li>
                <li class="pb-10 lg:pb-20"><img class="w-max lg:w-56" src="/images/brand/item_rafi7.jpg"/></li>
                <li class="pb-10 lg:pb-20"><img class="w-max lg:w-56" src="/images/brand/item_rafi8.jpg"/></li>
              </ul>
            </div>
            <div class="mx-auto w-full max-w-1050 pb-40">
              <div class="">{/* HIGH FIVE */}
                <img src="/images/brand/title_highfive.jpg" class="block mx-auto w-200 lg:w-max" />
                <hr class="mt-6 lg:mt-7 bg-black" />
              </div>
              <ul class="flex flex-wrap justify-center lg:justify-between">
                <li class="py-10 lg:py-20"><img class="w-max lg:w-56" src="/images/brand/item_hf1.jpg"/></li>
                <li class="pb-10 lg:py-20"><img class="w-max lg:w-56" src="/images/brand/item_hf2.jpg"/></li>
                <li class="pb-10 lg:py-20"><img class="w-max lg:w-56" src="/images/brand/item_hf3.jpg"/></li>
                <li class="pb-10 lg:py-20"><img class="w-max lg:w-56" src="/images/brand/item_hf4.jpg"/></li>
                <li class="pb-10 lg:pb-20"><img class="w-max lg:w-56" src="/images/brand/item_hf5.jpg"/></li>
                <li class="pb-10 lg:pb-20"><img class="w-max lg:w-56" src="/images/brand/item_hf6.jpg"/></li>
                <li class="pb-10 lg:pb-20"><img class="w-max lg:w-56" src="/images/brand/item_hf7.jpg"/></li>
                <li class="pb-10 lg:pb-20"><img class="w-max lg:w-56" src="/images/brand/item_hf8.jpg"/></li>
              </ul>
            </div>
            <div class="mx-auto w-full max-w-1050 pb-40">
              <div class="">{/* Charis */}
                <img src="/images/brand/title_charis.jpg" class="block mx-auto w-200 lg:w-max" />
                <hr class="mt-6 lg:mt-7 bg-black" />
              </div>
              <ul class="flex flex-wrap justify-center lg:justify-between">
                <li class="py-10 lg:py-20"><img class="w-max lg:w-56" src="/images/brand/item_charis1.jpg"/></li>
                <li class="pb-10 lg:py-20"><img class="w-max lg:w-56" src="/images/brand/item_charis2.jpg"/></li>
                <li class="pb-10 lg:py-20"><img class="w-max lg:w-56" src="/images/brand/item_charis3.jpg"/></li>
                <li class="pb-10 lg:py-20"><img class="w-max lg:w-56" src="/images/brand/item_charis4.jpg"/></li>
              </ul>
            </div>
          </section>
          {/* 事業内容セクション END */}
        </main>
      </Layout>
    </div>
  )
}