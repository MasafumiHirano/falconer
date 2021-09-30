import Image from 'next/image'
import Link from 'next/link'
import React from "react";
import Drawer from 'react-modern-drawer';
import { useEffect } from "react";
import 'react-modern-drawer/dist/index.css'
 
const Menu = () => {
 
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = () => {
      setIsOpen((prevState) => !prevState)
  }
  const [isHeightOver, setIsHeightOver] = React.useState(false);

  useEffect(() => { // 2.
    const scrollAction = () => { // 3.
      if (20 > window.scrollY) { // 判定したい高さ
        setIsHeightOver(true);
      } else {
        setIsHeightOver(false);
      }
    };
    window.addEventListener("scroll", scrollAction, {
      capture: false,
      passive: true,
    }); // 4.
    scrollAction(); // 初期描画時に一度だけ判定する
  
    return () => { // 5.
      window.removeEventListener("scroll", scrollAction);
    };
  }, []);

  return (
    <div className="">
      <button onClick={toggleDrawer}>
        <svg xmlns="http://www.w3.org/2000/svg" fill={isHeightOver ? 'black' : 'white'} width="24" height="24" viewBox="0 0 640 1024" role="img">
          <path d="M0 192h640v128H0zm0 256h640v128H0zm0 256h640v128H0z"/>
        </svg>
      </button>
      <Drawer open={isOpen} onClose={toggleDrawer} direction='left' style={{width: "65%"}}>
        <div className="bg-black h-screen pt-6 text-white tracking-wide leading-10">
          <ul className="pl-8">
            <li className="hover:text-falGLD  mt-4 text-lg"><Link href="/topics"><a>ニュース</a></Link></li>
            <li className="hover:text-falGLD  mt-4 text-lg"><Link href="/company/business#site"><a>販売サイト</a></Link></li>
            <li className="hover:text-falGLD  mt-4 text-lg"><Link href="/company"><a>会社情報</a></Link></li>
            <li className="hover:text-falGLD  mt-4 text-lg"><Link href="/media"><a>メディア</a></Link></li>
            <li className="hover:text-falGLD  mt-4 text-lg"><Link href="/recruit"><a>採用情報</a></Link></li>
            <li className="hover:text-falGLD  mt-4 text-lg"><Link href="/contact"><a>お問合わせ</a></Link></li>
          </ul>
          <div className="pt-6 pl-6">
            <div className="inline-block">
              <a href="https://www.instagram.com/masaki.s_japan/" target="_blank">
                <Image src="/images/media/instagram_white_bg_bk.jpg" width={48} height={48} alt="instagaram_social" />
              </a>
            </div>
            
            <div className="inline-block">
              <a href="https://www.youtube.com/channel/UCynRnKX32Zr8Hh_Rst6Mrug" target="_blank">
                <Image src="/images/media/youtube_white_bg_bk.jpg" width={48} height={48} alt="youtube_social" />
              </a>
            </div>
            <div className="inline-block">
              <a href="https://twitter.com/Nanami_Bondjam" target="_blank">
                <Image src="/images/media/twitter_white_bg_bk.jpg" width={48} height={48} alt="twitter_social" />
              </a>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};
 
export default Menu;