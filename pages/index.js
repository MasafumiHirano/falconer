import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Slider from "react-slick";
import Layout from '../components/layout'
import styles from '../styles/Index.module.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default function Home({slides,topics,readings}) {
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

  const renderSlider = (slides) => {
    return (
    slides.filter((slide)=>(
      slide.visible == true
    ))
    .map((slide)=> (
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
              <img className="inline-block mx-auto w-full h-screen lg:h-auto object-cover" src={slide.topics_ref.main_image.url} width={1280} height={640} alt="bachicashley_hero"/>
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
              <img className="inline-block mx-auto w-full h-screen lg:h-auto object-cover" src={slide.slider_image.url} width={1280} height={640} alt="bachicashley_hero"/>
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
          <div className="mx-auto">
            <Slider {...settings}>
              {renderSlider(slides)}
            </Slider>
          </div>
          {/* TOPスライダーセクション END */}

          {/* セカンドビュー START */}
          <section className={`${styles.second_view} mx-auto lg:max-w-screen-xl`}>
            <h2 className={styles.second_view__title}>モノづくりを通じ、人々に幸せを広げ世界をより良くする</h2>
            <p className={styles.second_view__text}>私たちが掲げるのは人々の「幸せ」。</p>
            <p className={styles.second_view__text}>
商品を通したお客様の「幸せ」はもちろん、生産者や取引先様など、弊社に関わる全ての人々が「幸せ」であること。最高のモノづくりを通して私たちが住む世界をよりよいものに向かう挑戦をしていいきます。
            </p>
          </section>
          {/* セカンドビュー END */}
           
          {/* 取引パートナー様 START */}
          <section className={`${styles.partner} mx-auto lg:max-w-screen-xl`}>
            <h2 className={styles.partner__title}>取引パートナー様</h2>
            <ul className={styles.partner__list}>
              <li className={styles.partner__item}>
                <img src="/images/top/logo_onelove.png" alt="ロゴ" />
                <dl>
                  <dt>有限会社ワンラブ様</dt>
                  <dd className={`${styles.partner__tag} ${styles['partner__tag--green']}`}>OEM事業</dd>
                </dl>
              </li>
              <li className={styles.partner__item}>
                <img src="/images/top/logo_rareleak.png" alt="ロゴ" />
                <dl>
                  <dt>レアリーク株式会社様</dt>
                  <dd className={`${styles.partner__tag} ${styles['partner__tag--red']}`}>卸売事業</dd>
                </dl>
              </li>
              <li className={styles.partner__item}>
                <img src="/images/top/logo_dmm.png" alt="ロゴ" />
                <dl>
                  <dt>株式会社DMM.com様</dt>
                  <dd className={`${styles.partner__tag} ${styles['partner__tag--green']}`}>OEM事業</dd>
                </dl>
              </li>
              <li className={styles.partner__item}>
                <img src="/images/top/logo_tokyu_hands.png" alt="ロゴ" />
                <dl>
                  <dt>株式会社東急ハンズ様</dt>
                  <dd className={`${styles.partner__tag} ${styles['partner__tag--blue']}`}>催事支援</dd>
                </dl>
              </li>
              <li className={styles.partner__item}>
                <img src="/images/top/logo_jp_post.png" alt="ロゴ" />
                <dl>
                  <dt>日本郵便株式会社</dt>
                  <dd className={`${styles.partner__tag} ${styles['partner__tag--red']}`}>卸売事業</dd>
                </dl>
              </li>
            </ul>
          </section>
          {/* 取引パートナー様 END */}

          {/* 事業内容 START */}
          <section className={`${styles.business} mx-auto lg:max-w-screen-xl`}>
            <h2 className={styles.business__title}>事業内容</h2>
            <p className={styles.business__text}>
              製造から販売まで、自社で一貫して管理・遂行。BtoCはもちろん、独自の製造・販売チャネルにより、OEMや卸などのBtoBにおいても、品質・スピード感ともに高次元のサービスを提供します。
            </p>
            <ul className={styles.business__list}>
              <li className={styles.business__item}>
                <img className={styles.business__img} src="/images/top/business_leather.png" alt="レザーアイテム製造・販売" />
                <h3 className={styles.business__name}>レザーアイテム<br />製造・販売</h3>
              </li>
              <li className={styles.business__item}>
                <img className={styles.business__img} src="/images/top/business_apparel.png" alt="アパレル" />
                <h3 className={styles.business__name}>アパレル</h3>
              </li>
              <li className={styles.business__item}>
                <img className={styles.business__img} src="/images/top/business_oem.png" alt="OEM" />
                <h3 className={styles.business__name}>OEM</h3>
              </li>
              <li className={styles.business__item}>
                <img className={styles.business__img} src="/images/top/business_global.png" alt="海外事業" />
                <h3 className={styles.business__name}>海外事業</h3>
              </li>
              <li className={styles.business__item}>
                <img className={styles.business__img} src="/images/top/business_ec.png" alt="EC事業" />
                <h3 className={styles.business__name}>EC事業</h3>
              </li>
            </ul>
            <div className={styles.business__button_area}>
              <Link href="/company/business">
                <a className={styles.business__button}>詳細はこちら</a>
              </Link>
            </div>
          </section>
          {/* 事業内容 END */}

          {/* 会社情報 START */}
          <div className={`${styles.company_background}`}>
            <section className={`${styles.company} mx-auto lg:max-w-screen-xl`}>
              <h2 className={styles.company__title}>会社情報</h2>
              <div className={styles.company__button_area}>
                <Link href="/company">
                  <a className={styles.company__button}>FALCONERとは。</a>
                </Link>
              </div>
              <p className={styles.company__text}>
                2016年の誕生以来、私たちはビジネスに関わる全ての人々の幸せを追求する姿勢を一貫して崩さず、邁進してきました。モノづくりだけにとどまらない挑戦の意思で未来の人々の幸せとクロスオーバーしていきます。
              </p>
            </section>
          </div>
          {/* 会社情報 END */}

          {/* メディア START */}
          <div className={styles.media_background}>
            <section className={`${styles.media} mx-auto lg:max-w-screen-xl`}>
              <h2 className={styles.media__title}>メディア</h2>
              <div className={styles.media__button_area}>
                <Link href="/media">
                  <a className={styles.media__button}>詳細はこちら</a>
                </Link>
              </div>
              <div className={styles.media__img_area}>
                <Link href="/media">
                  <a><img className={styles.media__img} src="/images/top/media_banner.jpg" alt="メディア" /></a>
                </Link>
              </div>

              <ul className={styles.media__blog_list}>
                {
                  readings
                  .slice(0,3)
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

              <div className={styles.media__link_area}>
                <Link href="/media">
                  <a className={styles.media__link}>記事一覧へ</a>
                </Link>                
              </div>

              <ul className={styles.media__sns_list}>
                <li className={styles.media__sns_item}>
                  <a href="https://www.instagram.com/masaki.s_japan/" target="_blank">
                    <img src="/images/top/media_Instagram.svg" alt="Instagram" />
                 </a>
                </li>
                <li className={styles.media__sns_item}>
                  <a href="https://www.youtube.com/channel/UCynRnKX32Zr8Hh_Rst6Mrug" target="_blank">
                    <img src="/images/top/media_twitter.svg" alt="Twitter" />
                 </a>
                </li>
                <li className={styles.media__sns_item}>
                  <a href="https://twitter.com/Nanami_Bondjam" target="_blank">
                    <img src="/images/top/media_youtube.svg" alt="Youtube" />
                 </a>
                </li>
              </ul>
            </section>
          </div>
          {/* メディア END */}

          {/* ブランドセクション START */}
          <ul className={`${styles.brand} mx-auto lg:max-w-screen-xl`}>
            <li className={styles.brand__item}>
              <a href="https://bachicashley.com/" target="_blank">
                <img src="/images/top/brand_bachicashley.jpg" alt="BACHIC ASHLEY" />
              </a>
            </li>
            <li className={`${styles.brand__item} ${styles['brand__item--space']}`}  >
              <a href="https://lurverri.com/" target="_blank">
                <img src="/images/top/brand_lurverri.jpg" alt="Lurverri" />
              </a>
            </li>
            <li className={`${styles.brand__item} ${styles['brand__item--space']}`}>
              <a href="https://www.rakuten.ne.jp/gold/allrightleather/" target="_blank">
                <img src="/images/top/brand_rakuten.jpg" alt="All Right Leather" />
              </a>
            </li>
          </ul>
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
