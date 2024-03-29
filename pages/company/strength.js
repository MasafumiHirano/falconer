import Head from 'next/head'
import Image from 'next/image'

import Layout from '../../components/layout'

export default function Strength() {
  return (
    <div>
      <Head>
        <title>社の強み</title>
        <link rel="icon" href="/falconer_favicons.png" />
      </Head>
      <Layout>
        <main class="-mb-4 NotoSans">
          {/*見出し部分*/}
          <div class="mb-6 lg:mb-12">
            <div class="relative">
              <h1 class="strength_title futura-lt text-white text-center font-bold text-3xl lg:text-3xl h-405 flex items-center justify-center flex-col">STRENGTH<p class="NotoSans text-base font-normal">FALCONERの強み</p></h1>
            </div>
          </div>
          {/*見出し部分 終了*/}
          <div class="flex w-11/12 lg:w-768 mx-auto mt-20 lg:mt-24 NotoSans font-normal text-sm lg:text-base">
            <p class="w-32% border-r-2 border-comGOLD text-center"><a href="/company/statement">ミッション</a></p>
            <p class="w-32% border-r-2 text-comGOLD border-comGOLD text-center">弊社の強み</p>
            <p class="w-32% text-center"><a href="/company/about_ceo">代表紹介</a></p>
          </div>
          <div class="mt-16 md:mt-44 lg:flex lg:justify-center">
            <p class="px-8 text-sm lg:text-base text-left md:text-center lg:mb-2 md:leading-10 w-90% lg:w-full m-auto">
              商品を通して繋がる皆様に、幸せに過ごしていただくため私たちは時代に流されることなく、<br class="hidden md:inline-block" />上質な商品を創り出しレザーグッズ界に革命を起こすべく、挑戦を続けていきます。
            </p>
          </div>
          <div class="border-t border-b md:border-t-2 md:border-b-2 border-gray-600 pt-16 pb-10 w-300 lg:w-49% mx-auto mt-16 md:mt-44">
            <img src="/images/company/ourstrength.png" class="block w-30% min-w-250 mx-auto" />
            <div class="NotoSans lg:w-600 mx-auto mt-8 mb-7 text-sm lg:text-base_s lg:leading-normal text-justify">
              これまでレザーグッズの世界は完全に二極化されてきました。一方は高品質だけれども、普通の人には手が届かないほど高額な有名ブランド。もう一方は安価だけれど低品質で、すぐに使い捨てられてしまう製品。<br />
              <br />
              私達は、その状況を打ち壊したいと考えました。<br />
              <br />
              普通の人でも高級ブランドにも負けない品質で、手頃な価格の製品を手にしてもらえないか。使い捨てではなく、長く愛用してもらえるようなものが生み出せないか。<br />
              <br />
              このきびしい課題に向き合い、どうすれば品質を高く保ちながらコストを抑えることができるのか、そうして培ってきた努力と実現する強みが弊社にはあります。<br />
            </div>
          </div>
          <div class="it_management w-full mt-24 md:mt-36 flex justify-center px-8 md:px-0 items-center">
            <div class="text-white w-96% lg:w-720 md:px-3 py-16">
              <h3 class="flex items-center justify-center text-lg md:text-2xl"><img src="/images/company/shape.png" class="mr-1" />中間業者を徹底排除した自社製造</h3>
              <div class="NotoSans text-sm md:text-lg mt-16 text-justify">
                この業界は流通が複雑に入り組んでいます。他企業ではバイヤー経由での中国生産者との繋がりがあるため消費者の手元に製品が届くまで、いくつもの卸を経由します。<br />
                <br />
                複雑な流通経路にかかる費用はそのまま価格に転嫁されてしまいます。さらに扱う業者によってはブローカーに中抜きされていたり、他社と仕入れが被り、ライバルに情報を漏らされたりと、国内担当者もコントロールができていないことがあります。<br />
                <br />
                これを打破するためには、素材の仕入れから生産まで自社一貫で確立する必要がありました。<br />
                <br />
                当社は社長自身が何年も世界各国を周り、良質な原材料の直接取引先を開拓し商社やブローカーなどの中間マージンを徹底的に排除してきました。そして自ら中国へ訪問し、生産者とのつながりを得たことで高品質でありながら、コストを抑えて製品を作り出すことができるのです。
              </div>
            </div>
          </div>
          <picture class="w-full block px-5 md:w-auto my-0 py-20 lg:py-32 bg-gray-100">
            <source media="(min-width: 960px)" srcSet="/images/company/spc_system.png" />
            <img class="block mx-auto" src="/images/company/spc_system_sp.png" />
          </picture>
          <div class="bk_needs w-full flex justify-center items-center flex-wrap md:flex-nowrap px-8 md:px-0 lg:bg-bottom">
            <div class="text-white w-96% md:w-720 md:px-3 py-20">
              <h3 class="flex items-center justify-center text-lg md:text-2xl font-light"><img src="/images/company/shape.png" class="mr-1" />変化するニーズに対応する柔軟性</h3>
              <div class="NotoSans text-sm md:text-lg mt-16 font-extralight text-justify">
              どれだけ高品質であっても、製造者の一方的な想いだけで作られた商品は多くの人を魅了することはできません。市場のトレンドや需要の変化に合った商品を提供し消費者からの支持を得ることが、現代では特に重要です。<br />
                <br />
                当社は自社製造だけでなく、企画から販売までのノウハウを蓄積しており、市場調査ツールを用いて消費者のリアルな声をスピーディに取り入れることで、常に変化するニーズに合わせたモノづくりを追求しています。<br />
                <br />
                また、メーカーとの直取引によって築かれた各業界のプロフェッショナルとのコネクションをフルに活用して、消費者の要望や期待をしっかりと理解した上で、商品の改良や戦略の修正を行っています。<br />
                <br />
                消費者の声から共通の価値観を抽出することで、製造側のこだわりと消費者のニーズを掛け合わることができ、商品の満足度を向上させることができます。
              </div>
            </div>
          </div>
          <picture class="w-full block px-5 md:w-auto my-0 py-20 lg:py-32 bg-gray-100">
            <img class="block mx-auto" src="/images/company/strength_new_pic.png" />
          </picture>
          <div class="self_maker w-full flex justify-center items-center flex-wrap md:flex-nowrap px-8 md:px-0 lg:bg-bottom">
            <div class="w-90% md:w-720 md:px-3 py-20">
              <h3 class="flex items-center justify-center text-lg md:text-2xl font-light"><img src="/images/company/shape.png" class="mr-1" />IT技術を活用した生産管理</h3>
              <div class="NotoSans text-sm md:text-lg mt-16 font-extralight text-justify">
                社生産工場では、トヨタ生産方式を導入し、在庫、生産、受注、発注の管理をシステムで一貫して行うことで、不良品やミスを根絶。<br />
                <br />
                また、商品開発は、独自開発の市場調査ツールで、時代背景に即した企画や競合他社との差別化や優位化を行う事でお客様に喜ばれる商品づくりを行なっています。<br />
                <br />
                これらの仕組みにより、卸を通さず、ユーザーの需要を素早く製品に反映させ、高品質な製品を安価に提供することで、2016年の創業から僅か5年でグループ年商10億を超えるまでになりました。
              </div>
            </div>
          </div>
          <div class="w-full px-5 md:px-0 md:w-auto py-16 bg-gray-100">
            <img src="/images/company/it_management.png" class="block mx-auto pt-28" />
            <div class="w-full mt-8 lg:mt-24 text-base font-medium lg:text-3xl text-center">現在進行形で随時、<br class="lg:hidden" />必要時に必要な仕組みを導入しています。</div>
          </div>
          <div class="pt-12 lg:pt-52 w-96% max-w-1000 mx-auto flex flex-wrap justify-between lg:justify-around">
            <div class="w-49% lg:w-auto"><img src="/images/company/strength_img_1.jpg" /></div>
            <div class="w-49% lg:w-auto"><img src="/images/company/strength_img_2.jpg" /></div>
            <div class="w-49% lg:w-auto mt-2 lg:mt-4"><img src="/images/company/strength_img_3.jpg" /></div>
            <div class="w-49% lg:w-auto mt-2 lg:mt-4"><img src="/images/company/strength_img_4.jpg" /></div>
            <div class="w-49% lg:w-auto mt-2 lg:mt-4"><img src="/images/company/strength_img_5.jpg" /></div>
            <div class="w-49% lg:w-auto mt-2 lg:mt-4"><img src="/images/company/strength_img_6.jpg" /></div>
          </div>
          <div class="flex w-11/12 lg:w-768 mx-auto my-20 lg:my-24 NotoSans font-normal text-sm lg:text-base">
            <p class="w-32% border-r-2 border-comGOLD text-center"><a href="/company/statement">ミッション</a></p>
            <p class="w-32% border-r-2 text-comGOLD border-comGOLD text-center">弊社の強み</p>
            <p class="w-32% text-center"><a href="/company/about_ceo">代表紹介</a></p>
          </div>
          {/* <div class="a mt-24 md:mt-32 mb-40 lg:flex lg:justify-center">
            <p class="NotoSans px-3  text-xs md:text-lg text-left md:text-center lg:mb-2">
              商品を通して繋がる皆様に、幸せに過ごしていただくため<br />
              私たちは時代に流されることなく、上質な商品を創り出し<br />
              レザーグッズ会に革命を起こすべく、挑戦を続けていきます。
            </p>
          </div> */}
        </main>
      </Layout>
    </div>
  )
}
