import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react';
import Menu from './menu';
import { useState } from "react";


export default function Header() {

  const [scroll, setScroll] = useState("");
  const [header, setHeader] = useState("header");
  const [header__nav, setHeaderNav] = useState("header__nav");
  const [header__logo, setHeaderLogo] = useState("falconer_co_ltd_logo_bg_white.jpg");
  const [instagram__logo, setInstagramLogo] = useState("instagram_white_bg_wh.png");
  const [youtube__logo, setYoutubLogo] = useState("youtube_white_bg_wh.png");
  const [twitter__logo, setTwitterLogo] = useState("twitter_white_bg_wh2.png");

  if (process.browser) {
    window.addEventListener( "scroll" ,function(){
      //スクロールの高さを取得
      setScroll(window.pageYOffset)
      if(scroll > 100) {
        setHeader("header_change");
        setHeaderNav("header__nav_change");
        setHeaderLogo("falconer_co_ltd_logo.jpg");
        setInstagramLogo("instagram_white_bg_bk.jpg");
        setYoutubLogo("youtube_white_bg_bk.jpg");
        setTwitterLogo("twitter_white_bg_bk.jpg");
      } else {
        setHeader("header");
        setHeaderNav("header__nav");
        setHeaderLogo("falconer_co_ltd_logo_bg_white.jpg");
        setInstagramLogo("instagram_white_bg_wh.png");
        setYoutubLogo("youtube_white_bg_wh.png");
        setTwitterLogo("twitter_white_bg_wh2.png");
      }
    })
  }
  
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
    
    <div className={`${header}`}>
      <div className="header__inner">
        
        <div class="w-3/12 pt-2 pl-5 flex items-center lg:hidden">
          <Menu />
        </div>

        <div class="w-1/2 lg:w-3/12">
          <div class="block pt-2">
            <Link href="/">
              <a><Image src={`/images/logo/${header__logo}`} width={400} height={84} alt="falconer_logo"/></a>
            </Link>
          </div>
        </div>

        <ul class="w-7/12 hidden lg:flex lg:justify-end lg:items-center text-xs lg:text-base">
          <li>
            <Link href="/topics">
              <a className={`${header__nav}`}>
                新着情報
              </a>
            </Link>
          </li>

          <li>
            <Link href="/brand">
            <a className={`${header__nav}`}>
                ブランド
              </a>
            </Link>
          </li>

          <li>
            <Link href="/company">
            <a className={`${header__nav}`}>
                企業情報
              </a>
            </Link>
          </li>

          <li>
            <Link href="/media">
            <a className={`${header__nav}`}>
                メディア
              </a>
            </Link>
          </li>

          <li>
            <Link href="/contact">
            <a className={`${header__nav}`}>
                お問い合わせ
              </a>
            </Link>
          </li>

        </ul>

        <div class="w-1/4 lg:w-2/12 flex justify-end items-center">
          <div class="flex invisible lg:visible">
            <div class="flex items-center px-2">
              <a class="pt-1" href="https://www.instagram.com/masaki.s_japan/" target="_black">
                <Image src={`/images/media/${instagram__logo}`} width={48} height={48} alt="instagaram_social" />
              </a>
            </div>
            <div class="flex items-center px-2">
              <a class="pt-1" href="https://www.youtube.com/channel/UCynRnKX32Zr8Hh_Rst6Mrug" target="_black">
                <Image src={`/images/media/${youtube__logo}`} width={48} height={48} alt="youtube_social" />
              </a>
            </div>
            <div class="flex items-center px-2">
              <a class="pt-1" href="https://twitter.com/Nanami_Bondjam" target="_blank">
                <Image src={`/images/media/${twitter__logo}`} width={48} height={48} alt="twitter_social" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}


