import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Slider from "react-slick";
import Layout from '../components/layout'
import styles from '../styles/Index.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import moment from 'moment';


export default function Home({ slides, topics, readings }) {
  //slider設定
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    lazyLoad: true,
    centerMode: false,
    adaptiveHeight: true,
    fade: false,
    arrows: false,
    className: 'slides'
  };

  const getTopicDate = (date) => {
    var d = ''
    d = moment(date)
    return (
      d.format("YYYY.MM.DD")
    )
  }

  const renderSlider = (slides) => {
    return (
      slides.filter((slide) => (
        slide.visible == true
      ))
        .map((slide) => (
          <div key={slide.id}>
            {
              slide.topics_ref ?
                slide.topics_ref.main_image_sp ?
                  <div>
                    <Link href={`/topics/${slide.topics_ref.id}`}><a>
                      <picture>
                        <source media="(min-width: 960px)" srcSet={slide.topics_ref.main_image.url} />
                        <img className="inline-block mx-auto w-full h-screen lg:h-auto object-cover" src={slide.topics_ref.main_image_sp.url} />
                      </picture>
                      {/*<img className="inline-block mx-auto w-full h-screen lg:h-auto object-cover" src={slide.topics_ref.main_image_sp.url} width={1280} height={640} alt="bachicashley_hero"/>*/}
                    </a></Link>
                  </div>
                  :
                  <div>
                    <Link href={`/topics/${slide.topics_ref.id}`}><a>
                      <img className="inline-block mx-auto w-full h-screen lg:h-auto object-cover" src={slide.topics_ref.main_image.url} width={1280} height={640} alt="bachicashley_hero" />
                    </a></Link>
                  </div>
                :
                slide.slider_image_sp ?
                  <div>
                    <a href={slide.link}>
                      <picture>
                        <source media="(min-width: 960px)" srcSet={slide.slider_image.url} />
                        <img className="inline-block mx-auto w-full lg:h-auto object-cover" src={slide.slider_image_sp.url} />
                      </picture>
                      {/*<img className="inline-block mx-auto w-full h-screen lg:h-auto object-cover" src={slide.slider_image_sp.url} width={1280} height={640} alt="bachicashley_hero"/>*/}
                    </a>
                  </div>
                  :
                  <div>
                    <a href={slide.link}>
                      <img className="inline-block mx-auto w-full h-screen lg:h-auto object-cover" src={slide.slider_image.url} width={1280} height={640} alt="bachicashley_hero" />
                    </a>
                  </div>
            }
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

          {/* セカンドビュー START */}
          <section class="pt-20 mx-auto -mt-2 bg-black text-white text-center lg:max-w-full">
            <h2 class="text-base w-3/5 mx-auto md:text-xl pt-20 font-bold NotoSans-L">モノづくりを通じ、人々に幸せを広げ世界をより良くする</h2>
            <div class="text-left w-4/5 mt-10 pb-28 mx-auto text-ms md:text-lg lg:max-w-screen-md NotoSans-L">
              <p class="">私たちが掲げるのは人々の「幸せ」<br></br><br></br>商品を通したお客様の「幸せ」はもちろん、生産者や取引先様など、弊社に関わる全ての人々が「幸せ」であること。最高のモノづくりを通して私たちが住む世界をよりよいものに向かう挑戦をしていいきます。
              </p>
            </div>
          </section>
          {/* セカンドビュー END */}

          {/* 取引パートナー様 START */}
          <section class="mx-auto mt-20 md:mt-28 lg:max-w-screen-xl">
            <h2 class="text-center futura-md text-3xl">PARTNERS<span class="text-xl font-light block NotoSans-L">取引パートナー様</span></h2>
            <ul class="text-center flex mx-auto w-full mt-12 justify-between overflow-x-auto">
              <li class="flex flex-col md:w-175 min-w-210 md:min-w-0">
                <img class="mt-auto " src="/images/top/logo_onelove.png" alt="ロゴ" />
                <dl class="mt-auto">
                  <dt class="mt-7">有限会社ワンラブ様</dt>
                  <dd className="partner__tag--green">OEM事業</dd>
                </dl>
              </li>
              <li class="flex flex-col md:w-175 ml-12 md:ml-0 min-w-210 md:min-w-0">
                <img class="mt-auto" src="/images/top/logo_rareleak.png" alt="ロゴ" />
                <dl class="mt-auto">
                  <dt>レアリーク株式会社様</dt>
                  <dd className="partner__tag--red">卸売事業</dd>
                </dl>
              </li>
              <li class="flex flex-col md:w-175 ml-12 md:ml-0 min-w-210 md:min-w-0">
                <img class="mt-auto" src="/images/top/logo_dmm.png" alt="ロゴ" />
                <dl class="mt-auto">
                  <dt>株式会社DMM.com様</dt>
                  <dd className="partner__tag--green">OEM事業</dd>
                </dl>
              </li>
              <li class="flex flex-col md:w-175 ml-12 md:ml-0 min-w-210 md:min-w-0">
                <img class="mt-auto" src="/images/top/logo_tokyu_hands.png" alt="ロゴ" />
                <dl class="mt-auto">
                  <dt>株式会社東急ハンズ様</dt>
                  <dd className="partner__tag--blue">催事支援</dd>
                </dl>
              </li>
              <li class="flex flex-col md:w-175 ml-12 md:ml-0 min-w-210 md:min-w-0">
                <img class="mt-auto" src="/images/top/logo_jp_post.png" alt="ロゴ" />
                <dl class="mt-auto">
                  <dt>日本郵便株式会社</dt>
                  <dd className="partner__tag--red">卸売事業</dd>
                </dl>
              </li>
            </ul>
          </section>
          {/* 取引パートナー様 END */}


          {/* NEWSリスト START */}
          <section class="mx-auto mt-28 lg:max-w-screen-xl">
            <h2 class="text-center futura-md text-3xl">NEWS<span class="text-xl font-light block NotoSans-L">ニュース</span></h2>
            <ul class="mx-auto w-11/12 md:w-full mt-12">
              {
                topics
                  .slice(0, 4)
                  .map(topics => (
                    <li key={topics.id} class="flex flex-wrap md:flex-row md:justify-center py-4 border-b">
                      <div class="w-28 md:w-32 md:text-center">{getTopicDate(`${topics.datetime}`)}</div>
                      <div class={`${topics.category_color} rounded-2xl w-32 text-center`}>
                        <span class="text-white NotoSans-L">{topics.category}</span>
                      </div>
                      <p class="w-full mt-2 md:mt-0 md:w-9/12 md:ml-4 NotoSans-L break-words">{topics.title}</p>
                    </li>
                  ))
              }
            </ul>
          </section>
          {/* NEWSリスト END */}

          {/* 事業内容 START */}
          <section className={`${styles.business} mx-auto lg:max-w-screen-xl`}>
            <h2 class="text-center futura-md text-3xl">BUSINESS / PRODUCTS<span class="text-xl font-light block NotoSans-L">事業内容</span></h2>
            <p class="text-ms font-light NotoSans-L w-11/12 md:w-2/5 mt-8 mx-auto">
              製造から販売まで、自社で一貫して管理・遂行。BtoCはもちろん、独自の製造・販売チャネルにより、OEMや卸などのBtoBにおいても、品質・スピード感ともに高次元のサービスを提供します。
            </p>
            <ul class="mt-4 md:flex md:flex-row md:flex-wrap md:justify-center">
              <li className={styles.business__item}>
                <img className={styles.business__img} src="/images/top/business_leather.png" alt="レザーアイテム製造・販売" />
              </li>
              <li className={styles.business__item}>
                <img className={styles.business__img} src="/images/top/business_apparel.png" alt="アパレル" />
              </li>
              <li className={styles.business__item}>
                <img className={styles.business__img} src="/images/top/business_oem.png" alt="OEM" />
              </li>
              <li className={styles.business__item}>
                <img className={styles.business__img} src="/images/top/business_global.png" alt="海外事業" />
              </li>
              <li className={styles.business__item}>
                <img className={styles.business__img} src="/images/top/business_ec.png" alt="EC事業" />
              </li>
              <li className={`${styles.business__item} md:w-full md:mt-10`}>
                <Link href="/company/business">
                  <a class="futura_medium_bt text-center text-2xl block w-28 mx-auto">More<img class="w-28" src="/images/top/more_button.png"></img></a>
                </Link>
              </li>
            </ul>
          </section>
          {/* 事業内容 END */}

          {/* 会社情報 START */}
          <div className={`${styles.company_background}`}>
            <section className={`${styles.company} mx-auto lg:max-w-screen-xl`}>
              <h2 className={styles.company__title}>FALCONER info<p class="NotoSans-L">会社情報</p></h2>
              <p className={styles.company__text}>
                2016年の誕生以来、私たちはビジネスに関わる全ての人々の幸せを追求する姿勢を一貫して崩さず、邁進してきました。<br/><br/>モノづくりだけにとどまらない挑戦の意思で未来の人々の幸せとクロスオーバーしていきます。
              </p>
              <div className={styles.company__button_area}>
                <Link href="/company">
                  <a class="futura_medium_bt text-center text-2xl block w-32 mx-auto">More<img class="w-32" src="/images/top/more_button.png"></img></a>
                </Link>
              </div>
            </section>
          </div>
          {/* 会社情報 END */}

          {/* メディア START */}
          <div className={styles.media_background}>
            <section className={`${styles.media} mx-auto lg:max-w-screen-xl`}>
              <h2 class="text-center futura-md text-3xl">MEDIA<span class="text-xl font-light block NotoSans-L">メディア</span></h2>
              <div className={styles.media__img_area}>
                <img className={styles.media__img} src="/images/top/media_banner.jpg" alt="メディア" />
                <div class="bg-media_black text-white px-4 md:px-16 NotoSans-L flex flex-col justify-center h-72 w-4/5 md:w-600 mx-auto mt-2 md:absolute md:opacity-95">
                  <h3 class="border-b border-white text-base md:text-3xl pb-3">RADIO<span class="text-xs md:text-xl ml-3">ラジオ</span></h3>
                  <p class="mt-3 text-sm md:text-lg break-all">自社ブランドを手がける、FALCONER代表取締役 清水がアイデザイナーやモデルとして活躍中のNANAMIと共にラジオMCとして、ゲストの拘りについて、また成功と幸せについてを掘り下げていく対談プログラム。</p>
                </div>
              </div>
              <div className={styles.media__img_area}>
                <img className={styles.media__img} src="/images/top/media_banner2.jpg" alt="メディア" />
                <div class="bg-media_black text-white px-4 md:px-16 NotoSans-L flex flex-col justify-center h-72 w-4/5 md:w-600 mx-auto mt-2 md:absolute md:opacity-95">
                  <h3 class="border-b border-white text-base md:text-3xl pb-3">Dialogue<span class="text-xs md:text-xl ml-3">対談</span></h3>
                  <p class="mt-3 text-sm md:text-lg break-all">FALCONER設立以前から信仰のある喜劇俳優の大村崑さんと、会社設立を経験し社長として歩みを進める今だからこそ実現した対談。</p>
                </div>
              </div>
              {/* 
              <ul className={styles.media__blog_list}>
                {
                  readings
                    .slice(0, 3)
                    .map(reading => (
                      <li key={reading.id} className={styles.media__blog_item}>
                        <Link href={`/readings/${reading.id}`}>
                          <a>
                            <div className={styles.media__blog_img_layout}>
                              <img className={styles.media__blog_img} src={reading.main_image.url} alt="サムネイル画像" />
                            </div>
                            <div className={styles.media__blog_item__flex}>
                              <span className={styles.media__blog_item__tag}>Talk#{reading.no}</span>
                              <p className={styles.media__blog_item__gest}>{reading.gest}</p>
                            </div>
                            <p className={styles.media__blog_item__title}>{reading.title}</p>
                          </a>
                        </Link>
                      </li>
                    ))
                }
              </ul>
              */}
              <div className={styles.media__button_area}>
                <Link href="/media">
                <a class="futura_medium_bt text-center text-2xl block w-32 mx-auto">More<img class="w-32" src="/images/top/more_button.png"></img></a>
                </Link>
              </div>
            </section>
          </div>
          {/* メディア END */}

          {/* ブランドセクション START */}
          <h2 class="mt-20 text-center futura-md text-3xl">BRAND<span class="text-xl font-light block NotoSans-L">ブランド</span></h2>
          <ul class="mx-auto max-w-full w-ful flex justify-around flex-col md:flex-row">
            <li class="px-2 mt-4 md:w-600">
              <a href="https://bachicashley.com/" target="_blank">
                <img src="/images/top/brand_bachicashley.jpg" alt="BACHIC ASHLEY" />
              </a>
            </li>
            <li class="px-2 mt-4 md:w-600">
              <a href="https://lurverri.com/" target="_blank">
                <img src="/images/top/brand_lurverri.jpg" alt="Lurverri" />
              </a>
            </li>
            <li class="px-2 mt-4 md:w-600">
              <a href="https://www.rakuten.ne.jp/gold/allrightleather/" target="_blank">
                <img src="/images/top/brand_rakuten.jpg" alt="All Right Leather" />
              </a>
            </li>
          </ul>
          {/* ブランドセクション END */}
        </main>
      </Layout>
    </div >
  )
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY },
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
