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
                    <Link legacyBehavior href={`/topics/${slide.topics_ref.id}`}><a>
                      <picture>
                        <source media="(min-width: 960px)" srcSet={slide.topics_ref.main_image.url} />
                        <img className="inline-block mx-auto w-full h-screen lg:h-full object-cover" src={slide.topics_ref.main_image_sp.url} />
                      </picture>
                      {/*<img className="inline-block mx-auto w-full h-screen lg:h-auto object-cover" src={slide.topics_ref.main_image_sp.url} width={1280} height={640} alt="bachicashley_hero"/>*/}
                    </a></Link>
                  </div>
                  :
                  <div>
                    <Link legacyBehavior href={`/topics/${slide.topics_ref.id}`}><a>
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
    <div className="break-all">
      <Head>
        <title>株式会社Falconer(ファルコナー)</title>
        <link rel="icon" href="/falconer_favicons.png"/>
        <meta property="og:image" content="https://www.falconer.co.jp/images/top/thumbnail.jpg" />
      </Head>
      <Layout>
        <main>
          {/* TOPスライダーセクション START */}
          <div className="mx-auto relative">
            <Slider {...settings}>
              {renderSlider(slides)}
            </Slider>
            <div className="w-full absolute top-32 md:inset-y-1/2">
              <div className="w-full pl-2 md:pl-20 text-white top_title">
                <h1 className="text-4xl md:text-5xl futura-md">Stay Strong,<br className="md:hidden" />Stay Kind,<br className="md:hidden" />Stay Happy</h1>
                <div className="leading-6 md:leading-10 NotoSans-L text-base md:text-xl mt-2">
                  <p>今日よりも、もっと幸せな明日を</p>
                  <p>最高品質の戦略的モノづくりカンパニー</p>
                </div>
              </div>
            </div>
          </div>
          {/* TOPスライダーセクション END */}

          {/* セカンドビュー START */}
          <section className="pt-8 mt-4 mx-auto text-center lg:max-w-full">
            <h2 className="text-base w-4/5 md:w-3/5 mx-auto md:text-xl lg:text-2xl md:pt-20 NotoSans font-bold">モノづくりを通じ、人々に幸せを広げ<br className="md:hidden"/>世界をより良くする</h2>
            <div className="text-left w-90% mt-10 mx-auto text-base_s md:text-lg lg:max-w-screen-md NotoSans-L">
              <p className="text-justify">私たちが掲げるのは人々の「幸せ」。<br></br><br></br>商品を通したお客様の「幸せ」はもちろん、生産者や取引先様など、弊社に関わる全ての人々が「幸せ」であること。最高のモノづくりを通して私たちが住む世界をよりよいものに向かう挑戦をしていきます。
              </p>
            </div>
          </section>
          {/* セカンドビュー END */}

          {/* 取引パートナー様 START */}
          <section className="w-full mx-auto py-24 mt-24 md:py-36 md:mt-24 bg-gray-100">
            <h2 className="text-center futura-md text-1.7rem md:text-3xl">PARTNERS<span className="text-base_s md:text-ms font-light block NotoSans">取引パートナー様</span></h2>
            <ul className="text-center flex mx-auto md:w-1050 px-5 mt-6 md:justify-between overflow-x-auto">
              <li className="flex flex-col md:w-28 min-w-120 md:min-w-0">
                <div className="flex flex-col h-24">
                  <div className="flex-grow w-100 h-8 mx-auto relative"><img className="m-auto top-0 bottom-0 right-0 left-0 absolute" src="/images/top/logo_kddi.png" alt="ロゴ" /></div>
                  <dl className="mt-4">
                    <dt className="mt-0 text-0.55rem">KDDI株式会社様</dt>
                    <dd className="partner__tag pt_red">卸売事業</dd>
                  </dl>
                </div>
                <div className="flex flex-col mt-8">
                  <div className="flex-grow w-100 h-8 mx-auto relative"><img className="m-auto top-0 bottom-0 right-0 left-0 absolute" src="/images/top/docomo.png" alt="ロゴ" /></div>
                  <dl className="mt-4">
                    <dt className="mt-0 text-0.55rem">株式会社NTTドコモ様</dt>
                    <dd className="partner__tag pt_red">卸売事業</dd>
                  </dl>
                </div>
              </li>
              <li className="flex flex-col md:w-28 ml-12 md:ml-0 min-w-120 md:min-w-0">
                <div className="flex flex-col h-24">
                  <div className="flex-grow w-100 h-8 mx-auto relative"><img className="m-auto top-0 bottom-0 right-0 left-0 absolute" src="/images/top/logo_dmm.png" alt="ロゴ" /></div>
                  <dl className="mt-4">
                    <dt className="mt-0 text-0.55rem">株式会社DMM.com様</dt>
                    <dd className="partner__tag pt_green">OEM事業</dd>
                  </dl>
                </div>
                <div className="flex flex-col mt-8">
                  <div className="flex-grow w-100 h-8 mx-auto relative"><img className="m-auto top-0 bottom-0 right-0 left-0 absolute" src="/images/top/amazon.png" alt="ロゴ" /></div>
                  <dl className="mt-4">
                    <dt className="mt-0 text-0.55rem">Amazon.com inc様</dt>
                    <dd className="partner__tag pt_red">卸売事業</dd>
                  </dl>
                </div>
              </li>
              <li className="flex flex-col md:w-28 ml-12 md:ml-0 min-w-120 md:min-w-0">
                <div className="flex flex-col h-24">
                  <div className="flex-grow w-100 h-8 mx-auto relative"><img className="m-auto top-0 bottom-0 right-0 left-0 absolute" src="/images/top/logo_jp_post.png" alt="ロゴ" /></div>
                  <dl className="mt-4">
                    <dt className="mt-0 text-0.55rem">日本郵便株式会社</dt>
                    <dd className="partner__tag pt_red">卸売事業</dd>
                  </dl>
                </div>
                <div className="flex flex-col mt-8">
                  <div className="flex-grow w-100 h-8 mx-auto relative"><img className="m-auto top-0 bottom-0 right-0 left-0 absolute" src="/images/top/toyota.png" alt="ロゴ" /></div>
                  <dl className="mt-4">
                    <dt className="mt-0 text-0.55rem">トヨタ自動車株式会社様</dt>
                    <dd className="partner__tag pt_red">卸売事業</dd>
                  </dl>
                </div>
              </li>
              <li className="flex flex-col md:w-28 ml-12 md:ml-0 min-w-120 md:min-w-0">
                <div className="flex flex-col h-24">
                  <div className="flex-grow w-100 h-8 mx-auto relative"><img className="m-auto top-0 bottom-0 right-0 left-0 absolute" src="/images/top/logo_tokyu_hands.png" alt="ロゴ" /></div>
                  <dl className="mt-4">
                    <dt className="mt-0 text-0.55rem">株式会社東急ハンズ様</dt>
                    <dd className="partner__tag pt_navy">催事支援</dd>
                  </dl>
                </div>
                <div className="flex flex-col mt-8">
                  <div className="flex-grow w-100 h-8 mx-auto relative"><img className="m-auto top-0 bottom-0 right-0 left-0 absolute" src="/images/top/axis.png" alt="ロゴ" /></div>
                  <dl className="mt-4">
                    <dt className="mt-0 text-0.55rem">株式会社AXIS様</dt>
                    <dd className="partner__tag pt_green">OEM事業</dd>
                  </dl>
                </div>
              </li>
              <li className="flex flex-col md:w-28 ml-12 md:ml-0 min-w-120 md:min-w-0">
                <div className="flex flex-col h-24">
                  <div className="flex-grow w-100 h-8 mx-auto relative"><img className="m-auto top-0 bottom-0 right-0 left-0 absolute" src="/images/top/logo_onelove.png" alt="ロゴ" /></div>
                  <dl className="mt-4">
                    <dt className="mt-0 text-0.55rem">有限会社ワンラブ様</dt>
                    <dd className="partner__tag pt_green">OEM事業</dd>
                  </dl>
                </div>
                <div className="flex flex-col mt-8">
                  <div className="flex-grow w-100 h-8 mx-auto relative"><img className="m-auto top-0 bottom-0 right-0 left-0 absolute" src="/images/top/logo_rareleak.png" alt="ロゴ" /></div>
                  <dl className="mt-4">
                    <dt className="mt-0 text-0.55rem">レアリーク株式会社様</dt>
                    <dd className="partner__tag pt_red">卸売事業</dd>
                  </dl>
                </div>
              </li>
            </ul>
          </section>
          {/* 取引パートナー様 END */}


          {/* NEWSリスト START */}
          <section className="mx-auto mt-24 lg:max-w-screen-xl">
            <h2 className="text-center futura-md text-1.7rem md:text-3xl">NEWS<span className="text-base_s md:text-ms font-light block NotoSans">ニュース</span></h2>
            <ul className="mx-auto w-90% md:px-0 md:w-1050 mt-6">
              {
                topics
                  .slice(0, 4)
                  .map(topics => (
                    <li key={topics.id}>
                      <Link legacyBehavior href={topics.link ? topics.link : `topics/${topics.id}`}>
                        <a className="flex flex-wrap md:flex-nowrap text-sm md:text-base md:flex-row py-4 border-b" target={topics.link && "blank_"}>
                          <div className="w-24 md:w-32 py-1 text-sm md:text-center">{getTopicDate(`${topics.datetime}`)}</div>
                          <div class={`${topics.category_color} rounded-2xl w-32 text-center font-light py-0.5 flex justify-center items-center`}>
                            <span className="text-white NotoSans-L text-sm">{topics.category}</span>
                          </div>
                          <p className="w-full mt-2 md:mt-0 md:w-auto md:ml-4 text-xs font-bold md:font-semibold NotoSans-L break-words text-justify md:truncate max-w-3xl md:flex md:items-center">{topics.title}</p>
                        </a>
                      </Link>
                    </li>
                  ))
              }
            </ul>
            <Link legacyBehavior href="/topics">
              <a className="futura_medium_bt text-center text-base block mt-10 w-40 mx-auto border border-black py-2">詳細はこちら</a>
            </Link>
          </section>
          {/* NEWSリスト END */}

          {/* 事業内容 START */}
          <section className={`${styles.business} mx-auto bg-gray-100 pt-24 pb-56 md:pb-24`}>
            <h2 className="text-center futura-md text-1.7rem md:text-3xl">BUSINESS / PRODUCTS<span className="text-base_s md:text-ms font-light block NotoSans">事業内容</span></h2>
            <p className="text-base_s md:px-0 NotoSans-L w-90% md:w-2/5 mt-6 mx-auto leading-relaxed text-justify">
              製造から販売まで、自社で一貫して管理・遂行。BtoCはもちろん、独自の製造・販売チャネルにより、OEMや卸などのBtoBにおいても、品質・スピード感ともに高次元のサービスを提供します。
            </p>
            <ul className="mt-16 md:mt-24 flex flex-wrap justify-around md:justify-center">
              <li className={styles.business__item}>
                <img className={styles.business__img} src="/images/top/busi_01.jpg" alt="レザーアイテム製造・販売" />
                <p className={styles.business__img_title}>レザーアイテム<br/>製造・販売</p>
              </li>
              <li className={styles.business__item}>
                <img className={styles.business__img} src="/images/top/busi_06.jpg" alt="ビューティーヘルスケア" />
                <p className={styles.business__img_title}>ビューティー<br/>ヘルスケア</p>
              </li>
              <li className={styles.business__item}>
                <img className={styles.business__img} src="/images/top/busi_02.jpg" alt="アパレル" />
                <p className={styles.business__img_title}>アパレル</p>
              </li>
              <li className={styles.business__item}>
                <img className={styles.business__img} src="/images/top/busi_03.jpg" alt="OEM" />
                <p className={styles.business__img_title}>OEM・ODM</p>
              </li>
              <li className={styles.business__item}>
                <img className={styles.business__img} src="/images/top/busi_04.jpg" alt="海外事業" />
                <p className={styles.business__img_title}>海外事業</p>
              </li>
              <li className={styles.business__item}>
                <img className={styles.business__img} src="/images/top/busi_05.jpg" alt="EC事業" />
                <p className={styles.business__img_title}>EC事業</p>
              </li>
              <li className={`${styles.business__item} md:w-full md:mt-20`}>
                <Link legacyBehavior href="/company/business">
                  <a className="futura_medium_bt text-center text-base block mt-10 w-40 mx-auto border border-black py-2">詳細はこちら</a>
                </Link>
              </li>
            </ul>
          </section>
          {/* 事業内容 END */}

          {/* 会社情報 START */}
          <div className={`${styles.company_background}`}>
            <section className={`${styles.company} mx-auto lg:max-w-screen-xl`}>
              <h2 className={styles.company__title}>Falconer info<p>ファルコナーについて</p></h2>
              <p className={styles.company__text}>
                2016年の誕生以来、私たちはビジネスに関わる全ての人々の幸せを追求する姿勢を一貫して崩さず、邁進してきました。<br /><br />
                市場の求めているモノづくり、市場を創造するモノづくり。モノづくりだけにとどまらない挑戦の意思を持って、生産から顧客納品まで全てを自社一括で管理。<br /><br />
                変わり続ける時代と需要に応え続ける企業として、ご満足のいただけるモノづくりを提供いたします。
              </p>
              <div className={styles.company__button_area}>
                <Link legacyBehavior href="/company">
                  <a className="futura_medium_bt text-center text-base block mt-10 w-40 mx-auto border border-black py-2">詳細はこちら</a>
                </Link>
              </div>
            </section>
          </div>
          {/* 会社情報 END */}

          {/* メディア START */}
          <div className={styles.media_background}>
            <section className={`${styles.media} mx-auto lg:max-w-screen-xl`}>
              <h2 className="text-center futura-md text-2xl md:text-3xl">MEDIA<span className="text-base_s md:text-ms font-light block NotoSans">メディア</span></h2>
              <div className={styles.media__img_area}>
                <img className={styles.media__img} src="/images/top/media_banner.jpg" alt="メディア" />
                <div className="bg-media_black text-white px-4 md:px-12 NotoSans-L flex flex-col justify-center h-72 w-full md:w-500 mx-auto mt-2 md:absolute md:opacity-95">
                  <h3 className="border-b border-white text-2xl pb-3">Radio<span className="text-base_s ml-3">ラジオ</span></h3>
                  <p className="mt-3 text-base_s break-all leading-relaxed md:leading-loose text-justify">
                    自社ブランドを手掛けるFALCONER代表取締役 清水がアイデザイナー、モデルとして活躍中のNANAMIと共に、ゲストの拘り、成功と幸せについて掘り下げていくプログラム。
                    <Link legacyBehavior href="/media">
                      <a className="futura_medium_bt text-center text-white text-base block w-40 md:w-40 mx-auto mt-6">詳細はこちら<img className="w-full -mt-2" src="/images/top/more_button_wh.png"></img></a>
                    </Link>
                  </p>
                </div>
              </div>
              <div className={styles.media__img_area}>
                <img className={styles.media__img} src="/images/top/media_banner2.jpg" alt="メディア" />
                <div className="bg-media_black text-white px-4 md:px-12 NotoSans-L flex flex-col justify-center h-72 w-full md:w-500 mx-auto mt-2 md:absolute md:opacity-95">
                  <h3 className="border-b border-white text-2xl pb-3">Dialogue<span className="text-base_s ml-3">対談</span></h3>
                  <p className="mt-3 text-base_s break-all leading-relaxed md:leading-loose text-justify">
                    FALCONER設立以前から親交のある喜劇俳優の大村崑さんと、会社設立を経験し社長として歩みを進める今だからこそ実現したスペシャル対談。
                    <Link legacyBehavior href="/media#Dialogue">
                      <a className="futura_medium_bt text-center text-white text-base block w-40 md:w-40 mx-auto mt-12">詳細はこちら<img className="w-full -mt-2" src="/images/top/more_button_wh.png"></img></a>
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
                        <Link legacyBehavior href={`/readings/${reading.id}`}>
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
          <section className="mt-24 md:mt-40 py-24 bg-gray-100 -mb-4">
            <h2 className="text-center futura-md text-1.7rem md:text-3xl">BRAND<span className="text-base_s md:text-ms font-light block NotoSans">ブランド</span></h2>
            <ul className="mx-auto max-w-full w-90% flex justify-center flex-col md:flex-row">
              <li className="mt-6 md:mt-4 md:w-600">
                <a href="https://bachicashley.com/" target="_blank">
                  <picture>
                    <source media="(max-width: 760px)" srcSet="/images/top/brand_bachicashley_sp.jpg" />
                    <img src="/images/top/brand_bachicashley.jpg" alt="BACHIC ASHLEY" />
                  </picture>
                </a>
              </li>
              {/* 2024/05/31 ruverri_削除
              <li className="mt-4 md:w-600">
                <a href="https://lurverri.com/" target="_blank">
                  <picture>
                    <source media="(max-width: 760px)" srcSet="/images/top/brand_lurverri_sp.jpg" />
                    <img src="/images/top/brand_lurverri.jpg" alt="Lurverri" />
                  </picture>
                </a>
              </li>
              */}
              <li className="mt-4 md:w-600">
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
          <section className="py-24 -mb-4">
            <h2 className="text-center futura-md text-1.7rem md:text-3xl text-black">CONTACT<span className="text-base_s md:text-ms font-light block NotoSans">お問い合せ</span></h2>
            <h3 className="text-sm w-4/5 md:w-3/5 mx-auto lg:text-base_s mt-8 text-center NotoSans text-black">製品やファルコナーについてなど、<br />こちらからお気軽にお問い合わせ頂けます。</h3>
            <div className="text-center mt-10">
              <Link legacyBehavior href="/contact">
                <a>
                  <button className="bg-comGOLD w-72 text-white NotoSans h-12 lg:h-16 rounded-2xl">まずは問い合わせしてみる</button>
                </a>
              </Link>
            </div>
            {/* 
            <div className="mt-14">
              <div className="mt-2 w-full max-w-1050 text-3xl helvetica flex flex-col justify-between md:flex-row mx-auto">
                <a className="w-72 lg:w-450 max-w-500 border-2 border-comGOLD rounded-md text-black flex lg:justify-center py-4 lg:py-7 mx-auto" href="tel:+81-52-734-7065">
                  <div className="pl-7 pr-7 lg:pr-14"><img className="w-12 lg:w-14" src="/images/top/houzin.png" /></div>
                  <div className="flex flex-col items-center justify-center">
                    <span className="NotoSans text-sm lg:text-base">法人窓口はコチラ</span>
                    <span className="futura-lt text-2xl lg:text-4xl mt-2">052-734-7065</span>
                  </div>
                </a>
                <a className="w-72 lg:w-450 max-w-500 border-2 border-comGOLD rounded-md text-black flex lg:justify-center py-4 lg:py-7 mx-auto mt-6 md:mt-0" href="tel:+81-52-734-7075">
                  <div className="pl-7 pr-7 lg:pr-14"><img className="w-12 lg:w-14" src="/images/top/kojin.png" /></div>
                  <div className="flex flex-col items-center justify-center">
                    <span className="NotoSans text-sm lg:text-base">一般・個人の方コチラ</span>
                    <span className="futura-lt text-2xl lg:text-4xl">052-734-7075</span>
                  </div>
                </a>
              </div>
              <p className="text-center text-black text-sm lg:text-base_s mt-4 lg:mt-8 NotoSans">受付時間　10:00～18:00 <br/>（法人は19:00まで対応、日曜・土曜定休）</p>
            </div>
            */}
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
