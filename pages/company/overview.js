import Head from 'next/head'
import Link from 'next/link'

import Layout from '../../components/layout'

export default function Overview() {
  return (
    <div>
      <Head>
        <title>会社概要</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
      <main>
        <div class="flex justify-center">
          <div class="w-1100">

            <h1 class="text-center text-2xl italic border-b-2 border-gray-500 mx-56">会社概要</h1>

            <div class="mt-24">
              <div class="">
                <h1 class="text-center text-4xl italic border-b-4 border-gray-500 mx-56">国内拠点</h1>
                <div class="flex justify-center mx-56 mt-8">
                  <ul class="w-full">
                    <li class="flex justify-center mt-8 text-2xl border-b border-gray-500">
                      <p class="mr-32">会社名</p>
                      <p>株式会社FALCONER</p>
                    </li>
                    <li class="flex justify-center mt-8 text-2xl border-b border-gray-500">
                      <p class="mr-32 flex items-center">会社名</p>
                      <div>
                        <p>株式会社FALCONER</p>
                        <p>株式会社FALCONER</p>
                      </div>
                    </li>
                    <li class="flex justify-center mt-8 text-2xl border-b border-gray-500">
                      <p class="mr-32">会社名</p>
                      <p>株式会社FALCONER</p>
                    </li>
                    <li class="flex justify-center mt-8 text-2xl border-b border-gray-500">
                      <p class="mr-32 flex items-center">会社名</p>
                      <div>
                        <p>株式会社FALCONER</p>
                        <p>株式会社FALCONER</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="mt-24">
                <h1 class="text-center text-4xl italic border-b-4 border-gray-500 mx-56">海外拠点</h1>
                <div class="flex justify-center mx-56 mt-8">
                  <ul class="w-full">
                    <li class="flex justify-center mt-8 text-2xl border-b border-gray-500">
                      <p class="mr-32">会社名</p>
                      <p>株式会社FALCONER</p>
                    </li>
                    <li class="flex justify-center mt-8 text-2xl border-b border-gray-500">
                      <p class="mr-32 flex items-center">会社名</p>
                      <div>
                        <p>株式会社FALCONER</p>
                        <p>株式会社FALCONER</p>
                      </div>
                    </li>
                    <li class="flex justify-center mt-8 text-2xl border-b border-gray-500">
                      <p class="mr-32">会社名</p>
                      <p>株式会社FALCONER</p>
                    </li>
                    <li class="flex justify-center mt-8 text-2xl border-b border-gray-500">
                      <p class="mr-32 flex items-center">会社名</p>
                      <div>
                        <p>株式会社FALCONER</p>
                        <p>株式会社FALCONER</p>
                      </div>
                    </li>
                  </ul>
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