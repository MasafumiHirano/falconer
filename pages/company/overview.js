import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import GoogleMapReact from 'google-map-react';

import Layout from '../../components/layout'

const defaultLatLng = {
  lat: 35.1505704,
  lng: 137.0000005,
};


export default function Overview() {
  return (
    <div>
      <Head>
        <title>会社概要</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
      <main>
        <div class="flex bg-falGLD justify-center w-full">
          <div class="bg-white lg:w-720 px-6 w-full">

            <h1 class="text-center text-2xl border-b-2 border-gray-500 w-full lg:w-650 mx-auto mt-12">会社概要</h1>


          <div class="flex flex-col items-center mt-8 w-full">
            <div class="lg:w-650 w-full">
              <div class="py-2 align-middle inline-block w-full">
                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table class="w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                      <tr>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          会社名
                        </th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          株式会社Falconer
                        </th>
                      </tr>
                    </thead>
                    <tbody>

                      <tr class="bg-white">
                        <td class="px-6 py-4 whitespace-nowrap text-xs lg:text-sm font-medium text-gray-900">
                        代表取締役
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-xs lg:text-sm text-gray-500">
                        清水 真輝
                        </td>
                      </tr>

                      <tr class="bg-gray-50">
                        <td class="px-6 py-4 whitespace-nowrap text-xs lg:text-sm font-medium text-gray-900">
                        設立
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-xs lg:text-sm text-gray-500">
                        2016年7月
                        </td>
                      </tr>

                      <tr class="bg-white">
                        <td class="px-6 py-4 whitespace-nowrap text-xs lg:text-sm font-medium text-gray-900">
                        資本金
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-xs lg:text-sm text-gray-500">
                        10,000,000円
                        </td>
                      </tr>

                      <tr class="bg-gray-50">
                        <td class="px-6 py-4 whitespace-nowrap text-xs lg:text-sm font-medium text-gray-900">
                        事業内容
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-xs lg:text-sm text-gray-500">
                        レザー小物及び雑貨の各種製の<br class="block lg:hidden" />製造販売<br/>
          インターネットによる販売
                        </td>
                      </tr>

                      <tr class="bg-white">
                        <td class="px-6 py-4 whitespace-nowrap text-xs lg:text-sm font-medium text-gray-900">
                        許認可
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-xs lg:text-sm text-gray-500">
                        一般建築業許可<br/><br/>
                        古物商許可<br/>
                        愛知県公安委員会 <br class="block lg:hidden" />第543311801500号
                        </td>
                      </tr>

                      <tr class="bg-gray-50">
                        <td class="px-6 py-4 whitespace-nowrap text-xs lg:text-sm font-medium text-gray-900">
                        所在地
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-xs lg:text-sm text-gray-500">
                        〒465-0068<br/>
          愛知県名古屋市名東区牧の里<br/>三丁目104番地の2
                        </td>
                      </tr>

                      <tr class="bg-white">
                        <td class="px-6 py-4 whitespace-nowrap text-xs lg:text-sm font-medium text-gray-900">
                        Tel / Fax
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-xs lg:text-sm text-gray-500">
                        052-734-7065
                        </td>
                      </tr>

                      <tr class="bg-gray-50">
                        <td class="px-6 py-4 whitespace-nowrap text-xs lg:text-sm font-medium text-gray-900">
                        営業時間
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-xs lg:text-sm text-gray-500">
                        10:00～19:00<br class="block lg:hidden" />（日曜、隔週土曜定休)
                        </td>
                      </tr>

                      <tr class="bg-white">
                        <td class="px-6 py-4 whitespace-nowrap text-xs lg:text-sm font-medium text-gray-900">
                        取引銀行
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-xs lg:text-sm text-gray-500">
                        三重銀行／第三銀行／<br class="block lg:hidden" />三菱東京UFJ銀行／大垣共立銀行
                        </td>
                      </tr>

                      <tr class="bg-gray-50">
                        <td class="px-6 py-4 whitespace-nowrap text-xs lg:text-sm font-medium text-gray-900">
                        顧問弁護士
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-xs lg:text-sm text-gray-500">
                        横木増井法律事務所
                        </td>
                      </tr>

                      <tr class="bg-white">
                        <td class="px-6 py-4 whitespace-nowrap text-xs lg:text-sm font-medium text-gray-900">
                        顧問弁理士
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-xs lg:text-sm text-gray-500">
                        かすがい特許事務所
                        </td>
                      </tr>

                      {/*<!-- More items... -->*/}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col items-center mt-8 w-full">
            <div class="lg:w-650 w-full">
              <div class="py-2 align-middle inline-block w-full">
                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table class="w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                      <tr>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          拠点名
                        </th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          株式会社FALCONER　<br class="block lg:hidden" />第一配送センター
                        </th>
                      </tr>
                    </thead>
                    <tbody>

                      <tr class="bg-white">
                        <td class="px-6 py-4 whitespace-nowrap text-xs lg:text-sm font-medium text-gray-900">
                        拠点住所
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-xs lg:text-sm text-gray-500">
                        〒465-0068<br/>
愛知県名古屋市名東区牧の里<br/>二丁目1810番地
                        </td>
                      </tr>                      

                      {/*<!-- More items... -->*/}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/*<div class="w-full lg:w-650 lg:h-450 h-300 mx-auto my-12">
            <GoogleMapReact
              bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY }}
              defaultCenter={defaultLatLng}
              defaultZoom={16}
            >

            </GoogleMapReact>
  </div>*/}
          
          <div class="flex flex-col items-center mt-8 w-full">
            <div class="lg:w-650 w-full">
              <div class="py-2 align-middle inline-block w-full">
                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table class="w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                      <tr>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          拠点名
                        </th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          株式会社FALCONER　<br class="block lg:hidden" />第一物流倉庫
                        </th>
                      </tr>
                    </thead>
                    <tbody>

                      <tr class="bg-white">
                        <td class="px-6 py-4 whitespace-nowrap text-xs lg:text-sm font-medium text-gray-900">
                        拠点住所
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-xs lg:text-sm text-gray-500">
                        〒465-0068<br/>
                        愛知県名古屋市名東区牧の里<br/>二丁目1809番地
                        </td>
                      </tr>                      

                      {/*<!-- More items... -->*/}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <h1 class="text-center text-2xl border-b-2 border-gray-500 w-full lg:w-650 mx-auto mt-12">海外拠点</h1>

          <div class="flex flex-col items-center mt-8 w-full">
            <div class="lg:w-650 w-full">
              <div class="py-2 align-middle inline-block w-full">
                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table class="w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                      <tr>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        香港 子会社
                        </th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Falconer HK Limited
                        </th>
                      </tr>
                    </thead>
                    <tbody>

                      <tr class="bg-white">
                        <td class="px-6 py-4 whitespace-nowrap text-xs lg:text-sm font-medium text-gray-900">
                        住所
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-xs lg:text-sm text-gray-500">
                        2 Floor, 519 Lockhart Road, <br/>Causeway Bay, Hong Kong.
                        </td>
                      </tr>                      

                      {/*<!-- More items... -->*/}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col items-center mt-8 w-full">
            <div class="lg:w-650 w-full">
              <div class="py-2 align-middle inline-block w-full">
                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table class="w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                      <tr>
                        <th scope="col" class="text-center px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Guangzhou Production Facility
                        </th>
                      </tr>
                    </thead>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div class="mx-auto lg:w-650 w-full mb-12">
            <div class="flex">
              <div class="w-1/2">
                <Image src="/images/company/overview/chinaa.jpeg" alt="china" width={2000} height={1415} />
              </div>
              <div class="w-1/2 ml-2">
                <Image src="/images/company/overview/chinab.jpeg" alt="chinab" width={2000} height={1415} />
              </div>
            </div>
            <div class="flex">
              <div class="w-1/2">
                <Image src="/images/company/overview/chinac.jpeg" alt="chinac" width={2000} height={1415} />
              </div>
              <div class="w-1/2 ml-2">
                <Image src="/images/company/overview/chinad.jpeg" alt="chinad" width={2000} height={1415} />
              </div>
            </div>
            <div class="flex">
              <div class="w-1/2">
                <Image src="/images/company/overview/chinae.jpeg" alt="chinae" width={2000} height={1415} />
              </div>
              <div class="w-1/2 ml-2">
                <Image src="/images/company/overview/chinaf.jpeg" alt="chinaf" width={2000} height={1415} />
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