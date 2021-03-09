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
    <div class="h-auto pt-6 pb-6">
      <div class="bg-black pt-2 px-16">
        <div class="flex justify-between items-center">
          <div class="w-1/3">
            <p>{` `}</p>
          </div>
          <div class="w-1/3">
            <div class="text-center">
              <Link href="/">
                <a><Image src="/images/logo/falconer_co_ltd_logo.jpg" width={400} height={84} alt="falconer_logo" /></a>
              </Link>
            </div>
          </div>
          <div class="w-1/3">
            <div class="float-right">
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
      </div>
      <div class="flex justify-center mt-6">
        <div class="inline-block px-4 text-center text-white futura" style={{width: "120px", marginRight: "10px", backgroundColor: "#9f9e9f"}}>
          <Link href="/topics"><a class="inline-block pt-1">TOPICS</a></Link>
        </div>
        <div class="inline-block px-4 text-center text-white futura" style={{width: "120px", marginRight: "10px", backgroundColor: "#9f9e9f"}}>
          <Link href="/brand"><a class="inline-block pt-1">BRAND</a></Link>
        </div>
        <div class="inline-block px-4 text-center text-white futura" style={{width: "120px", marginRight: "10px", backgroundColor: "#9f9e9f"}}>
          <Link href="/company"><a class="inline-block pt-1">ABOUT US</a></Link>
        </div>
        <div class="inline-block px-4 text-center text-white futura" style={{width: "120px", marginRight: "10px", backgroundColor: "#9f9e9f"}}>
          <Link href="/media"><a class="inline-block pt-1">MEDIA</a></Link>
        </div>
        <div class="inline-block px-4 text-center text-white futura" style={{width: "120px", backgroundColor: "#9f9e9f"}}>
          <Link href="/contact"><a class="inline-block pt-1">CONTACT</a></Link>
        </div>
      </div>
    </div>

    </>
  )
}