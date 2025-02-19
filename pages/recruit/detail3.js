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
                    <p class="text-center text-lg lg:text-2xl font-semibold">自社ブランドの魅力を発信</p>
                    <p class="text-center text-lg lg:text-2xl font-semibold">【 ECサイト運営店長 】</p>
                    <p class="text-center text-lg lg:text-2xl font-semibold">※モール運用経験有りの方</p>
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
                  <p>【 商品登録や商品の閲覧データ分析などのECサイト運営業務 】運営の基礎から学べる！</p>
                  <p>自社オリジナル商品で"Happyを届けるお仕事"一緒にしませんか？</p>
                </div>

                <div class="mt-4 lg:mt-8">
                  <h1 class="text-blue-500 font-semibold text-base lg:text-lg">具体的には</h1>
                  <div class="mt-4">
                    <h1 class="font-semibold text-base lg:text-lg mb-2">商品登録</h1>
                    <div class="text-xs lg:text-lg">
                      <p>写真や商品の説明、価格などを登録します。</p>
                      <p>特集用のバナーや広告などを作成することも。</p>
                      <p>その際はデザイナーと協力して進めます。</p>
                    </div>
                  </div>

                  <div class="mt-4">
                    <h1 class="font-semibold text-base lg:text-lg mb-2">データ分析</h1>
                    <div class="text-xs lg:text-lg">
                      <p>商品の売り上げ状況や閲覧データなどを分析。そのデータをもとに、</p>
                      <p>「 次はこの人たちが買いたくなるような企画を計画しよう！ 」などの施策を練ります。</p>
                    </div>
                  </div>
                </div>

                <div class="mt-4 lg:mt-8">
                  <h1 class="text-blue-500 font-semibold text-base lg:text-lg mb-4">入社後の流れ</h1>
                  <div class="text-xs lg:text-lg">
                    <p>商品を売るために、まず学ぶべきは基礎の基礎。</p>
                    <p>検索して商品がヒットするまでの仕組みや、</p>
                    <p>データ分析ツールの使い方などを学んでいきます。</p>
                    <p>基礎を学んだら、あとは実践。</p>
                    <p>正解がない分、悩むことも多いと思います。</p>
                    <p>ですが、そんな時こそ周りの先輩たちを頼って、</p>
                    <p>色々なことを吸収してくださいね！</p>
                  </div>
                </div>

                <div class="mt-4 lg:mt-8">
                  <h1 class="text-blue-500 font-semibold text-base lg:text-lg mb-4">いい意味で楽をしよう。</h1>
                  <div class="text-xs lg:text-lg">
                    <p>"人にしかできないことをやる"</p>
                    <p>そのために、なるべく人がやらなくてもいい</p>
                    <p>細かな作業は、システムで処理できるような環境にしています。</p>
                    <p>閲覧データなどはシステムが処理。</p>
                    <p>その結果を見て、施策を考えるのが私たちの仕事です。</p>
                    <p>より質のいい仕事をするために、無駄を省く。</p>
                    <p>それが当社のモットーです。</p>
                  </div>
                </div>
              </div>

              <div class="pt-4 lg:pt-12">
                <h1 class="text-lg lg:text-2xl font-semibold border-b border-gray-700">対象となる方</h1>

                <div class="mt-4 lg:mt-8 text-xs lg:text-lg">
                  <p>【 ★20代・30代活躍中★ 】</p>
                  <p>新しいことに挑戦したい。安定を手に入れたい。夢あるあなたを応援します。</p>
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
                    <li>ECモール（楽天・Yahoo・Amazonなど）での運用経験</li>
                    <li>Excelで簡単な計算ができる程度の知識</li>
                  </ul>
                </div>

                <div class="mt-4">
                  <h1 class="font-semibold text-base lg:text-lg">▼あれば活かせます</h1>
                  <ul class="list-disc list-inside pl-4 text-xs lg:text-lg">
                    <li>営業経験</li>
                    <li>販売職経験</li>
                    <li>販促企画経験</li>
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
                          <li>9：00～18：00／休憩1時間</li>
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
                        <p>【 月給30万円～50万円＋諸手当 】</p>
                        <p class="mt-4 font-semibold">＼ 目標に向かって、成長できる！ ／</p>
                        <p>「 月5万円給与UPをしていきたい！ 」</p>
                        <p>……例えば、そんなことも叶えられる環境。</p>
                        <p>どう行動していくのかを目標として掲げ、</p>
                        <p>その目標が達成すれば叶うシステムです。</p>
                        <p class="mt-4">自分の立てた明確な目標に向かって努力ができるので、</p>
                        <p>モチベーション高く活躍できるはずです！</p>
                        <p class="mt-4 font-semibold">初年度の年収</p>
                        <p>360万円～600万円</p>
                      </td>
                    </tr>
                    <tr class="bg-gray-100 lg:bg-gray-50">
                      <td class="pl-6 py-4 text-xs lg:text-base font-medium text-gray-900">
                        休日・休暇
                      </td>
                      <td class="pl-6 lg:pl-12 py-4 text-xs lg:text-base text-gray-700">
                        <p class="font-semibold">休日</p>
                        <ul class="list-disc list-inside pl-1">
                          <li>9：00～18：00／休憩1時間</li>
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

              <div class="pt-4 lg:pt-12">
                <h1 class="text-lg lg:text-2xl font-semibold border-b border-gray-700">会社・仕事の魅力</h1>

                <div class="mt-4 lg:mt-8">
                  <h1 class="text-blue-500 font-semibold text-base lg:text-lg mb-4">心を分析し、動かす。そして商品と気持ちを届ける。</h1>
                  <div class="text-xs lg:text-lg">
                    <p>最初こそ、そのノウハウを身に付け</p>
                    <p>一人前として活躍して欲しいですが、</p>
                    <p>当社での未来はそれだけではありません。</p>
                    <p>新規立ち上げ中・構想中の事業等、</p>
                    <p>常に新しいことに挑戦し、人も会社も成長しています。</p>
                    <p class="mt-4">同じ仕事を極めるのも立派な事。それも大賛成です。</p>
                    <p>でも、もし当社で働くうちにやりたいことが見つかったら？</p>
                    <p>私達は、その背中を押してあげたい。</p>
                    <p class="mt-4">新しいことができる、挑戦できるのが、当社の魅力ですから。</p>
                  </div>
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
