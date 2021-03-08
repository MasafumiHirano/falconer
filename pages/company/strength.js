import Head from 'next/head'
import Image from 'next/image'

import Layout from '../../components/layout'

export default function Strength() {
  return (
    <div>
      <Head>
        <title>社の強み</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
      <main class="py-12" style={{ backgroundColor: "#ffffff" }}>
        <div class="mx-auto p-12 mb-12 bg-white" style={{ width: "1100px" }}>
          <div><h1 class="text-4xl text-center mb-36">社の強み</h1></div>
          <div class="my-12">
            <div><h1 class="text-4xl text-center font-bold mb-24">最高品質の戦略的モノ作りカンパニー</h1></div>
            <p>メーカー・卸問屋・小売店。全ての機能を併せ持ち、マーケットの求める製品を世界から生産・調達。</p>
            <p>{`　`}</p>
            <p>FALCONERが担うのは製造だけではありません。</p>
            <p>{`　`}</p>
            <p>製造メーカー・卸元・小売店舗の役割まで一括して担い、マーケットからの声をダイレクトに活かしながら、業種にとらわれずスピード感を持ってマーケットの重要に対応する商品を開発する事を可能にしました。
  日々、多様化するニーズに対応するため、素材・カテゴリー・技術・素材の枠組みを超え、複数の軸での商品開発を骨子に戦略的なモノ作りを行って参ります。</p>
            <p>{`　`}</p>
          </div>
          <div class="flex justify-center mb-24">
            <Image class="mx-auto inline-block" src="/images/company/spc_system.png" width={550} height={776} alt="spc_system"/>
          </div>
          <p>お客様へお届けするまでのすべての業務を自社で行い、世界各地を生産拠点・販売拠点にしながら商品ごとの品質・技術管理を行っています。</p>
          <p>{`　`}</p>
          <p>様々な枠組みを超え、不要なこだわりを持たず、幅広い素材を広い角度から制約の無いモノ作りを展開して参ります。</p>
          <p>{`　`}</p>
        </div>
      </main>
      </Layout>
    </div>
  )
}
