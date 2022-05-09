import Head from 'next/head'

import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import Layout from '../../components/layout'

export default function FORM() {
  const router = useRouter();
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [furigana, setFurigana] = useState("");
  const [birthday, setBirthday] = useState("");
  const [sex, setSex] = useState("");
  const [email, setEmail] = useState("");
  const [addressCode, setAddressCode] = useState("");
  const [addressArea, setAddressArea] = useState("");
  const [addressCity, setAddressCity] = useState("");
  const [addressNumber, setAddressNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [education, setEducation] = useState("");
  const [currentStatus, setCurrentStatus] = useState("");
  const [currentIncome, setCurrentIncome] = useState("");
  const [desireIncome, setDesireIncome] = useState("");
  const [spouse, setSpouse] = useState("");
  const [experienceNumber, setExperienceNumber] = useState("");
  const [experienceOccupation, setExperienceOccupation] = useState("");
  const [experienceCompany, setExperienceCompany] = useState("");
  const [skill, setSkill] = useState("");
  const [promotion, setPromotion] = useState("");
  const [question, setQuestion] = useState("");
  const [disabled, setDisabled] = useState(true);

  const handleSubmit = e => {
    e.preventDefault();

    const data = {
      type: type,
      name: name,
      furigana: furigana,
      birthday: birthday,
      sex: sex,
      email: email,
      addressCode: addressCode,
      addressArea: addressArea,
      addressCity: addressCity,
      addressNumber: addressNumber,
      phoneNumber: phoneNumber,
      education: education,
      currentStatus: currentStatus,
      currentIncome: currentIncome,
      desireIncome: desireIncome,
      spouse: spouse,
      experienceNumber: experienceNumber,
      experienceOccupation: experienceOccupation,
      experienceCompany: experienceCompany,
      skill: skill,
      promotion: promotion,
      question: question
    };

    axios({
      method: "post",
      url: "https://falconer.microcms.io/api/v1/recruits",
      data: data,
      headers: {
        "Content-Type": "application/json",
        "X-WRITE-API-KEY": process.env.x_api_key
      }
    })
      .then(() => {
        router.push("/recruit_success");
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <Head>
        <title>FALCONER採用ページ</title>
        <link rel="icon" href="/falconer_favicons.png" />
      </Head>
      <Layout>
        <main class="bg-gray-100">
          <div class="mx-auto pt-12 lg:w-1100">
            <p class="text-center mb-4 text-xl">【正社員】</p>
            <p class="text-center">※当応募内容についてはエントリー、並びに1次選考も兼ねて確認させて頂いております。予めご了承ください。</p>

            <div class=" bg-gray-100 py-8 px-4 overflow-hidden sm:px-6 lg:px-8">
              <div class="relative max-w-xl mx-auto">
                <div class="mt-12">
                  <h1 class="w-full bg-falGLD text-white text-2xl text-center py-4 my-4">プロフィール</h1>
                  <div class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">

                    <div class="sm:col-span-2">
                      <label for="type" class="block text-sm font-medium text-gray-700">募集職種<span class="text-red-500"> (必須)</span></label>
                      <div class="mt-1 ">
                        <div class="ml-2 inline-block">
                          <input type="radio" name="type" id="type" autocomplete="organization" value={"ネットショップ運営店長（正社員）"}
                            onChange={e => setType(e.target.value)} />
                          <label for="type" class="pl-2">ネットショップ運営店長（正社員）</label>
                        </div>
                        <div class="ml-2 inline-block">
                          <input type="radio" name="type" id="type2" autocomplete="organization" value={"ネットショップ運営サポート（正社員）"}
                            onChange={e => setType(e.target.value)} />
                            <label for="type2" class="pl-2">ネットショップ運営サポート（正社員）</label>
                        </div>
                        <div class="ml-2 inline-block">
                          <input type="radio" name="type" id="type3" autocomplete="organization" value={"配送センター管理スタッフ（正社員）"}
                            onChange={e => setType(e.target.value)} />
                            <label for="type3" class="pl-2">配送センター管理スタッフ（正社員）</label>
                        </div>
                      </div>
                    </div>

                    <div class="sm:col-span-2">
                      <label for="name" class="block text-sm font-medium text-gray-700">お名前<span class="text-red-500"> (必須)</span></label>
                      <div class="mt-1">
                        <input type="text" name="name" id="fullname" autocomplete="organization"
                          class="py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300  border-solid border rounded-md"
                          placeholder="山田 太郎"
                          value={name}
                          onChange={e => setName(e.target.value)}
                        />
                      </div>
                    </div>


                    <div class="sm:col-span-2">
                      <label for="furigana" class="block text-sm font-medium text-gray-700">フリガナ<span class="text-red-500"> (必須)</span></label>
                      <div class="mt-1">
                        <input type="text" name="furigana" id="furigana" autocomplete="organization"
                          class="py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300  border-solid border rounded-md"
                          placeholder="ヤマダタロウ"
                          value={furigana}
                          onChange={e => setFurigana(e.target.value)}
                        />
                      </div>
                    </div>

                    <div class="sm:col-span-2">
                      <label for="birthday" class="block text-sm font-medium text-gray-700">生年月日<span class="text-red-500"> (必須)</span></label>
                      <div class="mt-1">
                        <input type="date" name="birthday" id="birthday" autocomplete="organization"
                          class="py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300 border-solid border rounded-md"
                          placeholder=""
                          value={birthday}
                          onChange={e => setBirthday(e.target.value)}
                        />
                      </div>
                    </div>

                    <div class="sm:col-span-2">
                      <label for="sex" class="block text-sm font-medium text-gray-700">性別<span class="text-red-500"> (必須)</span></label>
                      <div class="mt-1 ">
                        <div class="ml-2 inline-block">
                          <input type="radio" name="sex" id="sex" autocomplete="organization" value={"男性"}
                            onChange={e => setSex(e.target.value)} />
                          <label for="male">男性</label>
                        </div>
                        <div class="ml-2 inline-block">
                          <input type="radio" name="sex" id="sex" autocomplete="organization" value={"女性"}
                            onChange={e => setSex(e.target.value)} />
                          <label for="female">女性</label>
                        </div>
                      </div>
                    </div>

                    <div class="sm:col-span-2">
                      <label for="email" class="block text-sm font-medium text-gray-700">メールアドレス<span class="text-red-500"> (必須)</span></label>
                      <div class="mt-1">
                        <input id="email" name="email" type="email" autocomplete="email"
                          class="py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300  border-solid border rounded-md"
                          placeholder="mail@example.com"
                          value={email}
                          onChange={e => (
                            setEmail(e.target.value)
                          )}
                        />
                      </div>
                    </div>

                    <div class="sm:col-span-2">
                      <label for="addressCode" class="block text-sm font-medium text-gray-700">住所（郵便番号）<span class="text-red-500"> (必須)</span></label>
                      <div class="mt-1 relative rounded-md shadow-sm">
                        <input type="text" name="addressCode" id="addressCode" autocomplete="tel"
                          class="py-3 px-4 block w-full focus:ring-green-500 focus:border-green-500 border-gray-300  border-solid border rounded-md"
                          placeholder="123-4567"
                          value={addressCode}
                          onChange={e => setAddressCode(e.target.value)}
                        />
                      </div>
                    </div>

                    <div class="sm:col-span-2">
                      <label for="addressArea" class="block text-sm font-medium text-gray-700">住所（都道府県）<span class="text-red-500"> (必須)</span></label>
                      <div class="mt-1 relative rounded-md shadow-sm">
                        <select name="addressArea" id="addressArea" onChange={e => setAddressArea(e.target.value)}
                          class="py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300  border-solid border rounded-md"
                        >
                          <option value="">Please select...</option>
                          <option value="北海道">北海道</option>
                          <option value="青森県">青森県</option>
                          <option value="岩手県">岩手県</option>
                          <option value="宮城県">宮城県</option>
                          <option value="秋田県">秋田県</option>
                          <option value="山形県">山形県</option>
                          <option value="福島県">福島県</option>
                          <option value="茨城県">茨城県</option>
                          <option value="栃木県">栃木県</option>
                          <option value="群馬県">群馬県</option>
                          <option value="埼玉県">埼玉県</option>
                          <option value="千葉県">千葉県</option>
                          <option value="東京都">東京都</option>
                          <option value="神奈川県">神奈川県</option>
                          <option value="新潟県">新潟県</option>
                          <option value="富山県">富山県</option>
                          <option value="石川県">石川県</option>
                          <option value="福井県">福井県</option>
                          <option value="山梨県">山梨県</option>
                          <option value="長野県">長野県</option>
                          <option value="岐阜県">岐阜県</option>
                          <option value="静岡県">静岡県</option>
                          <option value="愛知県">愛知県</option>
                          <option value="三重県">三重県</option>
                          <option value="滋賀県">滋賀県</option>
                          <option value="京都府">京都府</option>
                          <option value="大阪府">大阪府</option>
                          <option value="兵庫県">兵庫県</option>
                          <option value="奈良県">奈良県</option>
                          <option value="和歌山県">和歌山県</option>
                          <option value="鳥取県">鳥取県</option>
                          <option value="島根県">島根県</option>
                          <option value="岡山県">岡山県</option>
                          <option value="広島県">広島県</option>
                          <option value="山口県">山口県</option>
                          <option value="徳島県">徳島県</option>
                          <option value="香川県">香川県</option>
                          <option value="愛媛県">愛媛県</option>
                          <option value="高知県">高知県</option>
                          <option value="福岡県">福岡県</option>
                          <option value="佐賀県">佐賀県</option>
                          <option value="長崎県">長崎県</option>
                          <option value="熊本県">熊本県</option>
                          <option value="大分県">大分県</option>
                          <option value="宮崎県">宮崎県</option>
                          <option value="鹿児島県">鹿児島県</option>
                          <option value="沖縄県">沖縄県</option>
                        </select>
                      </div>
                    </div>

                    <div class="sm:col-span-2">
                      <label for="addressCity" class="block text-sm font-medium text-gray-700">住所（市区町村）<span class="text-red-500"> (必須)</span></label>
                      <div class="mt-1 relative rounded-md shadow-sm">
                        <input type="text" name="addressCity" id="addressCity" autocomplete="tel"
                          class="py-3 px-4 block w-full focus:ring-green-500 focus:border-green-500 border-gray-300  border-solid border rounded-md"
                          placeholder=""
                          value={addressCity}
                          onChange={e => setAddressCity(e.target.value)}
                        />
                      </div>
                    </div>

                    <div class="sm:col-span-2">
                      <label for="addressNumber" class="block text-sm font-medium text-gray-700">住所（丁目番地以下）<span class="text-red-500"> (必須)</span></label>
                      <div class="mt-1 relative rounded-md shadow-sm">
                        <input type="text" name="addressNumber" id="addressNumber" autocomplete="tel"
                          class="py-3 px-4 block w-full focus:ring-green-500 focus:border-green-500 border-gray-300  border-solid border rounded-md"
                          placeholder=""
                          value={addressNumber}
                          onChange={e => setAddressNumber(e.target.value)}
                        />
                      </div>
                    </div>

                    <div class="sm:col-span-2">
                      <label for="phone_number" class="block text-sm font-medium text-gray-700">電話番号<span class="text-red-500"> (必須)</span></label>
                      <div class="mt-1 relative rounded-md shadow-sm">
                        <input type="text" name="phone_number" id="phone_number" autocomplete="tel"
                          class="py-3 px-4 block w-full focus:ring-green-500 focus:border-green-500 border-gray-300  border-solid border rounded-md"
                          placeholder="080-1234-5678"
                          value={phoneNumber}
                          onChange={e => setPhoneNumber(e.target.value)}
                        />
                      </div>
                    </div>

                    <div class="sm:col-span-2">
                      <label for="education" class="block text-sm font-medium text-gray-700">最終学歴<span class="text-gray-500"> (任意)</span></label>
                      <div class="mt-1">
                        <textarea id="education" name="education" rows="4"
                          class="py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300 border-solid border rounded-md"
                          value={education}
                          onChange={e => (
                            setEducation(e.target.value)
                          )}
                        ></textarea>
                      </div>
                    </div>

                    <div class="sm:col-span-2">
                      <label for="currentStatus" class="block text-sm font-medium text-gray-700">現在の就業状況<span class="text-red-500"> (必須)</span></label>
                      <div class="mt-1 relative rounded-md shadow-sm">
                        <select name="currentStatus" id="currentStatus" onChange={e => setCurrentStatus(e.target.value)}
                          class="py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300  border-solid border rounded-md"
                        >
                          <option value="">Please select...</option>
                          <option value="正社員">正社員</option>
                          <option value="契約社員">契約社員</option>
                          <option value="業務委託">業務委託</option>
                          <option value="パート・アルバイト">パート・アルバイト</option>
                          <option value="派遣社員">派遣社員</option>
                          <option value="離職中">離職中</option>
                          <option value="就業経験なし">就業経験なし</option>
                          <option value="その他">その他</option>
                        </select>
                      </div>
                    </div>

                    <div class="sm:col-span-2">
                      <label for="currentIncome" class="block text-sm font-medium text-gray-700">現在（直近）の年収<span class="text-gray-500"> (任意)</span></label>
                      <div class="mt-1 relative rounded-md shadow-sm">
                        <select name="currentIncome" id="currentIncome" onChange={e => setCurrentIncome(e.target.value)}
                          class="py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300  border-solid border rounded-md"
                        >
                          <option value="">Please select...</option>
                          <option value="199万円以下">199万円以下</option>
                          <option value="200~249万円">200~249万円</option>
                          <option value="250~299万円">250~299万円</option>
                          <option value="300~349万円">300~349万円</option>
                          <option value="350~399万円">350~399万円</option>
                          <option value="400~449万円">400~449万円</option>
                          <option value="450~499万円">450~499万円</option>
                          <option value="500~549万円">500~549万円</option>
                          <option value="550~599万円">550~599万円</option>
                          <option value="600万以上">600万以上</option>
                        </select>
                      </div>
                    </div>

                    <div class="sm:col-span-2">
                      <label for="desiredincome" class="block text-sm font-medium text-gray-700">希望年収<span class="text-gray-500"> (任意)</span></label>
                      <div class="mt-1 relative rounded-md shadow-sm">
                        <select name="desiredincome" id="desiredincome" onChange={e => setDesireIncome(e.target.value)}
                          class="py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300  border-solid border rounded-md"
                        >
                          <option value="">Please select...</option>
                          <option value="199万円以下">199万円以下</option>
                          <option value="200~249万円">200~249万円</option>
                          <option value="250~299万円">250~299万円</option>
                          <option value="300~349万円">300~349万円</option>
                          <option value="350~399万円">350~399万円</option>
                          <option value="400~449万円">400~449万円</option>
                          <option value="450~499万円">450~499万円</option>
                          <option value="500~549万円">500~549万円</option>
                          <option value="550~599万円">550~599万円</option>
                          <option value="600万以上">600万以上</option>
                        </select>
                      </div>
                    </div>

                    <div class="sm:col-span-2">
                      <label for="spouse" class="block text-sm font-medium text-gray-700">配偶者<span class="text-gray-500"> (任意)</span></label>
                      <div class="mt-1 relative rounded-md shadow-sm">
                        <select name="spouse" id="spouse" onChange={e => setSpouse(e.target.value)}
                          class="py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300  border-solid border rounded-md"
                        >
                          <option value="">Please select...</option>
                          <option value="有り">有り</option>
                          <option value="無し">無し</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="mt-12">
                  <h1 class="w-full bg-falGLD text-white text-2xl text-center py-4 my-4">職務経歴</h1>
                  <div class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                    <div class="sm:col-span-2">
                      <label for="experienceNumber" class="block text-sm font-medium text-gray-700">経験社数<span class="text-gray-500"> (任意)</span></label>
                      <div class="mt-1 relative rounded-md shadow-sm">
                        <input type="text" name="experienceNumber" id="experienceNumber" autocomplete="tel"
                          class="py-3 px-4 block w-full focus:ring-green-500 focus:border-green-500 border-gray-300  border-solid border rounded-md"
                          placeholder=""
                          value={experienceNumber}
                          onChange={e => setExperienceNumber(e.target.value)}
                        />
                      </div>
                    </div>

                    <div class="sm:col-span-2">
                      <label for="experienceOccupation" class="block text-sm font-medium text-gray-700">経験職種・年数<span class="text-gray-500"> (任意)</span></label>
                      <div class="mt-1">
                        <textarea id="experienceOccupation" name="experienceOccupation" rows="4"
                          class="py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300 border-solid border rounded-md"
                          value={experienceOccupation}
                          onChange={e => (
                            setExperienceOccupation(e.target.value)
                          )}
                        ></textarea>
                        <p class="text-sm font-medium text-gray-700">（※〇〇職　〇年　など）</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="mt-12">
                  <h1 class="w-full bg-falGLD text-white text-2xl text-center py-4 my-4">経験企業（社名/在職期間/雇用形態 など）</h1>
                  <div class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                    <div class="sm:col-span-2">
                      <label for="experienceCompany" class="block text-sm font-medium text-gray-700">経験企業<span class="text-gray-500"> (任意)</span></label>
                      <div class="mt-1">
                        <textarea id="experienceCompany" name="education" rows="4"
                          class="py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300 border-solid border rounded-md"
                          value={experienceCompany}
                          onChange={e => (
                            setExperienceCompany(e.target.value)
                          )}
                        ></textarea>
                        <p class="text-sm font-medium text-gray-700">（※株式会社〇〇／〇年／正社員　など）</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="mt-12">
                  <h1 class="w-full bg-falGLD text-white text-2xl text-center py-4 my-4">資格・スキル</h1>
                  <div class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                    <div class="sm:col-span-2">
                      <label for="skill" class="block text-sm font-medium text-gray-700">保有スキル<span class="text-gray-500"> (任意)</span></label>
                      <div class="mt-1">
                        <textarea id="education" name="skill" rows="4"
                          class="py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300 border-solid border rounded-md"
                          value={skill}
                          onChange={e => (
                            setSkill(e.target.value)
                          )}
                        ></textarea>
                        <p class="text-sm font-medium text-gray-700">（※〇〇技術、〇〇資格取得　など）</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="mt-12">
                  <h1 class="w-full bg-falGLD text-white text-2xl text-center py-4 my-4">自己PR</h1>
                  <div class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                    <div class="sm:col-span-2">
                      <label for="promotion" class="block text-sm font-medium text-gray-700">自己PR<span class="text-red-500"> (必須)</span></label>
                      <div class="mt-1">
                        <textarea id="promotion" name="promotion" rows="4"
                          class="py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300 border-solid border rounded-md"
                          value={promotion}
                          onChange={e => (
                            setPromotion(e.target.value)
                          )}
                        ></textarea>
                        <p class="text-sm font-medium text-gray-700">（※ご自由にお書きください。）</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="mt-12">
                  <h1 class="w-full bg-falGLD text-white text-2xl text-center py-4 my-4">企業への質問</h1>
                  <div class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                    <div class="sm:col-span-2">
                      <label for="question" class="block text-sm font-medium text-gray-700">当社への質問<span class="text-gray-500"> (任意)</span></label>
                      <div class="mt-1">
                        <textarea id="question" name="question" rows="4"
                          class="py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300 border-solid border rounded-md"
                          value={question}
                          onChange={e => (
                            setQuestion(e.target.value)
                          )}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="mt-12">
                  <div class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">

                    {
                      (name && furigana && birthday && sex && email && addressCode && addressArea && addressCity && addressNumber && phoneNumber && currentStatus && promotion) ?
                        <div class="text-red-500 text-sm">
                          <p>{`　`}</p>
                        </div>
                        :
                        <div class="text-red-500 text-sm"><p>※必須項目を入力してください。</p></div>
                    }


                    <div class="sm:col-span-2">
                      <button
                        disabled={!(name && furigana && birthday && sex && email && addressCode && addressArea && addressCity && addressNumber && phoneNumber && currentStatus && promotion)}
                        class={`${disabled ? '' : 'hover:bg-falGLD'} disabled:opacity-50 disabled:pointer-events-none w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-falGLD focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500`}
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
      </Layout>
    </div>
  )
}
