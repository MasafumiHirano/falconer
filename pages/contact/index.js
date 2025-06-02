import Head from 'next/head'

import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import Layout from '../../components/layout'
import { init, send } from 'emailjs-com';

export default function CONTACT() {
  const router = useRouter();
  const [company, setCompany] = useState("");
  const [homepage, setHomepage] = useState("");
  const [name, setName] = useState("");
  const [furigana, setFurigana] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [contactBy, setContactBy] = useState("");
  const [body, setBody] = useState("");
  const [disabled, setDisabled] = useState(true);

  const sendEmail = () => {
    const user_id = "user_vztWjBsF612MhfNYgDaVL"
    const service_id = "service_s42wnsp";
    const template_id = "template_woah9qa";
    console.log("ids：" + user_id + ":" + service_id + ":" + template_id)
    if ((user_id != undefined) && (service_id != undefined) && (template_id != undefined)) {
      init(user_id);

      const template_param = {
        to_name: name,
        email: email,
        company: company,
        homepage: homepage,
        name: name,
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

    const data = {
      company: company,
      homepage: homepage,
      name: name,
      furigana: furigana,
      email: email,
      phoneNumber: phoneNumber,
      contactBy: contactBy,
      body: body
    };

    axios({
      method: "post",
      url: "https://falconer.microcms.io/api/v1/contactus",
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
        console.log(err);
      });
  };

  return (
    <div>
      <Head>
        <title>お問合わせ</title>
        <link rel="icon" href="/falconer_favicons.png" />
      </Head>
      <Layout>
        <main class="-mb-4 NotoSans">
          <div class="mb-12 md:mb-24">
            <div class="relative">
              <h1 class="contact_title futura-lt text-white text-center font-bold text-3xl lg:text-3xl h-405 flex items-center justify-center flex-col">CONTACT<p class="NotoSans text-base font-normal">問い合わせ</p></h1>
            </div>
            <div class="mt-10 md:mt-20">
              <img src="images/contact/icon.png" class="block mx-auto w-12 md:w-24" />
              <p class="text-center text-comGOLD text-xs md:text-2xl">製品のご購入のご相談、OEMのご相談について<br />取材の申し込みなど、お気軽にお問い合わせください。</p>
            </div>
            <div class="mt-24">
              <p class="text-center">メールでのお問い合わせ</p>
              <p class="mt-2 text-center text-3xl helvetica"><span class="border-b-4 border-comGOLD w-52 block mx-auto">MAIL form</span></p>
            </div>
            <div class="pb-16 px-4 overflow-hidden sm:px-6 lg:px-8">
              <div class="relative max-w-xl mx-auto">
                <div class="mt-12">
                  <div class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                    <div class="sm:col-span-2">
                      <label for="company" class="block text-sm font-medium text-gray-700">御社名・店舗名</label>
                      <div class="mt-1">
                        <input
                          type="text"
                          name="company"
                          id="company"
                          autocomplete="organization"
                          class="py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300 border-solid border rounded-md"
                          placeholder="株式会社Falconer"
                          value={company}
                          onChange={e => setCompany(e.target.value)}
                        />
                      </div>
                    </div>
                    <div class="sm:col-span-2">
                      <label for="homepage" class="block text-sm font-medium text-gray-700">ホームページURL</label>
                      <div class="mt-1">
                        <input type="text" name="homepage" id="homepage" autocomplete="organization"
                          class="py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300 border-solid border rounded-md"
                          placeholder="https://falconer.co.jp"
                          value={homepage}
                          onChange={e => setHomepage(e.target.value)}
                        />
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
                      <label for="furigana" class="block text-sm font-medium text-gray-700">フリガナ</label>
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
                      <label for="phone_number" class="block text-sm font-medium text-gray-700">電話番号</label>
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
                      <label for="message" class="block text-sm font-medium text-gray-700">ご連絡方法</label>
                      <div class="mt-4 flex justify-around">
                        <div>
                          <input type="radio" name="contactBy" value="メール"
                            onChange={e => setContactBy(e.target.value)} />
                          <label for="mail">メール</label>
                        </div>
                        <div>
                          <input type="radio" name="contactBy" value="電話"
                            onChange={e => setContactBy(e.target.value)} />
                          <label for="phone">電話</label>
                        </div>
                        <div>
                          <input type="radio" name="contactBy" value="どちらでも"
                            onChange={e => setContactBy(e.target.value)} />
                          <label for="both">どちらでも</label>
                        </div>
                      </div>
                    </div>
                    <div class="sm:col-span-2">
                      <label for="message" class="block text-sm font-medium text-gray-700">お問い合わせ内容<span class="text-red-500"> (必須)</span></label>
                      <div class="mt-1">
                        <textarea id="message" name="message" rows="4"
                          class="py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300 border-solid border rounded-md"
                          value={body}
                          onChange={e => (
                            setBody(e.target.value)
                          )}
                        ></textarea>
                      </div>
                    </div>

                    {
                      (name && email && body) ?
                        <div class="text-red-500 text-sm">
                          <p>{`　`}</p>
                        </div>
                        :
                        <div class="text-red-500 text-sm"><p>※必須項目を入力してください。</p></div>
                    }

                    <div class="sm:col-span-2">
                      <button
                        disabled={!(name && email && body)}
                        class={`${disabled ? '' : 'hover:bg-falGLD'} disabled:opacity-50 disabled:pointer-events-none w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-comGOLD focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500`}
                        onClick={handleSubmit}
                      >
                        送信
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-24">
                <p class="text-center">お電話でのお問合せ</p>
                <p class="mt-2 text-center text-3xl helvetica"><a class="border-b-4 border-comGOLD w-52 block mx-auto" href="tel:+81-52-734-7065">TEL contact</a></p>
                <p class="mt-8 text-center">※営業・セールスのお電話はお断りしております<br /><br />
                  対応スタッフの業務に支障がでるため、営業を目的としたお電話はご遠慮ください。<br />
                  営業のご提案やお知らせにつきましては、上記のお問い合わせフォームよりご連絡ください。</p>
                <div class="mt-8">
                  <div class="mt-2 w-full max-w-1050 text-3xl helvetica flex flex-col justify-between md:flex-row mx-auto">
                    <a class="w-72 lg:w-450 max-w-500 border-2 border-comGOLD rounded-md text-black flex lg:justify-center py-4 lg:py-7 mx-auto" href="tel:+81-52-734-7065">
                      <div class="pl-7 pr-7 lg:pr-14"><img class="w-12 lg:w-14" src="/images/top/houzin.png" /></div>
                      <div class="flex flex-col items-center justify-center">
                        <span class="NotoSans-L text-sm lg:text-base">法人窓口はコチラ</span>
                        <span class="futura-lt text-2xl lg:text-4xl mt-2">052-734-7065</span>
                      </div>
                    </a>
                    <a class="w-72 lg:w-450 max-w-500 border-2 border-comGOLD rounded-md text-black flex lg:justify-center py-4 lg:py-7 mx-auto mt-6 md:mt-0" href="tel:+81-52-734-7075">
                      <div class="pl-7 pr-7 lg:pr-14"><img class="w-12 lg:w-14" src="/images/top/kojin.png" /></div>
                      <div class="flex flex-col items-center justify-center">
                        <span class="NotoSans-L text-sm lg:text-base">一般・個人の方コチラ</span>
                        <span class="futura-lt text-2xl lg:text-4xl">052-734-7075</span>
                      </div>
                    </a>
                  </div>
                  <p class="text-center text-black text-xs lg:text-2xl mt-4 lg:mt-8">受付時間　10:00～18:00 <br />（法人は19:00まで対応、日曜・土曜定休）</p>
                </div>
              </div>
            </div>

          </div>
        </main>
      </Layout>
    </div>
  )
}
