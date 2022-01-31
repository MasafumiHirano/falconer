import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'


import Layout from '../../components/layout'

export default function RECRUIT() {
  return (
    <div>
      <Head>
        <title>採用情報</title>
        <link rel="icon" href="/falconer_favicons.png" />
      </Head>
      <Layout>
        <main class="-mb-4 NotoSans">
          <div class="mb-12 md:mb-24">
            <div class="relative">
              <h1 class="recruit_title futura-lt text-white text-center font-bold text-3xl lg:text-3xl h-405 flex items-center justify-center flex-col">RECRUIT<p class="NotoSans text-base font-normal">採用情報</p></h1>
            </div>

            <div class="mx-auto mt-8 md:mt-28 grid grid-cols-2 grid-rows-3 gap-2 lg:grid-cols-3 lg:grid-rows-2 lg:gap-2 w-fll md:w-1100 px-3 md:px-3">
              <Image src="/images/recruit/recruit_01.jpeg" alt="china" width={2000} height={1300} />
              <Image src="/images/recruit/recruit_02.jpeg" alt="china" width={2000} height={1300} />
              <Image src="/images/recruit/recruit_03.jpeg" alt="china" width={2000} height={1300} />
              <Image src="/images/recruit/recruit_04.jpeg" alt="china" width={2000} height={1300} />
              <Image src="/images/recruit/recruit_05.jpeg" alt="china" width={2000} height={1300} />
              <Image src="/images/recruit/recruit_06.jpeg" alt="china" width={2000} height={1300} />
            </div>

            <div class="flex flex-wrap justify-center md:justify-between w-full md:w-1100 px-3 md:px-3 mx-auto">
              <section class="mt-12 py-10 border border-gray-400 rounded-3xl w-full md:w-520">
                <div class="mx-auto pb-6 border-b-2 border-gray-500 w-11/12">
                  <h3 class="flex justify-center items-center py-1 md:py-3 bg-black text-white w-28 md:w-56 text-center mx-auto rounded-lg text-lg md:text-3xl">募集内容①</h3>
                  <div class="mt-6 md:mt-12">
                    <p class="text-center text-lg lg:text-3xl">ネットショップ運営店長</p>
                    <p class="text-center text-xs lg:text-base">メディア掲載実績多数！自社ブランドの魅力を発信</p>
                  </div>
                </div>

                <div class="mx-auto mt-2 lg:mt-6 w-full">
                  <table class="w-11/12 mx-auto text-sm md:text-lg">
                    <tr class="">
                      <td class="py-4 align-top">
                        募集職種
                      </td>
                      <td class="pl-6 lg:pl-12 py-4">
                        <p>ネットショップ運営店長</p>
                        <div>
                          <p>・販促企画</p>
                          <p>・データ集計/分析</p>
                          <p>・サイト更新/管理</p>
                        </div>
                      </td>
                    </tr>
                    <tr class="">
                      <td class="py-4">
                        雇用形態
                      </td>
                      <td class="pl-6 lg:pl-12">
                        正社員
                      </td>
                    </tr>
                    <tr class="">
                      <td class="py-4">
                        給与
                      </td>
                      <td class="pl-6 lg:pl-12">
                        月給30万円～50万円＋諸手当
                      </td>
                    </tr>
                    <tr class="">
                      <td class="py-4">
                        時間
                      </td>
                      <td class="pl-6 lg:pl-12">
                        10:00~19:00（内1時間休憩有り）
                      </td>
                    </tr>
                    <tr class="">
                      <td class="pt-4 align-top">
                        休暇
                      </td>
                      <td class="pt-4 pl-6 lg:pl-12">
                        完全週休2日／日曜＋希望休制<br />※年末年始休暇、有給休暇有り
                      </td>
                    </tr>
                  </table>
                </div>

                <Link href="/recruit/detail3">
                  <div class="flex justify-center mt-8">
                    <button class="w-11/12 bg-comGOLD text-white text-base md:text-2xl py-3 text-center rounded-lg">詳細・エントリーはこちら</button>
                  </div>
                </Link>
              </section>

              <section class="mt-12 py-10 border border-gray-400 rounded-3xl w-full md:w-520">
                <div class="mx-auto pb-6 border-b-2 border-gray-500 w-11/12">
                  <h3 class="flex justify-center items-center py-1 md:py-3 bg-black text-white w-28 md:w-56 text-center mx-auto rounded-lg text-lg md:text-3xl">募集内容②</h3>
                  <div class="mt-6 md:mt-12">
                    <p class="text-center text-lg lg:text-3xl">ネットショップ運営サポート</p>
                    <p class="text-center text-xs lg:text-base">メディア掲載実績多数！自社ブランドの魅力を発信</p>
                  </div>
                </div>

                <div class="mx-auto mt-2 lg:mt-6 w-full">
                  <table class="w-11/12 mx-auto text-sm md:text-lg">
                    <tr class="">
                      <td class="py-4 align-top">
                        募集職種
                      </td>
                      <td class="pl-6 lg:pl-12 py-4">
                        <p>ネットショップ運営サポート</p>
                        <div>
                          <p>・販促企画</p>
                          <p>・データ集計/分析</p>
                          <p>・サイト更新/管理</p>
                        </div>
                      </td>
                    </tr>
                    <tr class="">
                      <td class="py-4">
                        雇用形態
                      </td>
                      <td class="pl-6 lg:pl-12">
                        正社員
                      </td>
                    </tr>
                    <tr class="">
                      <td class="py-4">
                        給与
                      </td>
                      <td class="pl-6 lg:pl-12">
                        月給25万円～35万円＋諸手当
                      </td>
                    </tr>
                    <tr class="">
                      <td class="py-4">
                        時間
                      </td>
                      <td class="pl-6 lg:pl-12">
                        10:00~19:00（内1時間休憩有り）
                      </td>
                    </tr>
                    <tr class="">
                      <td class="pt-4 align-top">
                        休暇
                      </td>
                      <td class="pt-4 pl-6 lg:pl-12">
                        完全週休2日／日曜＋希望休制<br />※年末年始休暇、有給休暇有り
                      </td>
                    </tr>
                  </table>
                </div>

                <Link href="/recruit/detail1">
                  <div class="flex justify-center mt-8">
                    <button class="w-11/12 bg-comGOLD text-white text-base md:text-2xl py-3 text-center rounded-lg">詳細・エントリーはこちら</button>
                  </div>
                </Link>
              </section>

              <section class="mt-12 py-10 border border-gray-400 rounded-3xl w-full md:w-520">
                <div class="mx-auto pb-6 border-b-2 border-gray-500 w-11/12">
                  <h3 class="flex justify-center items-center py-1 md:py-3 bg-black text-white w-28 md:w-56 text-center mx-auto rounded-lg text-lg md:text-3xl">募集内容③</h3>
                  <div class="mt-6 md:mt-12">
                    <p class="text-center text-lg lg:text-3xl">配送センター管理スタッフ</p>
                    <p class="text-center text-xs lg:text-base">★未経験OK★</p>
                  </div>
                </div>

                <div class="mx-auto mt-2 lg:mt-6 w-full">
                  <table class="w-11/12 mx-auto text-sm md:text-lg">
                    <tr class="">
                      <td class="py-4 align-top">
                        募集職種
                      </td>
                      <td class="pl-6 lg:pl-12 py-4">
                        <p>配送センター管理スタッフ</p>
                        <div>
                          <p>・受注管理</p>
                          <p>・お客様対応</p>
                          <p>・倉庫管理</p>
                        </div>
                      </td>
                    </tr>
                    <tr class="">
                      <td class="py-4">
                        雇用形態
                      </td>
                      <td class="pl-6 lg:pl-12">
                        正社員
                      </td>
                    </tr>
                    <tr class="">
                      <td class="py-4">
                        給与
                      </td>
                      <td class="pl-6 lg:pl-12">
                        月給20万円～30万円＋諸手当
                      </td>
                    </tr>
                    <tr class="">
                      <td class="py-4">
                        時間
                      </td>
                      <td class="pl-6 lg:pl-12">
                        10:00~19:00（内1時間休憩有り）
                      </td>
                    </tr>
                    <tr class="">
                      <td class="pt-4 align-top">
                        休暇
                      </td>
                      <td class="pt-4 pl-6 lg:pl-12">
                        完全週休2日／日曜＋希望休制<br />※年末年始休暇、有給休暇有り
                      </td>
                    </tr>
                  </table>
                </div>

                <Link href="/recruit/detail4">
                  <div class="flex justify-center mt-8">
                    <button class="w-11/12 bg-comGOLD text-white text-base md:text-2xl py-3 text-center rounded-lg">詳細・エントリーはこちら</button>
                  </div>
                </Link>
              </section>

              <section class="mt-12 py-10 border border-gray-400 rounded-3xl w-full md:w-520">
                <div class="mx-auto pb-6 border-b-2 border-gray-500 w-11/12">
                  <h3 class="flex justify-center items-center py-1 md:py-3 bg-black text-white w-28 md:w-56 text-center mx-auto rounded-lg text-lg md:text-3xl">募集内容④</h3>
                  <div class="mt-6 md:mt-12">
                    <p class="text-center text-lg lg:text-3xl">事務STAFF</p>
                    <p class="text-center text-xs lg:text-base">自由度の高いシフトで、短時間でもフルタイムでもOK</p>
                  </div>
                </div>

                <div class="mx-auto mt-2 lg:mt-6 w-full">
                  <table class="w-11/12 mx-auto text-sm md:text-lg">
                    <tr class="">
                      <td class="py-4 align-top">
                        募集職種
                      </td>
                      <td class="pl-6 lg:pl-12 py-4">
                        <p>事務処理</p>
                        <div>
                          <p>・受注管理</p>
                          <p>・お客様対応</p>
                        </div>
                      </td>
                    </tr>
                    <tr class="">
                      <td class="py-4 truncate">
                        雇用形態
                      </td>
                      <td class="pl-6 lg:pl-12">
                        パート・アルバイト
                      </td>
                    </tr>
                    <tr class="">
                      <td class="py-4">
                        給与
                      </td>
                      <td class="pl-6 lg:pl-12">
                        時給1,000円以上 + 交通費支給
                      </td>
                    </tr>
                    <tr class="">
                      <td class="pt-4 align-top">
                        シフト
                      </td>
                      <td class="pt-4 pl-6 lg:pl-12">
                        <p>【フルタイム】</p>
                        <div>
                          <p>・完全週休二日 / 日曜 + 希望体制</p>
                          <p>・10:00～19:00</p>
                        </div>
                        <p class="mt-2">【短時間勤務】</p>
                        <div>
                          <p>・週3日以上 1日5時間以上</p>
                          <p>・シフト自由・自己申告</p>
                          <p class="text-base">・10：00～19：00（左記内で実働5時間以上）</p>
                        </div>
                      </td>
                    </tr>
                  </table>
                </div>
                <Link href="/recruit/detail5">
                  <div class="flex justify-center mt-8">
                    <button class="w-11/12 bg-comGOLD text-white text-base md:text-2xl py-3 text-center rounded-lg">詳細・エントリーはこちら</button>
                  </div>
                </Link>

              </section>

              {/*
              <section class="mt-12 py-10 border border-gray-400 rounded-3xl w-full md:w-520">
                <div class="mx-auto pb-6 border-b-2 border-gray-500 w-11/12">
                  <h3 class="flex justify-center items-center py-1 md:py-3 bg-black text-white w-28 md:w-56 text-center mx-auto rounded-lg text-lg md:text-3xl">募集内容②</h3>
                  <div class="mt-6 md:mt-12">
                    <p class="text-center text-lg lg:text-3xl">事務処理サポート</p>
                    <p class="text-center text-xs lg:text-base">自由度の高いシフトで、短時間でもフルタイムでもOK</p>
                  </div>
                </div>

                <div class="mx-auto mt-2 lg:mt-6 w-full">
                  <table class="w-11/12 mx-auto text-sm md:text-lg">
                    <tr class="">
                      <td class="py-4 align-top">
                        募集職種
                      </td>
                      <td class="pl-6 lg:pl-12 py-4">
                        <p>事務処理</p>
                        <div>
                          <p>・パソコンによるデータ作成やデータ集計</p>
                        </div>
                      </td>
                    </tr>
                    <tr class="">
                      <td class="py-4 truncate">
                        雇用形態
                      </td>
                      <td class="pl-6 lg:pl-12">
                        正社員/契約社員
                      </td>
                    </tr>
                    <tr class="">
                      <td class="py-4">
                        給与
                      </td>
                      <td class="pl-6 lg:pl-12">
                        時給1,100円以上 + 交通費支給
                      </td>
                    </tr>
                    <tr class="">
                      <td class="pt-4 align-top">
                        シフト
                      </td>
                      <td class="pt-4 pl-6 lg:pl-12">
                        <p>【フルタイム】</p>
                        <div>
                          <p>・完全週休二日 / 日曜 + 希望体制</p>
                          <p>・10:00～19:00</p>
                        </div>
                        <p class="mt-2">【短時間勤務】</p>
                        <div>
                          <p>・週3日以上、1日4時間以上</p>
                          <p>・シフト自由・自己申告</p>
                          <p>・9:00～18:00（左記内で実働4時間以上）</p>
                        </div>
                      </td>
                    </tr>
                  </table>
                </div>

                <Link href="/recruit/detail2">
                <div class="flex justify-center mt-4">
                  <button class="bg-falGLD text-white text-xs font-normal py-1 px-2 lg:text-base lg:font-semibold lg:py-2 lg:px-4 rounded">詳細・エントリーはこちら</button>
                </div>
              </Link>

                <div class="flex justify-center mt-8">
                  <p class="w-11/12 bg-gray-500 text-white text-base md:text-2xl py-3 text-center rounded-lg">受付終了しました</p>
                </div>

              </section>
              */}
            </div>

          </div>
        </main>
      </Layout>
    </div>
  )
}
