import Head from 'next/head'
import Image from 'next/image'

import Layout from '../../components/layout'

export default function Message() {
  return (
    <div>
      <Head>
        <title>代表メッセージ</title>
        <link rel="icon" href="/falconer_favicons.png" />
      </Head>
      <Layout>
        <main class="-mb-4">
          {/*見出し部分*/}
          <div class="mb-12 md:mb-24">
            <div class="relative">
              <h1 class="company_title futura-lt text-white text-center font-bold text-3xl lg:text-3xl h-405 flex items-center justify-center flex-col">MESSAGE<p class="NotoSans-L text-base font-normal">代表メッセージ</p></h1>
            </div>
            <div class="w-90% md:w-1280 mx-auto mt-8 md:mt-52">
              {/*社長紹介*/}
              <section class="flex flex-wrap md:flex-nowrap">
                {/*画像ブロック*/}
                <div class="w-full md:w-1/4">
                  <picture>
                    <source media="(min-width: 960px)" srcSet="/images/company/ceo_image.jpg" />
                    <img src="/images/company/ceo_image_sp.jpg" />
                  </picture>
                </div>
                {/*テキスト*/}
                <div class="w-full md:w-3/4 md:ml-5 mt-9 md:mt-0">
                  {/*経歴*/}
                  <div class="border-b border-gray-600 pb-3">
                    <div class="flex justify-between flex-wrap">
                      <h2 class="NotoSans-L w-full md:w-auto text-center md:text-left text-2xl md:text-5xl text-gray-700 md:text-black">清水 真輝<span class="futura-md ml-5 text-xl md:text-2xl text-gray-700">Masaki Shimizu</span></h2>
                      <p class="text-center mt-3 md:mt-0 md:text-right">1987年11月27日生まれ / AB型<br />愛知高校・名古屋学院大学英米科卒業</p>
                    </div>
                  </div>
                  {/*本文*/}
                  <div class="mt-4 text-justify NotoSans-L text-sm md:text-xl leading-6 md:leading-7">
                    毎月仕事で様々な国を訪れて解った事があります。日本人の多くはとにかく顔が暗いのです。日本の長い歴史を振り返ってもどれほどの期間が天下太平だったのでしょう。衣食住・衛生・治安的に安定した生活がほとんどの人に与えられてる今なぜこんなにも日本人の心や顔は暗いのでしょうか。<br /><br />
                    現代の日本社会は物質的に豊かな時代になったと言えるでしょう。しかしその一方で、情報や生き方が多様・複雑化する中で何を信念に生きていくかが分からなくなっているのではないでしょうか。<br /><br />
                    望まぬ戦争に巻き込まれた多くの人の血の上に今の平和な日本や世界各国が築かれ、そしてまだ世界では生命の担保さえ出来ない国がたくさんあります。その中で私たちがこうして平和に暮らせるのは、平和で美しい世界、そして日本を作るために生きてきた多くの偉大な先人達のおかげです。<br /><br />
                    このような人達が毎日暗い顔をして生きていたり、我先に利益や自分個人の安定や安全に執着して生きている多くの日本人を見たら、どの様な気持ちでしょうか？私たちはその様な時代を生き抜いた先人達を尊び、感謝をして、後世の人たちが綺麗な地球で平和に暮らしていくために、毎日天命を尽くすしかないのではないでしょうか。
                  </div>
                </div>
              </section>
              {/*Message1*/}
              <section class="flex flex-wrap md:flex-nowrap mt-11 md:mt-28">
                {/*タイトルブロック*/}
                <div class="w-full md:w-1/4">
                  <h2 class="futura-lt md:futura-md text-center md:text-left text-3xl md:text-6xl message_title">Message.1</h2>
                </div>
                {/*テキスト*/}
                <div class="w-full md:w-3/4 md:ml-5">
                  {/*サブタイトル*/}
                  <div class="border-b border-gray-600 pb-3 md:pb-8">
                    <div class="flex justify-between flex-wrap">
                      <h3 class="NotoSans-L mt-10 md:mt-0 text-xl md:text-5xl">「照于一隅」一隅を照らす</h3>
                    </div>
                  </div>
                  {/*本文*/}
                  <div class="mt-4 text-justify NotoSans-L text-sm md:text-xl leading-6 md:leading-7">
                    人は自我を満たすことを考えることで毎日明るく生きることは出来ません。ごく稀にそれで成功しているように見える人が居てもそれはかりそめの幻想でしょう。羨む必要も妬む必要もないのです。それは可哀想な人なのです。<br /><br />
                    私は宗教家でも何か特定の信者でもありませんが、天台宗開祖の最澄禅師は著書の山家学生式の中でこう述べています。
                    <div class="p-3 md:p-6 pickup_text leading-5 my-2 md:my-4">“国の宝とはなにか。 宝とは道を修めようとする心である。 この道心をもっている人こそ、 社会にとって、なくてはならない国の宝である。 だから中国の昔の人は言った。 「直径3センチの宝石10個、それが宝ではない。 社会の一隅にいながら、社会を照らす生活をする。 その人こそが、なくてはならない国宝の人である」と。 このような道心ある人を インドでは菩薩とよび、 中国では君子という。 いやなことでも自分でひきうけ よいことは他の人に分かち与える。 自分をひとまず置いて、まず他の人のために働くことこそ、本当の慈悲である。”</div>
                    国の宝とは、お金や財宝ではなく、自分自身が置かれたその場所で精一杯明るく光り輝くことのできる人です。国も会社も総理大臣や社長によって成り立っているわけではありません。それぞれの立場で最善を尽くし、ひとりひとりの内なる灯火が周囲に広がれば、ひいては社会全体が明るく照らされていくのです。
                  </div>
                </div>
              </section>
              {/*Message2*/}
              <section class="flex flex-wrap md:flex-nowrap mt-11 md:mt-28">
                {/*タイトルブロック*/}
                <div class="w-full md:w-1/4">
                  <h2 class="futura-lt md:futura-md text-center md:text-left text-3xl md:text-6xl message_title">Message.2</h2>
                </div>
                {/*テキスト*/}
                <div class="w-full md:w-3/4 md:ml-5">
                  {/*経歴*/}
                  <div class="border-b border-gray-600 pb-3 md:pb-8">
                    <div class="flex justify-between flex-wrap">
                      <h3 class="NotoSans-L mt-10 md:mt-0 text-xl md:text-5xl">万物への感謝を<span class="block md:inline-block">胸に秘めて生きていく</span></h3>
                    </div>
                  </div>
                  {/*本文*/}
                  <div class="mt-4 text-justify NotoSans-L text-sm md:text-xl leading-6 md:leading-7">
                    私は勉強や努力を重ねて始めた事業も上手く行かず、暗く辛い人生に感じた時、ふと自分ではなく常に周りを想い感謝の心を持つように考え直し、今の自分を生かしてくれているこの世界やご先祖様や周りの全ての大切な人たちへの感謝の念に心を集中させたとき、不思議と一気に転機が開け、このような順調で大きい会社を経営させて頂くことが出来ました。<br /><br />
                    人間として一人前とは言えない未熟者の私ですが、日々この事を大切にし、社員ひとりひとりと感謝に対する対話を続けた結果、その社員ひとりひとりの人生もどんどん良くなっていきました。<br /><br />
                    物やお金や安定が全てなどと、学校教育やマスメディアの情報に洗脳されてきた今、人生における真の教師不足、指導者不足なのではないでしょうか。
                  </div>
                </div>
              </section>
              {/*Message3*/}
              <section class="flex flex-wrap md:flex-nowrap mt-11 md:mt-28">
                {/*タイトルブロック*/}
                <div class="w-full md:w-1/4">
                  <h2 class="futura-lt md:futura-md text-center md:text-left text-3xl md:text-6xl message_title">Message.3</h2>
                </div>
                {/*テキスト*/}
                <div class="w-full md:w-3/4 md:ml-5">
                  {/*経歴*/}
                  <div class="border-b border-gray-600 pb-3 md:pb-8">
                    <div class="flex justify-between flex-wrap">
                      <h3 class="NotoSans-L mt-10 md:mt-0 text-xl md:text-5xl">強くなければ生きていけない、<span class="block">優しくなければ</span><span class="block">生きていく資格がない</span></h3>
                    </div>
                  </div>
                  {/*本文*/}
                  <div class="mt-4 text-justify NotoSans-L text-sm md:text-xl leading-6 md:leading-7">
                    愛なき力は暴力、力なき愛は無力である。<br /><br />
                    多くの人は幻の幸せや安定にしがみつきたくなりがちですが、人生の真の拠り所になるのは個人個人の魂の中にしかありませんし、会社にしても一生安泰のビジネスモデルもありません。<br /><br />
                    人や会社は不変的な人生の真理を掴みながら、日々の世界情勢やマーケットを捉えて常に変わっていかなければなりません。<br /><br />
                    立派な理念を掲げても売上がなければ会社はつぶれますし、理念なき会社が売上だけ上がり存在し続けるのは関係する多くの人を不幸にするだけです。<br /><br />
                    私にだって誰かに甘えたり、何かにすがりたい気持ちはあります。ですが、それでも私たちは強く優しく生きていくしかないのです。
                  </div>
                </div>
              </section>
              {/*Message4*/}
              <section class="flex flex-wrap md:flex-nowrap mt-11 md:mt-28">
                {/*タイトルブロック*/}
                <div class="w-full md:w-1/4">
                  <h2 class="futura-lt md:futura-md text-center md:text-left text-3xl md:text-6xl message_title">Message.4</h2>
                </div>
                {/*テキスト*/}
                <div class="w-full md:w-3/4 md:ml-5">
                  {/*経歴*/}
                  <div class="border-b border-gray-600 pb-3 md:pb-8">
                    <div class="flex justify-between flex-wrap">
                      <h3 class="NotoSans-L mt-10 md:mt-0 text-xl md:text-5xl">道心の中に衣食あり、<span class="block md:inline-block">衣食の中に道心なし</span></h3>
                    </div>
                  </div>
                  {/*本文*/}
                  <div class="mt-4 text-justify NotoSans-L text-sm md:text-xl leading-6 md:leading-7">
                    道心がなければ、いくら恵まれても無意味です。道心があればこそ恵まれた心と生活になるといえます。真剣に道を求め、その道に打ち込む人は、生活が成り立たないはずがありません。必要最小限の衣食住は自然と備わります。<br /><br />
                    しかし衣食住に執着し、ぜいたく三昧の生活を志向する人は、私欲に心が奪われて仕事もなおざりとなり道心は湧いてくるものではありません。<br /><br />
                    このような事を親や学校が教えてくれない今、お互いに学び成長しながら共に歩いていくのが会社の役目だと思っています。
                  </div>
                </div>
              </section>
            </div>
          </div>
          {/*見出し部分 終了*/}
        </main>
      </Layout>
    </div>
  )
}