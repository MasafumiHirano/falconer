import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Slider from "react-slick";

import Layout from '../components/layout'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Home({topics}) {
  //slider設定
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    lazyLoad: true,
    centerMode: true,
    adaptiveHeight: true,
    fade: false,
    arrows: true,
    className: 'slides'
};

  return (
    <div>
      <Head>
        <title>Falconer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main>
          <div class="bg-black">
            <div class="mx-auto">
              <Slider {...settings}>
                <div>
                  <Image class="block mx-auto" src="/images/topslider/bachicashley_hero.jpg" width={1280} height={640} alt="bachicashley_hero"/>
                </div>
                <div>
                  <Image class="block mx-auto" src="/images/topslider/topslider2.jpg" width={1280} height={640} alt="bachicashley_hero"/>
                </div>
              </Slider>
            </div>
          </div>

          <div style={{backgroundColor: "#cecece" }}>
            <div class="mx-auto pt-6 lg:pt-12 lg:w-1100">
              <h1 class="text-4xl text-center mb-2 py-2 bg-falGLD text-white" style={{fontFamily: "futura_light_bt"}}>TOPICS</h1>
              <p class="text-center mb-2">株式会社ファルコナーの最新の情報をお届けします。</p>
              <div>
                <ul class="flex justify-center lg:pt-0 grid lg:grid-cols-3 gap-x-3 gap-y-6 lg:gap-x-4 lg:gap-y-12">
                  {topics.filter(topic => (
                    topic.topview == true
                  ))
                  .map(topic => (
                    <li key={topic.id} class="">
                      <Link href={`topics/${topic.id}`}>
                        <a>
                          <div class="px-2 lg:px-0">
                            <div>
                              <Image src={`${topic.main_image.url}`} width={720} height={420} alt=""/>
                            </div>
                            <div class="h-24">
                              <div class="lg:text-xl font-bold lg:mb-4">{topic.title}</div>
                              <div class="lg:flex">
                                {topic.tag.map(tag => (
                                  <div class="block">
                                    <span class="px-2 lg:px-4 lg:py-2 mr-2 mb-2 bg-white rounded-full text-xs">{tag}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div class="mx-auto pt-6 lg:pt-12 lg:w-1100">
            <h1 class="text-4xl text-center mb-2 py-2 bg-falGLD text-white" style={{fontFamily: "futura_light_bt"}}>BRAND</h1>
            <p class="text-center mb-2">株式会社ファルコナーが展開するブランドの紹介です。</p>
            <div class="flex">
              <div class="pb-4">
                <a href="https://bachicashley.com/" target="_blank">
                  <Image class="object-cover" src="/images/brand/brand_ba1_ls.jpg" width={1100} height={540} />
                </a>
              </div>
            </div>
            <div class="flex">
              <div class="pb-4 lg:pb-0 mr-5">
                <a href='https://lurverri.com/' target="_blank">
                  <Image class="object-cover" src="/images/brand/top_brand_lv.png" width={540} height={324} />
                </a>
              </div>
              <div>
                <a href="https://www.rakuten.ne.jp/gold/allrightleather/" target="_blank">
                  <Image src="/images/brand/allrightleather.jpg" width={540} height={324} />
                </a>
              </div>
            </div>
          </div>

          <div class="mx-auto pt-6 lg:pt-12 lg:w-1100">
            <h1 class="text-4xl text-center mb-2 py-2 bg-falGLD text-white" style={{fontFamily: "futura_light_bt"}}>MEDIA</h1>
            <p class="text-center mb-2">ラジオ番組やSNSで情報を発信中です。</p>
            
            <div  class="relative">
              <div class="flex absolute z-10" style={{top: "50%", left: "50%", transform: "translate(-52%, -50%)"}}>
                <div class="inline-block">
                  <a href="https://www.instagram.com/masaki.s_japan/" target="_blank">
                    <Image src="/images/media/instagram_white_bg_bk.jpg" width={80} height={80} alt="instagaram_social" />
                  </a>
                </div>
                
                <div class="inline-block">
                  <a href="https://www.youtube.com/channel/UCynRnKX32Zr8Hh_Rst6Mrug" target="_blank">
                    <Image src="/images/media/youtube_white_bg_bk.jpg" width={80} height={80} alt="youtube_social" />
                  </a>
                </div>
                <div class="inline-block">
                  <a href="https://twitter.com/Nanami_Bondjam" target="_blank">
                    <Image src="/images/media/twitter_white_bg_bk.jpg" width={80} height={80} alt="twitter_social" />
                  </a>
                </div>
              </div>
              
              <Image src="/images/media/top-media.jpg" width={1100} height={620} />
            </div>
          </div>
          <div>
            <div class="mx-auto pt-12 mb-12 lg:pt-12 lg:w-1100">
              <div><h1 class="text-4xl text-center mb-2 py-2 bg-falGLD text-white" style={{fontFamily: "futura_light_bt"}}>ABOUT US</h1></div>
              <p class="text-center mb-2">株式会社ファルコナーの情報はこちらをご確認ください。</p>
              <div class="bg-black flex justify-center py-12">
                <Link href="/company">
                  <a><Image src="/images/logo/falconer-logo_borderwhite.png" width={500} height={104} alt="falconerinc_logo"/></a>
                </Link>
              </div>
            </div>
          </div>

        </main>
      </Layout>
    </div>
  )
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const key = {
    headers: {'X-API-KEY': process.env.API_KEY},
  };
  const data = await fetch('https://falconer.microcms.io/api/v1/topics', key)
    .then(res => res.json())
    .catch(() => null);
  return {
    props: {
      topics: data.contents,
    },
  };
};
