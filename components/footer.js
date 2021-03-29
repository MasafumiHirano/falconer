import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return(
    <>
      <div class="h-auto lg:pt-12 pt-4 lg:pb-4 pb-2" style={{ backgroundColor: "#9f9e9f"}}>
        <div class="flex lg:justify-center ">
          <div class="lg:w-1100 w-full">
            <div class="lg:flex lg:justify-between lg:flex-row-reverse lg:mb-12">

              <div class="flex justify-around leading-8 text-sm lg:text-base mt-6 lg:mt-0">
                <div class="px-4 lg:mx-12 lg:pr-16">
                  <h2 class="font-bold"><Link href="/topics"><a>最新情報</a></Link></h2>
                  <h2 class="font-bold lg:mt-6"><Link href="/brand"><a>ブランド</a></Link></h2>
                  <h2 class="font-bold lg:mt-6"><Link href="/media"><a>メディア</a></Link></h2>
                </div>
                <div class="lg:flex justify-between">
                  <div class="lg:mx-12">
                    <h2 class="font-bold"><Link href="/company"><a>企業情報</a></Link></h2>
                    <ul class="text-xs lg:text-sm text-gray-800">
                      <li class="lg:mt-3"><Link href="/company/statement"><a>企業理念</a></Link></li>
                      <li class="lg:mt-3"><Link href="/company/message"><a>トップメッセージ</a></Link></li>
                      <li class="lg:mt-3"><Link href="/company/overview"><a>企業概要</a></Link></li>
                    </ul>
                  </div>

                  <div class="lg:mx-12">
                    <h2 class="font-bold"><Link href="/recruit"><a>採用情報</a></Link></h2>
                    <h2 class="font-bold lg:mt-6"><Link href="/contact"><a>お問い合わせ</a></Link></h2>
                  </div>
                </div>
              </div>

              <div class="block flex justify-center pt-8 lg:pt-0">
                <Link href="/">
                  <a><Image class="block" src="/images/logo/falconer_co_ltd_logo.jpg" width={280} height={63.6} alt="falconer_logo"/></a>
                </Link>
              </div>

            </div>
            <div class="flex lg:justify-between justify-center">
            <div class="lg:flex hidden">
              <div class="inline-block">
                <a href="https://www.instagram.com/masaki.s_japan/" target="_blank">
                  <Image src="/images/media/instagram_white_bg_bk.jpg" width={36} height={36} alt="instagaram_social" />
                </a>
              </div>
              <div class="inline-block">
                <a href="https://www.youtube.com/channel/UCynRnKX32Zr8Hh_Rst6Mrug" target="_blank">
                  <Image src="/images/media/youtube_white_bg_bk.jpg" width={36} height={36} alt="instagaram_social" />
                </a>  
              </div>
              <div class="inline-block">
                <a href="https://twitter.com/Nanami_Bondjam" target="_blank">
                  <Image src="/images/media/twitter_white_bg_bk.jpg" width={36} height={36} alt="instagaram_social" />
                </a>
              </div>
            </div>

              <div class="inline-block text-gray-800 text-xs lg:text-base">
                <p>Copyright © Falconer Corp. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}