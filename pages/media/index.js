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
          <div class="mx-auto py-12 lg:w-1100">
            {/*見出し部分*/}
              <div class="border-b-2 border-solid border-white mb-4 lg:mb-12">
                <div class="relative">
                  <h1 class="text-center text-white futura-co text-4xl lg:text-7xl pb-2">MEDIA</h1>
                  <div class="absolute right-0 top-3 lg:top-5">
                    <div class="block flex pr-2 w-20 lg:w-full">
                      <div class="">
                        <a href="https://www.instagram.com/masaki.s_japan/">
                          <Image src="/images/media/instagram_white_bg_bk.jpg" width={36} height={36} alt="instagaram_social" />
                        </a>
                      </div>
                      <div class=""><Image src="/images/media/youtube_white_bg_bk.jpg" width={36} height={36} alt="instagaram_social" /></div>
                      <div class=""><Image src="/images/media/twitter_white_bg_bk.jpg" width={36} height={36} alt="instagaram_social" /></div>
                    </div>
                  </div>
                </div>
              </div>
            {/*見出し部分 終了*/}

            {/*内容*/}
            <div class="bg-white border-2 border-solid border-black px-4 pt-4 lg:px-6 lg:pt-8">
              <section class="mb-24">{/*RadioSection*/}
                <h1 class="text-center helvetica font-semibold text-2xl mb-2 lg:text-5xl lg:mb-6">RADIO</h1>
                <div class="mb-2 lg:mb-6">
                  <Image src="/images/media/bond_jam.jpg" alt="radio-image" width={1100} height={227} />
                </div>
                <div class="mx-auto w-5/6 chuGo lg:tracking-wide">
                  <p class="text-sm lg:text-xl mb-4">MC: NANAMI 清水真輝</p>
                  <div class="text-sm lg:text-xl">
                    <p class="leading-6 lg:leading-10 mb-4">BACHIC ASHLEY がプロデュースする日常を最高の気分で過ごすために毎日を日々、力強く生きているアーティスト、クリエイター、経営者など、各界の最先端で活躍する方々をゲストとしてお招きし、その強さの秘訣とこだわりの人生についてお聞きします。</p>
                  </div>
                  <p class="text-xs lg:text-lg">FM 愛知　毎週20：00～20：30　OA</p>
                </div>
              </section>{/*RadioSectionEnd*/}

              <section class="mb-24">{/*YoutubeSection*/}
                <div class="lg:flex justify-center lg:mb-6">
                  <h1 class="helvetica font-semibold text-center text-2xl lg:text-5xl lg:mr-6">YouTube Channel</h1>
                  <div class="pt-4 w-1/4 lg:pt-0 lg:w-auto lg:flex items-center">
                    <Image src="/images/media/youtube-full-logo_lg.png" width={150} height={34} alt="youtubelogo"/>
                  </div>
                </div>
                <div class="px-6 py-6 mb-4" style={{ backgroundColor: "#221916" }}>
                  <div class="w-full grid grid-rows-5 grid-cols-1 lg:grid-rows-2 lg:grid-cols-4 gap-4">
                    <div class="lg:col-span-2 lg:row-span-2">
                      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/CmNI0Xe8OoU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div class="">
                      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/DwZE9DUvGss" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div class="">
                      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/z43qiLQsTjM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div class="">
                      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/k5oSVWFyOqE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div class="">
                      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/bY65l5fmnhU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                  </div>
                </div>
                <div class="mx-auto w-5/6 chuGo lg:tracking-wide text-sm lg:text-xl">
                  <p class="leading-6 lg:leading-10">BACHIC ASHLEYがプロデュースするラジオ番組「Bond Jam」のアーカイブからブランド、企業情報まで株式会社ファルコナーの魅力をYouTubeコンテンツで発信します。</p>
                </div>
              </section>{/*YoutubeSectionEnd*/}

              <section class="mb-24">{/*SNSSection*/}
                <h1 class="text-center helvetica font-semibold text-2xl mb-2 lg:text-5xl lg:mb-6">SNS</h1>
                <div class="lg:flex justify-around">
                  <div class="block">
                    <Image class="block" src="/images/media/instagram_logo_1500.png" width={40} height={40} alt="twitter_logo" />
                    <div class="mt-2 lg:mt-6 text-center">
                      <InstagramEmbed
                        url='https://www.instagram.com/p/CMO-EpVgQDh/'
                        clientAccessToken={clientAccessToken}
                        maxWidth={700}
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
                    <div class="mt-12 text-center">
                      <p>公式インスタグラムはこちら</p>
                        <a href="https://www.instagram.com/masaki.s_japan/" target="_blank">
                          <Image src="/images/media/instagram_banner.png" width={300} height={90} alt="instagram-banner"/>
                        </a>
                    </div>
                  </div>

                  <div class="block mt-6 lg:mt-0">
                    <Image class="block" src="/images/media/Twitter_Logo_WhiteOnBlue_400.png" width={40} height={40} alt="twitter_logo" />
                    <div class="mt-2 lg:mt-6 lg:w-400">
                        <TwitterTimelineEmbed
                          sourceType="profile"
                          screenName="Nanami_Bondjam"
                          options={{height: 800}}
                        />
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