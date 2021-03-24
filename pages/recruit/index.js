import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'


import Layout from '../../components/layout'

export default function RECRUIT() {
  return (
    <div>
      <Head>
        <title>RECRUIT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
      <main>
        <div class="flex justify-center w-full">
          <div class="mb-12 mt-6 w-full lg:w-1100">

            <div class="mx-auto w-full lg:w-650">
              <h1 class="text-center text-3xl border-b-2 border-gray-500">EMPLOYMENT</h1>
              <h2 class="text-center text-xl mx-auto">採用情報</h2>
            </div>

            <div class="mx-auto w-full mt-8 grid grid-cols-2 grid-rows-3 gap-2 lg:grid-cols-3 lg:grid-rows-2 lg:gap-2">
              <Image src="/images/recruit/recruit_01.jpeg" alt="china" width={2000} height={1300} />
              <Image src="/images/recruit/recruit_02.jpeg" alt="china" width={2000} height={1300} />
              <Image src="/images/recruit/recruit_03.jpeg" alt="china" width={2000} height={1300} />
              <Image src="/images/recruit/recruit_04.jpeg" alt="china" width={2000} height={1300} />
              <Image src="/images/recruit/recruit_05.jpeg" alt="china" width={2000} height={1300} />
              <Image src="/images/recruit/recruit_06.jpeg" alt="china" width={2000} height={1300} />
            </div>

            <div class="mt-12">
              <div class="mx-auto w-full lg:w-650 font-bold">
                <h1 class="text-center text-white text-xl py-1 px-2 lg:text-2xl lg:py-2 lg:px-4 bg-gray-700 rounded-t-2xl">募集内容</h1>
                <div class="mt-4">
                  <p class="text-center text-base lg:text-2xl">ネットショップ運営サポート</p>
                  <p class="text-center text-xs lg:text-base">メディア掲載実績多数！自社ブランドの魅力を発信</p>
                </div>
              </div>

              <div class="mx-auto mt-2 lg:mt-6 w-full lg:w-650">
                <table class="w-full lg:shadow lg:rounded-lg lg:border border-gray-300 lg:divide-y divide-gray-300">
                  <tr class="bg-gray-100 lg:bg-gray-50">
                    <td class="pl-6 py-4 text-xs lg:text-base font-medium text-gray-900">
                      募集職種
                    </td>
                    <td class="pl-6 lg:pl-12 py-4 text-xs lg:text-base text-gray-500">
                      <p>ネットショップ運営サポート</p>
                      <ul class="list-disc list-inside pl-1">
                        <li>販促企画</li>
                        <li>データ集計/分析</li>
                        <li>サイト更新/管理</li>
                      </ul>
                    </td>
                  </tr>
                  <tr class="bg-white">
                    <td class="pl-6 py-4 text-xs lg:text-base font-medium text-gray-900">
                      雇用形態
                    </td>
                    <td class="pl-6 lg:pl-12 py-4 text-xs lg:text-base text-gray-500">
                      正社員/契約社員
                    </td>
                  </tr>
                  <tr class="bg-gray-100 lg:bg-gray-50">
                    <td class="pl-6 py-4 text-xs lg:text-base font-medium text-gray-900">
                      給与
                    </td>
                    <td class="pl-6 lg:pl-12 py-4 text-xs lg:text-base text-gray-500">
                      月給20万円～30万円＋諸手当
                    </td>
                  </tr>
                  <tr class="bg-white">
                    <td class="pl-6 py-4 text-xs lg:text-base font-medium text-gray-900">
                      時間
                    </td>
                    <td class="pl-6 lg:pl-12 py-4 text-xs lg:text-base text-gray-500">
                      10:00~19:00（内1時間休憩有り）
                    </td>
                  </tr>
                  <tr class="bg-gray-100 lg:bg-gray-50 border-b">
                    <td class="pl-6 py-4 text-xs lg:text-base font-medium text-gray-900">
                      休暇
                    </td>
                    <td class="pl-6 lg:pl-12 py-4 text-xs lg:text-base text-gray-500">
                      完全週休2日／日曜＋希望休制<br/>※年末年始休暇、有給休暇有り
                    </td>
                  </tr>
                  {/*<!-- More items... -->*/}
                </table>
              </div>

              <Link href="/recruit/detail1">
                <div class="flex justify-center mt-4">
                  <button class="bg-gray-700 text-white text-xs font-normal py-1 px-2 lg:text-base lg:font-semibold lg:py-2 lg:px-4 rounded">詳細・エントリーはこちら</button>
                </div>
              </Link>
            </div>

            <div class="mt-12">
              <div class="mx-auto w-full lg:w-650 font-bold">
                <h1 class="text-center text-white text-xl py-1 px-2 lg:text-2xl lg:py-2 lg:px-4 bg-gray-700 rounded-t-2xl">募集内容２</h1>
                <div class="mt-4">
                  <p class="text-center text-base lg:text-2xl">事務処理サポート</p>
                  <p class="text-center text-xs lg:text-base">自由度の高いシフトで、短時間でもフルタイムでもOK</p>
                </div>
              </div>

              <div class="mx-auto mt-2 lg:mt-6 w-full lg:w-650">
                <table class="w-full lg:shadow lg:rounded-lg lg:border border-gray-300 lg:divide-y divide-gray-300">
                  <tr class="bg-gray-100 lg:bg-gray-50">
                    <td class="pl-6 py-4 text-xs lg:text-base font-medium text-gray-900">
                      募集職種
                    </td>
                    <td class="pl-6 lg:pl-12 py-4 text-xs lg:text-base text-gray-500">
                      <p>事務処理</p>
                      <ul class="list-disc list-inside pl-1">
                        <li>パソコンによるデータ作成やデータ集計</li>
                      </ul>
                    </td>
                  </tr>
                  <tr class="bg-white">
                    <td class="pl-6 py-4 text-xs lg:text-base font-medium text-gray-900">
                      雇用形態
                    </td>
                    <td class="pl-6 lg:pl-12 py-4 text-xs lg:text-base text-gray-500">
                      契約社員<br/>アルバイト・パート
                    </td>
                  </tr>
                  <tr class="bg-gray-100 lg:bg-gray-50">
                    <td class="pl-6 py-4 text-xs lg:text-base font-medium text-gray-900">
                      給与
                    </td>
                    <td class="pl-6 lg:pl-12 py-4 text-xs lg:text-base text-gray-500">
                      時給1,100円以上＋交通費支給
                    </td>
                  </tr>
                  <tr class="bg-white border-b">
                    <td class="pl-6 py-4 text-xs lg:text-base font-medium text-gray-900">
                      シフト
                    </td>
                    <td class="pl-6 lg:pl-12 py-4 text-xs lg:text-base text-gray-500">
                      <p>フルタイム</p>
                      <ul class="list-disc list-inside pl-1">
                        <li>完全週休二日／日曜＋希望休制</li>
                        <li>10:00~19:00</li>
                      </ul>
                      <p>短時間勤務</p>
                      <ul class="list-disc list-inside pl-1">
                        <li>週3日以上、1日4時間以上</li>
                        <li>シフト自由・自己申告</li>
                        <li>9：00 ～ 18：00 （左記内で実働4時間以上）</li>
                      </ul>
                    </td>
                  </tr>
                  {/*<!-- More items... -->*/}
                </table>
              </div>

              <Link href="/recruit/detail2">
                <div class="flex justify-center mt-4">
                  <button class="bg-gray-700 text-white text-xs font-normal py-1 px-2 lg:text-base lg:font-semibold lg:py-2 lg:px-4 rounded">詳細・エントリーはこちら</button>
                </div>
              </Link>
            </div>

          </div>
        </div>
      </main>
      </Layout>
    </div>
  )
}
