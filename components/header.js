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
    <div class="pb-0 lg:pb-6">

      <div class="pt-4 bg-black">
        <div class="mx-auto flex lg:w-1100">
          <div class="w-1/4 pl-2 flex items-center lg:invisible">
            <Menu />
          </div>

          <div class="w-1/2">
            <div class="block flex justify-center">
              <Link href="/">
                <a><Image src="/images/logo/falconer_co_ltd_logo.jpg" width={400} height={84} alt="falconer_logo" /></a>
              </Link>
            </div>
          </div>

          <div class="w-1/4 flex justify-end items-center">
            <div class="flex invisible lg:visible">
              <div class="inline-block px-2">
                <a href="https://www.instagram.com/masaki.s_japan/" target="_black">
                  <Image src="/images/media/instagram_white_bg_bk.jpg" width={36} height={36} alt="instagaram_social" />
                </a>
              </div>
              <div class="inline-block px-2">
                <a href="https://www.youtube.com/channel/UCynRnKX32Zr8Hh_Rst6Mrug" target="_black">
                  <Image src="/images/media/youtube_white_bg_bk.jpg" width={36} height={36} alt="youtube_social" />
                </a>
              </div>
              <div class="inline-block px-2">
                <a href="https://twitter.com/Nanami_Bondjam" target="_blank">
                  <Image src="/images/media/twitter_white_bg_bk.jpg" width={36} height={36} alt="twitter_social" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="lg:flex justify-around lg:justify-center lg:mt-6 text-xs lg:text-base hidden">
        <Link href="/topics"><a>
          <div class="text-center text-white futura lg:px-4 lg:w-120 lg:mr-3 bg-falSLD hover:bg-falGLD transition ease-in-out duration-300 shadow-lg">
            TOPICS
          </div>
        </a></Link>
        <Link href="/brand"><a>
          <div class="text-center text-white futura lg:px-4 lg:w-120 lg:mr-3 bg-falSLD hover:bg-falGLD transition ease-in-out duration-300 shadow-lg">
            BRAND
          </div>
        </a></Link>
        <Link href="/company"><a>
          <div class="text-center text-white futura lg:px-4 lg:w-120 lg:mr-3 bg-falSLD hover:bg-falGLD transition ease-in-out duration-300 shadow-lg">
            ABOUT US
          </div>
        </a></Link>
        <Link href="/media"><a>
          <div class="text-center text-white futura lg:px-4 lg:w-120 lg:mr-3 bg-falSLD hover:bg-falGLD transition ease-in-out duration-300 shadow-lg">
            MEDIA
          </div>
        </a></Link>
        <Link href="/contact"><a>
          <div class="text-center text-white futura lg:px-4 lg:w-120 bg-falSLD hover:bg-falGLD transition ease-in-out duration-300 shadow">
            CONTACT
          </div>
        </a></Link>
      </div>
    </div>

    </>
  )
}