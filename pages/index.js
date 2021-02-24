import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Layout from '../components/layout'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Falconer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main>
          <div class="mx-auto" style={{ width: "1280px", height: "640px" }}>
            <Image class="block" src="/images/topslider/bachicashley_hero.jpg" width={1280} height={640} alt="bachicashley_hero"/>
          </div>
          <div class="bg-gray-400">
            <div class="mx-auto py-12" style={{ width: "1100px" }}>
              <div><h1 class="text-4xl text-center mb-6">TOPICS</h1></div>
              <div class="flex">
                <div style={{ width: "360px", marginRight: "10px" }}>
                  <Image src="/images/topslider/bachicashley_hero.jpg" width={360} height={180} />
                  <p class="pb-6" class="text-xl font-bold">タイトル</p>
                  <p class="">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
                </div>
                <div class="pb-6" style={{ width: "360px", marginRight: "10px" }}>
                  <Image src="/images/topslider/bachicashley_hero.jpg" width={360} height={180} />
                  <p class="text-xl font-bold">タイトル</p>
                  <p class="">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
                </div>
                <div class="pb-6" style={{ width: "360px"}}>
                  <Image src="/images/topslider/bachicashley_hero.jpg" width={360} height={180} />
                  <p class="text-xl font-bold">タイトル</p>
                  <p class="">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
                </div>
              </div>
              <div class="flex">
                <div class="pb-6" style={{ width: "360px", marginRight: "10px" }}>
                  <Image src="/images/topslider/bachicashley_hero.jpg" width={360} height={180} />
                  <p class="text-xl font-bold">タイトル</p>
                  <p class="">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
                </div>
                <div class="pb-6" style={{ width: "360px", marginRight: "10px" }}>
                  <Image src="/images/topslider/bachicashley_hero.jpg" width={360} height={180} />
                  <p class="text-xl font-bold">タイトル</p>
                  <p class="">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
                </div>
                <div class="pb-6" style={{ width: "360px"}}>
                  <Image src="/images/topslider/bachicashley_hero.jpg" width={360} height={180} />
                  <p class="text-xl font-bold">タイトル</p>
                  <p class="">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="mx-auto pt-12" style={{ width: "1100px" }}>
              <div><h1 class="text-4xl text-center mb-6">BRAND</h1></div>
                <div class="flex">
                  <div class="pb-4" style={{ width: "540px", marginRight: "20px" }}>
                    <Image src="/images/brand/brand_ba1.jpg" width={540} height={540} />
                  </div>
                  <div class="pb-4" style={{ width: "540px"}}>
                    <Image src="/images/brand/brand_lu1.jpg" width={540} height={540} />
                  </div>
                </div>
                <div class="flex">
                  <div class="pb-4" style={{ width: "540px", marginRight: "20px" }}>
                    <Image src="/images/brand/brand_bu1.jpg" width={540} height={324} />
                  </div>
                  <div class="pb-4" style={{ width: "540px"}}>
                    <Image src="/images/brand/allrightleather.jpg" width={540} height={324} />
                  </div>
                </div>
              </div>
          </div>
          <div>
            <div class="mx-auto pt-12" style={{ width: "1100px" }}>
              <div><h1 class="text-4xl text-center mb-6">MEDIA</h1></div>
              <div  class="relative">
                <div class="flex absolute z-10" style={{top: "50%", left: "50%", transform: "translate(-52%, 0%)"}}>
                  <div class="inline-block">
                    <a href="https://www.instagram.com/masaki.s_japan/">
                      <Image src="/images/media/instagram_white_bg_bk.jpg" width={114} height={114} alt="instagaram_social" />
                    </a>
                  </div>
                  <div class="inline-block">
                    <a href="https://www.facebook.com/masaki.s_japan/">
                      <Image src="/images/media/facebook_white_bg_bk.jpg" width={114} height={114} alt="instagaram_social" />
                    </a>
                  </div>
                  <div class="inline-block">
                    <a href="https://www.youtube.com/masaki.s_japan/">
                      <Image src="/images/media/youtube_white_bg_bk.jpg" width={114} height={114} alt="instagaram_social" />
                    </a>
                  </div>
                  <div class="inline-block">
                    <a href="https://www.twitter.com/masaki.s_japan/">
                      <Image src="/images/media/twitter_white_bg_bk.jpg" width={114} height={114} alt="instagaram_social" />
                    </a>
                  </div>
                </div>
                <div class="absolute z-10" style={{top: "50%", left: "50%", transform: "translate(-52%, -92%)"}}>
                  <Link href="/media">
                  <a><Image src="/images/logo/falconer_co_ltd_logo.png" width={456} height={95} alt="falconer_co_ltd_logo" /></a>
                  </Link>
                </div>
                <Image src="/images/media/top-media.jpg" width={1100} height={620} />
              </div>
            </div>
          </div>
          <div>
            <div class="mx-auto pt-12 mb-12" style={{ width: "1100px" }}>
              <div><h1 class="text-4xl text-center mb-6">CORPORATE</h1></div>
              <Link href="/company">
                <a><Image src="/images/logo/falconer_co_ltd_logo.png" width={1100} height={230} alt="falconerinc_logo"/></a>
              </Link>
            </div>
          </div>

        </main>
      </Layout>
    </div>
  )
}
