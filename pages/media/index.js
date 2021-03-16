import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"

import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import InstagramEmbed from 'react-instagram-embed';

import Layout from '../../components/layout'

export default function Media({videos}) {
  const appID = '3888350634542239';
  const clientToken = '07d4a459f6430871cf1590f093d3069d';
  const clientAccessToken = `${appID}|${clientToken}`

  return (
    <div>
      <Head>
        <title>MEDIA</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
      <main>
        <div style={{backgroundColor: "#786b58"}}>
          <div class="mx-auto pt-12 pb-12" style={{ width: "1100px" }}>
            {/*見出し部分*/}
            <div class="flex pb-2 border-b-2 border-solid border-white mb-12 items-center">
              <div class="w-1/4"><p>{`　`}</p></div>
              <div class="w-2/4">
                <h1 class="text-7xl text-center text-white futura-co">MEDIA</h1>
                </div>
              <div class="w-1/4">
                <div class="float-right mr-4">
                  <div class="inline-block">
                    <a href="https://www.instagram.com/masaki.s_japan/">
                      <Image src="/images/media/instagram_white_bg_bk.jpg" width={36} height={36} alt="instagaram_social" />
                    </a>
                  </div>
                  <div class="inline-block"><Image src="/images/media/facebook_white_bg_bk.jpg" width={36} height={36} alt="instagaram_social" /></div>
                  <div class="inline-block"><Image src="/images/media/youtube_white_bg_bk.jpg" width={36} height={36} alt="instagaram_social" /></div>
                  <div class="inline-block"><Image src="/images/media/twitter_white_bg_bk.jpg" width={36} height={36} alt="instagaram_social" /></div>
                </div>
              </div>
            </div>
            {/*見出し部分 終了*/}
            {/*内容*/}
            <div class="px-6 pt-8 bg-white border-2 border-solid border-black">
              <section class="mb-24">{/*RadioSection*/}
                <h1 class="text-5xl text-center mb-6 helvetica font-semibold" style={{fontSize: "2.5rem"}}>RADIO</h1>
                <div class="mb-6">
                  <Image src="/images/media/bond_jam.jpg" alt="radio-image" width={1100} height={227} />
                </div>
                <div class="mx-auto w-5/6">
                  <p class="chuGo text-xl mb-4 tracking-wide">MC: NANAMI 清水真輝</p>
                  <p class="chuGo text-xl mb-4 tracking-wide">BACHIC ASHLEY がプロデュースする日常を最高の気分で過ごすために毎日を日々、</p>
                  <p class="chuGo text-xl mb-4 tracking-wide">力強く生きているアーティスト、クリエイター、経営者など、各界の最先端で活躍する方々を</p>
                  <p class="chuGo text-xl mb-6 tracking-wide">ゲストとしてお招きし、その強さの秘訣とこだわりの人生についてお聞きします。</p>
                  <p class="chuGo text-lg">FM 愛知　毎週20：00～20：30　OA</p>
                </div>
              </section>{/*RadioSectionEnd*/}
              <section class="mb-24">{/*YoutubeSection*/}
                <div class="flex justify-center mb-6">
                  <div class="flex items-center">
                    <h1 class="text-5xl text-center mr-6 helvetica font-semibold" style={{fontSize: "2.5rem"}}>YouTube Channel</h1>
                    <Image src="/images/media/youtube-full-logo_lg.png" width={150} height={34} alt="youtubelogo"/>
                  </div>
                </div>
                <div class="flex pt-6 pb-6 mb-4" style={{ backgroundColor: "#221916" }}>
                  <div class="w-2/4">
                    <div class="flex justify-center items-center h-full">
                      <iframe width="95%" height="95%" src="https://www.youtube.com/embed/CmNI0Xe8OoU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                  </div>
                  <div class="w-1/4">
                    <div class="flex justify-center items-center h-1/2">
                      <iframe width="90%" height="90%" src="https://www.youtube.com/embed/DwZE9DUvGss" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div class="flex justify-center items-center h-1/2">
                      <iframe width="90%" height="90%" src="https://www.youtube.com/embed/k5oSVWFyOqE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                  </div>
                  <div class="w-1/4">
                    <div class="flex justify-center items-center h-1/2">
                      <iframe width="90%" height="90%" src="https://www.youtube.com/embed/z43qiLQsTjM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div class="flex justify-center items-center h-1/2">
                      <iframe width="90%" height="90%" src="https://www.youtube.com/embed/bY65l5fmnhU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                  </div>
                </div>
                <div class="mx-auto w-5/6">
                  <p class="chuGo text-xl mb-4">BACHIC ASHLEY がプロデュースするラジオ番組「Bond Jam」のアーカイブからブランド、</p>
                  <p class="chuGo text-xl mb-4">企業情報まで株式会社ファルコナーの魅力をYouTube コンテンツで発信します。</p>
                </div>
              </section>{/*YoutubeSectionEnd*/}
              <section class="mb-24">{/*SNSSection*/}
                <h1 class="text-5xl text-center mr-6 helvetica font-semibold mb-16" style={{fontSize: "2.5rem"}}>SNS</h1>
                <div class="flex">
                  <div class="w-1/2 pl-12">
                    <div class="flex justify-start">
                      <Image class="block" src="/images/media/instagram_logo_1500.png" width={40} height={40} alt="twitter_logo" />
                    </div>
                    <div class="mt-6">
                      <InstagramEmbed
                        url='https://www.instagram.com/p/CMO-EpVgQDh/'
                        clientAccessToken={clientAccessToken}
                        maxWidth={400}
                        hideCaption={true}
                        containerTagName='div'
                        protocol=''
                        injectScript
                        onLoading={() => {}}
                        onSuccess={() => {}}
                        onAfterRender={() => {}}
                        onFailure={() => {}}
                      />
                    </div>
                    <div class="mt-12">
                      <p>公式インスタグラムはこちら</p>
                        <a href="https://www.instagram.com/masaki.s_japan/" target="_blank">
                          <Image src="/images/media/instagram_banner.png" width={400} height={120} alt="instagram-banner"/>
                        </a>
                    </div>
                  </div>
                  <div class="w-1/2 pr-12">
                    <div class="flex justify-end">
                      <Image class="block" src="/images/media/Twitter_Logo_WhiteOnBlue_400.png" width={40} height={40} alt="twitter_logo" />
                    </div>
                    <div class="flex justify-end mt-6">
                      <div style={{ width: "400px" }}>
                        <TwitterTimelineEmbed
                          sourceType="profile"
                          screenName="Nanami_Bondjam"
                          options={{height: 800}}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>{/*SNSSectionEnd*/}
            </div>
          </div>{/*コンテナー終了*/}
        </div>
      </main>
      </Layout>
    </div>
  )
}

export const getStaticProps = async() => {
  const key = {
    headers: {'X-API-KEY': process.env.API_KEY},
  };
  const data = await fetch('https://falconer.microcms.io/api/v1/media', key)
    .then(res => res.json())
    .catch(() => null);
  return {
    props: {
      videos: data.contents,
    },
  };
}