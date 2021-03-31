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
      <main class="lg:pb-12" style={{ backgroundColor: "#ffffff" }}>
        <div class="mx-auto  bg-white lg:px-12 mb-8 lg:mb-24 lg:w-1100">
          <h1 class="text-center text-2xl lg:text-4xl my-6 lg:my-12 bg-falGLD text-white py-2">社の強み</h1>
          <div class="px-4 mb-8 lg:mt-12 lg:mb-4">
            <div class='lg:flex lg:justify-center'>
              <h1 class="text-center font-bold text-2xl lg:text-4xl lg:mb-6">最高品質の</h1>
              <h1 class="text-center font-bold text-2xl mb-6 lg:text-4xl lg:mb-12">戦略的モノ作りカンパニー</h1>
            </div>
            <p class="text-sm lg:text-base mb-6">メーカー・卸問屋・小売店。全ての機能を併せ持ち、マーケットの求める製品を世界から生産・調達。</p>
            <p class="text-sm lg:text-base mb-6">FALCONERが担うのは製造だけではありません。</p>
            <p class="text-sm lg:text-base">製造メーカー・卸元・小売店舗の役割まで一括して担い、マーケットからの声をダイレクトに活かしながら、業種にとらわれずスピード感を持ってマーケットの重要に対応する商品を開発する事を可能にしました。日々、多様化するニーズに対応するため、素材・カテゴリー・技術・素材の枠組みを超え、複数の軸での商品開発を骨子に戦略的なモノ作りを行って参ります。</p>
          </div>
          <div class="flex justify-center px-4 mb-12 lg:mb-24">
            <Image class="mx-auto inline-block" src="/images/company/spc_system.png" width={550} height={776} alt="spc_system"/>
          </div>
          <p class="text-sm lg:text-base mb-6 px-4 ">お客様へお届けするまでのすべての業務を自社で行い、世界各地を生産拠点・販売拠点に商品ごとの品質・技術管理を行っています。</p>
          <p class="text-sm lg:text-base px-4 ">様々な枠組みを超え、不要なこだわりを持たず、幅広い素材を広い角度から制約の無いモノ作りを展開して参ります。</p>
        </div>
      </main>
      </Layout>
    </div>
  )
}
