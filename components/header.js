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
    <div class="lg:py-6">

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
                <a href="https://www.instagram.com/masaki.s_japan/">
                  <Image src="/images/media/instagram_white_bg_bk.jpg" width={36} height={36} alt="instagaram_social" />
                </a>
              </div>
              <div class="inline-block px-2"><Image src="/images/media/youtube_white_bg_bk.jpg" width={36} height={36} alt="youtube_social" /></div>
              <div class="inline-block px-2"><Image src="/images/media/twitter_white_bg_bk.jpg" width={36} height={36} alt="twitter_social" /></div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-around lg:justify-center lg:mt-6 text-xs lg:text-base invisible lg:visible">
        <Link href="/topics"><a>
          <div class="text-center text-white futura lg:px-4 lg:w-120 lg:mr-3 bg-falSLD hover:bg-falGLD transition ease-in-out duration-300 shadow-lg">
            TOPICS
          </div>
        </a></Link>
        <div class="text-center text-white futura lg:px-4 lg:w-120 lg:mr-3 bg-falSLD hover:bg-falGLD transition ease-in-out duration-300 shadow-lg">
          <Link href="/brand"><a>BRAND</a></Link>
        </div>
        <div class="text-center text-white futura lg:px-4 lg:w-120 lg:mr-3 bg-falSLD hover:bg-falGLD transition ease-in-out duration-300 shadow-lg">
          <Link href="/company"><a>ABOUT US</a></Link>
        </div>
        <div class="text-center text-white futura lg:px-4 lg:w-120 lg:mr-3 bg-falSLD hover:bg-falGLD transition ease-in-out duration-300 shadow-lg">
          <Link href="/media"><a>MEDIA</a></Link>
        </div>
        <div class="text-center text-white futura lg:px-4 lg:w-120 bg-falSLD hover:bg-falGLD transition ease-in-out duration-300 shadow">
          <Link href="/contact"><a>CONTACT</a></Link>
        </div>
      </div>
    </div>

    </>
  )
}