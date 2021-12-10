import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"

import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import InstagramEmbed from 'react-instagram-embed';

import Layout from '../../components/layout'
import React, { useState } from 'react'

export default function Media({ medias }) {

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

  // open という名前の state 変数を宣言、初期値 true をセット
  const [open4, setOpen4] = useState(true)
  // toggleの関数を宣言
  const toggle4 = () => setOpen4(!open4)

  return (
    <div id="page_media">
      <Head>
        <title>メディア</title>
        <link rel="icon" href="/falconer_favicons.png" />
      </Head>
      <Layout>
        <main>
          <div>
            <div class="mb-6 lg:mb-12">
              {/*見出し部分*/}
              <div class="mb-6 lg:mb-12">
                <div class="relative">
                  <h1 class="futura-lt text-white text-center font-bold text-3xl lg:text-3xl media_title h-405 flex items-center justify-center flex-col">Media<p class="hiraginoGo text-base font-normal">メディア情報</p></h1>
                </div>
              </div>
              {/*見出し部分 終了*/}

              {/*内容*/}
              <div class="bg-white">
                <section class="px-4 lg:px-6 py-6 lg:pt-16 lg:pb-0">{/*RadioSection*/}
                  <h2 class="text-center pb-2 w-full md:w-920 md:mx-auto futura-md text-2xl md:text-3xl border-b border-gray-400 px-4">Radio<span class="text-base_s md:text-xl font-light block NotoSans-L">ラジオ</span></h2>
                  <div class="max-w-max mt-10 mb-2 w-36 mx-auto lg:mb-6">
                    <img src="/images/media/nanajam_image.jpg" alt="radio-image" />
                  </div>
                </section>{/*RadioSectionEnd*/}

                <section class="pb-6 lg:pb-16 px-4 lg:px-6">{/*YoutubeSection*/}
                  <div class="lg:px-6 lg:pb-6 lg:mb-4">
                    <div class="max-w-screen-lg md:w-920 mx-auto flex flex-wrap justify-between lg:grid-rows-2 lg:grid-cols-4 gap-4">
                      <div class="w-full h-200 md:h-500">
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/videoseries?list=PLL8nhuv2cnCW7G1tXSrM3lUgTkXDSLo4H" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      </div>
                    </div>
                  </div>
                  <h3 class="NotoSans-L text-center text-lg">過去ナナジャム配信中</h3>
                  <div class="w-3/4 md:w-500 flex items-center justify-between mx-auto mt-12">
                    <a target="blank_" href="https://www.youtube.com/c/BACHICASHLEY/playlists" class="flex items-center justify-center text-center w-120 lg:w-100">
                      <img src="/images/media/youtube.jpg" class="w-8/12" alt="spotify" />
                    </a>
                    <a target="blank_" href="https://open.spotify.com/show/1eZBcJc7lh1hBD6iAVOAnw" class="flex items-center justify-center text-center w-120 lg:w-100">
                      <img src="/images/media/spotify.jpg" class="w-8/12" alt="spotify" />
                    </a>
                    <a target="blank_" href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy80NzI0M2Q5OC9wb2RjYXN0L3Jzcw?sa=X&ved=0CAMQ4aUDahcKEwjYoq2w-ePxAhUAAAAAHQAAAAAQAQ" class="flex items-center justify-center text-center w-120 lg:w-100">
                      <img src="/images/media/podcasts.jpg" class="w-8/12" alt="podcasts" />
                    </a>
                  </div>
                </section>{/*YoutubeSectionEnd*/}

                {/*アーカイブ*/}
                <section>
                  <div class="mt-28">
                    <h3 class="NotoSans-L text-center text-lg">過去アーカイブはこちらから！</h3>
                  </div>
                  <div class="w-full px-4 md:w-920 flex flex-wrap justify-around mx-auto mt-12">
                    <ul class="flex flex-wrap justify-between">
                      {medias.slice(0,3).map(reading => (
                        <li key={reading.id} class="mt-2 lg:mt-0 hover:bg-gray-100 w-full md:w-32% mb-4 md:mb-24">
                          <Link href={`readings/${reading.id}`}>
                            <a>
                              <div class="lg:px-0 flex flex-col">
                                <div class="w-full"><img src={`${reading.main_image.url}`} /></div>
                                <p class="flex items-center flex-wrap mt-3 w-full"><span class="futura-lt text-base md:text-xl w-full md:w-3/12">Vol.{reading.no}｜</span><span class="NotoSans-L text-xs text-left w-full md:w-9/12">{reading.title}</span></p>
                              </div>
                            </a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div class="mt-10">
                    <Link href="/readings">
                      <a class="futura_medium_bt text-center text-2xl block w-40 mx-auto">More<img class="w-full" src="/images/top/more_button.png"></img></a>
                    </Link>
                  </div>
                  <div class="w-full md:w-500 px-1 mx-auto">
                    <div class="w-full bg-radio_black flex flex-wrap text-white mt-24">
                      <div class="w-full mt-8"><img src="/images/media/radio_icon.png" class="block w-9 mx-auto" /></div>
                      <div class="w-full mt-2 text-center">NANAMIのUp Jam</div>
                      <div class="w-full mb-6 text-center mt-9">ラジオ大阪<br />毎週土曜　13:00~13:30 O.A</div>
                    </div>
                  </div>
                </section>{/*アーカイブend*/}

                {/*大村崑さんSecction_START*/}
                <section class="px-4">
                  <h2 class="pb-2 mt-28 w-full md:w-920 mx-auto text-center futura-md text-1.7rem md:text-3xl border-b border-gray-400">Dialogue<span class="text-base md:text-lg font-light block NotoSans-L">対談</span></h2>
                  <div class="w-full mb-16">
                    <p class="px-4 pt-4 text-ms w-full md:w-920 mx-auto NotoSans-L text-justify">
                      株式会社FALCONER代表、清水真輝が会社設立以前から親交のある喜劇俳優の大村崑さん。以前よりお世話になっている崑さんと、会社設立を経験し社長として歩を進める「今」だからこそ実現できた対談。<br></br>芸能界で数々の実績を残してきた崑さんと綴る、「本当の幸せ」とは！？「仕事の流儀」とは！？濃密なスペシャル対談です。
                    </p>
                  </div>
                  <div class="lg:px-6 lg:py-6 lg:mb-4">
                    <div class="max-w-6xl mx-auto flex flex-wrap justify-between pb-20 md:w-920">
                      <div class="flex md:justify-between flex-wrap md:flex-nowrap w-full mb-12">
                        <div class="w-full md:w-580 px-1 md:mr-2">
                          <div class="w-full flex items-center justify-center border-solid border-b border-black cursor-pointer pb-2">
                            <span class="w-3/12 ml-3">Vol.1</span>
                            <h2 class="w-9/12 text-center border-l border-gray-400 text-base md:text-lg">時代が変わっても大切なもの</h2>
                            <span></span>
                          </div>
                          <div className="intoro isOpen mt-4 px-2 mb-12 text-ms">
                            <p>大村崑さんが感じる時代が変わっても変わらない大切なもの。「時間」といいます。若者にも年配者にも平等に、しかし止まらずに流れていきます。だからこそ大切に「今」を生きていく。崑さんのメッセージです。
                              <br />・時代が変わっても変わらない大切なもの
                              <br />・1番を目指せ
                            </p>
                          </div>
                        </div>
                        <div class="foo isOpen">
                          <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/rkKA_W0srh4`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                      </div>
                      <div class="flex md:justify-between flex-wrap md:flex-nowrap w-full mb-12">
                        <div class="w-full md:w-580 px-1 md:mr-2">
                          <div onClick={toggle2} class="w-full flex items-center justify-center border-solid border-b border-black cursor-pointer pb-2">
                            <span class="w-3/12 ml-3">Vol.2</span>
                            <h2 class="w-9/12 text-center border-l border-gray-400 text-base md:text-lg">ふたりの出会い</h2>
                            <span className={open2 ? 'close_button' : 'open_button'} class="close_button"></span>
                          </div>
                          <div className={open2 ? 'intoro isClose mt-4 px-2 text-ms' : 'intoro isOpen mt-4 px-2 mb-12 text-ms'}>
                            <p>清水がまだ下積みの頃に二人の出会いがありました。当時、感じていた思い。しっかり歩みを進めてきている「今」だからこそ語られるその想いを振り返ります。
                              <br />・二人の出会い
                              <br />・約束を守ることの大切さ
                            </p>
                          </div>
                        </div>
                        <div className={open2 ? 'foo isClose' : 'foo isOpen'} class="foo isClose">
                          <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/_GM_ZWob3kQ`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                      </div>
                      <div class="flex md:justify-between flex-wrap md:flex-nowrap w-full mb-12">
                        <div class="w-full md:w-580 px-1 md:mr-2">
                          <div onClick={toggle3} class="w-full flex items-center justify-center border-solid border-b border-black cursor-pointer pb-2">
                            <span class="w-3/12 ml-3">Vol.3</span>
                            <h2 class="w-9/12 text-center border-l border-gray-400 text-base md:text-lg">はたらくことの本質とは</h2>
                            <span className={open3 ? 'close_button' : 'open_button'} class="close_button"></span>
                          </div>
                          <div className={open3 ? 'intoro isClose mt-4 px-2 text-ms' : 'intoro isOpen mt-4 px-2 mb-12 text-ms'}>
                            <p>清水がまだ下積みの頃に二人の出会いがありました。当時、感じていた思い。しっかり歩みを進めてきている「今」だからこそ語られるその想いを振り返ります。
                              <br />・二人の出会い
                              <br />・約束を守ることの大切さ
                            </p>
                          </div>
                        </div>
                        <div className={open3 ? 'foo isClose' : 'foo isOpen'} class="foo isClose">
                          <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/ECXHgkpuhOs`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                      </div>
                      <div class="flex md:justify-between flex-wrap md:flex-nowrap w-full mb-12">
                        <div class="w-full md:w-580 px-1 md:mr-2">
                          <div onClick={toggle4} class="w-full flex items-center justify-center border-solid border-b border-black cursor-pointer pb-2">
                            <span class="w-3/12 ml-3">Vol.4</span>
                            <h2 class="w-9/12 text-center border-l border-gray-400 text-base md:text-lg">人生を豊かにする人間関係</h2>
                            <span className={open4 ? 'close_button' : 'open_button'} class="close_button"></span>
                          </div>
                          <div className={open4 ? 'intoro isClose mt-4 px-2 text-ms' : 'intoro isOpen mt-4 px-2 mb-12 text-ms'}>
                            <p>清水がまだ下積みの頃に二人の出会いがありました。当時、感じていた思い。しっかり歩みを進めてきている「今」だからこそ語られるその想いを振り返ります。
                              <br />・二人の出会い
                              <br />・約束を守ることの大切さ
                            </p>
                          </div>
                        </div>
                        <div className={open4 ? 'foo isClose' : 'foo isOpen'} class="foo isClose">
                          <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/j6_WbADp8xE`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {/*大村崑さんSecction_END*/}

                {/*SNS Section*/}
                {/*
                <section class="px-1 lg:px-6 py-6 lg:py-16">
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

                          <InstagramEmbed
                            url={`https://www.instagram.com/p/${visibleInstagramPosts[0].postid}/`}
                            clientAccessToken={clientAccessToken}
                            maxWidth={360}
                            hideCaption={true}
                            containerTagName='div'
                            protocol=''
                            injectScript
                            onLoading={() => { }}
                            onSuccess={() => { }}
                            onAfterRender={() => { }}
                            onFailure={() => { }}
                          />
                        </div>
                        <div class="md:mx-2 w-49% md:w-1/4 h-405 md:h-600 text-center">
                          <iframe class="instagram-media instagram-media-rendered mx-auto h-full" id="instagram-embed-1" src="https://www.instagram.com/p/CFy5Cz6JwrP/embed/?cr=1&amp;v=13&amp;rd=https%3A%2F%2Ffalconer.co.jp&amp;rp=%2Fcompany.html#%7B%22ci%22%3A1%2C%22os%22%3A239.09999999403954%7D" allowtransparency="true" allowfullscreen="true" frameborder="0" height="590" data-instgrm-payload-id="instagram-media-payload-1" scrolling="no"></iframe>
                          <InstagramEmbed
                            url={`https://www.instagram.com/p/${visibleInstagramPosts[1].postid}/`}
                            clientAccessToken={clientAccessToken}
                            maxWidth={360}
                            hideCaption={true}
                            containerTagName='div'
                            protocol=''
                            injectScript
                            onLoading={() => { }}
                            onSuccess={() => { }}
                            onAfterRender={() => { }}
                            onFailure={() => { }}
                          />
                        </div>
                        <div class="md:mx-2 w-49% md:w-1/4 h-405 md:h-600 text-center">
                          <iframe class="instagram-media instagram-media-rendered mx-auto h-full" id="instagram-embed-4" src="https://www.instagram.com/p/CFZYcmjDZAV/embed/?cr=1&amp;v=12&amp;rd=https%3A%2F%2Ffalconer.co.jp&amp;rp=%2Fcompany.html#%7B%22ci%22%3A4%2C%22os%22%3A606.7000000029802%7D" allowtransparency="true" allowfullscreen="true" frameborder="0" height="591" data-instgrm-payload-id="instagram-media-payload-4" scrolling="no"></iframe>
                          <InstagramEmbed
                            url={`https://www.instagram.com/p/${visibleInstagramPosts[2].postid}/`}
                            clientAccessToken={clientAccessToken}
                            maxWidth={360}
                            hideCaption={true}
                            containerTagName='div'
                            protocol=''
                            injectScript
                            onLoading={() => { }}
                            onSuccess={() => { }}
                            onAfterRender={() => { }}
                            onFailure={() => { }}
                          />
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
                          <InstagramEmbed
                            url={`https://www.instagram.com/p/${visibleInstagramPosts[3].postid}/`}
                            clientAccessToken={clientAccessToken}
                            maxWidth={360}
                            hideCaption={true}
                            containerTagName='div'
                            protocol=''
                            injectScript
                            onLoading={() => { }}
                            onSuccess={() => { }}
                            onAfterRender={() => { }}
                            onFailure={() => { }}
                          />
                        </div>
                      </div>

                      <div class="mt-12 text-center">
                        <p>公式インスタグラムはこちら</p>
                        <a href="https://www.instagram.com/masaki.s_japan/" target="_blank">
                          <Image src="/images/media/instagram_banner.png" width={300} height={90} alt="instagram-banner" />
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
                */}
                {/*SNSSectionEnd*/}

                {/*<div class="mx-auto mb-12 lg:w-full lg:px-6 flex justify-center">
                  <div class="w-11/12 max-w-screen-sm mx-auto">
                    <Link href="/contact/mediacontact"><a>
                      <div class="Osaka text-md py-2 px-1 font-bold tracking-widest bg-black text-white text-center">
                        メディア お問い合わせ
                      </div>
                    </a></Link>
                    <p class="Osaka mt-2 text-sm lg:text-center px-2 lg:px-0">メディアについてのご相談など、お気軽にお問い合わせください。</p>
                  </div>
                </div>*/}
              </div>
            </div>{/*コンテナー終了*/}
          </div>
        </main>
      </Layout>
    </div>
  )
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  };
  const data = await fetch('https://falconer.microcms.io/api/v1/readings', key)
    .then(res => res.json())
    .catch(() => null);
  return {
    props: {
      medias: data.contents,
    },
  };
};

