import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"

import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import InstagramEmbed from 'react-instagram-embed';

import Layout from '../../components/layout'
import React, { useState } from 'react'

export default function Media({ medias }) {
  const appID = '3888350634542239';
  const clientToken = '07d4a459f6430871cf1590f093d3069d';
  const clientAccessToken = `${appID}|${clientToken}`

  const instagramPosts = medias.filter((media) => (
    media.medianame[0] == 'instagram'
  ))
  //instagramの投稿は、4つとりだす。
  const visibleInstagramPosts = instagramPosts.slice(0, 4)

  const youtubePosts = medias.filter((media) => (
    media.medianame[0] == 'youtube'
  ))
  //youtubeの投稿は、5つとりだす。
  const visibleYoutubePosts = youtubePosts.slice(0, 5)

  // open という名前の state 変数を宣言、初期値 true をセット
  const [open, setOpen] = useState(true)
  // toggleの関数を宣言
  const toggle = () => setOpen(!open)

  // open という名前の state 変数を宣言、初期値 true をセット
  const [open2, setOpen2] = useState(true)
  // toggleの関数を宣言
  const toggle2 = () => setOpen2(!open2)

  // open という名前の state 変数を宣言、初期値 true をセット
  const [open3, setOpen3] = useState(true)
  // toggleの関数を宣言
  const toggle3 = () => setOpen3(!open3)

  return (
    <div id="page_media">
      <Head>
        <title>メディア</title>
        <link rel="icon" href="/falconer_favicons.png" />
      </Head>
      <Layout>
        <main>
          <div>
            <div class="mx-auto py-6 pt-12 lg:py-6">
              {/*見出し部分*/}
              <div class="mb-6 lg:mb-12">
                <div class="relative">
                  <h1 class="futura-lt text-white text-center font-bold text-3xl lg:text-3xl media_title h-405 flex items-center justify-center flex-col">Media<p class="hiraginoGo text-base">メディア情報</p></h1>
                </div>
              </div>
              {/*見出し部分 終了*/}

              {/*内容*/}
              <div class="bg-white">
                <section class="px-4 lg:px-6 py-6 lg:py-16">{/*RadioSection*/}
                  <h2 class="text-center text-3xl mb-2 lg:text-5xl leading-5 futura-lt">Radio</h2>
                  <p class="text-center text-base mb-2 lg:mb-6 leading-5 hiraginoGo">ラジオ</p>
                  <div class="max-w-max mt-10 mb-2 w-36 mx-auto lg:mb-6">
                    <Image src="/images/media/nanajam_image.jpg" alt="radio-image" width={200} height={137} minWidth={0} minheight={0} />
                  </div>
                </section>{/*RadioSectionEnd*/}

                <section class="pb-6 lg:pb-16 px-4 lg:px-6">{/*YoutubeSection*/}
                  <div class="lg:px-6 lg:py-6 lg:mb-4">
                    <div class="max-w-screen-lg mx-auto flex flex-wrap justify-between lg:grid-rows-2 lg:grid-cols-4 gap-4">
                      <div class="w-full h-200 md:h-640">
                        <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${visibleYoutubePosts[0].postid}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      </div>
                    </div>
                  </div>
                  <div class="mx-auto mt-5 chuGo lg:tracking-wide text-sm lg:text-lg">
                    <a target="blank_" href="https://www.youtube.com/channel/UCynRnKX32Zr8Hh_Rst6Mrug" class="flex items-center justify-center h-16 custom_button text-center mx-auto w-320 lg:w-400">バックナンバー</a>
                  </div>
                  <div class="flex items-center justify-center mx-auto mt-5">
                    <a target="blank_" href="https://open.spotify.com/show/1eZBcJc7lh1hBD6iAVOAnw" class="flex items-center justify-center h-6 text-center w-120 lg:w-100">
                      <Image src="/images/media/spotify.jpg" alt="spotify" width={24} height={24} minWidth={0} minheight={0} />
                      <span class="ml-1">spotify</span>
                    </a>
                    <a target="blank_" href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy80NzI0M2Q5OC9wb2RjYXN0L3Jzcw?sa=X&ved=0CAMQ4aUDahcKEwjYoq2w-ePxAhUAAAAAHQAAAAAQAQ" class="flex items-center justify-center h-6 text-center w-120 lg:w-100">
                      <Image src="/images/media/podcasts.png" alt="podcasts" width={24} height={24} minWidth={0} minheight={0} />
                      <span class="">podcasts</span>
                    </a>
                  </div>
                </section>{/*YoutubeSectionEnd*/}

                {/*大村崑さんSecction_START*/}
                <section class="bg-gray-100">
                  <div class="lg:px-6 lg:py-6 lg:mb-4">
                    <div class="max-w-screen-lg mx-auto flex flex-wrap justify-between pb-20">
                      <div class="w-full my-4">
                        <div class="border-b border-gray-400 mx-auto w-11/12 md:w-650 flex justify-center py-3">
                          <div class="w-3/12 flex items-center align-center"><span class="mr-1 md:mr-3">special</span><Image src="/images/media/start_icon.png" alt="start" width={24} height={24} minWidth={0} minheight={0} /></div>
                          <h2 class="w-9/12 text-center border-l border-gray-400 text-base md:text-2xl">大村崑 &amp; 清水真輝 スペシャル対談</h2>
                        </div>
                      </div>
                      <div class="w-full mb-12">
                        <p class="px-4 md:px-0 text-sm">
                          株式会社FALCONER代表、清水真輝が会社設立以前から親交のある喜劇俳優の大村崑さん。以前よりお世話になっている崑さんと、会社設立を経験し社長として歩を進める「今」だからこそ実現できた対談。<br></br>芸能界で数々の実績を残してきた崑さんと綴る、「本当の幸せ」とは！？「仕事の流儀」とは！？濃密なスペシャル対談です。
                        </p>
                      </div>
                      <div class="w-full h-200 md:h-600">
                        <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/rkKA_W0srh4`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      </div>
                      <div onClick={toggle} class="w-full flex items-center justify-center py-4 border-solid border border-black cursor-pointer mt-3 mb-2"><Image src="/images/media/start_icon.png" alt="start" width={24} height={24} minWidth={0} minheight={0} /><span class="w-3/12 ml-3">Vol.2</span><h2 class="w-7/12 text-center border-l border-gray-400 text-base md:text-lg">ふたりの出会い</h2></div>
                      <div className={open ? 'isClose w-full h-200 md:h-600' : 'isOpen w-full h-200 md:h-600'} class="isClose w-full h-200 md:h-600">
                        <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/_GM_ZWob3kQ`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      </div>
                      <div onClick={toggle2} class="w-full flex items-center justify-center py-4 border-solid border border-black mt-3 mb-2 cursor-pointer"><Image src="/images/media/start_icon.png" alt="start" width={24} height={24} minWidth={0} minheight={0} /><span class="w-3/12 ml-3">Vol.3</span><h2 class="w-7/12 text-center border-l border-gray-400 text-base md:text-lg">働くことの本質とは</h2></div>
                      <div className={open2 ? 'isClose w-full h-200 md:h-600' : 'isOpen w-full h-200 md:h-600'} class="isClose w-full h-200 md:h-600">
                        <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/ECXHgkpuhOs`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      </div>
                      <div onClick={toggle3} class="w-full flex items-center justify-center py-4 border-solid border border-black mt-3 mb-2 cursor-pointer"><Image src="/images/media/start_icon.png" alt="start" width={24} height={24} minWidth={0} minheight={0} /><span class="w-3/12 ml-3">Vol.4</span><h2 class="w-7/12 text-center border-l border-gray-400 text-base md:text-lg">人間を豊かにする人間関係</h2></div>
                      <div className={open3 ? 'isClose w-full h-200 md:h-600' : 'isOpen w-full h-200 md:h-600'} class="isClose w-full h-200 md:h-600">
                        <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/j6_WbADp8xE`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      </div>
                    </div>
                  </div>
                </section>
                {/*大村崑さんSecction_END*/}

                <section class="px-1 lg:px-6 py-6 lg:py-16">{/*SNS Section*/}
                  <h1 class="text-center helvetica font-semibold text-2xl mb-2 lg:text-5xl lg:mb-6">SNS</h1>
                  <div class="">
                    <div class="block mt-2 lg:mt-6">
                      <div class="flex justify-center md:justify-between w-full md:w-10/12 mx-auto my-5">
                        <div class="md:w-3/4 flex justify-center items-center"><Image class="block" src="/images/media/instagram_logo_1500.png" width={40} height={40} alt="instagram_logo" /></div>
                        <div class="hidden md:flex md:w-1/4 justify-center items-center"><Image class="block" src="/images/media/Twitter_Logo_WhiteOnBlue_400.png" width={40} height={40} alt="twitter_logo" /></div>
                      </div>
                      <div class="flex justify-between items-center flex-wrap md:flex-nowrap mt-6 w-full md:w-10/12 mx-auto">
                        <div class="md:mx-2 w-49% md:w-1/4 h-405 md:h-600 text-center">
                          <iframe class="instagram-media instagram-media-rendered mx-auto h-full" id="instagram-embed-5" src="https://www.instagram.com/p/CFwWJWKj6u_/embed/?cr=1&amp;v=13&amp;rd=https%3A%2F%2Ffalconer.co.jp&amp;rp=%2Fcompany.html#%7B%22ci%22%3A5%2C%22os%22%3A640.7000000029802%7D" allowtransparency="true" allowfullscreen="true" frameborder="0" height="591" data-instgrm-payload-id="instagram-media-payload-5" scrolling="no"></iframe>
                          {/*
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
                          />]*/}
                        </div>
                        <div class="md:mx-2 w-49% md:w-1/4 h-405 md:h-600 text-center">
                          <iframe class="instagram-media instagram-media-rendered mx-auto h-full" id="instagram-embed-1" src="https://www.instagram.com/p/CFy5Cz6JwrP/embed/?cr=1&amp;v=13&amp;rd=https%3A%2F%2Ffalconer.co.jp&amp;rp=%2Fcompany.html#%7B%22ci%22%3A1%2C%22os%22%3A239.09999999403954%7D" allowtransparency="true" allowfullscreen="true" frameborder="0" height="590" data-instgrm-payload-id="instagram-media-payload-1" scrolling="no"></iframe>
                          {/*<InstagramEmbed
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
                          />*/}
                        </div>
                        <div class="md:mx-2 w-49% md:w-1/4 h-405 md:h-600 text-center">
                          <iframe class="instagram-media instagram-media-rendered mx-auto h-full" id="instagram-embed-4" src="https://www.instagram.com/p/CFZYcmjDZAV/embed/?cr=1&amp;v=12&amp;rd=https%3A%2F%2Ffalconer.co.jp&amp;rp=%2Fcompany.html#%7B%22ci%22%3A4%2C%22os%22%3A606.7000000029802%7D" allowtransparency="true" allowfullscreen="true" frameborder="0" height="591" data-instgrm-payload-id="instagram-media-payload-4" scrolling="no"></iframe>
                          {/*<InstagramEmbed
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
                          />*/}
                        </div>
                        <div class="md:mx-2 w-49% md:w-1/4 md:hidden h-405 md:h-600 text-center">
                          <iframe class="instagram-media instagram-media-rendered mx-auto h-full" id="instagram-embed-4" src="https://www.instagram.com/p/CFcAOKGjqWC/embed/?cr=1&v=12&rd=https%3A%2F%2Ffalconer.co.jp&rp=%2Fcompany.html#%7B%22ci%22%3A3%2C%22os%22%3A747.5%7D" allowtransparency="true" allowfullscreen="true" frameborder="0" height="591" data-instgrm-payload-id="instagram-media-payload-4" scrolling="no"></iframe>
                        </div>
                        <div class="flex md:hidden justify-center items-center w-full my-5"><Image class="block" src="/images/media/Twitter_Logo_WhiteOnBlue_400.png" width={40} height={40} alt="twitter_logo" /></div>
                        <div class="mx-2 md:mx-0 md:pl-4 w-full md:w-1/4 h-600 text-center md:border-l-2 md:border-dotted">
                          <TwitterTimelineEmbed
                            sourceType="profile"
                            screenName="Nanami_Bondjam"
                            options={{ height: 600 }}
                          />
                          {/*<InstagramEmbed
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
                          />*/}
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
                  </div>
                </section>{/*SNSSectionEnd*/}

                <div class="mx-auto mb-12 lg:w-full lg:px-6 flex justify-center">
                  <div class="w-11/12 max-w-screen-sm mx-auto">
                    <Link href="/contact/mediacontact"><a>
                      <div class="Osaka text-md py-2 px-1 font-bold tracking-widest bg-black text-white text-center">
                        メディア お問い合わせ
                      </div>
                    </a></Link>
                    <p class="Osaka mt-2 text-sm lg:text-center px-2 lg:px-0">メディアについてのご相談など、お気軽にお問い合わせください。</p>
                  </div>
                </div>
              </div>
            </div>{/*コンテナー終了*/}
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

