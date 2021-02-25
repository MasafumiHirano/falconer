import Head from 'next/head'
import Image from 'next/image'

import Layout from '../../components/layout'

export default function Vision() {
  return (
    <div>
      <Head>
        <title>VISION</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
      <main>
          <div class="mx-auto py-2 bg-yellow-900 bg-opacity-75" style={{ width: "1100px" }}>
            <div class="text-white mx-10">
              <div>
                <h1 class="text-4xl text-center border-b-2 mb-6">VISION</h1>
              </div>
              <div class="px-56 text-center" >
                <h1 class="text-2xl mb-8">今日よりも、もっと幸せな明日を。</h1>
                <div class="mb-8">
                  <p>高品質かつワクワクする商品を生み出し、</p>
                  <p>お客様の生活をより豊かで幸せなものにすること。</p>
                </div>
                <div class="mb-8">
                  <p>お客様だけでなく、社会・社員・関係各社、</p>
                  <p>関わる全ての人々の幸せと発展に貢献すること。</p>
                </div>
                <div class="mb-8">
                  <p>地球環境の保全を心がけ、永続的な発展をするために</p>
                  <p>無駄のない流通・運営を行い、毎日の成長を続けること。</p>
                </div>
              </div>
            </div>
            
            <div class="bg-white mt-10 mb-2 mx-10">
              <div><h1 class="text-2xl text-center border-b-2 border-red-600 mx-10 py-6 font-semibold">代表メッセージ</h1></div>
              <div class="text-center flex flex-row my-10 mx-10">
                <div class="w-1/5">
                  <Image src="/images/vision/ceo_pict.png" width={120} height={160} alt="ceo_img"/>
                  <p>代表者 Profile</p>
                </div>
                <div class="w-4/5">
                  <div class="pr-56 text-left font-medium tracking-wider">
                    <p class="mb-6">毎月仕事で様々な国を訪れて解った事があります。日本人の多くはとにかく顔が暗いのです。</p>
                    <p class="mb-6">日本の長い歴史を振り返ってもどれほどの期間が天下太平だったのでしょう。衣食住・衛生・治安的に安定した生活がほとんどの人に与えられてる今なぜこんなにも日本人の心や顔は暗いのでしょうか。</p>
                    <p class="mb-6">現代の日本社会は物質的に豊かな時代になったと言えるでしょう。しかしその一方で、情報や生き方が多様・複雑化する中で何を信念に生きていくかが分からなくなっているのではないでしょうか。</p>
                    <p class="mb-6">望まぬ戦争に巻き込まれた多くの人の血の上に今の平和な日本や世界各国が築かれ、そしてまだ世界では生命の担保さえ出来ない国がたくさんあります。</p>
                    <p class="mb-6">その中で私たちがこうして平和に暮らせるのは、平和で美しい世界、そして日本を作るために生きてきた多くの偉大な先人達のおかげです。</p>
                    <p class="mb-6">このような人達が毎日暗い顔をして生きていたり、我先に利益や自分個人の安定や安全に執着して生きている多くの日本人を見たら、どの様な気持ちでしょうか？</p>
                    <p class="mb-6">私たちはその様な時代を生き抜いた先人達を尊び、感謝をして、後世の人たちが綺麗な地球で平和に暮らしていくために、毎日天命を尽くすしかないのではないでしょうか。</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
      </main>
      </Layout>
    </div>
  )
}
