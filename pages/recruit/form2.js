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
      desiredIncome: desireIncome,
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
        <title>FALCONER???????????????</title>
        <link rel="icon" href="/falconer_favicons.png" />
      </Head>
      <Layout>
        <main class="bg-gray-100">
          <div class="mx-auto pt-12 lg:w-1100">
            <p class="text-center mb-4 text-xl">?????????????????????????????????</p>
            <p class="text-center">????????????????????????????????????????????????????????????1??????????????????????????????????????????????????????????????????????????????????????????</p>

            <div class=" bg-gray-100 py-8 px-4 overflow-hidden sm:px-6 lg:px-8">
              <div class="relative max-w-xl mx-auto">
                <div class="mt-12">
                  <h1 class="w-full bg-falGLD text-white text-2xl text-center py-4 my-4">??????????????????</h1>
                  <div class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">

                    <div class="sm:col-span-2">
                      <label for="type" class="block text-sm font-medium text-gray-700">????????????<span class="text-red-500"> (??????)</span></label>
                      <div class="mt-1 ">
                        <div class="ml-2 inline-block">
                          <input type="radio" name="type" id="type" autocomplete="organization" value={"????????????STAFF?????????????????????????????????"} onChange={e => setType(e.target.value)} />
                          <label for="type" class="pl-2">????????????STAFF?????????????????????????????????</label>
                        </div>
                      </div>
                    </div>

                    <div class="sm:col-span-2">
                      <label for="name" class="block text-sm font-medium text-gray-700">?????????<span class="text-red-500"> (??????)</span></label>
                      <div class="mt-1">
                        <input type="text" name="name" id="fullname" autocomplete="organization"
                          class="py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300  border-solid border rounded-md"
                          placeholder="?????? ??????"
                          value={name}
                          onChange={e => setName(e.target.value)}
                        />
                      </div>
                    </div>


                    <div class="sm:col-span-2">
                      <label for="furigana" class="block text-sm font-medium text-gray-700">????????????<span class="text-red-500"> (??????)</span></label>
                      <div class="mt-1">
                        <input type="text" name="furigana" id="furigana" autocomplete="organization"
                          class="py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300  border-solid border rounded-md"
                          placeholder="??????????????????"
                          value={furigana}
                          onChange={e => setFurigana(e.target.value)}
                        />
                      </div>
                    </div>

                    <div class="sm:col-span-2">
                      <label for="birthday" class="block text-sm font-medium text-gray-700">????????????<span class="text-red-500"> (??????)</span></label>
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
                      <label for="sex" class="block text-sm font-medium text-gray-700">??????<span class="text-red-500"> (??????)</span></label>
                      <div class="mt-1 ">
                        <div class="ml-2 inline-block">
                          <input type="radio" name="sex" id="sex" autocomplete="organization" value={"??????"}
                            onChange={e => setSex(e.target.value)} />
                          <label for="male">??????</label>
                        </div>
                        <div class="ml-2 inline-block">
                          <input type="radio" name="sex" id="sex" autocomplete="organization" value={"??????"}
                            onChange={e => setSex(e.target.value)} />
                          <label for="female">??????</label>
                        </div>
                      </div>
                    </div>

                    <div class="sm:col-span-2">
                      <label for="email" class="block text-sm font-medium text-gray-700">?????????????????????<span class="text-red-500"> (??????)</span></label>
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
                      <label for="addressCode" class="block text-sm font-medium text-gray-700">????????????????????????<span class="text-red-500"> (??????)</span></label>
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
                      <label for="addressArea" class="block text-sm font-medium text-gray-700">????????????????????????<span class="text-red-500"> (??????)</span></label>
                      <div class="mt-1 relative rounded-md shadow-sm">
                        <select name="addressArea" id="addressArea" onChange={e => setAddressArea(e.target.value)}
                          class="py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300  border-solid border rounded-md"
                        >
                          <option value="">Please select...</option>
                          <option value="?????????">?????????</option>
                          <option value="?????????">?????????</option>
                          <option value="?????????">?????????</option>
                          <option value="?????????">?????????</option>
                          <option value="?????????">?????????</option>
                          <option value="?????????">?????????</option>
                          <option value="?????????">?????????</option>
                          <option value="?????????">?????????</option>
                          <option value="?????????">?????????</option>
                          <option value="?????????">?????????</option>
                          <option value="?????????">?????????</option>
                          <option value="?????????">?????????</option>
                          <option value="?????????">?????????</option>
                          <option value="????????????">????????????</option>
                          <option value="?????????">?????????</option>
                          <option value="?????????">?????????</option>
                          <option value="?????????">?????????</option>
                          <option value="?????????">?????????</option>
                          <option value="?????????">?????????</option>
                          <option value="?????????">?????????</option>
                          <option value="?????????">?????????</option>
                          <option value="?????????">?????????</option>
                          <option value="?????????">?????????</option>
                          <option value="?????????">?????????</option>
                          <option value="?????????">?????????</option>
                          <option value="?????????">?????????</option>
                          <option value="?????????">?????????</option>
                          <option value="?????????">?????????</option>
                          <option value="?????????">?????????</option>
                          <option value="????????????">????????????</option>
                          <option value="?????????">?????????</option>
                          <option value="?????????">?????????</option>
                          <option value="?????????">?????????</option>
                          <option value="?????????">?????????</option>
                          <option value="?????????">?????????</option>
                          <option value="?????????">?????????</option>
                          <option value="?????????">?????????</option>
                          <option value="?????????">?????????</option>
                          <option value="?????????">?????????</option>
                          <option value="?????????">?????????</option>
                          <option value="?????????">?????????</option>
                          <option value="?????????">?????????</option>
                          <option value="?????????">?????????</option>
                          <option value="?????????">?????????</option>
                          <option value="?????????">?????????</option>
                          <option value="????????????">????????????</option>
                          <option value="?????????">?????????</option>
                        </select>
                      </div>
                    </div>

                    <div class="sm:col-span-2">
                      <label for="addressCity" class="block text-sm font-medium text-gray-700">????????????????????????<span class="text-red-500"> (??????)</span></label>
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
                      <label for="addressNumber" class="block text-sm font-medium text-gray-700">??????????????????????????????<span class="text-red-500"> (??????)</span></label>
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
                      <label for="phone_number" class="block text-sm font-medium text-gray-700">????????????<span class="text-red-500"> (??????)</span></label>
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
                      <label for="education" class="block text-sm font-medium text-gray-700">????????????<span class="text-gray-500"> (??????)</span></label>
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
                      <label for="currentStatus" class="block text-sm font-medium text-gray-700">?????????????????????<span class="text-red-500"> (??????)</span></label>
                      <div class="mt-1 relative rounded-md shadow-sm">
                        <select name="currentStatus" id="currentStatus" onChange={e => setCurrentStatus(e.target.value)}
                          class="py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300  border-solid border rounded-md"
                        >
                          <option value="">Please select...</option>
                          <option value="?????????">?????????</option>
                          <option value="????????????">????????????</option>
                          <option value="????????????">????????????</option>
                          <option value="???????????????????????????">???????????????????????????</option>
                          <option value="????????????">????????????</option>
                          <option value="?????????">?????????</option>
                          <option value="??????????????????">??????????????????</option>
                          <option value="?????????">?????????</option>
                        </select>
                      </div>
                    </div>

                    <div class="sm:col-span-2">
                      <label for="currentIncome" class="block text-sm font-medium text-gray-700">???????????????????????????<span class="text-gray-500"> (??????)</span></label>
                      <div class="mt-1 relative rounded-md shadow-sm">
                        <select name="currentIncome" id="currentIncome" onChange={e => setCurrentIncome(e.target.value)}
                          class="py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300  border-solid border rounded-md"
                        >
                          <option value="">Please select...</option>
                          <option value="199????????????">199????????????</option>
                          <option value="200~249??????">200~249??????</option>
                          <option value="250~299??????">250~299??????</option>
                          <option value="300~349??????">300~349??????</option>
                          <option value="350~399??????">350~399??????</option>
                          <option value="400~449??????">400~449??????</option>
                          <option value="450~499??????">450~499??????</option>
                          <option value="500~549??????">500~549??????</option>
                          <option value="550~599??????">550~599??????</option>
                          <option value="600?????????">600?????????</option>
                        </select>
                      </div>
                    </div>

                    <div class="sm:col-span-2">
                      <label for="desiredincome" class="block text-sm font-medium text-gray-700">????????????<span class="text-gray-500"> (??????)</span></label>
                      <div class="mt-1 relative rounded-md shadow-sm">
                        <select name="desiredincome" id="desiredincome" onChange={e => setDesireIncome(e.target.value)}
                          class="py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300  border-solid border rounded-md"
                        >
                          <option value="">Please select...</option>
                          <option value="199????????????">199????????????</option>
                          <option value="200~249??????">200~249??????</option>
                          <option value="250~299??????">250~299??????</option>
                          <option value="300~349??????">300~349??????</option>
                          <option value="350~399??????">350~399??????</option>
                          <option value="400~449??????">400~449??????</option>
                          <option value="450~499??????">450~499??????</option>
                          <option value="500~549??????">500~549??????</option>
                          <option value="550~599??????">550~599??????</option>
                          <option value="600?????????">600?????????</option>
                        </select>
                      </div>
                    </div>

                    <div class="sm:col-span-2">
                      <label for="spouse" class="block text-sm font-medium text-gray-700">?????????<span class="text-gray-500"> (??????)</span></label>
                      <div class="mt-1 relative rounded-md shadow-sm">
                        <select name="spouse" id="spouse" onChange={e => setSpouse(e.target.value)}
                          class="py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300  border-solid border rounded-md"
                        >
                          <option value="">Please select...</option>
                          <option value="??????">??????</option>
                          <option value="??????">??????</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="mt-12">
                  <h1 class="w-full bg-falGLD text-white text-2xl text-center py-4 my-4">????????????</h1>
                  <div class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                    <div class="sm:col-span-2">
                      <label for="experienceNumber" class="block text-sm font-medium text-gray-700">????????????<span class="text-gray-500"> (??????)</span></label>
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
                      <label for="experienceOccupation" class="block text-sm font-medium text-gray-700">?????????????????????<span class="text-gray-500"> (??????)</span></label>
                      <div class="mt-1">
                        <textarea id="experienceOccupation" name="experienceOccupation" rows="4"
                          class="py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300 border-solid border rounded-md"
                          value={experienceOccupation}
                          onChange={e => (
                            setExperienceOccupation(e.target.value)
                          )}
                        ></textarea>
                        <p class="text-sm font-medium text-gray-700">????????????????????????????????????</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="mt-12">
                  <h1 class="w-full bg-falGLD text-white text-2xl text-center py-4 my-4">?????????????????????/????????????/???????????? ?????????</h1>
                  <div class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                    <div class="sm:col-span-2">
                      <label for="experienceCompany" class="block text-sm font-medium text-gray-700">????????????<span class="text-gray-500"> (??????)</span></label>
                      <div class="mt-1">
                        <textarea id="experienceCompany" name="education" rows="4"
                          class="py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300 border-solid border rounded-md"
                          value={experienceCompany}
                          onChange={e => (
                            setExperienceCompany(e.target.value)
                          )}
                        ></textarea>
                        <p class="text-sm font-medium text-gray-700">?????????????????????????????????????????????????????????</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="mt-12">
                  <h1 class="w-full bg-falGLD text-white text-2xl text-center py-4 my-4">??????????????????</h1>
                  <div class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                    <div class="sm:col-span-2">
                      <label for="skill" class="block text-sm font-medium text-gray-700">???????????????<span class="text-gray-500"> (??????)</span></label>
                      <div class="mt-1">
                        <textarea id="education" name="skill" rows="4"
                          class="py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300 border-solid border rounded-md"
                          value={skill}
                          onChange={e => (
                            setSkill(e.target.value)
                          )}
                        ></textarea>
                        <p class="text-sm font-medium text-gray-700">???????????????????????????????????????????????????</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="mt-12">
                  <h1 class="w-full bg-falGLD text-white text-2xl text-center py-4 my-4">??????PR</h1>
                  <div class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                    <div class="sm:col-span-2">
                      <label for="promotion" class="block text-sm font-medium text-gray-700">??????PR<span class="text-red-500"> (??????)</span></label>
                      <div class="mt-1">
                        <textarea id="promotion" name="promotion" rows="4"
                          class="py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300 border-solid border rounded-md"
                          value={promotion}
                          onChange={e => (
                            setPromotion(e.target.value)
                          )}
                        ></textarea>
                        <p class="text-sm font-medium text-gray-700">?????????????????????????????????????????????</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="mt-12">
                  <h1 class="w-full bg-falGLD text-white text-2xl text-center py-4 my-4">??????????????????</h1>
                  <div class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                    <div class="sm:col-span-2">
                      <label for="question" class="block text-sm font-medium text-gray-700">??????????????????<span class="text-gray-500"> (??????)</span></label>
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
                          <p>{`???`}</p>
                        </div>
                        :
                        <div class="text-red-500 text-sm"><p>?????????????????????????????????????????????</p></div>
                    }


                    <div class="sm:col-span-2">
                      <button
                        disabled={!(name && furigana && birthday && sex && email && addressCode && addressArea && addressCity && addressNumber && phoneNumber && currentStatus && promotion)}
                        class={`${disabled ? '' : 'hover:bg-falGLD'} disabled:opacity-50 disabled:pointer-events-none w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-falGLD focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500`}
                        onClick={handleSubmit}
                      >
                        ??????
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
