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
        <main class="font-sans">
          <div class="mx-auto py-6 text-center">
            <h1 class="text-white text-center text-xl lg:text-3xl company_title flex justify-center items-center">会社概要</h1>
            <div class="mt-10 md:mt-32 lg:flex lg:justify-center">
              <p class="px-3 text-xl lg:text-3xl lg:mb-6 text-left md:text-center tracking-widest">モノづくりを通じ、人々に幸せを広げ</p>
              <p class="px-3 text-xl lg:text-3xl mb-6 text-left md:text-center tracking-widest">世界をより良くする</p>
            </div>
            <div class="mt-10 lg:flex lg:justify-center">
              <p class="px-3 text-base md:text-lg text-left md:text-center lg:mb-2">私たちが創り出す、最高の商品とは、<br></br> 
上質な素材でデザイン・機能性を意識し、<br></br>
一流の技術力を持って作り上げられたモノというだけではありません｡<br></br>
<br></br>
生産者の労働環境や地球環境まで配慮し、<br></br>
フェアな金額でお客様が優しさや強さに包まれ笑顔になって頂ける商品のことです。<br></br>
<br></br>
また我々はそのような「最高の商品」を創り出すことでお客様はもちろん<br></br>
商品が生まれるまでに携わった全ての人々や世界、<br></br>
素材を提供してくれる地球を幸せにしていきたいと考えています。</p>
            </div>
          </div>
          <div class="mx-auto mt-20 mb-20 lg:w-1280">
            <div class="flex flex-wrap md:flex-nowrap justify-around md:justify-between mb-6">
              <div class="relative w-49% md:w-full lg:h-400 flex justify-center items-center">
                <Image src="/images/company/bussiness_1.png" width={300} height={400} />
                <Link href="/company/statement"><a class="absolute bottom-5 md:bottom-10 w-100 md:w-200 h-35 md:h-40 flex justify-center items-center text-xs text-white bg-black bg-opacity-90">経営理念</a></Link>
              </div>
              <div class="relative w-49% md:w-full lg:h-400 flex justify-center items-center">
                <Image src="/images/company/bussiness_2.png" width={300} height={400} />
                <Link href="/company/message"><a class="absolute bottom-5 md:bottom-10 w-100 md:w-200 h-35 md:h-40 flex justify-center items-center text-xs text-white bg-black bg-opacity-90">代表メッセージ</a></Link>
              </div>
              <div class="relative w-49% md:w-full lg:h-400 flex justify-center items-center">
                <Image src="/images/company/bussiness_3.png" width={300} height={400} />
                <Link href="/company/overview"><a class="absolute bottom-5 md:bottom-10 w-100 md:w-200 h-35 md:h-40 flex justify-center items-center text-xs text-white bg-black bg-opacity-90">会社概要</a></Link>
              </div>
              <div class="relative w-49% md:w-full lg:h-400 flex justify-center items-center">
                <Image src="/images/company/bussiness_4.png" width={300} height={400} />
                <Link href="/company/"><a class="absolute bottom-5 md:bottom-10 w-100 md:w-200 h-35 md:h-40 flex justify-center items-center text-xs text-white bg-black bg-opacity-90">FALCONERの強み</a></Link>
              </div>
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