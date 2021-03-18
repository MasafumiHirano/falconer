import Head from 'next/head'
import Link from 'next/link'

import Layout from '../../components/layout'

export default function Statement() {
  return (
    <div>
      <Head>
        <title>VISION</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
      <main>
        <div class="flex justify-center" style={{backgroundColor: "#786b58"}}>
          <div class="mx-auto pt-8 pb-16 px-8 lg:px-40 bg-opacity-75 w-1100">
            <div class="text-white">
              <div>
                <h1 class="text-3xl lg:text-5xl text-center border-b-4 pb-2 futura-co">STATEMENT</h1>
              </div>
              <div class="text-center tracking-widest mt-5 lg:mt-16" >
                <h1 class="text-2xl lg:text-3xl mb-8 font-bold">最高品質の戦略的モノ作りカンパニー</h1>
                <div class="text-base lg:text-xl leading-8">
                  <p>市場の求めているモノ作り。市場を創造するモノ作り。</p>
                  <p>生産から顧客納品まで、全てを自社一括管理。</p>
                  <p>変わり続ける時代と需要に応え続ける企業として存在します。</p>
                </div>
              </div>
            </div>

            <div class="text-white  mt-24">
              <div>
                <h1 class="text-3xl lg:text-5xl text-center border-b-4 pb-2 futura-co">VISION</h1>
              </div>
              <div class="text-center tracking-widest mt-5" >
                <h1 class="text-2xl lg:text-3xl mb-8 font-bold">今日よりも、もっと幸せな明日を。</h1>
                <div class="mb-8 text-base lg:text-xl leading-8">
                  <p>高品質かつワクワクする商品を生み出し、</p>
                  <p>お客様の生活をより豊かで幸せなものにすること。</p>
                </div>
                <div class="mb-8 text-base lg:text-xl leading-8">
                  <p>お客様だけでなく、社会・社員・関係各社、</p>
                  <p>関わる全ての人々の幸せと発展に貢献すること。</p>
                </div>
                <div class="mb-8 text-base lg:text-xl leading-8">
                  <p>地球環境の保全を心がけ、永続的な発展をするために</p>
                  <p>無駄のない流通・運営を行い、毎日の成長を続けること。</p>
                </div>
              </div>
            </div>

            <div class="mt-28">
              <Link href="/company/message"><a>
                <div class="float-right bg-white text-black py-6 px-4">
                  → 代表メッセージはこちら
                </div>
              </a></Link>
            </div>
          </div>
        </div>
      </main>
      </Layout>
    </div>
  )
}