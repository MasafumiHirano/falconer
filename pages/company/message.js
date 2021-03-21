import Head from 'next/head'
import Image from 'next/image'

import Layout from '../../components/layout'

export default function Message() {
  return (
    <div>
      <Head>
        <title>VISION</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
      <main>
        <div class="flex justify-center" style={{backgroundColor: "#786b58"}}>
          <div class="mx-auto pt-8 pb-16 px-8 lg:px-40 bg-opacity-75 w-1100">

            <div class="text-white">
              <div>
                <h1 class="text-2xl lg:text-3xl text-center font-bold border-b-4 pb-2">代表メッセージ</h1>
              </div>
              <div class="text-center tracking-widest mt-5 lg:mt-16" >
                <h1 class="text-2xl mb-6 font-bold">先人達を尊び、感謝をし、天命を尽くす</h1>
                <div class="text-left">
                  <div class="mb-8 text-base lg:text-xl leading-8">
                    <p>私たちがこうして平和に暮らせるのは、平和で美しい世界、そして日本を作るために生きてきた多くの偉大な先人達のおかげです。</p>
                    <p>自分だけの利益や安定、安全に執着するのではなく、先人達を尊び、感謝をして、後世の人たちが綺麗な地球で平和に暮らしていくために、毎日天命を尽くしましょう。</p>
                  </div>
                </div>
              </div>

              <div class="text-center tracking-widest mt-16" >
                <h1 class="text-2xl mb-6 font-bold">「照于一隅」一隅を照らす</h1>
                <div class="text-left">
                  <div class="mb-8 text-base lg:text-xl leading-8">
                    <p>天台宗開祖の最澄禅師は著書『山家学生式』の中で「国の宝とはなにか。 宝とは道を修めようとする心である。 この道心をもっている人こそ、 社会にとって、なくてはならない国の宝である。 社会の一隅にいながら、社会を照らす生活をする。その人こそが、なくてはならない国宝の人である。」と記しています。</p>
                    <p>それぞれの立場で最善を尽くし、ひとりひとりの内なる灯火が周囲に広がれば、個人から会社、ひいては社会全体が明るく照らされると私は信じています。</p>
                  </div>
                </div>
              </div>

              <div class="text-center tracking-widest mt-16" >
                <div class="text-2xl mb-6 font-bold">
                  <h1>強くなければ生きていけない、</h1>
                  <h1>優しくなければ生きていく資格がない</h1>
                  <h1>愛なき力は暴力、力なき愛は無力である。</h1>
                </div>
                <div class="text-left">
                  <div class="mb-8 text-base lg:text-xl leading-8">
                    <p>多くの人は幻の幸せや安定にしがみつきたくなりがちですが、人生の真の拠り所になるのは個人個人の魂の中にしかありません。会社にしても一生安泰のビジネスモデルはありません。</p>
                    <p>私たちは、不変的な人生の真理を掴みながら、刻々と変化する世界情勢やマーケットを捉え常に優しさを持って対応していきます。</p>
                  </div>
                </div>
              </div>

              <div class="text-center tracking-widest mt-16 pb-32" >
                <h1 class="text-2xl mb-6 font-bold">道心の中に衣食あり、衣食の中に道心なし</h1>
                <div class="text-left">
                  <div class="mb-8 text-base lg:text-xl leading-8">
                    <p>道心がなければ、いくら恵まれても無意味です。道心があればこそ恵まれた心と生活になると私は思います。真剣に道を求め、その道に打ち込む人は、 自ずと生活が成り立ち、必要な衣食住も備わります。しかし、衣食住に執着し、ぜいたく三昧の生活を志向する人は、私欲に心が奪われて仕事もなおざりとなってしまいます。</p>
                    <p>私も会社もまだ道の途中です。みなさまと出会い、お互いに学び、成長することで道心を極めていきたいと思います。</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex flex-row">
              <div>
                <Image src="/images/company/ceo_img.jpg" width={240} height={240} alt="ceo_img"/>
              </div>
              <div class="text-sm lg:text-lg text-white lg:pt-6 pl-10">
                <p>代表プロフィール</p>
                <p class="text-base lg:text-xl py-2 lg:py-6">清水真輝</p>
                <p class="text-sm lg:text-lg pb-6">1987年11月27日生まれ AB型</p>
                <p class="text-sm lg:text-lg">名古屋市出身</p>
                <p class="text-sm lg:text-lg">愛知高校・名古屋学院大学英米科卒業</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      </Layout>
    </div>
  )
}