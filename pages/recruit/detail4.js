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
                  <div class="lg:flex justify-center">
                    <p class="text-center text-lg lg:text-2xl font-semibold"></p>
                    <p class="text-center text-lg lg:text-2xl font-semibold">【 配送センター管理スタッフ 】</p>
                    <p class="text-center text-lg lg:text-2xl font-semibold">※未経験OK</p>
                  </div>
                </div>
                <div class="mt-4 lg:mt-8 text-xs lg:text-lg">
                  <p class="mb-4">1年前までは10人程しかいなかった当社も、今ではなんと約2倍の人数を抱える会社にまで成長しました。ここまで成長できたのも、当社を一生懸命盛り上げてくれた社員たちのおかげです。</p>
                  <p class="mb-4">ですが自社ブランドや新事業の展開など、まだまだやりたいことがたくさん。それらを叶えていくためには、新しい仲間が必要です。未経験でもOK。「 自分も何かを叶えてみたい 」少しでもそう感じてくれたあなた。ぜひ私達に会いに来てください。</p>
                </div>
              </div>


              <div class="pt-4 lg:pt-12">
                <h1 class="text-lg lg:text-2xl font-semibold border-b border-gray-700">仕事内容</h1>

                <div class="mt-4 lg:mt-8 text-xs lg:text-lg">
                  <p>【受発注伝票の作成やお客様からの商品に関する問い合わせ対応等】</p>
                  <p>梱包スペースや事務室は冷暖房完備</p>
                  <p>★IT化や外部との協⼒体制の確⽴で無理なく活躍︕</p>
                </div>

                <div class="mt-4 lg:mt-8">
                  <h1 class="text-blue-500 font-semibold text-base lg:text-lg">具体的には</h1>
                  <div class="mt-4">
                    <h1 class="font-semibold text-base lg:text-lg mb-2">受注管理</h1>
                    <div class="text-xs lg:text-lg">
                      <p>発注する伝票、お客様に発送するための伝票などを作成します。</p>
                    </div>
                  </div>

                  <div class="mt-4">
                    <h1 class="font-semibold text-base lg:text-lg mb-2">お客様対応</h1>
                    <div class="text-xs lg:text-lg">
                      <p>お客様から頂いた、発送時期や商品の詳細についての質問に対してメールや電話で回答します。</p>
                    </div>
                  </div>

                  <div class="mt-4">
                    <h1 class="font-semibold text-base lg:text-lg mb-2">倉庫管理</h1>
                    <div class="text-xs lg:text-lg">
                      <p>発送する商品をピックアップしたり、⼊荷した商品を倉庫内に綺麗に収めます。</p>
                    </div>
                  </div>
                </div>

                <div class="mt-4 lg:mt-8">
                  <h1 class="text-blue-500 font-semibold text-base lg:text-lg mb-4">入社後の流れ</h1>
                  <div class="text-xs lg:text-lg">
                    <p>受注管理・お客様対応・倉庫管理、いずれかの業務から覚えていただく予定です。</p>
                    <p>先輩やパートさん達が、作業の進め⽅をイチから教えますので安⼼してくださいね。</p>
                    <p>だいたい2〜3ヶ⽉後には、パートさん達と連携を取りながらリーダーとして指⽰出しも︕</p>
                    <p>配送センターのまとめ役としての活躍も少しずつ増やしていきましょう︕</p>
                  </div>
                </div>
              </div>

              <div class="pt-4 lg:pt-12">
                <h1 class="text-lg lg:text-2xl font-semibold border-b border-gray-700">対象となる方</h1>

                <div class="mt-4 lg:mt-8 text-xs lg:text-lg">
                  <p>【 未経験OK★PC操作に苦⼿意識がなければOK︕ 】</p>
                  <p>レザーアイテムが好き︕体を動かすことが好き︕PC作業が好き︕どんなきっかけでもOK</p>
                  <p class="mt-4">私たちには、まだまだやりたいことがたくさん。</p>
                  <p>だからこそ新しく入ってくる方にも</p>
                  <p>何か夢や目標をもって取り組んで欲しいと思っています。</p>
                  <ul class="mt-4 list-disc list-inside pl-4">
                    <li>贅沢できるくらい稼ぎたい</li>
                    <li>有名人になりたい</li>
                    <li>将来は、幸せな家庭を築きたい</li>
                  </ul>
                  <p class="mt-4">など、前向きに取り組めることであれば何でもOK。</p>
                  <p>一つでも当てはまる方も、違う目標がある方も、</p>
                  <p>ぜひ一度ご応募ください。</p>
                </div>

                <div class="mt-4">
                  <h1 class="font-semibold text-base lg:text-lg">▼必要なスキル</h1>
                  <ul class="list-disc list-inside pl-4 text-xs lg:text-lg">
                    <li>基本的なPCスキル（★伝票作成時にPCを使⽤します︕）
                      <p class="mt-4 mb-2">お任せしたいのは、メンバーに指⽰を出したり、時には⼀緒に汗を流したり…など、チームをまとめていくこと。<br />だからこそ、</p>
                    </li>
                    <li>誰かと⼀緒に何かを成し遂げることが好き︕</li>
                    <li>周りのメンバーを思いやりながら⽴ち回れる︕
                      <p class="mt-4 mb-2">という⽅を是⾮お迎えしたいと思っています。<br />背伸びも不要・⾃称でOK︕興味がある⽅は、ぜひご応募ください︕</p>
                    </li>
                  </ul>
                </div>

                <div class="mt-4">
                  <h1 class="font-semibold text-base lg:text-lg">▼あれば活かせます</h1>
                  <ul class="list-disc list-inside pl-4 text-xs lg:text-lg">
                    <li>フォークリフトの操作経験・免許</li>
                    <li>⼩売店でのバックヤード業務経験(発注、在庫管理など)</li>
                  </ul>
                </div>
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
                        正社員
                      </td>
                    </tr>
                    <tr class="bg-white">
                      <td class="pl-6 py-4 text-xs lg:text-base font-medium text-gray-900">
                        勤務時間
                      </td>
                      <td class="pl-6 lg:pl-12 py-4 text-xs lg:text-base text-gray-700">
                        <ul class="list-disc list-inside pl-1">
                          <li>10：00～19：00／休憩1時間</li>
                        </ul>
                        <p>★残業は月平均10時間程度</p>
                      </td>
                    </tr>
                    <tr class="bg-gray-100 lg:bg-gray-50">
                      <td class="pl-6 py-4 text-xs lg:text-base font-medium text-gray-900">
                        勤務地
                      </td>
                      <td class="pl-6 lg:pl-12 py-4 text-xs lg:text-base text-gray-700">
                        <p>名古屋市名東区牧の里3-104-2</p>
                        <p>東山線「 一社駅 」から車で8分</p>
                        <p>名古屋市バス「 牧の原 」駅より徒歩で10分</p>
                      </td>
                    </tr>
                    <tr class="bg-white">
                      <td class="pl-6 py-4 text-xs lg:text-base font-medium text-gray-900">
                        給与
                      </td>
                      <td class="pl-6 lg:pl-12 py-4 text-xs lg:text-base text-gray-700">
                        <p>【 月給20万円～30万円＋諸手当 】</p>
                        <p class="mt-4 font-semibold">＼ 目標に向かって、成長できる！ ／</p>
                        <p>「 月5万円給与UPをしていきたい！ 」</p>
                        <p>……例えば、そんなことも叶えられる環境。</p>
                        <p>どう行動していくのかを目標として掲げ、</p>
                        <p>その目標が達成すれば叶うシステムです。</p>
                        <p class="mt-4">自分の立てた明確な目標に向かって努力ができるので、</p>
                        <p>モチベーション高く活躍できるはずです！</p>
                        <p class="mt-4 font-semibold">初年度の年収</p>
                        <p>240万円～360万円</p>
                      </td>
                    </tr>
                    <tr class="bg-gray-100 lg:bg-gray-50">
                      <td class="pl-6 py-4 text-xs lg:text-base font-medium text-gray-900">
                        休日・休暇
                      </td>
                      <td class="pl-6 lg:pl-12 py-4 text-xs lg:text-base text-gray-700">
                        <p class="font-semibold">休日</p>
                        <ul class="list-disc list-inside pl-1">
                          <li>10：00～19：00／休憩1時間</li>
                        </ul>
                        <p>★土日休みもOK</p>
                        <p class="font-semibold">休暇</p>
                        <ul class="list-disc list-inside pl-1">
                          <li>年末年始休暇</li>
                          <li>有給休暇(1週間以上の休みもOK)</li>
                        </ul>
                      </td>
                    </tr>
                    <tr class="bg-white border-b">
                      <td class="pl-6 py-4 text-xs lg:text-base font-medium text-gray-900">
                        待遇・福利厚生
                      </td>
                      <td class="pl-6 lg:pl-12 py-4 text-xs lg:text-base text-gray-700">
                        <ul class="list-disc list-inside pl-1">
                          <li>各種社会保険完備</li>
                          <li>社割制度あり</li>
                          <li>休憩室完備</li>
                        </ul>
                        <p>…ベンチプレスやサンドバックなどの</p>
                        <p>筋トレグッズやカラオケなども設置された、</p>
                        <p>リラックスルームです。</p>
                        <p class="mt-4 font-semibold">学びたい！に応える支援も</p>
                        <p>本を買いたい！セミナー受けたい！など、</p>
                        <p>" 学び " に対する支援もしている当社。</p>
                        <p>新しい分野への挑戦を応援する社風です。</p>

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

            <Link href="/recruit/form1">
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
