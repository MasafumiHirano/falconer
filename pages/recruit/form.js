import Head from 'next/head'
import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import Layout from '../../components/layout'

export default function FORM() {
  const router = useRouter();
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
      spouse: spouse,
      experienceNumber: experienceNumber,
      experienceCompany: experienceCompany,
      skill: skill,
      promotion: promotion,
      question: question
    };

    axios({
      method: "post",
      url: "https://falconer.microcms.io/api/v1/recruit",
      data: data,
      headers: {
        "Content-Type": "application/json",
        "X-WRITE-API-KEY": process.env.x_api_key
      }
    })
      .then(() => {
        router.push("/success");
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <Head>
        <title>FALCONER採用ページ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
      <main class="bg-gray-100">
        <div class="mx-auto pt-12 lg:w-1100">
          <p class="text-center">※当応募内容についてはエントリー、並びに1次選考も兼ねて確認させて頂いております。予めご了承ください。</p>
          
          <div class=" bg-gray-100 py-8 px-4 overflow-hidden sm:px-6 lg:px-8">
            <div class="relative max-w-xl mx-auto">
              <div class="mt-12">
                <h1 class="w-full bg-gray-500 text-white text-2xl text-center py-4 my-4">プロフィール</h1>
                <div class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">

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
                        onChange={e => setSex(e.target.value)}/>
                        <label for="male">男性</label>
                      </div>
                      <div class="ml-2 inline-block">
                        <input type="radio" name="sex" id="sex" autocomplete="organization" value={"女性"} 
                        onChange={e => setSex(e.target.value)}/>
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
                        <option value="" selected>Please select...</option>
                        <option value="北海道">北海道</option>
                        <option value="青森県">青森</option>
                        <option value="岩手県">岩手県</option>
                        <option value="秋田県">秋田県</option>
                        <option value="宮城県">宮城県</option>

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
                        <option value="" selected>Please select...</option>
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
                        <option value="" selected>Please select...</option>
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
                        <option value="" selected>Please select...</option>
                        <option value="有り">有り</option>
                        <option value="無し">無し</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-12">
                <h1 class="w-full bg-gray-500 text-white text-2xl text-center py-4 my-4">職務経歴</h1>
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
                    </div>
                  </div>
                </div>
              </div>







              <div class="mt-12">
                <h1 class="w-full bg-gray-500 text-white text-2xl text-center py-4 my-4">経験企業（社名/在職期間/雇用形態 など）</h1>
                <div class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                  <div class="sm:col-span-2">
                    <label for="education" class="block text-sm font-medium text-gray-700">経験職種・年数<span class="text-gray-500"> (任意)</span></label>
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
                </div>
              </div>

              <div class="mt-12">
                <h1 class="w-full bg-gray-500 text-white text-2xl text-center py-4 my-4">資格・スキル</h1>
                <div class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                  <div class="sm:col-span-2">
                    <label for="education" class="block text-sm font-medium text-gray-700">経験職種・年数<span class="text-gray-500"> (任意)</span></label>
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
                </div>
              </div>

              <div class="mt-12">
                <h1 class="w-full bg-gray-500 text-white text-2xl text-center py-4 my-4">自己PR</h1>
                <div class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                  <div class="sm:col-span-2">
                    <label for="education" class="block text-sm font-medium text-gray-700">経験職種・年数<span class="text-gray-500"> (任意)</span></label>
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
                </div>
              </div>

              <div class="mt-12">
                <h1 class="w-full bg-gray-500 text-white text-2xl text-center py-4 my-4">企業への質問</h1>
                <div class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                  <div class="sm:col-span-2">
                    <label for="education" class="block text-sm font-medium text-gray-700">経験職種・年数<span class="text-gray-500"> (任意)</span></label>
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
                </div>
              </div>

              <div class="mt-12">
                <div class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">

                  <div class="sm:col-span-2">
                    <button 
                      disabled={!(name && email && body)} 
                      class={`${disabled ? '' : 'hover:bg-blue-700'} disabled:opacity-50 disabled:pointer-events-none w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500`} 
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
