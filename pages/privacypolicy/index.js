import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import Layout from '../../components/layout'

export default function Company({ medias }) {

  return (
    <div>
      <Head>
        <title>プライバシーポリシー</title>
        <link rel="icon" href="/falconer_favicons.png" />
      </Head>
      <Layout>
        <main class="font-sans">
          <div class="mx-auto pb-6 text-center">
            <div class="max-w-1280 px-12 mx-auto text-left text-base">
              <h1 class="mt-5 text-5xl font-semibold">プライバシーポリシー</h1>
              <div class="mt-5">
                <p class="mt-2">
                  株式会社FALCONER（以下、当社）は、個人情報の重要性を認識し、
                  個人情報を保護することが社会的責務であると考え、
                  個人情報に関する法令を遵守し、
                  当社で取扱う個人情報の取得、利用、管理を適正に行います。
                </p>
              </div>

              <div class="mt-5">
                <h2 class="text-2xl font-bold border-l-2 border-black pl-4">適用範囲</h2>
                <p class="mt-2">
                  本プライバシーポリシーは、お客様の個人情報もしくはそれに準ずる情報を取り扱う際に、
                  当社が遵守する方針を示したものです。
                </p>
              </div>

              <div class="mt-5">
                <h2 class="text-2xl font-bold border-l-2 border-black pl-4">個人情報の利用目的</h2>
                <p class="mt-2">
                  当社は、お客様からご提供いただく情報を以下の目的の範囲内において利用します。
                </p>
                <ul class="">
                  <li class="">お問い合わせ、コメント等の確認・回答のため</li>
                  <li class="">サービスの提供・改善・開発・マーケティングのため</li>
                  <li class="">お客さまの承諾・申込みに基づく、提携事業者・団体等への個人情報の提供のため</li>
                  <li class="">利用規約等で禁じている行為などの調査のため</li>
                  <li class="">その他個別に承諾いただいた目的</li>
                </ul>
              </div>

              <div class="mt-5">
                <h2 class="text-2xl font-bold border-l-2 border-black pl-4">個人情報の管理</h2>
                <p class="mt-2">
                  当社は、個人情報の正確性及び安全確保のために、セキュリティ対策を徹底し、
                  個人情報の漏洩、改ざん、不正アクセスなどの危険については、
                  必要かつ適切なレベルの安全対策を実施します。
                </p>
                <p class="mt-2">
                  当社は、第三者に重要な情報を読み取られたり、
                  改ざんされたりすることを防ぐために、SSLによる暗号化を使用しております。
                </p>
              </div>

              <div class="mt-5">
                <h2 class="text-2xl font-bold border-l-2 border-black pl-4">個人情報の第三者提供</h2>
                <p class="mt-2">
                  当社は、以下を含む正当な理由がある場合を除き、
                  個人情報を第三者に提供することはありません。
                </p>
                <ul class="">
                  <li class="">ご本人の同意がある場合</li>
                  <li class="">法令に基づく場合</li>
                  <li class="">人の生命・身体・財産の保護に必要な場合</li>
                  <li class="">公衆衛生・児童の健全育成に必要な場合</li>
                  <li class="">国の機関等の法令の定める事務への協力の場合（税務調査、統計調査等）</li>
                </ul>
                <p class="mt-2">
                  当社では、利用目的の達成に必要な範囲内において、
                  他の事業者へ個人情報を委託することがあります。
                </p>
              </div>

              <div class="mt-5">
                <h2 class="text-2xl font-bold border-l-2 border-black pl-4">個人情報の開示・訂正等</h2>
                <p class="mt-2">
                  開示、訂正、利用停止等のお申し出があった場合には、
                  所定の方法に基づき対応致します。
                  具体的な方法については、個別にご案内しますので、お問い合わせください。
                </p>
              </div>

              <div class="mt-5">
                <h2 class="text-2xl font-bold border-l-2 border-black pl-4">免責事項</h2>
                <p class="mt-2">
                  当社のコンテンツ・情報について、可能な限り正確な情報を掲載するよう努めておりますが、
                  正確性や安全性を保証するものではありません。
                  当社に掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。<br />
                  当社からリンクやバナーなどによって他のサイトに移動した場合、
                  移動先サイトで提供される情報、サービス等について一切の責任を負いません。<br />
                  当社で掲載している料金表記について、予告なく変更されることがあります。
                </p>
              </div>

              <div class="mt-5">
                <h2 class="text-2xl font-bold border-l-2 border-black pl-4">著作権・肖像権</h2>
                <p class="mt-2">
                  当社は、本プライバシーポリシーの内容を適宜見直し、その改善に努めます。<br />
                  本プライバシーポリシーは、事前の予告なく変更することがあります。<br />
                  本プライバシーポリシーの変更は、当社に掲載された時点で有効になるものとします。
                </p>
              </div>

              <div class="mt-5">
                <h2 class="text-2xl font-bold border-l-2 border-black pl-4">お問い合わせ</h2>
                <p class="mt-2">
                  当社のプライバシーポリシーに関する、ご意見、ご質問、苦情の申出その他ユーザー情報の取扱いに関するお問い合わせは、
                  <a href="https://www.falconer.co.jp/contact" class="">お問い合わせフォーム</a>より承っております。
                </p>
                <p class="mt-2">2025年7月1日改定</p>
              </div>

              <div class="mt-5">
                <h2 class="text-2xl font-bold border-l-2 border-black pl-4">クッキーポリシー</h2>
                <p class="mt-2">
                  当社は、お客様のウェブサイト利用状況を分析し、または個々のお客様に対して
                  カスタマイズされたサービス・広告を提供する等の目的のため、
                  クッキーを使用して一定の情報を収集します。
                </p>
              </div>

              <div class="mt-5">
                <h2 class="text-2xl font-bold border-l-2 border-black pl-4">クッキーについて</h2>
                <p class="mt-2">
                  クッキーとはお客様のウェブサイト閲覧情報を、そのお客様のコンピューター
                  （PCやスマートフォン、タブレットなどインターネット接続可能な機器）に記憶させる機能のことです。<br />
                  クッキーには、当社によって設定されるもの（ファーストパーティークッキー）と、
                  当社と提携する第三者によって設定されるもの（サードパーティークッキー）があります。
                </p>
              </div>

              <div class="mt-5">
                <h2 class="text-2xl font-bold border-l-2 border-black pl-4">GoogleAnalytics</h2>
                <h3 class="text-xl font-medium mt-2">ツール提供者</h3>
                <p class="mt-2">Google Inc.</p>
                <h3 class="text-xl font-medium mt-2">利用目的</h3>
                <p class="mt-2">
                  お客様のウェブサイトの利用状況を分析し、ウェブサイトやサービスの向上、改善のために使用する。
                </p>
                <h3 class="text-xl font-medium mt-2">設定変更方法等</h3>
                <p class="mt-2">
                  ■無効設定<br />
                  <a href="https://tools.google.com/dlpage/gaoptout?hl=ja" target="_blank" rel="noopener noreferrer">
                    https://tools.google.com/dlpage/gaoptout?hl=ja
                  </a><br />
                  ■利用規約<br />
                  <a href="http://www.google.com/analytics/terms/jp.html" target="_blank" rel="noopener noreferrer">
                    http://www.google.com/analytics/terms/jp.html
                  </a><br />
                  ■プライバシーポリシー<br />
                  <a href="http://www.google.com/intl/ja/policies/privacy/partners/" target="_blank" rel="noopener noreferrer">
                    http://www.google.com/intl/ja/policies/privacy/partners/
                  </a>
                </p>
              </div>

              <div class="mt-5">
                <h2 class="text-2xl font-bold border-l-2 border-black pl-4">Clarity</h2>
                <h3 class="text-xl font-medium mt-2">ツール提供者</h3>
                <p class="mt-2">Microsoft Corporation</p>
                <h3 class="text-xl font-medium mt-2">利用目的</h3>
                <p class="mt-2">
                  お客様のウェブサイトの利用状況を分析し、ウェブサイトやサービスの向上、改善のために使用する。
                </p>
                <h3 class="text-xl font-medium mt-2">設定変更方法等</h3>
                <p class="mt-2">
                  ■無効設定<br />ブラウザの設定を変更しクッキーを無効にしてください。<br />
                  ■利用規約<br />
                  <a href="https://clarity.microsoft.com/" target="_blank" rel="noopener noreferrer">
                    https://clarity.microsoft.com/
                  </a><br />
                  ■プライバシーポリシー<br />
                  <a href="https://privacy.microsoft.com/ja-jp/privacystatement" target="_blank" rel="noopener noreferrer">
                    https://privacy.microsoft.com/ja-jp/privacystatement
                  </a>
                </p>
              </div>

            </div>
          </div>
        </main>
      </Layout>
    </div>
  )
}

export const getStaticProps = async () => {
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  };
  const data = await fetch('https://falconer.microcms.io/api/v1/media', key)
    .then(res => res.json())
    .catch(() => null);

  return {
    props: {
      medias: data.contents,
    },
  };
};
