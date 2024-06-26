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
          <div class="mx-auto pb-6 text-center">
            <h1 class="futura-md text-white text-center text-3xl lg:text-4xl company_title flex flex-col justify-center items-center h-405">FALCONER Info<p class="NotoSans-L text-base">ファルコナーについて</p></h1>
            <div class="mt-10 md:mt-32 lg:flex lg:justify-center">
              <p class="text-lg w-full mx-auto md:text-xl NotoSans-L">今日よりも、もっと幸せな明日を。</p>
            </div>
            <div class="mt-10 md:mt-20 lg:flex lg:justify-center">
              <p class="w-90% mx-auto text-base md:text-lg text-justify md:text-center lg:mb-2">
                高品質かつワクワクする商品を生み出し、<br class="hidden lg:block" />お客様の生活をより豊かで幸せなものにします。<br /><br />
                社員やお取引企業様はもちろん、商品がお客様のお手元に<br class="hidden lg:block" />届くまでに関わる全ての人々や世界の幸せと発展に貢献します。<br /><br />
                地球環境の保全を心がけ、永続的な発展をするために<br class="hidden lg:block" />無駄のない流通・運営を行い、毎日の成長を続けます。
              </p>
            </div>
          </div>
          {/* 事業ビジュアル */}
          <div class="mx-auto mt-10 mb-20 w-90% max-w-1000">
            <div class="flex flex-wrap justify-between mb-6">
              <div class="relative">
                <Link legacyBehavior href="/company/statement"><a>
                  <picture>
                    <source media="(min-width: 960px)" srcSet="/images/company/mission.jpg" />
                    <img src="/images/company/mission_sp.jpg" />
                  </picture>
                  <span class="text-white absolute right-1 bottom-2 text-xss lg:right-11 lg:bottom-8 lg:font-bold lg:text-sm ">ミッション</span>
                </a></Link>
              </div>
              <div class="relative w-49% lg:w-auto mt-1 lg:mt-3">
                <Link legacyBehavior href="/company/about_ceo"><a>
                  <picture>
                    <source media="(min-width: 960px)" srcSet="/images/company/ceo_pc.jpg" />
                    <img src="/images/company/ceo_sp.jpg" />
                  </picture>
                  <span class="text-white absolute right-1 bottom-2 text-xss lg:right-11 lg:bottom-8 lg:font-bold lg:text-sm">代表紹介</span>
                </a></Link>
              </div>
              <div class="relative w-49% lg:w-auto mt-1 lg:mt-3">
                <Link legacyBehavior href="/company/strength"><a>
                  <picture>
                    <source media="(min-width: 960px)" srcSet="/images/company/strength.jpg" />
                    <img src="/images/company/strength_sp.jpg" />
                  </picture>
                  <span class="text-white absolute right-1 bottom-2 text-xss lg:right-11 lg:bottom-8 lg:font-bold lg:text-sm">弊社の強み</span>
                </a></Link>
              </div>
            </div>

            {/* 会社概要：本社 */}
            <h2 class="text-center mt-20 mx-auto w-90% md:w-950 lg:border-b lg:border-black text-lg">会社概要</h2>
            <div class="px-4 mt-10 max-w-4xl mx-auto">
              <p class="mt-8 pb-2 text-center border-b text-lg">国内拠点・本社</p>
              <p class="mt-4 pb-2 border-b text-sm flex flex-col lg:flex-row"><span class="w-52">会社名</span><span class="block text-base">株式会社FALCONER</span></p>
              <p class="mt-4 pb-2 border-b text-sm flex flex-col lg:flex-row"><span class="w-52">代表取締役</span><span class="block text-base">清水 真輝</span></p>
              <p class="mt-4 pb-2 border-b text-sm flex flex-col lg:flex-row"><span class="w-52">設立</span><span class="block text-base">2016年7月</span></p>
              <p class="mt-4 pb-2 border-b text-sm flex flex-col lg:flex-row"><span class="w-52">資本金</span><span class="block text-base">10,000,000円</span></p>
              <p class="mt-4 pb-2 border-b text-sm flex flex-col lg:flex-row"><span class="w-52">事業内容</span><span class="block text-base">レザー小物及び雑貨の各種製の製造販売<br />インターネットによる販売</span></p>
              <p class="mt-4 pb-2 border-b text-sm flex flex-col lg:flex-row"><span class="w-52">許認可</span><span class="block text-base"><span class="block lg:inline-block lg:mr-4">古物商許可</span>愛知県公安委員会 第543311801500号</span></p>
              <p class="mt-4 pb-2 border-b text-sm flex flex-col lg:flex-row"><span class="w-52">所在地</span><span class="block text-base">〒465-0068<br />愛知県名古屋市名東区牧の里三丁目104番地の2</span></p>
              <p class="mt-4 pb-2 border-b text-sm flex flex-col lg:flex-row"><span class="w-52">Tel / Fax</span><span class="block text-base">052-734-7065</span></p>
              <p class="mt-4 pb-2 border-b text-sm flex flex-col lg:flex-row"><span class="w-52">取引銀行</span><span class="block text-base">三菱東京UFJ / 三十三銀行 / 瀬戸信用金庫 / 愛知銀行 / 大垣共立銀行(順不同)</span></p>
              <p class="mt-4 pb-2 border-b text-sm flex flex-col lg:flex-row"><span class="w-52">顧問弁護士</span><span class="block text-base">横木増井法律事務所 / 綾野法律事務所</span></p>
              <p class="mt-4 pb-2 border-b text-sm flex flex-col lg:flex-row"><span class="w-52">顧問弁理士</span><span class="block text-base">かすがい特許事務所</span></p>
              <p class="mt-4 pb-2 border-b text-sm flex flex-col lg:flex-row"><span class="w-52">顧問税理士</span><span class="block text-base">堀町税理士事務所 / 税理士法人 山田＆パートナーズ / 青葉監査法人(順不同)</span></p>
            </div>

            {/* 本社所在地 */}
            <div class="mt-10 lg:mt-20 mx-auto md:px-4 max-w-4xl w-90% md:w-950"><iframe class="w-full h-405 md:h-600" src="https://www.google.com/maps/d/embed?mid=1hgrz4Opidj5i6qeGCu4nldFqN8HtnfkX"></iframe></div>

            {/* 会社概要：ロジスティクス */}
            <div class="px-4 mt-10 max-w-4xl mx-auto">
              <p class="mt-8 pb-2 text-center border-b">国内拠点・ロジスティック</p>
              <p class="mt-4 pb-2 border-b text-sm">拠点名<span class="block text-base">株式会社FALCONER　第一配送センター</span></p>
              <p class="mt-4 pb-2 border-b text-sm">所在地<span class="block text-base">〒465-0068<br />愛知県名古屋市名東区牧の里二丁目1810番地</span></p>
              <p class="mt-20 border-b text-sm">拠点名<span class="block text-base">株式会社FALCONER　第一物流倉庫</span></p>
              <p class="mt-4 pb-2 border-b text-sm">所在地<span class="block text-base">〒465-0068<br />愛知県名古屋市名東区牧の里二丁目1809番地</span></p>
              <p class="mt-20 pb-2 text-center border-b">Hong Kong</p>
              <p class="mt-4 pb-2 border-b text-sm">Company<span class="block text-base">FALCONER HK LIMITED</span></p>
              <p class="mt-4 pb-2 border-b text-sm">Address<span class="block text-base">Unit 06,12/F.,Lancashire Centre 361 Shau Kei Wan Road,Hong Kong</span></p>
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