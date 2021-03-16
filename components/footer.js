import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return(
    <>
      <div class="h-auto lg:pt-12 pt-4 lg:pb-4 pb-2" style={{ backgroundColor: "#9f9e9f"}}>
        <div class="flex justify-start px-6">
          <div class="lg:w-1100 flex justify-center">
            <div class="lg:flex justify-between lg:mb-12">
              <div class="block">
                <Link href="/">
                  <a><Image class="block" src="/images/logo/falconer_co_ltd_logo.jpg" width={280} height={63.6} alt="falconer_logo"/></a>
                </Link>
              </div>
              <div class="flex justify-between text-sm lg:text-base mt-6 lg:mt-0">
                <div class="lg:mx-12 lg:pr-16">
                  <h2 class="font-bold midashiGo">TOPICS</h2>
                  <h2 class="font-bold midashiGo lg:mt-6">BRAND</h2>
                  <h2 class="font-bold midashiGo lg:mt-6">MEDIA</h2>
                </div>
                <div class="lg:mx-12">
                  <h2 class="font-bold">企業情報</h2>
                  <ul class="text-xs lg:text-sm text-gray-800">
                    <li class="lg:mt-3">企業理念</li>
                    <li class="lg:mt-3">トップメッセージ</li>
                    <li class="lg:mt-3">企業概要・所在地</li>
                    <li class="lg:mt-3">沿革</li>
                  </ul>
                </div>
                <div class="lg:mx-12">
                  <h2 class="font-bold">採用情報</h2>
                  <h2 class="font-bold lg:mt-6">お問い合わせ</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
          <div class="block lg:w-1100">
            <div class="px-6 lg:px-16 mt-6 lg:mt-0">
              <div class="flex ">
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
        <div class="text-gray-800 text-xs px-6 lg:text-base flex justify-end">
          <p>Copyright © Falconer Corp. All Rights Reserved.</p>
        </div>
      </div>
    </>
  )
}