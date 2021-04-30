import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import Layout from '../../components/layout'

export default function Readings({readings}) {
  return (
    <div>
      <Head>
        <title>読み物</title>
        <link rel="icon" href="/falconer_favicons.png" />
      </Head>
      <Layout>
      <main style={{ backgroundColor: "#cecece" }}>
        <div class="mx-auto py-6 lg:py-12 lg:w-1100">
          <div><h1 class="Osaka lg:mb-12 font-bold text-xl lg:text-3xl text-center bg-falGLD py-2 text-white tracking-wider">読み物</h1></div>
          <div>
            <ul class="pt-6 lg:pt-0  grid lg:grid-cols-3 gap-x-3 lg:gap-x-4 gap-y-6 lg:gap-y-12">
              {readings.map(reading => (
                <li key={reading.id} class="">
                  <Link href={`readings/${reading.id}`}>
                    <a>
                      <div class="px-2 lg:px-0">
                        <div>
                          <div><Image class="" src={`${reading.main_image.url}`} width={1100} height={550} alt=""/></div>
                          <div>
                            <div class="h-12 lg:h-20 lg:mb-4 overflow-hidden">
                              <div class="lg:text-lg font-semibold helvetica" style={{fontSize: "17px"}}>{reading.title}</div>
                            </div>
                            <div class="lg:flex mt-2 lg:mt-0 flex-wrap">
                              {reading.tag.map(tag => (
                                <div class="inline-block mr-2 mb-4">
                                  <span class="px-2 lg:px-3 py-1 lg:py-1 mb-2 bg-white rounded-full text-xs whitespace-nowrap">{tag.tagname}</span>
                                </div>
                              ))}
                            </div>
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
  const data = await fetch('https://falconer.microcms.io/api/v1/readings', key)
    .then(res => res.json())
    .catch(() => null);
  return {
    props: {
      readings: data.contents,
    },
  };
};