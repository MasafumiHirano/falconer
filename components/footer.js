import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return(
    <>
      <div className="h-auto lg:pt-12 pt-4 lg:pb-4 pb-2 border-t-2 border-black">
        <div className="flex lg:justify-center ">
          <div className="lg:w-1100 w-full">
            <div className="lg:flex lg:justify-between lg:flex-row-reverse lg:mb-12">

              <div className="flex justify-around leading-8 text-sm lg:text-base mt-6 lg:mt-0">
                <div className="px-4 lg:mx-12 lg:pr-16">
                  <h2 className="font-bold lg:leading-4"><Link href="/topics"><a>新着情報</a></Link></h2>
                  <h2 className="font-bold lg:leading-4 lg:mt-6"><Link href="/brand"><a>ブランド</a></Link></h2>
                  <h2 className="font-bold lg:leading-4 lg:mt-6"><Link href="/media"><a>メディア</a></Link></h2>
                </div>
                <div className="lg:flex justify-between">
                  <div className="lg:mx-12">
                    <h2 className="font-bold leading-8 lg:leading-4"><Link href="/company"><a>企業情報</a></Link></h2>
                    <ul className="text-xs lg:text-sm text-gray-800">
                      <li className="mt-1 lg:mt-3 lg:leading-4"><Link href="/company/statement"><a>企業理念</a></Link></li>
                      <li className="mt-1 lg:mt-3 lg:leading-4"><Link href="/company/message"><a>代表メッセージ</a></Link></li>
                      <li className="mt-1 lg:mt-3 lg:leading-4"><Link href="/company/overview"><a>企業概要</a></Link></li>
                    </ul>
                  </div>

                  <div className="lg:mx-12 mt-4 lg:mt-0">
                    <h2 className="font-bold lg:leading-4"><Link href="/recruit"><a>採用情報</a></Link></h2>
                    <h2 className="font-bold lg:leading-4 lg:mt-6"><Link href="/contact"><a>お問い合わせ</a></Link></h2>
                  </div>
                </div>
              </div>

              <div className="flex justify-center lg:block pt-8 lg:pt-0">
                <Link href="/">
                  <a><Image className="block object-cover" src="/images/logo/falconer_co_ltd_logo_bg_white.jpg" width={265} height={56} alt="falconer_logo"/></a>
                </Link>
                <div className="lg:flex hidden mt-0.5">
                  <div className="inline-block">
                    <a href="https://www.instagram.com/masaki.s_japan/" target="_blank">
                      <Image src="/images/media/instagram_white_bg_wh.png" width={36} height={36} alt="instagaram_social" />
                    </a>
                  </div>
                  <div className="inline-block">
                    <a href="https://www.youtube.com/channel/UCynRnKX32Zr8Hh_Rst6Mrug" target="_blank">
                      <Image src="/images/media/youtube_white_bg_wh.png" width={36} height={36} alt="instagaram_social" />
                    </a>  
                  </div>
                  <div className="inline-block">
                    <a href="https://twitter.com/Nanami_Bondjam" target="_blank">
                      <Image src="/images/media/twitter_white_bg_wh2.png" width={36} height={36} alt="instagaram_social" />
                    </a>
                  </div>
                </div>
              </div>

            </div>
            <div className="flex justify-center lg:justify-end">
              

              <div className="inline-block text-gray-800 text-xs lg:text-base">
                <p>Copyright © Falconer Corp. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}