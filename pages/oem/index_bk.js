import Head from 'next/head'

import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import Layout from '../../components/layout'

export default function MEDIACONTACT() {
  const router = useRouter();
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [homepage, setHomepage] = useState("");
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [furigana, setFurigana] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [contactBy, setContactBy] = useState("");
  const [category, setCategory] = useState("");
  const [lot_color, setLotColor] = useState("");
  const [lot_count, setLotCount] = useState("");
  const [body, setBody] = useState("");
  const [disabled, setDisabled] = useState(true);

  const handleSubmit = e => {
    e.preventDefault();

    {/* 
    const data = {
      company: company,
      homepage: homepage,
      name1: name1,
      name2: name2,
      email: email,
      phoneNumber: phoneNumber,
      role: role,
      contactBy: contactBy,
      lot_count: lot_count,
      lot_color: lot_color,
      category: category,
      body: body
    };
  */}
    
    const data = {
      company: company,
      homepage: homepage,
      name1: name1,
      name2: name2,
      email: email,
      phoneNumber: phoneNumber,
      role: role,
      contactBy: contactBy,
      lotcount: lot_count,
      lotcolor: lot_color,
      category: category,
      body: body
    };

    axios({
      method: "post",
      url: "https://falconer.microcms.io/api/v1/mediacontact",
      data: data,
      headers: {
        "Content-Type": "application/json",
        "X-WRITE-API-KEY": process.env.x_api_key
      }
    })
      .then(() => {
        router.push("/contact_success");
      })
      .catch(err => {
        console.log(data);
      });
  };

  return (
    <div>
      <Head>
        <title>売れるモノづくりを提供します。OEM｜ODM</title>
        <meta property="og:url" content="https://www.falconer.co.jp/oem" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="OEM・ODMのご依頼承ります" />
        <meta property="og:description" content="創業たったの5年で300万個、合計20億円。売れるモノづくりを提供します。" />
        <meta property="og:site_name" content="株式会社FALCONER" />
        <meta property="og:image" content="https://www.falconer.co.jp/images/oem/thumbnail_oem.jpg" />
      </Head>
      <main class="NotoSans">
        <div class="">
          <a href="#contactform" class="fixed blcok bottom-1 md:bottom-4 md:right-1 right-4 z-50">
            <picture>
              <source media="(max-width: 760px)" srcSet="/images/oem/contact_follow_sp.png" />
              <img src="/images/oem/contact_follow.png" class="md:w-10/12"/>
            </picture>
          </a>
        </div>
        <div class="oem_main_image h-640 lg:h-1000 bg-cover relative">
          <div class="text-center absolute bottom-20 md:bottom-40 w-full"><div class="w-72 md:w-580 mt-8 mx-auto"><a class="block py-4 md:py-6 w-full text-xs md:text-2xl bg-falNAVY text-center text-white" href="#contactform">CONTACT</a></div></div>
          <p class="text-center absolute bottom-12 md:bottom-24 w-full text-falNAVY text-base md:text-25px text-shadow-md">革製品のOEM/ODMならお任せください。</p>
        </div>
        <div class="bg-falNAVY text-white text-center py-7 text-2xl md:text-6xl">
          <h2 class="YuMincho font-medium">他社OEMで不満、<br class="md:hidden block" />お悩みはありませんか？</h2>
        </div>
        <div class="mt-9 md:mt-28 px-4 text-0.65rem md:text-xl text-center">
          <ul class="text-falNAVY flex flex-wrap justify-between w-72 md:w-9/12 mx-auto">
            <li class="flex flex-col w-32 md:w-1/4"><div><img src="/images/oem/problem1.png" class="md:block md:mx-auto" /></div><p class="mt-4">想定より到着原価が高く<br />売れず売れ残った</p></li>
            <li class="flex flex-col w-32 md:w-1/4"><div><img src="/images/oem/problem2.png" class="md:block md:mx-auto" /></div><p class="mt-4">納期が遅く時間が掛かり<br />お金になるまでが長い</p></li>
            <li class="flex flex-col w-32 md:w-1/4 mt-12 md:mt-0"><div><img src="/images/oem/problem3.png" class="md:block md:mx-auto" /></div><p class="mt-4">低コストで商品を作ると<br />クオリティが低い</p></li>
            <li class="flex flex-col w-32 md:w-1/4 mt-12 md:mt-0"><div><img src="/images/oem/problem4.png" class="md:block md:mx-auto" /></div><p class="mt-4">思わぬ不備が出てきて<br />対応に手を焼く</p></li>
          </ul>
        </div>
        <div class="mt-8 md:mt-32">
          <picture class="flex justify-center">
            <source media="(max-width: 760px)" srcSet="/images/oem/line_sp.png" />
            <img src="/images/oem/line.png" />
          </picture>
        </div>
        <div class="text-falNAVY mt-9 md:mt-20 text-center bg_oemgrey YuMincho font-bold">
          <p class="text-xl md:text-4xl w-52 md:w-full text-center mx-auto">成功し続けてきた<br class="block md:hidden" />ノウハウを知る当社が</p>
          <p class="text-3xl md:text-6xl w-64 md:w-full text-center mx-auto mt-2 md:mt-8 md:mb-8"><span class="text-red-500">売れる</span>モノづくりを提供します。</p>
        </div>
        <div class="bg_oemnavy z-0">
          <div>
            <h2 class="text-center text-falNAVY text-2xl md:text-3xl YuMincho font-bold">弊社の強み</h2>
            <div class="mx-auto border-falNAVY border-t-8 w-14 md:w-24 mt-1"></div>
          </div>
          <div class="mt-12">
            <ul class="md:flex md:flex-row justify-center md:w-10/12 mx-auto">
              <li class="relative md:1/3">
                <div class="bg-black"><img src="/images/oem/strong1.png" class="opacity-80"/></div>
                <div class="absolute top-16 md:top-20 w-full text-white font-normal md:font-light">
                  <h3 class="text-center text-2xl">売れる商品企画</h3>
                  <p class="text-ms md:text-lg mt-14 md:mt-16 w-300 md:w-9/12 text-justify mx-auto">単なる商品製作ではなく、自社開発の独自の市場調査ツールを駆使することで、時代背景に即した企画や競合他社との差別化をする提案を行います。</p>
                </div>
              </li>
              <li class="relative md:1/3">
                <div class="bg-black"><img src="/images/oem/strong2.png" class="opacity-80" /></div>
                <div class="absolute top-16 md:top-20 w-full text-white font-normal md:font-light">
                  <h3 class="text-center text-2xl">確かなクオリティ</h3>
                  <p class="text-ms md:text-lg mt-14 md:mt-16 w-300 md:w-9/12 text-justify mx-auto">自社工場の徹底した品質管理だけでなく、現地の職人との信頼関係を大切にしてきました。裁縫、折り、塗り等の専門技術に加え、細部を妥協しない「モノづくり」を心がけ高品質の製品を提供します。</p>
                </div>
              </li>
              <li class="relative md:1/3">
                <div class="bg-black"><img src="/images/oem/strong3.png" class="opacity-80" /></div>
                <div class="absolute top-16 md:top-20 w-full text-white font-normal md:font-light">
                  <h3 class="text-center text-2xl">中間コストの徹底排除</h3>
                  <p class="text-ms md:text-lg mt-14 md:mt-16 w-300 md:w-9/12 text-justify mx-auto">社長自身が何年も世界各国を周り、良質な原材料の直接取引先を開拓してきました。商社やブローカーなどの中間マージンを徹底排除する事で、高品質ながら低価格での提供を可能としています。</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="text-center text-falNAVY text-2xl md:text-3xl mt-12 md:mt-52 YuMincho font-bold">他社との違い</h2>
            <div class="mx-auto border-falNAVY border-t-8 w-14 md:w-24 mt-1"></div>
          </div>
          <div class="mt-9">
            <p class="text-base text-falNAVY w-72 md:w-full text-justify md:text-center mx-auto">通常、革製品を製造委託先を探す場合、安価な海外の量産工場か、<br class="hidden md:block" />高価な国内製造工場の二択になりますが、どちらも様々な問題にぶつかります。</p>
          </div>
          <div class="flex flex-col md:flex-row md:w-11/12 md:mx-auto md:mt-14">
            <div class="md:w-1/2 mt-7">
              <div class="w-9/12 md:11/12 md:w-full mx-auto"><img src="/images/oem/japan.png" class="block mx-auto" /></div>
              <div class="text-falNAVY mt-6 md:mt-12 max-w-xl mx-auto">
                <h3 class="pl-12 md:pl-28 text-2xl py-2">国内メリット</h3>
                <picture class="">
                  <source media="(max-width: 760px)" srcSet="/images/oem/hr_sp.png" />
                  <img src="/images/oem/hr.png" />
                </picture>
                <ul class="pl-10 md:pl-28 -mt-2 md:-mt-20 text-base md:leading-6">
                  <li>・海外より信用できる</li>
                  <li>・コミュニケーションがスムーズ</li>
                  <li>・打ち合わせや立ち合いなどの管理が容易</li>
                  <li>・安定した生産性と品質</li>
                  <li>・納期が早く、送料が安い</li>
                </ul>
                <h3 class="pl-12 md:pl-28 text-2xl py-2 mt-7 md:mt-14">国内デメリット</h3>
                <picture class="">
                  <source media="(max-width: 760px)" srcSet="/images/oem/hr_sp.png" />
                  <img src="/images/oem/hr.png" />
                </picture>
                <ul class="pl-10 md:pl-28 -mt-2 md:-mt-20 text-base md:leading-6">
                  <li>・値段が高いので数が売れない</li>
                  <li>・素材の選択肢が狭い</li>
                  <li>・他社との差別化が図れない</li>
                  <li>・セールがしにくい</li>
                </ul>
              </div>
            </div>
            <div class="md:w-1/2 mt-12 md:mt-7">
              <div class="w-9/12 md:11/12 md:w-full mx-auto"><img src="/images/oem/world.png" class="block mx-auto" /></div>
              <div class="text-falNAVY mt-6 md:mt-12 max-w-xl mx-auto">
                <h3 class="pl-12 md:pl-28 text-2xl py-2">海外メリット</h3>
                <picture class="">
                  <source media="(max-width: 760px)" srcSet="/images/oem/hr_sp.png" />
                  <img src="/images/oem/hr.png" />
                </picture>
                <ul class="pl-10 md:pl-28 -mt-2 md:-mt-20 text-base md:leading-6">
                  <li>・人件費等の製造コストが安くあがる</li>
                  <li>・人手が多いため、量産体制が取りやすい</li>
                  <li>・手間のかかる製品を任せられ時間が増える</li>
                </ul>
                <h3 class="pl-12 md:pl-28 text-2xl py-2 mt-7 md:mt-28">海外デメリット</h3>
                <picture class="">
                  <source media="(max-width: 760px)" srcSet="/images/oem/hr_sp.png" />
                  <img src="/images/oem/hr.png" />
                </picture>
                <ul class="pl-10 md:pl-28 -mt-2 md:-mt-20 text-base md:leading-6">
                  <li>・レスポンスが遅い、納期が遅れる</li>
                  <li>・国内担当者もコントロールできていない</li>
                  <li>・他社と仕入れが被る</li>
                  <li>・クオリティが低い</li>
                  <li>・素材は選べず、嘘の材質で納品される</li>
                  <li>・ブローカーに中抜きされる</li>
                  <li>・ライバルに情報を漏らされる</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="bg_oemclear -mt-8 z-20">
          <div class="px-2 pt-4 py-8 md:py-4 text-white">
            <div class="text-sm md:text-4xl border-white border text-center mt-4 px-6 md:px-0 py-4 md:py-10 leading-8 md:leading-loose md:w-4/5 mx-auto font-bold">当社では数十万円で販売する高級ブランド品の<br class="block md:hidden" /><span class="text-xl md:text-4xl text-p_yellow">「職人製造エリア」</span><span class="text-xl md:text-4xl">と、<br class="md:block hidden" /></span><br class="block md:hidden" />
              数千円で販売する<br class="block md:hidden" /><span class="text-xl md:text-4xl text-p_yellow">「量産品の製造エリア」</span><span class="text-xl md:text-4xl">を</span><br class="block md:hidden" />自社工場敷地内で運営しており、<br  />
              高級ブランドで培った高品質な製造ノウハウと、<br class="block md:hidden" />量産品製造で培ったコスト削減、<br />
              効率化ノウハウの両方を保有しているため、<br />
              お客様のニーズに合わせたクオリティと<br class="block md:hidden" /><span class="text-sm md:text-4xl text-p_yellow">価格の調整が可能です。</span></div>
          </div>
        </div>
        <div class="bg_image px-2 pb-8 md:pb-40">
          <div>
            <h2 class="mx-auto w-72 md:w-full px-1 text-3xl md:text-5xl my-10 md:py-20 text-center text-falNAVY leading-10 md:leading-normal font-semibold">お客様のご要望に<br class="block md:hidden" />対して分析を行い<br class="block" /><span class="text-red-500">WIN × WIN</span>となる最適で最高の提案を</h2>
          </div>
          <div class="mt-10 md:mt-16 text-base md:text-3xl w-9/12 mx-auto md:text-center">お客様の言われるままに対応するのではなく、お客様の利益が最大化される<br class="md:block hidden" />戦略的な「売れるモノづくり」をご提案させていただきます。</div>
          <div>
            <div class="flex justify-center items-end mt-6 md:mt-28 md:mb-10">
              <picture class="">
                <source media="(max-width: 760px)" srcSet="/images/oem/slash_left_sp.png" />
                <img src="/images/oem/slash_left.png" class="w-8 md:w-16" />
              </picture>
              <p class="text-falNAVY md:text-4xl flex items-center mx-2 md:mb-2 md:mx-8 font-bold">ご相談～製造まで<span class="text-red-500 text-3xl md:text-7xl flex items-end">3STEP</span></p>
              <picture class="">
                <source media="(max-width: 760px)" srcSet="/images/oem/slash_right_sp.png" />
                <img src="/images/oem/slash_right.png" class="w-8 md:w-16" />
              </picture>
            </div>
          </div>
          <div class="bg-white rounded-3xl mx-auto md:px-28 pt-12 pb-8 mt-3 shadow-lg md:w-7/12">
            <div class="flex flex-col">
              <div class="flex flex-col md:flex-row items-center md:items-end md:mb-4">
                <div class="w-14 md:w-24 mx-auto"><img src="/images/oem/no1.png" class="w-full" /></div>
                <p class="w-320 md:w-9/12 mt-6 mx-auto text-base md:text-2xl text-justify">注文したい商品の大まかな概要と、最終顧客への販売予定価格、希望ロット、仕入れ希望価格をお知らせ下さい。</p>
              </div>
              <picture class="mx-auto mt-4">
                <source media="(max-width: 760px)" srcSet="/images/oem/line2_sp.png" />
                <img src="/images/oem/line2.png" />
              </picture>
            </div>
            <div class="flex flex-col mt-14">
              <div class="flex flex-col md:flex-row items-center md:items-end md:mb-4">
                <div class="w-14 md:w-24 mx-auto"><img src="/images/oem/no2.png" class="w-full" /></div>
                <p class="w-320 md:w-9/12 mt-6 mx-auto text-base md:text-2xl text-justify">エンドユーザー様にお喜び頂けるクオリティを保ちながらお客様のビジネスにしっかりとした利益が出るよう製造の仕方、素材、外箱など付属品仕様をご提案させて頂きます。</p>
              </div>
              <picture class="mx-auto mt-4">
                <source media="(max-width: 760px)" srcSet="/images/oem/line2_sp.png" />
                <img src="/images/oem/line2.png" />
              </picture>
            </div>
            <div class="flex flex-col mt-14">
              <div class="flex flex-col md:flex-row items-center md:items-end md:mb-4">
                <div class="w-14 md:w-24 mx-auto"><img src="/images/oem/no3.png" class="w-full" /></div>
                <p class="w-320 md:w-9/12 mt-6 mx-auto text-base md:text-2xl text-justify">ファーストサンプルは最短1-2週間でご確認いただけます。確認後、仕様の微修正があればご意見を聴取して検討反映した上で再サンプルをご用意いたします。</p>
              </div>
              <picture class="mx-auto mt-4">
                <source media="(max-width: 760px)" srcSet="/images/oem/line2_sp.png" />
                <img src="/images/oem/line2.png" />
              </picture>
            </div>
            <p class="text-red-500 text-xl md:text-3xl text-center mt-5 md:mt-16 md:mb-8 font-semibold">
              手直しが無ければ<br class="md:hidden" />1.5～2ヶ月程度で<br class="md:hidden" />量産品のお届けが可能です。
            </p>
          </div>
        </div>
        <div class="pb-11 md:w-7/12 mx-auto">
          <h3 class="bg-falNAVY py-3 md:py-6 md:mt-20 text-center text-white text-2xl md:text-5xl YuMincho font-medium">5年で300万個、<br class="block md:hidden" />合計20億円を売り上げた</h3>
          <div class="flex flex-col md:flex-row md:justify-start">
            <div class="text-falNAVY text-center md:hidden text-2.5xl font-medium pt-4 YuMincho">代表 清水真輝が<br />直接ご相談に乗ります</div>
            <div class="w-200 md:w-320 mx-auto md:mx-0 mt-5"><img src="/images/oem/ceo.png" class="md:block md:w-full" /></div>
            <div class="text-center md:text-left w-auto md:w-8/12 md:ml-8">
              <div class="text-falNAVY hidden md:block text-4xl font-medium pt-4 border-b-4 pb-6 border-falNAVY leading-snug YuMincho">代表 清水真輝が<br />直接ご相談に乗ります。</div>
              <div class="w-72 md:w-auto md:mr-16 mt-6 mx-auto text-sm md:text-xl text-justify md:text-left md:leading-relaxed">世界中を回って良質な原材料の調達先を開拓し、自ら生産工場の管理も行い、僅か5年で自社ブランドの販売数300万個、総額20億円を売り上げた経営者本人が直接、お客様の立場に立ってご相談に乗ります。</div>
              <div class="w-72 md:w-520 mt-8 md:mt-10 mx-auto md:ml-auto md:mr-0"><a class="block py-4 md:py-6 w-full text-xs bg-falNAVY text-center text-white" href="#contactform">CONTACT</a></div>
            </div>
          </div>
          <div class="mt-11 md:mt-28">
            <div>
              <h2 class="text-center text-falNAVY text-2xl md:text-3xl tracking-wide YuMincho font-medium">Instagram</h2>
              <div class="mx-auto border-falNAVY border-t-8 w-14 md:w-24 mt-1"></div>
            </div>
            <div class="w-72 md:w-full mx-auto mt-8 md:mt-16">
              <ul class="flex flex-wrap justify-between w-full">
                <li class="w-49% md:w-24%"><a href="https://www.instagram.com/p/CFPB9cMDobd/" target="blank_" class="block"><img src="/images/oem/insta_1.png" class="w-full" /></a></li>
                <li class="w-49% md:w-24%"><a href="https://www.instagram.com/p/CHzodi0pU0S/" target="blank_" class="block"><img src="/images/oem/insta_2.png" class="w-full" /></a></li>
                <li class="w-49% md:w-24% mt-2 md:mt-0"><a href="https://www.instagram.com/p/CFwWJWKj6u_/" target="blank_" class="block"><img src="/images/oem/insta_3.png" class="w-full" /></a></li>
                <li class="w-49% md:w-24% mt-2 md:mt-0"><a href="https://www.instagram.com/p/CFtv1ltD0BQ/" target="blank_" class="block"><img src="/images/oem/insta_4.png" class="w-full" /></a></li>
              </ul>
            </div>
          </div>
          <div>
            <h2 class="text-center text-falNAVY text-2xl md:text-3xl mt-12 md:mt-24 tracking-wide YuMincho font-medium">ロット</h2>
            <div class="mx-auto border-falNAVY border-t-8 w-14 md:w-24 mt-1"></div>
          </div>
          <div class="flex flex-col md:flex-row md:justify-start md:mt-6">
            <div class="w-72 md:w-320 mx-auto md:mx-0 mt-5 md:mt-0"><img src="/images/oem/lot.png" class="md:block md:w-full" /></div>
            <div class="text-center md:text-left w-auto md:w-8/12 md:ml-8">
              <div class="text-falNAVY text-center md:text-left text-2.5xl md:text-3xl pt-4 md:pt-0 YuMincho font-medium md:leading-normal">最低ロット数は2色<br class="block md:hidden" />500個位から承ります</div>
              <div class="w-72 md:w-auto md:mr-16 mt-6 mx-auto text-sm md:text-xl text-justify md:text-left md:leading-relaxed">ロット数についても種類や内容によって承ることができることもありますので、まずはお気軽にご相談ください。</div>
              <div class="w-72 md:w-520 mt-8 md:mt-24 mx-auto md:ml-auto md:mr-0"><a class="block py-4 md:py-6 w-full text-xs bg-falNAVY text-center text-white" href="#contactform">CONTACT</a></div>
            </div>
          </div>
        </div>
        <div class="bg-gray-100 py-6 pb-8 md:w-7/12 mx-auto md:mt-24">
          <h3 class="text-falNAVY md:mt-4 text-xl md:text-4xl text-center YuMincho font-semibold md:leading-snug">大変申し訳ありませんが、<br />場合によってはご注文を<br />お断りさせて頂くこともあります。</h3>
          <div class="w-72 md:w-720 mx-auto mt-11 text-justify text-sm md:text-2xl">OEM製造は作って終わりではなく、その商品が最終の消費者に全て完売し、ご満足頂けることがゴールです。その為、当社がご注文を受けた結果、お客様に不良在庫が生じたり、お客様の損になりそうな場合、ご注文をお断りさせて頂くことがあります。<br /><br />
            当社としてもリピートオーダーを頂かないと、大変な手間だけかかり、利益は殆どありませんし、何よりお取引したお客様が不良在庫を抱えてしまうような取引は決してしたくありません。<br /><br />
            また、既存のお客様との利益相反がありそうな場合もお受けする事が出来ませんのでご了承下さい。</div>
          <p class="text-falNAVY text-xl md:text-3xl text-center mt-11 YuMincho font-medium">まずは、お気軽にご相談ください！</p>
        </div>

        {/* 入力フォーム */}
        <div class="mx-auto pt-12 lg:w-920" id="contactform">
          <div>
            <h2 class="text-center text-falNAVY text-2xl md:text-3xl tracking-wide YuMincho font-medium">お問い合わせ</h2>
            <div class="mx-auto border-falNAVY border-t-8 w-14 md:w-24 mt-1"></div>
          </div>
          <div class="pb-8 px-4 overflow-hidden sm:px-6 lg:px-8">
            <div class="relative max-w-xl mx-auto">
              <div class="mt-12">
                <div class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                  <div class="sm:col-span-2">
                    <label for="company" class="text-base text-gray-700 flex flex-row items-center">会社名・組織名<span class="bg-red-500 w-8 h-4 text-0.55rem text-white rounded-xl flex justify-center items-center ml-3">必須</span></label>
                    <div class="mt-1">
                      <input
                        type="text"
                        name="company"
                        id="company"
                        autocomplete="organization"
                        class="py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300 border-solid border rounded-xl"
                        placeholder="例）株式会社FALCONER"
                        value={company}
                        onChange={e => setCompany(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="sm:col-span-2">
                    <label for="role" class="text-base text-gray-700 flex flex-row items-center">部署・部門名</label>
                    <div class="mt-1">
                      <input type="text" name="role" id="role" autocomplete="organization"
                        class="py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300  border-solid border rounded-xl"
                        placeholder="例）経営部"
                        value={role}
                        onChange={e => setRole(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="sm:col-span-2">
                    <label for="name1" class="text-base text-gray-700 flex flex-row items-center">お名前<span class="bg-red-500 w-8 h-4 text-0.55rem text-white rounded-xl flex justify-center items-center ml-3">必須</span></label>
                    <div class="mt-1 flex flex-row justify-between">
                      <input type="text" name="name1" id="name1" autocomplete="organization"
                        class="py-3 px-4 block w-49% shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300  border-solid border rounded-xl"
                        placeholder="例）山田"
                        value={name1}
                        onChange={e => setName1(e.target.value)}
                      />
                      <input type="text" name="name2" id="name2" autocomplete="organization"
                        class="py-3 px-4 block w-49% shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300  border-solid border rounded-xl"
                        placeholder="例）太郎"
                        value={name2}
                        onChange={e => setName2(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="sm:col-span-2">
                    <label for="email" class="text-base text-gray-700 flex flex-row items-center">メールアドレス<span class="bg-red-500 w-8 h-4 text-0.55rem text-white rounded-xl flex justify-center items-center ml-3">必須</span></label>
                    <div class="mt-1">
                      <input id="email" name="email" type="email" autocomplete="email"
                        class="py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300  border-solid border rounded-xl"
                        placeholder="mail@example.com"
                        value={email}
                        onChange={e => (
                          setEmail(e.target.value)
                        )}
                      />
                    </div>
                  </div>
                  <div class="sm:col-span-2">
                    <label for="phone_number" class="text-base text-gray-700 flex flex-row items-center">電話番号<span class="bg-red-500 w-8 h-4 text-0.55rem text-white rounded-xl flex justify-center items-center ml-3">必須</span></label>
                    <div class="mt-1 relative rounded-xl shadow-sm">
                      <input type="text" name="phone_number" id="phone_number" autocomplete="tel"
                        class="py-3 px-4 block w-full focus:ring-green-500 focus:border-green-500 border-gray-300  border-solid border rounded-xl"
                        placeholder="080-1234-5678"
                        value={phoneNumber}
                        onChange={e => setPhoneNumber(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="sm:col-span-2">
                    <label for="homepage" class="block text-sm font-medium text-gray-700">ホームページURL</label>
                    <div class="mt-1">
                      <input type="text" name="homepage" id="homepage" autocomplete="organization"
                        class="py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300 border-solid border rounded-xl"
                        placeholder="https://falconer.co.jp"
                        value={homepage}
                        onChange={e => setHomepage(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="sm:col-span-2">
                    <label for="category" class="text-base text-gray-700 flex flex-row items-center">商品カテゴリー<span class="bg-red-500 w-8 h-4 text-0.55rem text-white rounded-xl flex justify-center items-center ml-3">必須</span></label>
                    <div class="mt-4 flex justify-start flex-wrap">
                      <div class="w-49%" id="category">
                        <input type="radio" name="category" value="財布"
                          onChange={e => setCategory(e.target.value)} id="wallet" />
                        <label class="ml-2" for="wallet">財布</label>
                      </div>
                      <div class="w-49%" id="category">
                        <input type="radio" name="category" value="小物・アクセサリー"
                          onChange={e => setCategory(e.target.value)} if="accessory" />
                        <label class="ml-2" for="accessory">小物・アクセサリー</label>
                      </div>
                      <div class="w-49% mt-4" id="category">
                        <input type="radio" name="category" value="鞄"
                          onChange={e => setCategory(e.target.value)} if="bag" />
                        <label class="ml-2" for="bag">鞄</label>
                      </div>
                      <div class="w-49% mt-4" id="category">
                        <input type="radio" name="category" value="まだ未定"
                          onChange={e => setCategory(e.target.value)} id="undecided" />
                        <label class="ml-2" for="undecided">まだ未定</label>
                      </div>
                    </div>
                  </div>
                  <div class="sm:col-span-2">
                    <label for="lot_color" class="text-base text-gray-700 flex flex-row items-center">ご希望のロット数<span class="bg-red-500 w-8 h-4 text-0.55rem text-white rounded-xl flex justify-center items-center ml-3">必須</span></label>
                    <div class="mt-1 flex flex-row justify-start items-center">
                      <input type="text" name="lot_color" id="lot_color" autocomplete="organization"
                        class="py-3 px-4 block w-4/12 shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300  border-solid border rounded-xl"
                        placeholder="例）2"
                        value={lot_color}
                        onChange={e => setLotColor(e.target.value)}
                      /><span class="ml-2 w-5">色</span>
                      <input type="text" name="lot_count" id="lot_count" autocomplete="organization"
                        class="py-3 px-4 block w-4/12 shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300  border-solid border rounded-xl ml-8"
                        placeholder="例）50"
                        value={lot_count}
                        onChange={e => setLotCount(e.target.value)}
                      />
                      <span class="ml-2 w-5">個</span>
                    </div>
                  </div>
                  <div class="sm:col-span-2">
                    <label for="contactby" class="text-base text-gray-700 flex flex-row items-center">ご連絡方法</label>
                    <div class="mt-4 flex justify-start flex-wrap">
                      <div class="w-49%" id="contactby">
                        <input type="radio" name="contactBy" value="メール"
                          onChange={e => setContactBy(e.target.value)} id="bymail" />
                        <label class="ml-2" for="bymail">メール</label>
                      </div>
                      <div class="w-49%">
                        <input type="radio" name="contactBy" value="電話"
                          onChange={e => setContactBy(e.target.value)} id="byphone" />
                        <label class="ml-2" for="byphone">電話</label>
                      </div>
                      <div class="w-49% mt-4">
                        <input type="radio" name="contactBy" value="どちらでも"
                          onChange={e => setContactBy(e.target.value)} id="both" />
                        <label class="ml-2" for="both">どちらでもよい</label>
                      </div>
                    </div>
                  </div>
                  <div class="sm:col-span-2">
                  <label for="message" class="text-base text-gray-700 flex flex-row items-center">お問い合わせ内容<span class="bg-red-500 w-8 h-4 text-0.55rem text-white rounded-xl flex justify-center items-center ml-3">必須</span></label>
                    <div class="mt-1">
                      <textarea id="message" name="message" rows="4"
                        class="py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300 border-solid border rounded-xl"
                        value={body}
                        onChange={e => (
                          setBody(e.target.value)
                        )}
                      ></textarea>
                    </div>
                  </div>

                  {
                    (name1 && name2 && email && phoneNumber && category && body) ?
                      <div class="text-red-500 text-sm">
                        <p>{`　`}</p>
                      </div>
                      :
                      <div class="text-red-500 text-sm"><p>※必須項目を入力してください。</p></div>
                  }

                  <div class="sm:col-span-2">
                    <button
                      disabled={!(name1 && name2 && email && phoneNumber && category && body)}
                      class={`${disabled ? '' : 'hover:bg-falNAVY'} disabled:opacity-50 disabled:pointer-events-none w-full inline-flex items-center justify-center px-6 py-3 border border-transparent shadow-sm text-base font-medium text-white bg-falNAVY focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500`}
                      onClick={handleSubmit}
                    >
                      送信
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
