import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <div className="h-auto mt-4 lg:pt-12 pt-4 lg:pb-4 pb-2 bg-black">
        <div className="flex lg:justify-center ">
          <div className="lg:w-1280 w-full">
            <div className="lg:flex lg:justify-between lg:flex-row lg:mb-12">
              <div className="flex flex-wrap justify-center lg:block pt-8 lg:pt-0">
                <Link href="/">
                  <a className="blcok w-full text-center"><img src="/images/logo/Falconer co., Ltd2.png" class="w-52 block mx-auto" alt="falconer_logo" /></a>
                </Link>
                <ul class="flex w-170 md:w-full flex-row justify-around mt-12">
                  <li class="w-8 flex justify-center items-center">
                    <a href="https://www.instagram.com/masaki.s_japan/" target="_blank">
                      <img src="/images/top/media_Instagram.svg" alt="Instagram" />
                    </a>
                  </li>
                  <li class="w-9 flex justify-center items-center">
                    <a href="https://www.youtube.com/channel/UCynRnKX32Zr8Hh_Rst6Mrug" target="_blank">
                      <img src="/images/top/media_twitter2.svg" alt="Twitter" />
                    </a>
                  </li>
                  <li class="a w-9 flex justify-center items-center">
                    <a href="https://twitter.com/Nanami_Bondjam" target="_blank">
                      <img src="/images/top/media_youtube2.svg" alt="Youtube" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex justify-around lg:justify-center leading-8 text-sm w-8/12 mx-auto lg:text-base mt-11 lg:mt-0 text-white">
                <div className="px-4 lg:mx-12 lg:pr-16">
                  <h2 className="lg:leading-4"><Link href="/topics"><a>ニュース</a></Link></h2>
                  <h2 className="lg:leading-4 lg:mt-6"><Link href="/company/business#site"><a>販売サイト</a></Link></h2>
                  <h2 className="lg:leading-4 lg:mt-6"><Link href="/company"><a>会社情報</a></Link></h2>
                </div>
                <div className="lg:flex justify-between">
                  <div className="lg:mx-12 lg:mt-0">
                    <h2 className="lg:leading-4"><Link href="/media"><a>メディア</a></Link></h2>
                    <h2 className="lg:leading-4 lg:mt-6"><Link href="/recruit"><a>採用情報</a></Link></h2>
                    <h2 className="lg:leading-4 lg:mt-6"><Link href="/contact"><a>お問い合わせ</a></Link></h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="mt-6 inline-block text-white text-xs lg:text-base">
                <p>Copyright © Falconer Corp. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}