import Head from 'next/head'

import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import Layout from '../../components/layout'

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

  const handleSubmit = e => {
    e.preventDefault();

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
        router.push("/success");
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <Head>
        <title>お問合わせ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
      <main class="bg-falGLD">
        <div class="bg-gray-100 mx-auto pt-12 lg:w-920">
          <div><h1 class="text-4xl text-center mb-6">お問い合わせ</h1></div>
          <div>
            <p class="text-center">製品のご購入のご相談、導入のご検討、OEMのご相談についてなど、
お気軽にお問い合わせください。</p>
          </div>
          <div class="mt-12">
            <p class="text-center">お問い合わせダイヤル</p>
            <p class="mt-2 text-center text-3xl helvetica">052-734-7065</p>
          </div>
          <div class=" bg-gray-100 py-16 px-4 overflow-hidden sm:px-6 lg:px-8">
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
