import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react';
import Menu from './menu';
 
export default function Header(){

  return (
    <>
    <Head>
      <link
        rel="preload"
        href="/fonts/futura_light_bt.woff"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/futura_medium_bt.ttf"
        as="font"
        crossOrigin=""
      />
    </Head>

      <div class="w-full bg-black z-20 fixed top-0 inset-x-1/2 transform -translate-x-1/2">
        <div class="mx-auto flex lg:w-1280 bg-black">
          <div class="w-3/12 pt-2 pl-5 flex items-center lg:hidden">
            <Menu />
          </div>

          <div class="w-1/2 lg:w-3/12">
            <div class="block pt-2">
              <Link href="/">
                <a><Image src="/images/logo/falconer_co_ltd_logo.jpg" width={400} height={84} alt="falconer_logo" /></a>
              </Link>
            </div>
          </div>

          <div class="w-7/12 hidden lg:flex lg:justify-end lg:items-center text-xs lg:text-base">
            <Link href="/topics">
              <a class="Osaka h-full flex items-center inline-block align-middle text-center bg-black hover:bg-white text-white hover:text-black lg:px-4 lg:py-4 lg:mr-3 transition ease-in-out duration-300">
                <div>最新情報</div>
              </a>
            </Link>
            <Link href="/brand">
              <a class="Osaka h-full flex items-center inline-block align-middle text-center bg-black hover:bg-white text-white hover:text-black lg:px-4 lg:py-4 lg:mr-3 transition ease-in-out duration-300">
                <div>ブランド</div>
              </a>
            </Link>
            <Link href="/company">
              <a class="Osaka h-full flex items-center inline-block align-middle text-center bg-black hover:bg-white text-white hover:text-black lg:px-4 lg:py-4 lg:mr-3 transition ease-in-out duration-300">
                <div>企業情報</div>
              </a>
            </Link>
            <Link href="/media">
              <a class="Osaka h-full flex items-center inline-block align-middle text-center bg-black hover:bg-white text-white hover:text-black lg:px-4 lg:py-4 lg:mr-3 transition ease-in-out duration-300">
                <div>メディア</div>
              </a>
            </Link>
            <Link href="/contact">
              <a class="Osaka h-full flex items-center inline-block align-middle text-center bg-black hover:bg-white text-white hover:text-black lg:px-4 lg:py-4 lg:mr-3 transition ease-in-out duration-300">
                <div>お問い合わせ</div>
              </a>
            </Link>
          </div>

          <div class="w-1/4 lg:w-2/12 flex justify-end items-center">
            <div class="flex invisible lg:visible">
              <div class="flex items-center px-2">
                <a class="pt-1" href="https://www.instagram.com/masaki.s_japan/" target="_black">
                  <Image src="/images/media/instagram_white_bg_bk.jpg" width={48} height={48} alt="instagaram_social" />
                </a>
              </div>
              <div class="flex items-center px-2">
                <a class="pt-1" href="https://www.youtube.com/channel/UCynRnKX32Zr8Hh_Rst6Mrug" target="_black">
                  <Image src="/images/media/youtube_white_bg_bk.jpg" width={48} height={48} alt="youtube_social" />
                </a>
              </div>
              <div class="flex items-center px-2">
                <a class="pt-1" href="https://twitter.com/Nanami_Bondjam" target="_blank">
                  <Image src="/images/media/twitter_white_bg_bk.jpg" width={48} height={48} alt="twitter_social" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}