import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import Layout from '../../components/layout'

export default function Company({ medias }) {
  const youtubePosts = medias.filter((media) => (
    media.medianame[0] == 'youtube'
  ))
  //youtubeの投稿は、4つとりだす。
  const visibleYoutubePosts = youtubePosts.slice(0, 4)

  return (
    <div>
      <Head>
        <title>企業情報</title>
        <link rel="icon" href="/falconer_favicons.png" />
      </Head>
      <Layout>
        <main class="font-sans">
          <div class="mx-auto py-6 text-center">
            <h1 class="futura-md text-white text-center text-3xl lg:text-4xl company_title flex flex-col justify-center items-center h-405">FALCONER Info<p class="NotoSans-L text-base">会社概要</p></h1>
            <div class="mt-10 md:mt-32 lg:flex lg:justify-center">
              <p class="px-3 text-xl lg:text-3xl lg:mb-6 text-left md:text-center tracking-widest">今日よりも、もっと幸せな明日を。</p>
            </div>
            <div class="mt-10 lg:flex lg:justify-center">
              <p class="px-3 text-base md:text-lg text-left md:text-center lg:mb-2">
                高品質かつワクワクする商品を生み出し、お客様の生活をより豊かで幸せなものにします。<br /><br />
                社員やお取引企業様はもちろん、商品がお客様のお手元に届くまでに関わる全ての人々や世界の幸せと発展に貢献します。<br /><br />
                地球環境の保全を心がけ、永続的な発展をするために無駄のない流通・運営を行い、毎日の成長を続けます。
              </p>
            </div>
          </div>
          {/* 事業ビジュアル */}
          <div class="mx-auto mt-20 mb-20 lg:w-1280">
            <div class="flex flex-wrap md:flex-nowrap justify-around md:justify-between mb-6">
              <div class="relative w-49% md:w-300 lg:h-400">
                <Link href="/company/message"><a>
                  <Image src="/images/company/bussiness_2.png" width={300} height={400} />
                </a></Link>
              </div>
              <div class="relative w-49% md:w-300 lg:h-400">
                <Link href="/company/strength"><a>
                  <Image src="/images/company/bussiness_4.png" width={300} height={400} />
                </a></Link>
              </div>
              <div class="relative w-49% md:w-300 lg:h-400">
                <Link href="/company/overview"><a class="block">
                  <Image src="/images/company/bussiness_1.png" width={300} height={400} />
                </a></Link>
              </div>
              <div class="relative w-49% md:w-300 lg:h-400">
                <Link href="/company/statement"><a>
                  <Image src="/images/company/bussiness_3.png" width={300} height={400} />
                </a></Link>
              </div>
            </div>

            {/* 会社概要：本社 */}
            <h2 class="text-center mt-20 lg:w-full lg:border-b lg:border-black">会社概要</h2>
            <div class="px-4 mt-10 max-w-4xl mx-auto">
              <p class="mt-8 pb-2 text-center border-b">国内拠点・本社</p>
              <p class="mt-4 pb-2 border-b text-sm">会社名<span class="block text-base">株式会社FALCONER</span></p>
              <p class="mt-4 pb-2 border-b text-sm">代表取締役<span class="block text-base">清水 真輝</span></p>
              <p class="mt-4 pb-2 border-b text-sm">設立<span class="block text-base">2016年7月</span></p>
              <p class="mt-4 pb-2 border-b text-sm">資本金<span class="block text-base">10,000,000円</span></p>
              <p class="mt-4 pb-2 border-b text-sm">事業内容<span class="block text-base">レザー小物及び雑貨の各種製の製造販売<br />インターネットによる販売</span></p>
              <p class="mt-4 pb-2 border-b text-sm">許認可<span class="block text-base">一般建築業許可　古物商許可<br />愛知県公安委員会 第543311801500号</span></p>
              <p class="mt-4 pb-2 border-b text-sm">所在地<span class="block text-base">〒465-0068<br />愛知県名古屋市名東区牧の里三丁目104番地の2</span></p>
              <p class="mt-4 pb-2 border-b text-sm">Tel / Fax<span class="block text-base">052-734-7065</span></p>
              <p class="mt-4 pb-2 border-b text-sm">取引銀行<span class="block text-base">三十三銀行／三菱東京UFJ銀行／大垣共立銀行</span></p>
              <p class="mt-4 pb-2 border-b text-sm">顧問弁護士<span class="block text-base">横木増井法律事務所</span></p>
              <p class="mt-4 pb-2 border-b text-sm">顧問弁理士<span class="block text-base">かすがい特許事務所</span></p>
            </div>

            {/* 本社所在地 */}
            <div class="mt-10 lg:mt-20 w-full"><iframe class="w-full h-300 md:h-600" src="https://www.google.com/maps/d/embed?mid=1hgrz4Opidj5i6qeGCu4nldFqN8HtnfkX"></iframe></div>

            {/* 会社概要：ロジスティクス */}
            <div class="px-4 mt-20 max-w-4xl mx-auto">
              <p class="mt-8 pb-2 text-center border-b">国内拠点・ロジスティック</p>
              <p class="mt-4 pb-2 border-b text-sm">拠点名<span class="block text-base">株式会社FALCONER　第一配送センター</span></p>
              <p class="mt-4 pb-2 border-b text-sm">所在地<span class="block text-base">〒465-0068<br />愛知県名古屋市名東区牧の里二丁目1810番地</span></p>
              <p class="mt-20 border-b text-sm">拠点名<span class="block text-base">株式会社FALCONER　第一物流倉庫</span></p>
              <p class="mt-4 pb-2 border-b text-sm">所在地<span class="block text-base">〒465-0068<br />愛知県名古屋市名東区牧の里二丁目1809番地</span></p>
              <p class="mt-20 pb-2 text-center border-b">Hong Kong</p>
              <p class="mt-4 pb-2 border-b text-sm">Company<span class="block text-base">FALCONER HK LIMITED</span></p>
              <p class="mt-4 pb-2 border-b text-sm">Address<span class="block text-base">2 Floor, 519 Lockhart Road, Causeway Bay,Hong Kong.</span></p>
            </div>
          </div>
        </main>
      </Layout>
    </div>
  )
}

export const getStaticProps = async () => {
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  };
  const data = await fetch('https://falconer.microcms.io/api/v1/media', key)
    .then(res => res.json())
    .catch(() => null);
  return {
    props: {
      medias: data.contents
    },
  };
}