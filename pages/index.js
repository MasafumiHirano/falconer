import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Slider from "react-slick";

import Layout from '../components/layout'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Home({slides,topics}) {
  //slider設定
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    lazyLoad: true,
    centerMode: false,
    adaptiveHeight: true,
    fade: false,
    arrows: true,
    className: 'slides'
};

  return (
    <div>
      <Head>
        <title>株式会社Falconer(ファルコナー)</title>
        <link rel="icon" href="/falconer_favicons.png" />
      </Head>
      <Layout>
        <main>
          <div class="bg-black lg:h-640">
            <div class="mx-auto h-full">
              <Slider {...settings}>
                {
                  slides.filter((slide)=>(
                    slide.visible == true
                  ))
                  .map((slide)=> (
                    slide.topics_ref ? 
                    <div>
                      <Link href={`/topics/${slide.topics_ref.id}`}><a>
                      <img className="inline-block mx-auto" src={slide.topics_ref.main_image.url} width={1280} height={640} alt="bachicashley_hero"/>
                      </a></Link>
                    </div>
                    :
                    <div>
                      <a href={slide.link}>
                        <img className="inline-block mx-auto" src={slide.slider_image.url} width={1280} height={640} alt="bachicashley_hero"/>
                      </a>
                    </div>
                  ))
                }
              </Slider>
            </div>
          </div>

          <div>
            <div class="mx-auto py-6 lg:py-12 lg:w-1100">
              <Link href="/topics">
                <a><h1 class="Osaka font-bold text-xl lg:text-3xl text-center mb-2 py-2 tracking-wider">最新情報</h1></a>
              </Link>
              <p class="text-center mb-2">ファルコナーの最新の情報をお届けします。</p>
              <div>
                <ul class="lg:grid lg:grid-cols-3 gap-x-3 gap-y-6 lg:gap-x-4 lg:gap-y-12">
                  {
                  topics.filter(topic => (
                      topic.toppage == true
                    ))
                  .slice(0,3)
                  .map(topic => (
                    <li key={topic.id} class="">
                      <Link href={`topics/${topic.id}`}>
                        <a>
                          <div class="px-2 lg:px-0">
                            <div>
                              <Image src={`${topic.main_image.url}`} width={1100} height={550} alt=""/>
                            </div>
                            <div class="h-12 lg:h-20 lg:mb-2 overflow-hidden">
                              <p class="font-semibold helvetica" style={{fontSize: "17px"}}>{topic.title}</p>
                            </div>
                            <div class="lg:flex lg:pt-0 flex-wrap">
                              {topic.tag.map(tag => (
                                <div class="inline-block mt-2 mr-2 mb-4">
                                  <span class="px-2 lg:px-4 py-1 lg:py-2 mb-2 bg-gray-200 rounded-full text-xs whitespace-nowrap">{tag.tagname}</span>
                                </div>
                              ))}
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
            <Link href="/brand">
              <a><h1 class="Osaka font-bold text-xl lg:text-3xl text-center mb-2 py-2 ">ブランド</h1></a>
            </Link>
            <p class="text-center mb-2">ファルコナーが展開するブランドの紹介です。</p>
            <div class="flex">
              <div class="pb-4">
                <a href="https://bachicashley.com/" target="_blank">
                  <Image class="object-cover" src="/images/brand/top-icatch6.jpg" width={1100} height={540} />
                </a>
              </div>
            </div>
            <div class="lg:flex">
              <div class="pb-4 lg:pb-0 lg:mr-5">
                <a href='https://lurverri.com/' target="_blank">
                  <Image class="object-cover" src="/images/brand/top_brand_lv.png" width={1100} height={540} />
                </a>
              </div>
              <div>
                <a href="https://www.rakuten.ne.jp/gold/allrightleather/" target="_blank">
                  <Image class="object-cover" src="/images/brand/allRightLeather_corporate.jpg" width={1100} height={540} />
                </a>
              </div>
            </div>
          </div>

          <div class="mx-auto pt-6 lg:pt-12 lg:w-1100">
            <Link href="/media">
              <a><h1 class="Osaka font-bold text-xl lg:text-3xl text-center mb-2 py-2">メディア</h1></a>
            </Link>
            <p class="text-center mb-2">ラジオ番組やSNSで情報を発信中です。</p>
            
            <div  class="relative">
              <div class="flex absolute z-10" style={{top: "75%", left: "50%", transform: "translate(-52%, -50%)"}}>
                <div class="inline-block">
                  <a href="https://www.instagram.com/masaki.s_japan/" target="_blank">
                    <Image src="/images/media/instagram_white_bg_bk.jpg" width={80} height={80} alt="instagaram_social" />
                  </a>
                </div>
                
                <div class="inline-block -ml-px">
                  <a href="https://www.youtube.com/channel/UCynRnKX32Zr8Hh_Rst6Mrug" target="_blank">
                    <Image src="/images/media/youtube_white_bg_bk.jpg" width={80} height={80} alt="youtube_social" />
                  </a>
                </div>

                <div class="inline-block -ml-px">
                  <a href="https://twitter.com/Nanami_Bondjam" target="_blank">
                    <Image src="/images/media/twitter_white_bg_bk.jpg" width={80} height={80} alt="twitter_social" />
                  </a>
                </div>
              </div>
              <Link href="/media">
                <a><Image src="/images/media/brandstory.png" width={1100} height={620} /></a>
              </Link>
            </div>
          </div>
          <div>
            <div class="mx-auto pt-6 mb-6 lg:mb-12 lg:pt-12 lg:w-1100">
              <Link href="/company">
                <a><h1 class="Osaka font-bold text-xl lg:text-3xl text-center mb-2 py-2 tracking-wider">企業情報</h1></a>
              </Link>
                <p class="text-center mb-2">ファルコナーの情報はこちらをご確認ください。</p>
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
  const topslides = await fetch('https://falconer.microcms.io/api/v1/topslides', key)
    .then(res => res.json())
    .catch(() => null);
  const topics = await fetch('https://falconer.microcms.io/api/v1/topics', key)
    .then(res => res.json())
    .catch(() => null);
  return {
    props: {
      slides: topslides.contents,
      topics: topics.contents,
    },
  };
};
