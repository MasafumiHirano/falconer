import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Slider from "react-slick";

import Layout from '../components/layout'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Home({slides,topics,readings}) {
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

  const renderSlider = (slides) => {
    return (
    slides.filter((slide)=>(
      slide.visible == true
    ))
    .map((slide)=> (
      slide.topics_ref ?
      slide.topics_ref.main_image_sp ?
      <div>
        <Link href={`/topics/${slide.topics_ref.id}`}><a>
        <picture>
          <source media="(min-width: 960px)" srcset={slide.topics_ref.main_image.url} />
          <img className="inline-block mx-auto w-full h-screen lg:h-auto object-cover" src={slide.topics_ref.main_image_sp.url} />
        </picture>
        {/*<img className="inline-block mx-auto w-full h-screen lg:h-auto object-cover" src={slide.topics_ref.main_image_sp.url} width={1280} height={640} alt="bachicashley_hero"/>*/}
        </a></Link>
      </div>
      :
      <div>
        <Link href={`/topics/${slide.topics_ref.id}`}><a>
          <img className="inline-block mx-auto w-full h-screen lg:h-auto object-cover" src={slide.topics_ref.main_image.url} width={1280} height={640} alt="bachicashley_hero"/>
        </a></Link>
      </div>
      :
      slide.slider_image_sp ?
      <div>
        <a href={slide.link}>
        <picture>
          <source media="(min-width: 960px)" srcset={slide.slider_image.url} />
          <img className="inline-block mx-auto w-full h-screen lg:h-auto object-cover" src={slide.slider_image_sp.url} />
        </picture>
          {/*<img className="inline-block mx-auto w-full h-screen lg:h-auto object-cover" src={slide.slider_image_sp.url} width={1280} height={640} alt="bachicashley_hero"/>*/}
        </a>
      </div>
      :
      <div>
        <a href={slide.link}>
          <img className="inline-block mx-auto w-full h-screen lg:h-auto object-cover" src={slide.slider_image.url} width={1280} height={640} alt="bachicashley_hero"/>
        </a>
      </div>
    ))
    )
  }

  return (
    <div>
      <Head>
        <title>株式会社Falconer(ファルコナー)</title>
        <link rel="icon" href="/falconer_favicons.png" />
      </Head>
      <Layout>
        <main>
          {/* TOPスライダーセクション START */}
          <div class="mx-auto">
            <Slider {...settings}>
              {renderSlider(slides)}
            </Slider>
          </div>
          {/* TOPスライダーセクション END */}

          {/* 新着情報セクション START */}
          <div>
            <div class="mx-auto py-6 lg:py-12 lg:w-1100">
              <Link href="/topics">
                <a><h1 class="Osaka font-bold text-xl lg:text-3xl text-center mb-2 py-2 tracking-wider">新着情報ひらの</h1></a>
              </Link>
              <p class="text-center mb-2">ファルコナーの最新の情報をお届けします。</p>
              <div class="overflow-x-auto">
                <div class="w-920 lg:w-1100">
                  <ul class="grid grid-cols-3 gap-x-1 gap-y-6 lg:gap-x-4 lg:gap-y-12">
                    {
                    topics.filter(topic => (
                        topic.toppage == true
                      ))
                    .slice(0,3)
                    .map(topic => (
                      <li key={topic.id} class="shadow hover:bg-gray-100 m-2">
                        <Link href={`topics/${topic.id}`}>
                          <a>
                            <div class="">
                              <div>
                                <Image src={`${topic.main_image.url}`} width={1100} height={550} alt=""/>
                              </div>
                              <div class="p-2 h-14 lg:h-20 lg:mb-2 overflow-hidden">
                                <p class="font-semibold helvetica" style={{fontSize: "17px"}}>{topic.title}</p>
                              </div>
                              <div class="p-2 lg:flex lg:pt-0 flex-wrap">
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
          </div>
          {/* 新着情報セクション END */}

          {/* 企業情報セクション START */}
          <div
            class="bg-center"
            style={{ backgroundImage: "url(../images/top/top_section_company_bg1.jpg)"}}
          >
            <div class="mx-auto py-6 mb-6 lg:mb-12 lg:py-12 lg:w-1100">
              <Link href="/company">
                <a><h1 class="Osaka font-bold text-xl lg:text-3xl text-center mb-2 py-2 tracking-wider">企業情報</h1></a>
              </Link>
              <p class="text-center mb-2">ファルコナーの情報はこちらをご確認ください。</p>
              <Link href="/company">
                <a><Image src="/images/top/image_1100x200.png" width={1100} height={200} alt="company_info"/></a>
              </Link>
            </div>
          </div>
          {/* 企業情報セクション END */}

          {/* 事業内容セクション START */}
          <div>
            <div class="mx-auto pt-6 mb-6 lg:mb-12 lg:pt-12 lg:w-1100">
              <Link href="/company">
                <a><h1 class="Osaka font-bold text-xl lg:text-3xl text-center mb-2 py-2 tracking-wider">事業内容</h1></a>
              </Link>
              <p class="text-center mb-2">ファルコナーの事業内容をご紹介します。</p>
              <div>
            <div class="mx-auto lg:w-1100">
              
              <div class="lg:flex lg:justify-center">
                <div class="pb-4 w-full lg:w-1/2 lg:mr-5">
                  <div class="relative">
                    <div
                      class="Osaka absolute z-10 w-1/2 text-white text-center text-md lg:text-base py-2 px-2 lg:px-4 bg-falGLD border border-solid border-white tracking-widest"
                      style={{ backgroundColor: "rgba(121,107,88,0.7)", top:"50%", left:"50%", transform: "translate(-50%,-50%)"}}
                    >
                      レザーアイテム
                    </div>
                    <Image className="object-cover" src="/images/company/prod01.png" width={1100} height={730} />
                  </div>
                </div>

                <div class="pb-4 w-full lg:w-1/2">
                  <div class="relative">
                    <div
                      class="Osaka absolute z-10 w-170 text-white text-center text-md lg:text-base py-2 px-2 lg:px-4 bg-falGLD border border-solid border-white tracking-widest"
                      style={{ backgroundColor: "rgba(121,107,88,0.7)", top:"50%", left:"50%", transform: "translate(-50%,-50%)"}}
                    >
                      アパレル
                    </div>
                    <Image className="object-cover" src="/images/company/apa.jpg" width={1100} height={730} />
                  </div>
                </div> 
              </div>
              
              <div class="lg:flex lg:justify-center">
                <div class="pb-4 w-full lg:w-1/2 lg:mr-5">
                  <div class="relative">
                    <div
                      class="Osaka absolute z-10 w-170 text-white text-center text-md lg:text-base py-2 px-1 lg:px-0 bg-falGLD border border-solid border-white tracking-widest"
                      style={{ backgroundColor: "rgba(121,107,88,0.7)", top:"50%", left:"50%", transform: "translate(-50%,-50%)"}}
                    >
                      OEM/ODM 事業
                    </div>
                    <Image className="object-cover" src="/images/company/prod02.png" width={1100} height={730} />
                  </div>
                </div>

                <div class="pb-4 w-full lg:w-1/2">
                  <div class="relative">
                    <div
                      class="Osaka absolute z-10 w-170 text-white text-center text-md lg:text-base py-2 px-2 lg:px-4 bg-falGLD border border-solid border-white tracking-widest"
                      style={{ backgroundColor: "rgba(121,107,88,0.7)", top:"50%", left:"50%", transform: "translate(-50%,-50%)"}}
                    >
                      海外事業
                    </div>
                    <Image className="object-cover" src="/images/company/prod05.png" width={1100} height={730} />
                  </div>
                </div>
              </div>

              <div class="mt-6 lg:mt-12">
                <Link href="/company/business"><a>
                <div class="w-170 lg:w-320 mx-auto border border-black border-solid text-center py-2 hover:bg-black hover:text-white transition duration-300 ease-in-out">
                  詳細はこちら
                </div>
                </a></Link>
              </div>

            </div>
          </div>
              
            </div>
          </div>
          {/* 事業内容セクション END */}

          {/* メディアセクション START */}
          <div
            class="bg-center"
            style={{ backgroundImage: "url(../images/top/top_section_company_bg2.jpg)"}}
          >
            <div class="mx-auto py-6 lg:py-12 lg:w-1100 bg-center">
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

              {/* 読み物セクション START */}
              <div class="mx-auto py-6 lg:py-12 lg:w-1100">
                <Link href="/readings">
                  <a><h1 class="Osaka font-bold text-lg lg:text-xl text-center mb-2 py-2 tracking-wider">読み物</h1></a>
                </Link>
                <div class="overflow-x-scroll">
                  <ul class="flex w-920 lg:w-full">
                    {
                    readings
                    .slice(0,3)
                    .map(reading => (
                      <li key={reading.id} class="shadow hover:bg-gray-100 m-2">
                        <Link href={`readings/${reading.id}`}><a>
                          <Image src={`${reading.main_image.url}`} width={1100} height={550} alt=""/>
                          <div class="p-2 h-14 lg:h-20 lg:mb-2 overflow-hidden">
                            <p class="font-semibold helvetica" style={{fontSize: "17px"}}>{reading.title}</p>
                          </div>
                          <div class="p-2 lg:flex lg:pt-0 flex-wrap">
                            {reading.tag.map(tag => (
                              <div class="inline-block mt-2 mr-2 mb-4">
                                <span class="px-2 lg:px-4 py-1 lg:py-2 mb-2 bg-gray-200 rounded-full text-xs whitespace-nowrap">{tag.tagname}</span>
                              </div>
                            ))}
                          </div>
                        </a></Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* 読み物セクション END */}
            </div>
          </div>
          {/* メディアセクション END */}

          {/* ブランドセクション START */}
          <div class="mx-auto py-6 lg:py-12 lg:w-1100">
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
          {/* ブランドセクション END */}
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
  const readings = await fetch('https://falconer.microcms.io/api/v1/readings', key)
    .then(res => res.json())
    .catch(() => null);
  return {
    props: {
      slides: topslides.contents,
      topics: topics.contents,
      readings: readings.contents,
    },
  };
};
