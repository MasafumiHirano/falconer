import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import Layout from '../../components/layout'

export default function Company({medias}) {
  const youtubePosts = medias.filter((media) => (
    media.medianame[0] == 'youtube'
  ))
  //youtubeの投稿は、4つとりだす。
  const visibleYoutubePosts = youtubePosts.slice(0,4)

  return (
    <div>
      <Head>
        <title>企業情報</title>
        <link rel="icon" href="/falconer_favicons.png" />
      </Head>
      <Layout>
        <main>
          <div class="mx-auto py-6 text-white text-center" style={{ backgroundColor: "#000000" }}>
            <h1 class="text-xl">ABOUT</h1>
              <Image src="/images/logo/falconer_co_ltd_logo.jpg" width={720} height={150} alt="falconer_logo"/>
              <div class="lg:flex lg:justify-center">
                <p class="text-2xl lg:text-3xl font-bold lg:mb-6 tracking-widest">最高品質の</p>
                <p class="text-2xl lg:text-3xl font-bold mb-6 tracking-widest">戦略的モノ作りカンパニー</p>
              </div>
              <div class="lg:flex lg:justify-center">
                <p class="lg:mb-2">市場の求めているモノ作り。</p>
                <p class="mb-4 lg:mb-2">市場を創造するモノ作り。</p>
              </div>
              <div class="lg:flex lg:justify-center">
                <p class="lg:mb-2">変わり続ける時代と</p>
                <p class="lg:mb-2">需要に応え続ける企業として存在します。</p>
              </div>
            <p class="mt-8 mb-4">
              <Link href="/company/strength"><a>
                <span class="inline-block w-170 px-4 py-2 text-white hover:bg-white hover:text-black border border-white hover:border-black border-solid transition duration-300 ease-in-out">Falconer の強み</span>
              </a></Link>
            </p>
          </div>

          <div class="mx-auto pt-6 mb-6 lg:w-1100 h-48 lg:h-auto lg:px-20">
            
            <div class="relative flex w-full justify-center h-full">
              <div class="absolute text-center z-10" style={{top:"50%", left:"50%", transform: "translate(-50%,-50%)"}}>
                <Link href="/company/statement"><a>
                  <div class="text-center futura-co w-170 lg:w-full text-3.5xl lg:text-5xl font-bold tracking-widest text-white shadow py-0.5 px-1 lg:py-2 lg:px-3 border border-solid border-white"
                  style={{backgroundColor: "rgba(0,0,0,0.3)"}}><span class="inline-block -mr-1">STATEMENT</span></div>
                </a></Link>
                <Link href="/company/message"><a>
                <div class="Osaka mt-6 text-center w-170 lg:w-full text-md lg:text-2xl tracking-widest text-white shadow px-2 lg:px-2 py-px lg:py-2 border border-solid border-white"
                style={{backgroundColor: "rgba(0,0,0,0.3)"}}>代表メッセージ</div>
                </a></Link>
              </div>
              <Image className="object-cover h-full" src="/images/company/statement_bgImage.jpg" width={940} height={280} alt="vision" />
            </div>

          </div>

          <div class="mx-auto mb-6 lg:mb-12 lg:w-1100 lg:px-20">
            <div class="lg:flex justify-center mb-6">
              <Link href="/company/overview"><a>
                <div class="relative w-full lg:h-300 flex justify-center items-center">
                  <div class="Osaka absolute z-10 w-170 text-white text-center text-md lg:text-xl tracking-widest py-1.5 px-2 lg:px-4 bg-falGLD border border-solid border-white"
                   style={{ backgroundColor: "rgba(121,107,88,0.7)", top:"50%", left:"50%", transform: "translate(-50%,-50%)" }}>
                    企業概要
                  </div>
                  <Image className="object-cover" src="/images/company/company_overview.jpg" width={940} height={600} />
                </div>
                
              </a></Link>

              <div class="lg:ml-4">
                <Link href="/recruit"><a>
                  <div class="relative mt-4 lg:mt-0 w-full lg:h-300 flex justify-center items-center">
                    <Image className="absolute" src="/images/company/recruit_thumb.jpg" width={940} height={600} />
                    <div class="Osaka absolute w-170 text-center text-md lg:text-xl tracking-widest text-white shadow py-1.5 px-2 lg:px-4 bg-falGLD border border-solid border-white"
                      style={{ backgroundColor: "rgba(121,107,88,0.7)", top:"50%", left:"50%", transform: "translate(-50%,-50%)" }}>
                      採用情報
                    </div>
                  </div>
                </a></Link>
              </div>
            </div>
          </div>

          <div class="mx-auto mb-6 lg:mb-12 lg:w-1100 px-0 lg:px-20">
          <h1 class="text-3xl lg:text-4xl text-white text-center py-3 Osaka bg-falGLD"><Link href="/media"><a>メディア</a></Link></h1>

            <div class="flex justify-center bg-black">
              <div class="my-3 px-6">
                <div class="flex justify-center">
                  <div class="inline-block mr-2">
                    <a class="inline-block" href="https://www.instagram.com/masaki.s_japan/" target="_blank">
                      <Image src="/images/media/instagram_white_bg_bk.jpg" width={48} height={48} alt="instagaram_social" />
                    </a>
                  </div>
                  <div class="inline-block mr-2">
                    <a class="inline-block" href="https://www.youtube.com/channel/UCynRnKX32Zr8Hh_Rst6Mrug" target="_blank">
                      <Image src="/images/media/youtube_white_bg_bk.jpg" width={48} height={48} alt="instagaram_social" />
                    </a>
                  </div>
                  <div class="inline-block">
                    <a class="inline-block" href="https://twitter.com/Nanami_Bondjam" target="_blank">
                    <Image src="/images/media/twitter_white_bg_bk.jpg" width={48} height={48} alt="instagaram_social" />
                    </a>
                  </div>
                </div>
                <p class="mb-4 text-white text-center">ラジオ番組やSNSで情報を発信中です。</p>
                <div class="mb-2">
                  <a href="https://www.youtube.com/channel/UCynRnKX32Zr8Hh_Rst6Mrug" target="_blank" >
                    <Image src="/images/media/bond_jam.jpg" width={920} height={190} alt="bond-jam" />
                  </a>
                </div>

                <div class="flex">
                  <div class='lg:w-1/4 w-full lg:h-auto md:h-405 h-48 lg:mr-2'>
                    <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${visibleYoutubePosts[0].postid}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                  <div class='lg:w-1/4 mr-2 hidden lg:block'>
                    <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${visibleYoutubePosts[1].postid}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                  <div class='lg:w-1/4 mr-2 hidden lg:block'>
                    <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${visibleYoutubePosts[2].postid}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                  <div class='lg:w-1/4 hidden lg:block'>
                    <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${visibleYoutubePosts[3].postid}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                </div>

                {/*<div class="flex justify-center">
                  <div class="mx-auto md:w-720 md:h-405">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/k5oSVWFyOqE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                </div>*/}
              </div>
            </div>
          </div>

          <div class="mx-auto mb-12 lg:w-1100 lg:px-20 flex justify-center">
              <div class="w-full">
                <Link href="/contact"><a>
                  <div class="Osaka text-md py-2 px-1 font-bold tracking-widest bg-falGLD text-white text-center">
                    お問い合わせ
                  </div>
                </a></Link>
                <p class="Osaka mt-2 text-sm lg:text-center px-2 lg:px-0">製品のご購入のご相談､OEMのご相談についてなどお気軽にお問い合わせください。</p>
              </div>
          </div>
        </main>
      </Layout>
    </div>
  )
}

export const getStaticProps = async() => {
  const key = {
    headers: {'X-API-KEY': process.env.API_KEY},
  };
  const data = await fetch('https://falconer.microcms.io/api/v1/media', key)
    .then(res => res.json())
    .catch(() => null);
  return {
    props: {
      medias: data.contents
    },
  };
}