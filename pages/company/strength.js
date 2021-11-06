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
        <main class="-mb-4">
          {/*見出し部分*/}
          <div class="mb-6 lg:mb-12">
            <div class="relative">
              <h1 class="strength_title futura-lt text-white text-center font-bold text-3xl lg:text-3xl h-405 flex items-center justify-center flex-col">Asset<p class="NotoSans-L text-base font-normal">FALCONERの強み</p></h1>
            </div>
          </div>
          {/*見出し部分 終了*/}
          <div class="mt-24 md:mt-44 lg:flex lg:justify-center">
            <p class="px-3 text-sm md:text-lg text-left md:text-center lg:mb-2">
            商品を通して繋がる皆様に、幸せに過ごしていただくため<br />私たちは時代に流されることなく、上質な商品を創り出し<br />レザーグッズ会に革命を起こすべく、挑戦を続けていきます。
            </p>
          </div>
          <div class="border-t border-b md:border-t-2 md:border-b-2 border-gray-600 py-10 w-300 lg:w-49% mx-auto mt-24 md:mt-44">
            <img src="/images/company/ourstrength.png" class="block mx-auto" />
            <div class="NotoSans-L md:w-600 mx-auto mt-4 mb-7 text-sm md:text-lg">
              これまでレザーグッズの世界は完全に二極化されてきました。<br />
              一方は高品質だけれども、普通の人には手が届かないほど高額な有名ブランド。<br />
              もう一方は安価だけれど低品質で、すぐに使い捨てられてしまう製品。<br />
              <br />
              私達は、その状況を打ち壊したいと考えました。<br />
              <br />
              普通の人でも高級ブランドにも負けない品質で、手頃な価格の製品を手にしてもらえないか。<br />
              使い捨てではなく、長く愛用してもらえるようなものが生み出せないか。<br />
              <br />
              このきびしい課題に向き合い、どうすれば品質を高く保ちながら<br />
              コストを抑えることができるのか、そうして培ってきた努力と実現する強みが弊社にはあります。<br />
            </div>
          </div>
          <div class="self_maker w-full md:h-900 mt-24 md:mt-36 flex justify-center items-center flex-wrap md:flex-nowrap px-8 d:px-0 py-12">
            <div class="w-full md:w-500">
              <h3 class="flex items-center text-sm md:text-xl"><img src="/images/company/shape.png" class="mr-1" />中間業者を徹底排除した自社製造</h3>
              <div class="NotoSans-L text-sm md:text-base">
                この業界は流通が複雑に入り組んでいます。他企業ではバイヤー経由での中国生産者との繋がりがあるため消費者の手元に製品が届くまで、いくつもの卸を経由します。<br />
                <br />
                複雑な流通経路にかかる費用はそのまま価格に転嫁されてしまいます。さらに扱う業者によってはブローカーに中抜きされていたり、他社と仕入れが被り、ライバルに情報を漏らされたりと、国内担当者もコントロールができていないことがあります。<br />
                <br />
                これを打破するためには、素材の仕入れから生産まで自社一貫で確立する必要がありました。<br />
                <br />
                当社は社長自身が何年も世界各国を周り、良質な原材料の直接取引先を開拓し商社やブローカーなどの中間マージンを徹底的に排除してきました。そして自ら中国へ訪問し、生産者とのつながりを得たことで高品質でありながら、コストを抑えて製品を作り出すことができるのです。
              </div>
            </div>
            <div class="w-full px-2 md:px-0 md:w-auto mt-16 md:mt-0 md:ml-24">
              <img src="/images/company/spc_system.png"/>
            </div>
          </div>
          <div class="it_management w-full md:h-900 flex justify-center items-center flex-wrap md:flex-nowrap px-8 md:px-0 py-12">
            <div class="w-full md:w-500 text-white order-1 md:order-2">
              <h3 class="flex items-center text-sm md:text-xl"><img src="/images/company/shape.png" class="mr-1" />IT技術を活用した生産管理</h3>
              <div class="NotoSans-L text-sm md:text-base">
                社生産工場では、トヨタ生産方式を導入し、在庫、生産、受注、発注の管理をシステムで一貫して行うことで、不良品やミスを根絶。<br />
                <br />
                また、商品開発は、独自開発の市場調査ツールで、時代背景に即した企画や競合他社との差別化や優位化を行う事でお客様に喜ばれる商品づくりを行なっています。<br />
                <br />
                これらの仕組みにより、卸を通さず、ユーザーの需要を素早く製品に反映させ、高品質な製品を安価に提供することで、2016年の創業から僅か5年でグループ年商10億を超えるまでになりました。
              </div>
            </div>
            <div class="w-full px-2 md:px-0 md:w-auto mt-16 md:mt-0 md:mr-24 order-2 md:order-1">
              <img src="/images/company/it_management.png" />
              <div class="w-full mt-8 text-xl text-center text-white">現在進行形で随時、必要時に必要な仕組みを導入しています。</div>
            </div>
          </div>
          {/* <div class="a mt-24 md:mt-32 mb-40 lg:flex lg:justify-center">
            <p class="NotoSans-L px-3  text-xs md:text-lg text-left md:text-center lg:mb-2">
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
