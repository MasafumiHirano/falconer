import Link from 'next/link'
import Image from 'next/image'


export default function Header(){
  return (
    <>
    <div class="h-auto px-16 pt-8 pb-6">
      <div class="flex justify-between items-center">
        <div class="w-1/3">
          <p>{` `}</p>
        </div>
        <div class="w-1/3">
          <div class="text-center">
            <Link href="/">
              <a><Image src="/images/logo/falconer_co_ltd_logo.png" width={400} height={84} alt="falconer_logo" /></a>
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
      <div class="flex justify-center mt-6">
        <div class="inline-block px-4 text-center text-white bg-gray-400" style={{width: "120px", marginRight: "10px"}}>
          <Link href="/topics"><a>TOPICS</a></Link>
        </div>
        <div class="inline-block px-4 text-center text-white bg-gray-400" style={{width: "120px", marginRight: "10px"}}>
          <Link href="/brand"><a>BRAND</a></Link>
        </div>
        <div class="inline-block px-4 text-center text-white bg-gray-400" style={{width: "120px", marginRight: "10px"}}>
          <Link href="/company"><a>ABOUT US</a></Link>
        </div>
        <div class="inline-block px-4 text-center text-white bg-gray-400" style={{width: "120px", marginRight: "10px"}}>
          <Link href="/media"><a>MEDIA</a></Link>
        </div>
        <div class="inline-block px-4 text-center text-white bg-gray-400" style={{width: "120px"}}>
          <Link href="/contact"><a>CONTACT</a></Link>
        </div>
      </div>
    </div>

    </>
  )
}