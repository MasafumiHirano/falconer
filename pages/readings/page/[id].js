import Head from 'next/head'
import Link from 'next/link'
import { Pagination } from '../../../components/PaginationReadings';
import Layout from '../../../components/layout'

const PER_PAGE = 12;

export default function Readings({ readings, totalCount, id }) {

  return (
    <div>
      <Head>
        <title>読み物｜Page{id}</title>
        <link rel="icon" href="/falconer_favicons.png" />
      </Head>
      <Layout>
        <main>
          {/*見出し部分*/}
          <div class="mb-6 lg:mb-12">
            <h1 class="">
              <img src="/images/readings/readings_eyecatch.jpg" alt="ラジオ一覧" />
            </h1>
          </div>
          {/*見出し部分 終了*/}
          <div class="mx-auto py-6 lg:py-12 lg:w-1100">
            <h2 class="text-center futura-md text-1.7rem md:text-3xl">Radio List<span class="text-base md:text-xl font-light block NotoSans-L">ラジオ一覧</span></h2>
            <div class="mt-20 px-1">
              <ul class="flex flex-wrap justify-between md:justify-start">
                {readings.map(reading => (
                  <li key={reading.id} class="mt-2 lg:mt-0 hover:bg-gray-100 w-49% md:w-24% md:mx-1 mb-4 md:mb-24">
                    <Link legacyBehavior href={`readings/${reading.id}`}>
                      <a>
                        <div class="lg:px-0">
                          <div class="w-full"><img src={`${reading.main_image.url}`} /></div>
                          <p class="flex items-center flex-wrap mt-3 w-full"><span class="futura-lt text-base w-full md:w-3/12">Vol.{reading.no}｜</span><span class="NotoSans-L text-xs text-left w-full md:w-9/12">{reading.title}</span></p>
                        </div>
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
              <Pagination totalCount={totalCount} page={id} />
            </div>
          </div>
        </main>
      </Layout>
    </div>
  )
}

export const getStaticPaths = async () => {
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  };
  const res = await fetch('https://falconer.microcms.io/api/v1/readings', key)
  const repos = await res.json();

  const pageNumbers = [];
  const range = (start, end) =>
    [...Array(end - start + 1)].map((_, i) => start + i)
  const paths = range(1, Math.ceil(repos.totalCount / PER_PAGE)).map((repo) => `/readings/page/${repo}`)

  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  };

  const data = await fetch(
    `https://falconer.microcms.io/api/v1/readings?offset=${(id - 1) * 12}&limit=12`
    , key)
    .then(res => res.json())
    .catch(() => null);
  return {
    props: {
      readings: data.contents,
      totalCount: data.totalCount,
      id: id,
    },
  };
};