import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'


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
    <div class="h-auto lg:pt-6 pb-2 lg:pb-6">
      <div class="bg-black">
        <div class="mx-auto flex justify-end pt-4 lg:w-1100">
          <div class="block pr-12 lg:pr-48">
            <Link href="/">
              <a><Image src="/images/logo/falconer_co_ltd_logo.jpg" width={400} height={84} alt="falconer_logo" /></a>
            </Link>
          </div>
          <div class="flex items-center">
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
      <div class="flex lg:justify-center justify-around mt-2 lg:mt-6 text-xs lg:text-base">
        <div class="text-center text-white px-2 lg:px-4 futura w-12 lg:w-120 lg:mr-3" style={{backgroundColor: "#9f9e9f"}}>
          <Link href="/topics"><a>TOPICS</a></Link>
        </div>
        <div class="text-center text-white px-2 lg:px-4 futura w-12 lg:w-120 lg:mr-3" style={{backgroundColor: "#9f9e9f"}}>
          <Link href="/brand"><a>BRAND</a></Link>
        </div>
        <div class="text-center text-white px-2 lg:px-4 futura w-12 lg:w-120 lg:mr-3" style={{backgroundColor: "#9f9e9f"}}>
          <Link href="/company"><a>ABOUT US</a></Link>
        </div>
        <div class="text-center text-white px-2 lg:px-4 futura w-12 lg:w-120 lg:mr-3" style={{backgroundColor: "#9f9e9f"}}>
          <Link href="/media"><a>MEDIA</a></Link>
        </div>
        <div class="text-center text-white px-2 lg:px-4 futura w-12 lg:w-120" style={{backgroundColor: "#9f9e9f"}}>
          <Link href="/contact"><a>CONTACT</a></Link>
        </div>
      </div>
    </div>

    </>
  )
}