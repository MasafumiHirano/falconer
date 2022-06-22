export default function DesignLeftMenu() {
  return (
    <>
      {/* サイドメニュー */}
      <aside class="fixed w-32 lg:w-60 left-0 top-0 bg-black text-white h-screen">
        <h1 class="futura-md text-xl lg:text-4xl mt-9 ml-4"><a href="/design_system/">FALCONER<br />Design<br />Notes</a></h1>
        <ul class="w-full pl-1 lg:pl-10 mt-10">
          <li><a class="flex flex-row" href="/design_system/productpage"><span class="w-4/6">商品ページ</span><span><img src="/images/design/arrow_wh.png" /></span></a></li>
          {/* <li><a class="flex flex-row mt-7"><span class="w-4/6">ロゴ・素材</span><span><img src="/images/design/arrow_wh.png" /></span></a></li> */}
          <li><a class="flex flex-row mt-7" href="/design_system/productspec"><span class="w-4/6">AllRightLeather</span><span><img src="/images/design/arrow_wh.png" /></span></a></li>
          <li><a class="flex flex-row mt-7" href="/design_system/raficaro"><span class="w-4/6">Raficaro</span><span><img src="/images/design/arrow_wh.png" /></span></a></li>
          <li><a class="flex flex-row mt-7" href="/design_system/domteporna"><span class="w-4/6">DomTeporna</span><span><img src="/images/design/arrow_wh.png" /></span></a></li>
          <li><a class="flex flex-row mt-7" href="/design_system/lpspec"><span class="w-4/6">セールLP</span><span><img src="/images/design/arrow_wh.png" /></span></a></li>
          <li><a class="flex flex-row mt-7" href="/design_system/material"><span class="w-4/6">素材集</span><span><img src="/images/design/arrow_wh.png" /></span></a></li>
        </ul>
      </aside>
    </>
  )
}