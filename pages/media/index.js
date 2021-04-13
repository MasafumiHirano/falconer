import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"

import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import InstagramEmbed from 'react-instagram-embed';

import Layout from '../../components/layout'

export default function Media({medias}) {
  const appID = '3888350634542239';
  const clientToken = '07d4a459f6430871cf1590f093d3069d';
  const clientAccessToken = `${appID}|${clientToken}`

  const instagramPosts = medias.filter((media) => (
    media.medianame[0] == 'instagram'
  ))
  //instagramの投稿は、4つとりだす。
  const visibleInstagramPosts = instagramPosts.slice(0,4)

  const youtubePosts = medias.filter((media) => (
    media.medianame[0] == 'youtube'
  ))
  //youtubeの投稿は、5つとりだす。
  const visibleYoutubePosts = youtubePosts.slice(0,5)

  return (
    <div>
      <Head>
        <title>メディア</title>
        <link rel="icon" href="/falconer_favicons.png" />
      </Head>
      <Layout>
      <main>
        <div style={{backgroundColor: "#786b58"}}>
          <div class="mx-auto py-6 lg:py-12 lg:w-1100">
            {/*見出し部分*/}
              <div class="border-b-2 border-solid border-white mb-6 lg:mb-12">
                <div class="relative">
                  <h1 class="Osaka text-center font-bold text-white text-3xl lg:text-3xl py-2 ml-3">メディア</h1>
                  <div class="absolute right-0 top-4 lg:top-0">
                    <div class="flex pr-2 w-20 lg:w-full">
                      <div class="">
                        <a href="https://www.instagram.com/masaki.s_japan/" target="_blank" >
                          <Image src="/images/media/instagram_white_bg_bk.jpg" width={36} height={36} alt="instagaram_social" />
                        </a>
                      </div>
                      <a href=""></a>
                      <div class="">
                        <a href="https://www.youtube.com/channel/UCynRnKX32Zr8Hh_Rst6Mrug" target="_blank">
                          <Image src="/images/media/youtube_white_bg_bk.jpg" width={36} height={36} alt="instagaram_social" />
                        </a>
                      </div>
                      <div class="">
                        <a href="https://twitter.com/Nanami_Bondjam" target="_blank">
                          <Image src="/images/media/twitter_white_bg_bk.jpg" width={36} height={36} alt="instagaram_social" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            {/*見出し部分 終了*/}

            {/*内容*/}
            <div class="bg-white border-2 border-solid border-black">
              <section class="px-4 lg:px-6 py-6 lg:py-16">{/*RadioSection*/}
                <h1 class="text-center helvetica font-semibold text-2xl mb-2 lg:text-5xl lg:mb-6 leading-5 lg:leading-normal">RADIO</h1>
                <div class="mb-2 lg:mb-6">
                  <a href="https://www.youtube.com/channel/UCynRnKX32Zr8Hh_Rst6Mrug" target="_blank">
                  <Image src="/images/media/bond_jam.jpg" alt="radio-image" width={1100} height={227} />
                  </a>
                </div>
                <div class="mx-auto w-5/6 chuGo lg:tracking-wide">
                  <p class="text-sm lg:text-xl mb-4 font-bold Osaka ">MC: NANAMI 清水真輝</p>
                  <div class="text-sm lg:text-lg">
                    <p class="leading-6 lg:leading-normal mb-4 Osaka">BACHIC ASHLEY がプロデュースする日常を最高の気分で過ごすために毎日を日々力強く生きているアーティスト､クリエイター､経営者など､各界の最先端で活躍する方々をゲストとしてお招きし､その強さの秘訣とこだわりの人生についてお聞きします。</p>
                  </div>
                  <p class="text-xs lg:text-md Osaka">FM 愛知　毎週20：00～20：30　OA</p>
                </div>
              </section>{/*RadioSectionEnd*/}

              <section class="py-6 lg:py-16 px-4 lg:px-6" style={{ backgroundColor: "#cecece" }} >{/*YoutubeSection*/}
                <div class="lg:flex lg:justify-center mb-2 lg:mb-6">
                  <h1 class="helvetica font-semibold text-center text-2xl lg:text-5xl lg:mr-6">YouTube Channel</h1>
                  <div class="pt-2 mx-auto lg:mx-0 w-1/4 lg:pt-0 lg:w-auto flex justify-center items-center">
                    <Image className="block" src="/images/media/youtube-full-logo_lg.png" width={150} height={34} alt="youtubelogo"/>
                  </div>
                </div>
                <div class="px-6 py-6 mb-4 bg-black" style={{ backgroundColor: "#221916" }}>
                  <div class="grid grid-rows-3 grid-cols-1 lg:grid-rows-2 lg:grid-cols-4 gap-4">
                    <div class="h-48 md:h-500 lg:h-auto lg:col-span-2 lg:row-span-2">
                      <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${visibleYoutubePosts[0].postid}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div class="">
                      <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${visibleYoutubePosts[1].postid}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div class="">
                      <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${visibleYoutubePosts[2].postid}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div class="hidden lg:block">
                      <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${visibleYoutubePosts[3].postid}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div class="hidden lg:block">
                      <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${visibleYoutubePosts[4].postid}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                  </div>
                </div>
                <div class="mx-auto w-5/6 chuGo lg:tracking-wide text-sm lg:text-lg">
                  <p class="leading-6 lg:leading-normal Osaka">BACHIC ASHLEYがプロデュースするラジオ番組「Bond Jam」のアーカイブからブランド､企業情報まで株式会社ファルコナーの魅力をYouTubeコンテンツで発信します。</p>
                </div>
              </section>{/*YoutubeSectionEnd*/}

              <section class="px-4 lg:px-6 py-6 lg:py-16">{/*SNSSection*/}
                <h1 class="text-center helvetica font-semibold text-2xl mb-2 lg:text-5xl lg:mb-6">SNS</h1>
                <div class="">
                  <div class="block mt-2 lg:mt-6">
                    <div class="flex justify-center">
                      <Image class="block" src="/images/media/instagram_logo_1500.png" width={40} height={40} alt="instagram_logo" />
                    </div>
                    <div class="grid grid-cols-2 lg:grid-cols-3 gap-1 lg:gap-4">
                      <div class="mt-2 lg:mt-6 text-center ">
                        <InstagramEmbed
                          url={`https://www.instagram.com/p/${visibleInstagramPosts[0].postid}/`}
                          clientAccessToken={clientAccessToken}
                          maxWidth={360}
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
                      <div class="mt-2 lg:mt-6 text-center">
                        <InstagramEmbed
                          url={`https://www.instagram.com/p/${visibleInstagramPosts[1].postid}/`}
                          clientAccessToken={clientAccessToken}
                          maxWidth={360}
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
                      <div class="mt-2 lg:mt-6 text-center">
                        <InstagramEmbed
                          url={`https://www.instagram.com/p/${visibleInstagramPosts[2].postid}/`}
                          clientAccessToken={clientAccessToken}
                          maxWidth={360}
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
                      <div class="mt-2 lg:mt-6 text-center lg:hidden">
                        <InstagramEmbed
                          url={`https://www.instagram.com/p/${visibleInstagramPosts[3].postid}/`}
                          clientAccessToken={clientAccessToken}
                          maxWidth={360}
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
                    </div>

                    {/*
                    <div class="mt-12 text-center">
                      <p>公式インスタグラムはこちら</p>
                        <a href="https://www.instagram.com/masaki.s_japan/" target="_blank">
                          <Image src="/images/media/instagram_banner.png" width={300} height={90} alt="instagram-banner"/>
                        </a>
                    </div>*/}
                  </div>

                  <div class="block mt-6 lg:mt-16">
                    <div class="flex justify-center">
                      <Image class="block" src="/images/media/Twitter_Logo_WhiteOnBlue_400.png" width={40} height={40} alt="twitter_logo" />
                    </div>
                    <div class="mt-2 lg:mt-6 lg:w-450">
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
      medias: data.contents
    },
  };
}