import Head from 'next/head'
import Image from 'next/image'

import Layout from '../../components/layout'

export default function AboutCeo() {
  return (
    <div>
      <Head>
        <title>代表紹介</title>
        <link rel="icon" href="/falconer_favicons.png" />
      </Head>
      <Layout>
        <main class="-mb-4 NotoSans">
          {/*見出し部分*/}
          <div class="mb-12 md:mb-24">
            <div class="relative">
              <h1 class="company_title futura-lt text-white text-center font-bold text-3xl lg:text-3xl h-405 flex items-center justify-center flex-col">CEO Info<p class="NotoSans text-base font-normal">代表紹介</p></h1>
            </div>
            {/*ナビゲーション*/}
            <div class="flex w-11/12 lg:w-768 mx-auto mt-20 lg:mt-24 NotoSans font-normal text-sm lg:text-base">
              <p class="w-32% border-r-2 border-comGOLD text-center"><a href="/company/statement">ミッション</a></p>
              <p class="w-32% border-r-2 border-comGOLD text-center"><a href="/company/strength">弊社の強み</a></p>
              <p class="w-32% text-comGOLD text-center">代表紹介</p>
            </div>
            <div class="w-90% md:w-1280 mx-auto mt-16 md:mt-28">
              {/*社長紹介*/}
              <section class="flex flex-wrap md:flex-nowrap w-11/12 mx-auto">
                {/*画像ブロック*/}
                <div class="w-full lg:w-4/12">
                  <img src="/images/company/ceo.jpg" />
                </div>
                {/*テキスト*/}
                <div class="w-full md:w-8/12 lg:w-8/12 md:ml-5 mt-9 md:mt-0">
                  {/*経歴*/}
                  <div class="border-b border-gray-600 pb-2">
                    <div class="flex justify-between flex-wrap">
                      <h2 class="NotoSans font-normal w-full md:w-auto text-center md:text-left text-2xl md:text-3xl">清水 真輝<span class="futura-md ml-5 text-xl md:text-2xl text-gray-500">Masaki Shimizu</span></h2>
                    </div>
                  </div>
                  {/*本文*/}
                  <div class="mt-4 lg:mt-1 text-justify NotoSans text-base leading-6 md:leading-9">
                    愛知高校・名古屋学院大学英米科卒業、1987年11月27日生まれ（AB型）<br />
                    肌育生活（現株式会社エスペランサ）（基礎化粧品の企画製造販売）を立ち上げる傍ら<br class="hidden lg:block"/>
                    株式会社ホワイトハウス（輸入車ディーラー）・株式会社ボルテックス（不動産）<br />
                    KDDI株式会社で営業職を経験し、株式会社ファルコナーを創業。<br />
                    KDDI株式会社では入社直後から月販8台の拠点を月販平均400台の販売拠点にし、<br />
                    KDDI本社にて他拠点の社員などへ販売研修等も行う。
                    <a class="block mt-4 md:mt-2" href="/company/message"><div class="pickup_text flex justify-center items-center py-3">代表メッセージ</div></a>
                  </div>
                </div>
              </section>
              {/*Instagrarm*/}
              <section class="mt-20 lg:mt-52">
                <div class="flex flex-col justify-center items-center">
                  <img src="/images/top/media_Instagram.svg" alt="Instagram" class="block mx-auto h-20 lg:h-24" />
                  <span class="NotoSans font-normal text-2xl lg:mt-5">Instagram</span>
                </div>
                <div class="w-full lg:w-920 mt-2 lg:mt-8 mx-auto flex flex-row flex-wrap justify-between">
                  <div class="w-49% lg:w-32% mt-2 lg:mt-4"><img src="/images/company/insta1.jpg" class="w-full" /></div>
                  <div class="w-49% lg:w-32% mt-2 lg:mt-4"><img src="/images/company/insta2.jpg" class="w-full" /></div>
                  <div class="w-49% lg:w-32% mt-2 lg:mt-4"><img src="/images/company/insta3.jpg" class="w-full" /></div>
                  <div class="w-49% lg:w-32% mt-2 lg:mt-4"><img src="/images/company/insta4.jpg" class="w-full" /></div>
                  <div class="w-49% lg:w-32% mt-2 lg:mt-4"><img src="/images/company/insta5.jpg" class="w-full" /></div>
                  <div class="w-49% lg:w-32% mt-2 lg:mt-4"><img src="/images/company/insta6.jpg" class="w-full" /></div>
                </div>
              </section>
            </div>
            {/*Instagrarm*/}
            <section class="mt-20 lg:mt-52 bg-gray-200">
              <div class="w-11/12 mx-auto lg:w-full">
                <div class="text-center pt-10 lg:pt-20">
                  <img src="/images/company/youtube.png" alt="Youtube" class="block mx-auto h-20 lg:h-24" />
                  <p class="text-2xl mt-0 lg:mt-4">Youtube</p>
                </div>
                <div class="w-11/12 md:w-3/4 lg:w-7/12 mt-4 lg:mt-9 mx-auto flex flex-col lg:flex-row pb-20">
                  <div class="lg:w-4/12"><img src="/images/company/dialogue.png" /></div>
                  <div class="lg:ml-9 mt-9 md:mt-0 lg:w-8/12">
                    <div class="border-b border-gray-600 pb-4">
                      <h2 class="NotoSans font-normal w-full md:w-auto text-center md:text-left text-2xl md:text-3xl">喜劇俳優・大村崑さんとの<br class="lg:hidden" />スペシャル対談</h2>
                    </div>
                    {/*本文*/}
                    <div class="mt-7 w-full mx-auto text-justify NotoSans font-normal text-base leading-6 lg:leading-9">
                      株式会社FALCONER代表、清水真輝が会社設立以前から親交のある喜劇俳優の大村崑さんと対談が配信中。芸能界で数々の実績を残してきた崑さんと綴る、「本当の幸せ」とは！？「仕事の流儀」とは！？
                      <a class="block w-full mx-auto mt-8 lg:mt-5 border border-black" href="/media#Dialogue"><div class="flex justify-center items-center py-2 lg:py-3">視聴はコチラから</div></a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/*ナビゲーション*/}
            <div class="flex w-11/12 lg:w-768 mx-auto my-20 lg:my-24 NotoSans font-normal text-sm lg:text-base">
              <p class="w-32% border-r-2 border-comGOLD text-center"><a href="/company/statement">ミッション</a></p>
              <p class="w-32% border-r-2 border-comGOLD text-center"><a href="/company/strength">弊社の強み</a></p>
              <p class="w-32% text-comGOLD text-center">代表紹介</p>
            </div>
          </div>
          {/*見出し部分 終了*/}
        </main>
      </Layout>
    </div>
  )
}