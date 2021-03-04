import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return(
    <>
      <div class="h-64 pt-12 px-24" style={{ backgroundColor: "#cecece"}}>
      <div class="flex mb-24">
        <div class="w-1/4">
          <Link href="/">
            <a><Image src="/images/logo/falconer_co_ltd_logo.jpg" width={280} height={63.6} alt="falconer_logo"/></a>
          </Link>
        </div>
        <div class="w-1/4">{` `}</div>
        <div class="w-1/4">{` `}</div>
        <div class="w-1/4">{` `}</div>
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