import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'


import Layout from '../../components/layout'

export default function RECRUIT() {
  return (
    <div>
      <Head>
        <title>RECRUIT</title>
        <link rel="icon" href="/falconer_favicons.png" />
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
          </div>
        </div>

        <div class="bg-gray-100 w-full mt-2">
          <div class="mx-auto lg:w-1100 pb-16 px-4 lg:px-20">

            <div class="pt-4 lg:pt-12">
              <div class="bg-white shadow-lg p-6">
                <p class="text-center text-lg lg:text-2xl font-semibold">【経理事務】 未経験でも簡単な入力ができればOK♪週3日4h〜シフト自由で扶養内も◎私服OK</p>
              </div>
            </div>

            <div class="text-yellow-600 font-semibold border-b border-gray-700 pb-4 mt-4 lg:mt-8 text-xs lg:text-lg">
              <p class="pl-4">レザーアイテムのネットショップ運営会社の経理事務！</p>
              <p class="pl-4">自由度の高いシフトで、</p>
              <p class="pl-4">子どもが保育園や学校に行っている間だけでもOK♪</p>
            </div>

            <div class="mt-4">
              <div class="text-xs lg:text-lg">
                <p>★未経験でも最初から時給1100円以上！</p>
                <p>★交通費支給</p>
                <p>★やる気次第で随時昇給</p>
                <p>★服や髪もアナタらしく自由でOK！</p>
                <p>★ピアスやネイルなどのアクセもOK！</p>
              </div>
            </div>

            <div class="mt-4 shadow rounded-lg">
              <h1 class="text-yellow-600 font-semibold text-base lg:text-lg bg-gray-200 rounded-t-lg p-4">注目ポイント</h1>
              <div class="text-xs lg:text-lg rounded-b-lg bg-white p-4">
                <p>楽しく稼ぐことを大切に。</p>
                <p>20代前半～30代前半の若いメンバー中心に音楽の流れる職場で、</p>
                <p>毎日楽しみながら過ごしています。 「黙々と作業をしている」という雰囲気はありません。</p>
                <p>どうせ働くなら楽しく働けるよう好きな音楽やラジオをかけて</p>
                <p>時にはおしゃべりをしながらワイワイと</p>
                <p>お互い気遣いを忘れずにいい雰囲気で働いています。</p>
                <ul class="list-disc list-inside pl-4 mt-4">
                  <li>未経験者歓迎</li>
                  <li>長期</li>
                  <li>シフト自由・自己申告</li>
                  <li>週3日～OK</li>
                  <li>1日4h以上</li>
                </ul>
              </div>
            </div>

            <div class="mt-4 text-xs lg:text-lg">
              <p>働いている人の声「子供の予定に合わせやすい」「 急なシフト変更も聞いてもらえました」「スキルが身につく」「みんな仲良し」</p>
              <p>安心して働けるよう、サポート体制も充実しています。 いきなり仕事を丸投げすることはなく、 先輩が親切丁寧に教えます。</p>
            </div>

            <div class="pt-4 lg:pt-12">
              <h1 class="text-lg lg:text-2xl font-semibold border-b border-gray-700">募集要項</h1>
              <div class="mt-2 lg:mt-6 lg:px-10 w-full">
                <table class="w-full shadow rounded-lg border border-gray-300 lg:divide-y divide-gray-300">
                  <tr class="bg-gray-100 lg:bg-gray-50">
                  <td class="pl-6 py-4 text-xs lg:text-base font-medium text-gray-900">
                      雇用形態
                    </td>
                    <td class="pl-6 lg:pl-12 py-4 text-xs lg:text-base text-gray-700">
                      <p>契約社員</p>
                      <p>パート・アルバイト</p>
                    </td>
                  </tr>
                  <tr class="bg-white">
                    <td class="pl-6 py-4 text-xs lg:text-base font-medium text-gray-900">
                      給与
                    </td>
                    <td class="pl-6 lg:pl-12 py-4 text-xs lg:text-base text-gray-700">
                      <p>【時給1100円以上＋交通費支給】</p>
                      <p>◆昇給有り</p>
                      <p class="mt-4">◆支払方法：月1回</p>
                      <p class="mt-4">◆交通費：別途一部支給</p>
                    </td>
                  </tr>
                  <tr class="bg-gray-100 lg:bg-gray-50">
                    <td class="pl-6 py-4 text-xs lg:text-base font-medium text-gray-900">
                      シフト・勤務時間
                    </td>
                    <td class="pl-6 lg:pl-12 py-4 text-xs lg:text-base text-gray-700">
                      <p>〇フルタイム</p>
                      <ul class="list-disc list-inside pl-1">
                        <li>完全週休二日／日曜＋希望休制</li>
                        <li>10:00~19:00</li>
                      </ul>
                      <p class="mt-4">〇短時間契約</p>
                      <ul class="list-disc list-inside pl-1">
                        <li>週3日以上、1日4時間以上</li>
                        <li>シフト自由・自己申告</li>
                        <li>9：00 ～ 18：00 （左記内で実働4時間以上）</li>
                      </ul>
                      <p class="mt-4">シフトも自由度が高いので、</p>
                      <p>「子どもが帰ってくるまで」や「午後から夕方まで」など</p>
                      <p>都合に合わせて働いていただけます！</p>
                      <p>「仕事に復帰したいけど、フルタイムはちょっと・・・」という方も大歓迎です◎</p>
                    </td>
                  </tr>
                  <tr class="bg-white">
                    <td class="pl-6 py-4 text-xs lg:text-base font-medium text-gray-900">
                      勤務できる曜日
                    </td>
                    <td class="pl-6 lg:pl-12 py-4 text-xs lg:text-base text-gray-700">
                      <p>月火水木金土</p>
                    </td>
                  </tr>
                  <tr class="bg-gray-100 lg:bg-gray-50">
                    <td class="pl-6 py-4 text-xs lg:text-base font-medium text-gray-900">
                      勤務期間
                    </td>
                    <td class="pl-6 lg:pl-12 py-4 text-xs lg:text-base text-gray-700">
                      <p>長期（3ヶ月以上）</p>
                    </td>
                  </tr>
                  <tr class="bg-white">
                    <td class="pl-6 py-4 text-xs lg:text-base font-medium text-gray-900">
                      勤務地
                    </td>
                    <td class="pl-6 lg:pl-12 py-4 text-xs lg:text-base text-gray-700">
                      <p>名古屋市名東区牧の里3-104-2</p>
                      <p>東山線「 一社駅 」から車で8分</p>
                      <p>名古屋市バス「 牧の原 」駅より徒歩で10分</p>
                    </td>
                  </tr>
                  <tr class="bg-gray-100 lg:bg-gray-50 border-b">
                    <td class="pl-6 py-4 text-xs lg:text-base font-medium text-gray-900">
                      待遇・福利厚生
                    </td>
                    <td class="pl-6 lg:pl-12 py-4 text-xs lg:text-base text-gray-700">
                      <p>★昇給あり</p>
                      <p>★交通費規定内支給</p>
                      <p>★扶養控除内での勤務OK</p>
                      <p>★マイカー通勤OK</p>
                      <ul class="list-disc list-inside pl-1 mt-4">
                        <li>社会保険完備</li>
                        <li>交通費支給</li>
                        <li>昇給あり</li>
                        <li>扶養控除内勤務可</li>
                        <li>残業月10h以下</li>
                      </ul>
                    </td>
                  </tr>
                  {/*<!-- More items... -->*/}
                </table>
              </div>
            </div>

          </div>
        </div>

        <div class="w-full mb-8">
          <div class="mx-auto w-full lg:w-650 pt-4 px-4 lg:pt-12">
            <h1 class="text-center text-3xl border-b-2 border-gray-500">ENTRY</h1>
            <h2 class="text-center text-xl mx-auto">お申込み</h2>
          </div>

          <Link href="/recruit/form2">
            <div class="flex justify-center mt-4">
              <button class="bg-falGLD text-white text-xs font-normal py-1 px-2 lg:text-base lg:font-semibold lg:py-2 lg:px-4 rounded">こちらから応募ください</button>
            </div>
          </Link>
        </div>

      </main>
      </Layout>
    </div>
  )
}
