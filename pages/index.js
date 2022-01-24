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
    speed: 4000,
    autoplaySpeed: 8000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    lazyLoad: true,
    centerMode: false,
    adaptiveHeight: true,
    fade: true,
    arrows: false,
    className: 'slides',
    responsive: [
      {
        breakpoint: 700,
        settings: {
          centerMode: false,
          centerPadding: '0',
        },
      },
    ],
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
                        <img className="inline-block mx-auto w-full h-screen lg:h-full object-cover" src={slide.topics_ref.main_image_sp.url} />
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
    <div class="break-all">
      <Head>
        <title>株式会社Falconer(ファルコナー)</title>
        <link rel="icon" href="/falconer_favicons.png" />
        <meta property="og:image" content="https://www.falconer.co.jp/images/top/thumbnail.jpg" />
      </Head>
      <Layout>
        <main>
          {/* TOPスライダーセクション START */}
          <div class="mx-auto relative">
            <Slider {...settings}>
              {renderSlider(slides)}
            </Slider>
            <div class="w-full absolute top-32 md:inset-y-1/2">
              <div class="w-full pl-2 md:pl-20 text-white top_title">
                <h1 class="text-4xl md:text-5xl futura-md">Stay Strong,<br class="md:hidden" />Stay Kind,<br class="md:hidden" />Stay Happy</h1>
                <div class="leading-6 md:leading-10 NotoSans-L text-base md:text-xl mt-2">
                  <p>今日よりも、もっと幸せな明日を</p>
                  <p>最高品質の戦略的モノづくりカンパニー</p>
                </div>
              </div>
            </div>
          </div>
          {/* TOPスライダーセクション END */}

          {/* セカンドビュー START */}
          <section class="pt-8 mt-4 mx-auto text-center lg:max-w-full">
            <h2 class="text-base w-4/5 md:w-3/5 mx-auto md:text-xl md:pt-20 font-bold NotoSans-L">モノづくりを通じ、人々に幸せを広げ世界をより良くする</h2>
            <div class="text-left w-90% mt-10 mx-auto text-base_s md:text-lg lg:max-w-screen-md NotoSans-L">
              <p class="text-justify">私たちが掲げるのは人々の「幸せ」<br></br><br></br>商品を通したお客様の「幸せ」はもちろん、生産者や取引先様など、弊社に関わる全ての人々が「幸せ」であること。最高のモノづくりを通して私たちが住む世界をよりよいものに向かう挑戦をしていきます。
              </p>
            </div>
          </section>
          {/* セカンドビュー END */}

          {/* 取引パートナー様 START */}
          <section class="w-full mx-auto py-24 mt-24 md:py-36 md:mt-24 bg-gray-100">
            <h2 class="text-center futura-md text-1.7rem md:text-3xl">PARTNERS<span class="text-base md:text-xl font-light block NotoSans-L">取引パートナー様</span></h2>
            <ul class="text-center flex mx-auto md:w-1050 px-5 mt-6 md:justify-between overflow-x-auto">
              <li class="flex flex-col md:w-28 min-w-100 md:min-w-0">
                <img class="mt-auto" src="/images/top/logo_kddi.png" alt="ロゴ" />
                <dl class="mt-4">
                  <dt class="mt-0 text-0.55rem">KDDI株式会社様</dt>
                  <dd className="partner__tag pt_red">卸売事業</dd>
                </dl>
              </li>
              <li class="flex flex-col md:w-28 ml-8 md:ml-0 min-w-100 md:min-w-0">
                <img class="mt-auto" src="/images/top/logo_dmm.png" alt="ロゴ" />
                <dl class="mt-4">
                  <dt class="mt-0 text-0.55rem">株式会社DMM.com様</dt>
                  <dd className="partner__tag pt_green">OEM事業</dd>
                </dl>
              </li>
              <li class="flex flex-col md:w-28 ml-8 md:ml-0 min-w-100 md:min-w-0">
                <img class="mt-auto" src="/images/top/logo_tokyu_hands.png" alt="ロゴ" />
                <dl class="mt-4">
                  <dt class="mt-0 text-0.55rem">株式会社東急ハンズ様</dt>
                  <dd className="partner__tag pt_navy">催事支援</dd>
                </dl>
              </li>
              <li class="flex flex-col md:w-28 ml-8 md:ml-0 min-w-100 md:min-w-0">
                <img class="mt-auto" src="/images/top/logo_jp_post.png" alt="ロゴ" />
                <dl class="mt-4">
                  <dt class="mt-0 text-0.55rem">日本郵便株式会社</dt>
                  <dd className="partner__tag pt_red">卸売事業</dd>
                </dl>
              </li>
              <li class="flex flex-col md:w-28 ml-8 md:ml-0 min-w-100 md:min-w-0">
                <img class="mt-auto" src="/images/top/logo_onelove.png" alt="ロゴ" />
                <dl class="mt-4">
                  <dt class="mt-0 text-0.55rem">有限会社ワンラブ様</dt>
                  <dd className="partner__tag pt_green">OEM事業</dd>
                </dl>
              </li>
              <li class="flex flex-col md:w-28 ml-8 md:ml-0 min-w-100 md:min-w-0">
                <img class="mt-auto" src="/images/top/logo_rareleak.png" alt="ロゴ" />
                <dl class="mt-4">
                  <dt class="mt-0 text-0.55rem">レアリーク株式会社様</dt>
                  <dd className="partner__tag pt_red">卸売事業</dd>
                </dl>
              </li>
            </ul>
          </section>
          {/* 取引パートナー様 END */}


          {/* NEWSリスト START */}
          <section class="mx-auto mt-24 lg:max-w-screen-xl">
            <h2 class="text-center futura-md text-1.7rem md:text-3xl">NEWS<span class="text-base_s md:text-ms font-light block NotoSans-L">ニュース</span></h2>
            <ul class="mx-auto w-90% md:px-0 md:w-1050 mt-6">
              {
                topics
                  .slice(0, 4)
                  .map(topics => (
                    <li key={topics.id}>
                      <Link href={topics.link ? topics.link : `topics/${topics.id}`}>
                        <a class="flex flex-wrap md:flex-nowrap text-sm md:text-base md:flex-row py-4 border-b" target={topics.link && "blank_"}>
                          <div class="w-24 md:w-32 py-1 text-sm md:text-center">{getTopicDate(`${topics.datetime}`)}</div>
                          <div class={`${topics.category_color} rounded-2xl w-32 text-center font-light py-0.5 flex justify-center items-center`}>
                            <span class="text-white NotoSans-L text-sm">{topics.category}</span>
                          </div>
                          <p class="w-full mt-2 md:mt-0 md:w-auto md:ml-4 text-xs font-bold md:font-semibold NotoSans-L break-words text-justify md:truncate max-w-3xl md:flex md:items-center">{topics.title}</p>
                        </a>
                      </Link>
                    </li>
                  ))
              }
            </ul>
            <Link href="/topics">
              <a class="futura_medium_bt text-center text-base block mt-10 w-40 mx-auto border border-black py-2">詳細はこちら</a>
            </Link>
          </section>
          {/* NEWSリスト END */}

          {/* 事業内容 START */}
          <section className={`${styles.business} mx-auto bg-gray-100 pt-24 pb-56 md:pb-24`}>
            <h2 class="text-center futura-md text-1.7rem md:text-3xl">BUSINESS / PRODUCTS<span class="text-base_s md:text-xl font-light block NotoSans-L">事業内容</span></h2>
            <p class="text-base_s md:px-0 NotoSans-L w-90% md:w-2/5 mt-6 mx-auto leading-relaxed text-justify">
              製造から販売まで、自社で一貫して管理・遂行。BtoCはもちろん、独自の製造・販売チャネルにより、OEMや卸などのBtoBにおいても、品質・スピード感ともに高次元のサービスを提供します。
            </p>
            <ul class="mt-16 md:mt-24 md:flex md:flex-row md:flex-wrap md:justify-center">
              <li className={styles.business__item}>
                <img className={styles.business__img} src="/images/top/busi_01.jpg" alt="レザーアイテム製造・販売" />
              </li>
              <li className={styles.business__item}>
                <img className={styles.business__img} src="/images/top/busi_02.jpg" alt="アパレル" />
              </li>
              <li className={styles.business__item}>
                <img className={styles.business__img} src="/images/top/busi_03.jpg" alt="OEM" />
              </li>
              <li className={styles.business__item}>
                <img className={styles.business__img} src="/images/top/busi_04.jpg" alt="海外事業" />
              </li>
              <li className={styles.business__item}>
                <img className={styles.business__img} src="/images/top/busi_05.jpg" alt="EC事業" />
              </li>
              <li className={`${styles.business__item} md:w-full md:mt-20`}>
                <Link href="/company/business">
                  <a class="futura_medium_bt text-center text-base block mt-10 w-40 mx-auto border border-black py-2">詳細はこちら</a>
                </Link>
              </li>
            </ul>
          </section>
          {/* 事業内容 END */}

          {/* 会社情報 START */}
          <div className={`${styles.company_background}`}>
            <section className={`${styles.company} mx-auto lg:max-w-screen-xl`}>
              <h2 className={styles.company__title}>Falconer info<p>会社情報</p></h2>
              <p className={styles.company__text}>
                2016年の誕生以来、私たちはビジネスに関わる全ての人々の幸せを追求する姿勢を一貫して崩さず、邁進してきました。<br /><br />
                市場の求めているモノづくり、市場を創造するモノづくり。モノづくりだけにとどまらない挑戦の意思を持って、生産から顧客納品まで全てを自社一括で管理。<br /><br />
                変わり続ける時代と需要に応え続ける企業として、ご満足のいただけるモノづくりを提供いたします。
              </p>
              <div className={styles.company__button_area}>
                <Link href="/company">
                  <a class="futura_medium_bt text-center text-base block mt-10 w-40 mx-auto border border-black py-2">詳細はこちら</a>
                </Link>
              </div>
            </section>
          </div>
          {/* 会社情報 END */}

          {/* メディア START */}
          <div className={styles.media_background}>
            <section className={`${styles.media} mx-auto lg:max-w-screen-xl`}>
              <h2 class="text-center futura-md text-2xl md:text-3xl">MEDIA<span class="text-base_s md:text-xl font-light block NotoSans-L">メディア</span></h2>
              <div className={styles.media__img_area}>
                <img className={styles.media__img} src="/images/top/media_banner.jpg" alt="メディア" />
                <div class="bg-media_black text-white px-4 md:px-12 NotoSans-L flex flex-col justify-center h-72 w-full md:w-500 mx-auto mt-2 md:absolute md:opacity-95">
                  <h3 class="border-b border-white text-2xl pb-3">Radio<span class="text-base_s ml-3">ラジオ</span></h3>
                  <p class="mt-3 text-base_s break-all leading-relaxed md:leading-loose text-justify">
                    自社ブランドを手掛けるFALCONER代表取締役 清水がアイデザイナー、モデルとして活躍中のNANAMIと共に、ゲストの拘り、成功と幸せについて掘り下げていくプログラム。
                    <Link href="/media">
                      <a class="futura_medium_bt text-center text-white text-base block w-40 md:w-40 mx-auto mt-6">詳細はこちら<img class="w-full -mt-2" src="/images/top/more_button_wh.png"></img></a>
                    </Link>
                  </p>
                </div>
              </div>
              <div className={styles.media__img_area}>
                <img className={styles.media__img} src="/images/top/media_banner2.jpg" alt="メディア" />
                <div class="bg-media_black text-white px-4 md:px-12 NotoSans-L flex flex-col justify-center h-72 w-full md:w-500 mx-auto mt-2 md:absolute md:opacity-95">
                  <h3 class="border-b border-white text-2xl pb-3">Dialogue<span class="text-base_s ml-3">対談</span></h3>
                  <p class="mt-3 text-base_s break-all leading-relaxed md:leading-loose text-justify">
                    FALCONER設立以前から親交のある喜劇俳優の大村崑さんと、会社設立を経験し社長として歩みを進める今だからこそ実現したスペシャル対談。
                    <Link href="/media#Dialogue">
                      <a class="futura_medium_bt text-center text-white text-base block w-40 md:w-40 mx-auto mt-12">詳細はこちら<img class="w-full -mt-2" src="/images/top/more_button_wh.png"></img></a>
                    </Link>
                  </p>
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
            </section>
          </div>
          {/* メディア END */}

          {/* ブランドセクション START */}
          <section class="mt-24 md:mt-40 py-24 bg-gray-100 -mb-4">
            <h2 class="text-center futura-md text-1.7rem md:text-3xl">BRAND<span class="text-base md:text-xl font-light block NotoSans-L">ブランド</span></h2>
            <ul class="mx-auto max-w-full w-90% flex justify-around flex-col md:flex-row">
              <li class="mt-6 md:mt-4 md:w-600">
                <a href="https://bachicashley.com/" target="_blank">
                  <picture>
                    <source media="(max-width: 760px)" srcSet="/images/top/brand_bachicashley_sp.jpg" />
                    <img src="/images/top/brand_bachicashley.jpg" alt="BACHIC ASHLEY" />
                  </picture>
                </a>
              </li>
              <li class="mt-4 md:w-600">
                <a href="https://lurverri.com/" target="_blank">
                  <picture>
                    <source media="(max-width: 760px)" srcSet="/images/top/brand_lurverri_sp.jpg" />
                    <img src="/images/top/brand_lurverri.jpg" alt="Lurverri" />
                  </picture>
                </a>
              </li>
              <li class="mt-4 md:w-600">
                <a href="https://www.rakuten.ne.jp/gold/allrightleather/" target="_blank">
                  <picture>
                    <source media="(max-width: 760px)" srcSet="/images/top/brand_rakuten_sp.jpg" />
                    <img src="/images/top/brand_rakuten.jpg" alt="All Right Leather" />
                  </picture>
                </a>
              </li>
            </ul>
          </section>
          {/* ブランドセクション END */}

          {/* 問合せセクション START */}
          <section class="py-24 -mb-4">
            <h2 class="text-center futura-md text-1.7rem md:text-3xl text-black">CONTACT<span class="text-base md:text-xl font-light block NotoSans-L">お問合せ</span></h2>
            <h3 class="text-sm w-4/5 md:w-3/5 mx-auto md:text-xl mt-8 text-center NotoSans-L text-black">製品やファルコナーについてなど、<br />こちらからお気軽にお問い合わせ頂けます。</h3>
            <div class="text-center mt-10">
              <Link href="/contact">
                <a>
                  <button class="bg-comGOLD w-72 text-white font-bold py-2 rounded-2xl">まずは問い合わせしてみる</button>
                </a>
              </Link>
            </div>
            <div class="mt-8">
              <p class="mt-2 text-center text-3xl helvetica"><a class="w-52 block mx-auto text-black" href="tel:+81-52-734-7065">052-734-7065</a></p>
              <p class="text-center text-black text-xs mt-4">受付時間　10:00～19:00 (日曜 隔週土曜定休)</p>
            </div>
          </section>
          {/* 問合せセクション END */}
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
