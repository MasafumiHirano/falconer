import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return(
    <>
      <div class="h-auto pt-12 pb-4 px-24" style={{ backgroundColor: "#9f9e9f"}}>
      <div class="flex mb-12">
        <div class="w-1/4">
          <Link href="/">
            <a><Image class="block w-full" src="/images/logo/falconer_co_ltd_logo.jpg" width={280} height={63.6} alt="falconer_logo"/></a>
          </Link>
        </div>
        <div class="w-1/4 ml-12">
          <h2 class="font-bold midashiGo">TOPICS</h2>
          <h2 class="font-bold midashiGo mt-6">BRAND</h2>
          <h2 class="font-bold midashiGo mt-6">MEDIA</h2>
        </div>
        <div class="w-1/4 ml-12">
          <h2 class="font-bold">企業情報</h2>
          <ul class="text-sm text-gray-800">
            <li class="mt-3">企業理念</li>
            <li class="mt-3">トップメッセージ</li>
            <li class="mt-3">企業概要・所在地</li>
            <li class="mt-3">沿革</li>
          </ul>
        </div>
        <div class="w-1/4 ml-12">
          <h2 class="font-bold">採用情報</h2>
          <h2 class="font-bold mt-6">お問い合わせ</h2>
        </div>
      </div>
        <div class="flex justify-between">
          <div class="flex">
            <div class="inline-block">
              <a href="https://www.instagram.com/masaki.s_japan/">
                <Image src="/images/media/instagram_white_bg_bk.jpg" width={36} height={36} alt="instagaram_social" />
              </a>
            </div>
            <div class="inline-block"><Image src="/images/media/facebook_white_bg_bk.jpg" width={36} height={36} alt="instagaram_social" /></div>
            <div class="inline-block"><Image src="/images/media/youtube_white_bg_bk.jpg" width={36} height={36} alt="instagaram_social" /></div>
            <div class="inline-block"><Image src="/images/media/twitter_white_bg_bk.jpg" width={36} height={36} alt="instagaram_social" /></div>
          </div>
          <div class="text-gray-800">Copyright © Falconer Corp. All Rights Reserved.</div>
        </div>
      </div>
    </>
  )
}