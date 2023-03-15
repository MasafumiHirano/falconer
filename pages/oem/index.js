import Head from 'next/head'

import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import Layout from '../../components/layout'
import { init, send } from 'emailjs-com';

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
  const [lot_count, setLotCount] = useState("");
  const [lot_color, setLotColor] = useState("");
  const [lot_amt, setLotAmt] = useState("");
  const [body, setBody] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [budget, setBudget] = useState("");
  const [producturl, setProducturl] = useState("");
  const [material, setMaterial] = useState("");

  const sendEmail = () => {
    const user_id = "user_vztWjBsF612MhfNYgDaVL"
    const service_id = "service_s42wnsp";
    const template_id = "template_j9980gb";
    if ((user_id != undefined) && (service_id != undefined) && (template_id != undefined)) {
      init(user_id);

      const template_param = {
        to_name: name1 + name2,
        email: email,
        company: company,
        homepage: homepage,
        name:  name1 + name2,
        furigana: furigana,
        email: email,
        phoneNumber: phoneNumber,
        contactBy: contactBy,
        message: body
      };

      send(service_id, template_id, template_param).then(() => {
        console.log("success to send email");
      })
    }
  }

  const handleSubmit = e => {
    e.preventDefault();
    sendEmail();

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
      lotamt: lot_amt,
      category: category,
      budget: budget,
      material: material,
      producturl: producturl,
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
        <div class="oem_main_image h-640 lg:h-1000 bg-cover relative">
          <p class="font-bold lg:font-normal text-lg md:text-3xl lg:text-4xl xl:text-6xl pt-8 lg:pt-24 text-center">創業たったの6年で450万個、合計30億円</p>
          <h1 class="font-bold lg:mt-7 leading-tight lg:leading-snug text-center lg:tracking-widest NotoSans lg:pl-6"><span class="block lg:inline-block">売れる</span>モノづくりを<br />提供します</h1>
          <p class="text-xs md:text-base lg:text-3xl text-black text-center mt-2 lg:mt-10 lg:leading-relaxed">大手輸入車メーカー、大手携帯キャリア、<br class="lg:hidden" />プロ野球球団、<br class="hidden lg:block " />
            大手ペットショップ、<br class="lg:hidden" />芸能人プロデュースブランドなど実績多数<br />
            ※2022年4月までの実績</p>
          <div class="text-center absolute bottom-20 lg:bottom-40 w-full"><div class=" w-8/12 lg:w-580 mt-8 mx-auto"><a class="block py-4 md:py-6 w-full text-xs md:text-2xl bg-falNAVY text-center text-white rounded-xl" href="#contactform">まずは無料でお問い合わせ</a></div></div>
          <p class="text-center absolute bottom-14 md:bottom-12 lg:bottom-24 w-full text-falNAVY text-sm font-bold md:text-25px text-shadow-md">革製品のOEM/ODMならお任せください。</p>
          <img src="/images/oem/arrow_down.png" class="absolute right-5 lg:right-20 bottom-14 lg:bottom-28 w-8 lg:w-14" />
        </div>
        <div class="text-falNAVY text-center mt-8 lg:mt-24 text-2xl md:text-4xl lg:text-5xl xl:text-6xl">
          <h2 class="font-bold lg:font-medium">他社OEMで不満、<br class="md:hidden block" />お悩みはありませんか？</h2>
        </div>
        <div class="follow_button ml-auto mr-10 z-50">
          <a href="#contactform">
            <picture>
              <source media="(max-width: 760px)" srcSet="/images/oem/contact_follow_sp.png" />
              <img src="/images/oem/contact_follow.png" class="w-full" />
            </picture>
          </a>
        </div>
        <div class="mt-8 lg:-mt-8 px-4 text-0.65rem md:text-xl text-center">
          <ul class="flex flex-wrap justify-between w-full md:w-11/12 xl:w-11/12 xl:px-10 max-w-1280 mx-auto">
            <li class="flex w-full md:w-1/2"><div class="w-24 lg:w-120 xl:w-200"><img src="/images/oem/problem1.png" class="w-full md:block md:mx-auto" /></div><p class="flex items-center text-left pl-8 text-lg lg:text-3xl">想定より到着原価が高く<br />売れず売れ残った</p></li>
            <li class="flex w-full md:w-1/2 mt-7 md:mt-0"><div class="w-24 lg:w-120 xl:w-200"><img src="/images/oem/problem2.png" class="w-full md:block md:mx-auto" /></div><p class="flex items-center text-left pl-8 text-lg lg:text-3xl">納期が遅く時間が掛かり<br />利益になるまでが長い</p></li>
            <li class="flex w-full md:w-1/2 mt-7 lg:mt-24"><div class="w-24 lg:w-120 xl:w-200"><img src="/images/oem/problem3.png" class="w-full md:block md:mx-auto" /></div><p class="flex items-center text-left pl-8 text-lg lg:text-3xl">低コストで商品を作ると<br />品質がとても低くなる</p></li>
            <li class="flex w-full md:w-1/2 mt-7 lg:mt-24"><div class="w-24 lg:w-120 xl:w-200"><img src="/images/oem/problem4.png" class="w-full md:block md:mx-auto" /></div><p class="flex items-center text-left pl-8 text-lg lg:text-3xl">思わない不備が出てきて<br />対応に手を焼いてしまう</p></li>
          </ul>
        </div>

        <div class="mt-8 md:mt-32">
          <picture class="flex justify-center">
            <source media="(max-width: 760px)" srcSet="/images/oem/line3_sp.png" />
            <img src="/images/oem/line3.png" />
          </picture>
        </div>
        <div class="text-falNAVY bg-oemGray mt-9 py-28 lg:pt-0 lg:pb-9 md:mt-20 text-center font-bold">
          <h2 class="text-2xl md:text-3xl lg:text-5xl font-bold pb-4 lg:py-16">そのお悩み解決できます！</h2>
          <div class="lg:flex lg:justify-between w-11/12 max-w-1280 mx-auto">
            <img src="/images/oem/miniwallet.png" class="block mx-auto lg:max-w-50%" />
            <img src="/images/oem/longwallet.png" class="block mx-auto lg:max-w-50% mt-4 lg:mt-0" />
          </div>
          <p class="text-xl md:text-2xl lg:text-4xl w-full text-center mx-auto mt-4 lg:mt-12 lg:tracking-widest">成功し続ける当社が<br class="block md:hidden" />5年間で20億円を売るノウハウ</p>
          <p class="text-4xl md:text-5xl lg:text-6xl w-full text-center mx-auto mt-2 md:mt-8 md:mb-8 NotoSans lg:tracking-wide"><span class="text-red-500">売れる</span>モノづくりを<br class="lg:hidden" />提供します</p>
        </div>
        <div class="z-0">
          <div>
            <h2 class="text-center text-falNAVY text-2xl md:text-3xl mt-28 lg:mt-48 font-bold">弊社の強み</h2>
            <div class="mx-auto border-falNAVY border-t-8 w-14 md:w-24 mt-1"></div>
          </div>
          <div class="mt-12">
            <ul class="lg:flex lg:flex-row lg:justify-center md:w-500 lg:w-11/12 xl:w-10/12 mx-auto">
              <li class="relative md:1/3 lg:mr-4">
                <div class="bg-black"><img src="/images/oem/strong1.png" class="opacity-80" /></div>
                <div class="absolute top-16 md:top-20 lg:top-10 xl:top-20 w-full text-white font-normal md:font-light">
                  <h3 class="text-center text-2xl">売れる商品企画</h3>
                  <p class="text-ms md:text-lg lg:text-base xl:text-lg mt-14 md:mt-16 lg:mt-10 xl:mt-16 w-300 md:w-9/12 text-justify mx-auto">単なる商品製作ではなく、自社開発の独自の市場調査ツールを駆使することで、時代背景に即した企画や競合他社との差別化をする提案を行います。</p>
                </div>
              </li>
              <li class="relative md:1/3">
                <div class="bg-black"><img src="/images/oem/strong2.png" class="opacity-80" /></div>
                <div class="absolute top-16 md:top-20 lg:top-10 xl:top-20 w-full text-white font-normal md:font-light">
                  <h3 class="text-center text-2xl">確かなクオリティ</h3>
                  <p class="text-ms md:text-lg lg:text-base xl:text-lg mt-14 md:mt-16 lg:mt-10 xl:mt-16 w-300 md:w-9/12 text-justify mx-auto">自社工場の徹底した品質管理だけでなく、現地の職人との信頼関係を大切にしてきました。裁縫、折り、塗り等の専門技術に加え、細部を妥協しない「モノづくり」を心がけ高品質の製品を提供します。</p>
                </div>
              </li>
              <li class="relative md:1/3 lg:ml-4">
                <div class="bg-black"><img src="/images/oem/strong3.png" class="opacity-80" /></div>
                <div class="absolute top-16 md:top-20 lg:top-10 xl:top-20 w-full text-white font-normal md:font-light">
                  <h3 class="text-center text-2xl">中間コストの徹底排除</h3>
                  <p class="text-ms md:text-lg lg:text-base xl:text-lg mt-14 md:mt-16 lg:mt-10 xl:mt-16 w-300 md:w-9/12 text-justify mx-auto">社長自身が何年も世界各国を周り、良質な原材料の直接取引先を開拓してきました。商社やブローカーなどの中間マージンを徹底排除する事で、高品質ながら低価格での提供を可能としています。</p>
                </div>
              </li>
            </ul>
          </div>
          <div class="">
            <h2 class="text-center text-falNAVY text-2xl md:text-3xl font-bold mt-28 lg:mt-48">他社との違い</h2>
            <div class="mx-auto border-falNAVY border-t-8 w-14 md:w-24 mt-1"></div>
          </div>
          <div class="pt-9">
            <p class="text-base lg:text-lg w-72 md:w-full text-justify md:text-center mx-auto">通常、革製品を製造委託先を探す場合、安価な海外の量産工場か、<br class="hidden md:block" />高価な国内製造工場の二択になりますが、どちらも様々な問題にぶつかります。</p>
          </div>
          <div class="md:pt-14 pb-16 lg:pb-28">
            <div class="mx-auto max-w-1280 flex flex-col lg:flex-row lg:mx-auto ">
              <div class="lg:w-1/2 mt-7">
                <div class="w-9/12 lg:11/12 lg:w-full mx-auto"><img src="/images/oem/japan.png" class="block mx-auto" /></div>
                <div class="mt-6 lg:mt-12 max-w-xl mx-auto">
                  <h3 class="pl-12 md:pl-28 text-2xl py-2 text-falNAVY font-medium">国内メリット</h3>
                  <picture class="">
                    <source media="(max-width: 760px)" srcSet="/images/oem/hr_sp.png" />
                    <img src="/images/oem/hr.png" />
                  </picture>
                  <ul class="pl-10 md:pl-28 -mt-2 md:-mt-20 text-base lg:text-lg lg:leading-6">
                    <li>・海外より信用できる</li>
                    <li>・コミュニケーションがスムーズ</li>
                    <li>・打ち合わせや立ち合いなどの管理が容易</li>
                    <li>・安定した生産性と品質</li>
                    <li>・納期が早く、送料が安い</li>
                  </ul>
                  <h3 class="pl-12 md:pl-28 text-2xl py-2 mt-7 lg:mt-14 text-falNAVY font-medium">国内デメリット</h3>
                  <picture class="">
                    <source media="(max-width: 760px)" srcSet="/images/oem/hr_sp.png" />
                    <img src="/images/oem/hr.png" />
                  </picture>
                  <ul class="pl-10 md:pl-28 -mt-2 md:-mt-20 text-base lg:text-lg lg:leading-6">
                    <li>・値段が高いので数が売れない</li>
                    <li>・素材の選択肢が狭い</li>
                    <li>・他社との差別化が図れない</li>
                    <li>・セールがしにくい</li>
                  </ul>
                </div>
              </div>
              <div class="lg:w-1/2 mt-12 lg:mt-7">
                <div class="w-9/12 lg:w-full mx-auto"><img src="/images/oem/world.png" class="block mx-auto" /></div>
                <div class="mt-6 lg:mt-12 max-w-xl mx-auto">
                  <h3 class="pl-12 md:pl-28 text-2xl py-2 text-falNAVY font-medium">海外メリット</h3>
                  <picture class="">
                    <source media="(max-width: 760px)" srcSet="/images/oem/hr_sp.png" />
                    <img src="/images/oem/hr.png" />
                  </picture>
                  <ul class="pl-10 md:pl-28 -mt-2 md:-mt-20 text-base lg:text-lg lg:leading-6">
                    <li>・人件費等の製造コストが安くあがる</li>
                    <li>・人手が多いため、量産体制が取りやすい</li>
                    <li>・手間のかかる製品を任せられ、時間増に</li>
                  </ul>
                  <h3 class="pl-12 md:pl-28 text-2xl py-2 mt-7 lg:mt-28 text-falNAVY font-medium">海外デメリット</h3>
                  <picture class="">
                    <source media="(max-width: 760px)" srcSet="/images/oem/hr_sp.png" />
                    <img src="/images/oem/hr.png" />
                  </picture>
                  <ul class="pl-10 md:pl-28 -mt-2 md:-mt-20 text-base lg:text-lg lg:leading-6">
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
        </div>
        <div class="z-20">
          <div class="px-2 pt-4 py-8 md:py-4 bg-falNAVY text-white">
            <div class="text-2xl md:text-4xl lg:text-6xl text-center mt-4 px-0 py-4 md:py-10 leading-8 md:leading-loose lg:leading-relaxed md:w-4/5 mx-auto font-bold">一般企業と当社の違いは<br />納品までの<span class="text-p_yellow">圧倒的なスピード<br />コスト×品質</span>の<span class="text-p_yellow">コントロール</span>
            </div>
          </div>
        </div>
        <div class="bg-oemGray pb-28 pt-28 lg:pt-48">
          <div class="flex justify-between flex-wrap max-w-1280 mx-auto">
            <div class="md:w-10/12 lg:w-6/12 mx-auto">
              <h3 class="font-bold text-2xl lg:text-40px text-center text-falNAVY border-b-2 border-falNAVY pb-4 w-11/12 mx-auto">一般企業の場合</h3>
              <img src="/images/oem/oem01.png" class="block mx-auto mt-7 lg:mt-16 px-4 lg:px-0" />
            </div>
            <div class="md:w-10/12 lg:w-4/12 mx-auto mt-24 lg:mt-0">
              <h3 class="font-bold text-2xl lg:text-40px text-center text-falNAVY border-b-2 border-falNAVY pb-4 w-11/12 mx-auto">当社の場合</h3>
              <img src="/images/oem/oem02_v2.png" class="block mx-auto mt-7 lg:mt-16 px-4 lg:px-0" />
            </div>
            <div class="w-full">
              <p class="w-11/12 max-w-1280 mt-10 lg:mt-20 mx-auto text-base lg:text-2xl xl:text-2xl text-justify lg:text-center lg:leading-relaxed xl:leading-relaxed">
                <span class="lg:block">発注から納品まで9人以上の伝言ゲームが発生してしまうため時間が掛かり、</span>
                <span class="lg:block">人的ミスが多発し低品質の原因に。また中間業者の関与により高コストになりがちです。</span>
                <span class="lg:block">FALCONERはすべて「直取引」の自社一貫製造なので中間業者の関与が全くありません。</span>
                <span class="lg:block">発注から納品まで早く製造コストを抑えながら、高品質に制作を進めることが可能です。</span>
              </p>
            </div>
            <p class="w-full font-bold text-falNAVY mt-12 lg:mt-24 text-2xl lg:text-6xl lg:leading-snug text-center">単純明快だから<span class="text-red-500 block">早くて、安くて、高品質！</span></p>
          </div>

          <div class="mt-8 md:mt-32">
            <picture class="flex justify-center">
              <source media="(max-width: 760px)" srcSet="/images/oem/line3_sp.png" />
              <img src="/images/oem/line3.png" />
            </picture>
          </div>
          <div class="text-center bottom-20 md:bottom-40 w-full mt-12 lg:mt-24"><div class="w-80 md:w-600 mx-auto"><a class="block py-4 md:py-6 w-full text-xs md:text-2xl bg-falNAVY text-center text-white rounded-xl" href="#contactform">まずは無料でお問い合わせ</a></div></div>
        </div>
        <div class="bg-falNAVY pb-16">
          <h2 class="text-center text-white text-2xl md:text-3xl font-bold pt-12 lg:pt-36">工場について</h2>
          <div class="mx-auto border-white border-t-8 w-14 md:w-24 mt-1"></div>
          <div class="flex flex-wrap justify-between w-11/12 max-w-1280 mx-auto mt-9 lg:mt-24">
            <span class="w-49% md:w-24%"><img src="/images/oem/plant_01.png" class="" /></span>
            <span class="w-49% md:w-24%"><img src="/images/oem/plant_04.png" /></span>
            <span class="w-49% md:w-24% mt-2 md:mt-0"><img src="/images/oem/plant_02.png" /></span>
            <span class="w-49% md:w-24% mt-2 md:mt-0"><img src="/images/oem/plant_03.png" /></span>
          </div>
          <div class="w-11/12 md:w-4/5 lg:w-11/12 xl:w-w4/5 text-sm md:text-3xl lg:text-2xl xl:text-4xl border-white border lg:border-none text-center mt-4 px-2 md:px-0 py-4 md:py-10 leading-8 md:leading-loose lg:leading-loose xl:leading-loose mx-auto font-bold text-white">当社では数十万円で販売する高級ブランド品の<br class="block md:hidden" /><span class="text-xl md:text-4xl lg:text-3xl xl:text-4xl text-p_yellow">「職人製造エリア」</span><span class="text-xl md:text-3xl lg:text-2xl xl:text-4xl">と、<br class="md:block hidden" /></span><br class="block md:hidden" />
            数千円で販売する<br class="block md:hidden" /><span class="text-xl md:text-4xl lg:text-3xl xl:text-4xl text-p_yellow">「量産品の製造エリア」</span><span class="text-xl md:text-3xl lg:text-2xl xl:text-4xl">を</span><br class="block md:hidden" />自社工場敷地内で運営しており、<br />
            高級ブランドで培った高品質な製造ノウハウと、<br class="block md:hidden" />量産品製造で培ったコスト削減、<br />
            効率化ノウハウの両方を保有しているため、<br />
            お客様のニーズに合わせた<br class="block md:hidden" />クオリティと<span class="text-sm md:text-4xl lg:text-3xl xl:text-4xl text-p_yellow md:block lg:inline-block">価格の調整が可能です。</span>
          </div>
        </div>
        <div class="bg_image px-2 pb-16 md:pb-40 pt-28 lg:pt-48">
          <div class="">
            <h2 class="mx-auto w-72 md:w-full px-1 text-3xl md:text-4xl lg:text-5xl py-9 md:pb-10 text-center text-falNAVY leading-10 lg:leading-relaxed font-semibold">お客様のご要望に<br class="block md:hidden" />対して分析を行い<br class="block" /><span class="text-red-500">WIN × WIN</span>となる最適で最高の提案を</h2>
          </div>
          <div class="mt-0 md:mt-0 text-base md:text-xl lg:text-2xl w-9/12 md:w-10/12 lg:w-9/12 mx-auto md:text-center lg:leading-relaxed">お客様の言われるままに対応するのではなく、お客様の利益が最大化される<br class="lg:block hidden" />戦略的な「売れるモノづくり」をご提案させていただきます。</div>
          <div>
            <div class="flex justify-center items-end mt-9 md:mt-16 md:mb-10">
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
          <div class="bg-white rounded-3xl mx-auto md:px-28 pt-12 pb-8 mt-3 shadow-lg md:w-10/12 lg:w-7/12">
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
        <div class="pb-16 md:w-11/12 max-w-1280 mx-auto mt-24">
          <div>
            <h2 class="text-center text-falNAVY text-2xl lg:text-6xl tracking-wide font-medium">お客様の声</h2>
            <div class="mx-auto border-falNAVY border-t-8 w-14 md:w-24 mt-1"></div>
          </div>
          <div class="lg:flex lg:justify-between">
            <div class="mt-7 max-w-615">
              <div class="rounded-2xl text-2xl border-falNAVY border-2 mx-2 lg:mx-0 lg:h-770">
                <div class="px-4 lg:px-8 pb-11">
                  <div class="flex justify-between mt-6 w-full flex-wrap lg:flex-nowrap border-b-2 md:border-b-4 border-falNAVY pb-5 md:pb-6">
                    <div class=""><img src="/images/oem/onelove.png" class="w-100 md:w-auto" /></div>
                    <div class="flex items-center w-7/12">
                      <div class="text-falNAVY NotoSans text-lg lg:text-3.5xl leading-tight font-medium"><span class="block text-16px lg:text-3xl pb-2">ペットショップ</span>有限会社ワンラブ<br />専務 服部様</div>
                    </div>
                  </div>
                  <h3 class="text-falNAVY font-medium text-23px md:text-3.5xl w-full mt-5 md:mt-6">不良品・納期問題が解決！</h3>
                  <p class="text-base md:text-3xl mt-4 md:mt-6 text-justify text-gray-600">犬の首輪やリード、犬のおもちゃ等の様々な商品の製造をお願いしました。<br />
                    元々中国現地の業者に頼んで居ましたが、納期遅れや不良品の問題が多く、ファルコナーさんに頼んだら同じ価格で品質が良くなり、不良品や納期の問題が解決されました！<br />
                    もっと早く頼めば良かったです。</p>
                </div>
              </div>
            </div>
            <div class="mt-7 max-w-615">
              <div class="rounded-2xl text-2xl border-falNAVY border-2 mx-2 lg:mx-0 lg:h-770">
                <div class="px-4 lg:px-8 pb-11">
                <div class="flex justify-between mt-6 w-full flex-wrap lg:flex-nowrap border-b-2 md:border-b-4 border-falNAVY pb-5 md:pb-6">
                    <div class=""><img src="/images/oem/DMM.png" class="w-100 md:w-auto" /></div>
                    <div class="flex items-center w-8/12">
                      <div class="text-falNAVY NotoSans text-lg lg:text-3.5xl leading-tight font-medium text-justify"><span class="block text-16px lg:text-3xl pb-2">DMMグループ</span>株式会社ティーアイエス<br />渉外統括部長 北川様</div>
                    </div>
                  </div>
                  <h3 class="text-falNAVY font-medium text-23px md:text-3.5xl w-full mt-5 md:mt-6">対応スピードが桁違いに早い。</h3>
                  <p class="text-base md:text-3xl mt-4 md:mt-6 text-justify text-gray-600">電子タバコFLEVOの公式ケースの他、様々な商品の製造を依頼しています。<br />
                    初めて依頼した商品は電子タバコFLEVOの公式レザーケースで、他の業者と比べ、品質が圧倒的に良く、価格も安く、納期だけでなくサンプル製造や見積もり等の全ての対応スピードが桁違いに早かったです。これからもモノづくりの時は依頼するつもりです。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="pb-16 md:w-11/12  max-w-1280 mx-auto mt-12 lg:mt-24">
          <h3 class="bg-falNAVY py-3 md:py-6 text-center text-white text-2xl md:text-3xl lg:text-5xl font-medium">5年で300万個、<br class="block md:hidden" />合計20億円を売り上げた</h3>
          <div class="flex flex-col lg:flex-row lg:justify-start">
            <div class="w-200 md:w-full max-w-425 mx-auto md:mx-0 mt-5"><img src="/images/oem/ceo.png" class="md:block md:mx-auto lg:w-full lg:object-cover lg:h-405" /></div>
            <div class="text-center lg:text-left w-auto lg:w-8/12 md:mt-4 lg:mt-0 md:ml-8">
              <div class="text-falNAVY w-11/12 lg:w-full mx-auto text-2xl md:text-3xl lg:text-4xl font-bold lg:font-medium pt-4 border-b-2 pb-6 lg:pb-7 border-falNAVY lg:leading-normal">代表 清水真輝が<br class="md:hidden lg:block" />直接ご相談に乗ります</div>
              <div class="w-11/12 lg:w-full mt-7 mx-auto text-sm md:text-2xl lg:text-26px text-justify md:text-left md:leading-relaxed">世界中を回って良質な原材料の調達先を開拓し、自ら生産工場の管理も行い、僅か5年で自社ブランドの販売数300万個、総額20億円を売り上げた経営者本人が直接、お客様の立場に立ってご相談に乗ります。</div>
              <div class="w-11/12 md:w-full mt-8 mx-auto md:mt-8 md:ml-auto md:mr-0"><a class="block py-4 md:py-5 w-full text-xs md:text-xl font-semibold bg-falNAVY text-center text-white rounded-xl" href="#contactform">まずは無料でお問い合わせ</a></div>
            </div>
          </div>
          <div class="mt-24 lg:mt-48">
            <div>
              <h2 class="text-center text-falNAVY text-2xl md:text-3xl tracking-wide font-medium">Instagram</h2>
              <div class="mx-auto border-falNAVY border-t-8 w-14 md:w-24 mt-1"></div>
            </div>
            <div class="w-11/12 md:w-full mx-auto mt-8 md:mt-16">
              <ul class="flex flex-wrap justify-between w-full">
                <li class="w-49% md:w-24%"><a href="https://www.instagram.com/p/CFPB9cMDobd/" target="blank_" class="block"><img src="/images/oem/insta_1.png" class="w-full" /></a></li>
                <li class="w-49% md:w-24%"><a href="https://www.instagram.com/p/CHzodi0pU0S/" target="blank_" class="block"><img src="/images/oem/insta_2.png" class="w-full" /></a></li>
                <li class="w-49% md:w-24% mt-2 md:mt-0"><a href="https://www.instagram.com/p/CFwWJWKj6u_/" target="blank_" class="block"><img src="/images/oem/insta_3.png" class="w-full" /></a></li>
                <li class="w-49% md:w-24% mt-2 md:mt-0"><a href="https://www.instagram.com/p/CFtv1ltD0BQ/" target="blank_" class="block"><img src="/images/oem/insta_4.png" class="w-full" /></a></li>
              </ul>
            </div>
          </div>
          <div class="mt-24 lg:mt-48">
            <h2 class="text-center text-falNAVY text-2xl md:text-3xl tracking-wide font-medium">ロット</h2>
            <div class="mx-auto border-falNAVY border-t-8 w-14 md:w-24 mt-1"></div>
          </div>
          <div class="flex flex-col justify-center lg:flex-row lg:justify-start md:mt-12 lg:mt-24">
            <div class="w-11/12 lg:w-580 lg:mx-0 mt-5 md:mt-0">
              <picture class="mx-auto mt-4">
                <source media="(max-width: 1024px)" srcSet="/images/oem/oemlot_sp.png" />
                <img src="/images/oem/oemlot.png" />
              </picture>
            </div>
            <div class="text-center lg:text-left w-auto md:w-11/12 lg:w-8/12 md:ml-8">
              <div class="text-falNAVY text-center lg:text-left text-2.5xl md:text-3xl border-b-2 pb-2 w-11/12 mx-auto border-falNAVY pt-4 lg:pt-0 font-medium md:leading-normal">最低ロット数は2色<br />500個位から承ります</div>
              <div class="w-11/12 mx-auto mt-6 text-base md:text-2xl lg:text-26px text-justify lg:text-left md:leading-relaxed">ロット数についても種類や内容によって承ることができることもありますので、まずはお気軽にご相談ください。</div>
              <div class="w-11/12 lg:w-520 mt-8 mx-auto md:mt-10 lg:ml-auto lg:mr-0 lg:hidden"><a class="block py-4 md:py-6 w-full text-xs md:text-2xl bg-falNAVY text-center text-white rounded-xl" href="#contactform">まずは無料でお問い合わせ</a></div>
            </div>
          </div>
        </div>
        <div class="bg-gray-100 py-20 pb-20 max-w-1280 mx-auto md:mt-24">
          <h3 class="text-falNAVY md:mt-4 text-xl md:text-4xl text-center font-bold md:leading-snug NotoSerifJP">大変申し訳ありませんが、<br />場合によってはご注文を<br />お断りさせて頂くこともあります。</h3>
          <div class="w-72 md:w-11/12 lg:w-720 mx-auto mt-11 text-justify text-sm md:text-2xl lg:leading-normal">OEM製造は作って終わりではなく、その商品が最終の消費者に全て完売し、ご満足頂けることがゴールです。その為、当社がご注文を受けた結果、お客様に不良在庫が生じたり、お客様の損になりそうな場合、ご注文をお断りさせて頂くことがあります。<br /><br />
            当社としてもリピートオーダーを頂かないと、大変な手間だけかかり、利益は殆どありませんし、何よりお取引したお客様が不良在庫を抱えてしまうような取引は決してしたくありません。<br /><br />
            また、既存のお客様との利益相反がありそうな場合もお受けする事が出来ませんのでご了承下さい。</div>
          <p class="text-falNAVY text-xl md:text-3xl text-center mt-11 font-medium NotoSerifJP">まずは、お気軽にご相談ください！</p>
        </div>

        {/* 入力フォーム */}
        <div class="mx-auto pt-28 lg:pt-48 lg:w-920" id="contactform">
          <div>
            <h2 class="text-center text-falNAVY text-2xl md:text-3xl tracking-wide font-medium">お問い合わせ</h2>
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
                    <label for="material" class="text-base text-gray-700 flex flex-row items-center">希望素材</label>
                    <div class="mt-4 flex justify-start flex-wrap">
                      <div class="w-32%" id="material">
                        <input type="radio" name="material" value="本革"
                          onChange={e => setMaterial(e.target.value)} id="wallet" />
                        <label class="ml-2" for="wallet">本革</label>
                      </div>
                      <div class="w-32%" id="material">
                        <input type="radio" name="material" value="合皮"
                          onChange={e => setMaterial(e.target.value)} if="accessory" />
                        <label class="ml-2" for="accessory">合皮</label>
                      </div>
                      <div class="w-32%" id="material">
                        <input type="radio" name="material" value="その他"
                          onChange={e => setMaterial(e.target.value)} if="bag" />
                        <label class="ml-2" for="bag">その他</label>
                      </div>
                    </div>
                  </div>
                  <div class="sm:col-span-2">
                    <label for="producturl" class="block text-sm font-medium text-gray-700">商品の参考URL</label>
                    <div class="mt-1">
                      <input type="text" name="producturl" id="producturl" autocomplete="organization"
                        class="py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300 border-solid border rounded-xl"
                        placeholder="https://falconer.co.jp/product/sample.html"
                        value={producturl}
                        onChange={e => setProducturl(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="sm:col-span-2">
                    <label for="lot_color" class="text-base text-gray-700 flex flex-row items-center">ご希望のロット数<span class="bg-red-500 w-8 h-4 text-0.55rem text-white rounded-xl flex justify-center items-center ml-3">必須</span></label>
                    <div class="mt-1 flex flex-wrap flex-col items-center">
                      <div class="flex w-full justify-start items-center">
                        <p class="text-gray-700 text-sm ml-2 w-36">ご希望のカラー数</p>
                        <input type="text" name="lot_color" id="lot_color" autocomplete="organization"
                          class="py-3 px-4 block w-4/12 shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300  border-solid border rounded-xl"
                          placeholder="例）5"
                          value={lot_color}
                          onChange={e => setLotColor(e.target.value)}
                        /><span class="ml-2 w-5">色</span>
                      </div>
                      <div class="flex w-full justify-start items-center">
                        <p class="text-gray-700 text-sm ml-2 w-36">1色あたりのロット数</p>
                        <input type="text" name="lot_count" id="lot_count" autocomplete="organization"
                          class="py-3 px-4 block w-4/12 shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300  border-solid border rounded-xl"
                          placeholder="例）200"
                          value={lot_count}
                          onChange={e => setLotCount(e.target.value)}
                        />
                        <span class="ml-2 w-5">個</span>
                      </div>
                      <div class="flex w-full justify-start items-center">
                        <p class="text-gray-700 text-sm ml-2 w-36">合計ロット数</p>
                        <input type="text" name="lot_amt" id="lot_amt" autocomplete="organization"
                          class="py-3 px-4 block w-4/12 shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300  border-solid border rounded-xl"
                          placeholder="例）1000"
                          value={lot_amt}
                          onChange={e => setLotAmt(e.target.value)}
                        />
                        <span class="ml-2 w-5">個</span>
                      </div>
                      <div class="text-red-500 w-full mt-2 border-red-700 border p-2 text-justify text-sm">
                        基本1色200個の合計3色600個が目安です。それ以下の場合は条件により相談に乗れる場合もありますのでご相談ください。<br/>※最低ロットは合計200個になります。<br/>※納期目安は1.5~2ヶ月です。
                      </div>
                    </div>
                  </div>
                  <div class="sm:col-span-2">
                    <label for="budget" class="block text-sm font-medium text-gray-700">大体のご予算</label>
                    <div class="mt-1">
                      <input type="text" name="budget" id="budget" autocomplete="organization"
                        class="py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300 border-solid border rounded-xl"
                        placeholder="￥300,000"
                        value={budget}
                        onChange={e => setBudget(e.target.value)}
                      />
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
                      <div class="text-gray-700 w-full mt-4 text-justify text-xs">
                        ※ドメイン指定受信の設定を確認し、メールでのご連絡の為に「falconer.co.jp」からのメールを受け取れるように設定してください。
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
      <footer class="text-center NotoSans mt-8 lg:mt-20 text-sm lg:text-lg">Copyright © Falconer Corp. All Rights Reserved.</footer>
    </div>
  )
}
