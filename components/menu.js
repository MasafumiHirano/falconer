import Image from 'next/image'
import Link from 'next/link'
import React from "react";
import Drawer from 'react-modern-drawer';
 
import 'react-modern-drawer/dist/index.css'
 
const Menu = () => {
 
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
 
    return (
        <div class="-mt-1">
            <button onClick={toggleDrawer}>
              <Image src="/images/media/menu_bar.png" width={18} height={18} alt="" />
            </button>
            <Drawer open={isOpen} onClose={toggleDrawer} direction='left' style={{width: "65%"}}>
              <div class="bg-black h-screen pt-6 text-white tracking-wide leading-10">
                <ul class="pl-8">
                  <li class="hover:text-yellow-300 text-2xl"><Link href="/topics"><a>最新情報</a></Link></li>
                  <li class="hover:text-yellow-300 mt-4 text-2xl"><Link href="/brand"><a>ブランド</a></Link></li>
                  <li class="hover:text-yellow-300 mt-4 text-2xl"><Link href="/company"><a>企業情報</a></Link></li>
                  <li class="hover:text-yellow-300 mt-4 text-2xl"><Link href="/media"><a>メディア</a></Link></li>
                  <li class="hover:text-yellow-300 mt-4 text-2xl"><Link href="/contact"><a>お問合わせ</a></Link></li>
                </ul>
                <div class="pt-6 pl-6">
                  <div class="inline-block">
                    <a href="https://www.instagram.com/masaki.s_japan/" target="_blank">
                      <Image src="/images/media/instagram_white_bg_bk.jpg" width={48} height={48} alt="instagaram_social" />
                    </a>
                  </div>
                  
                  <div class="inline-block">
                    <a href="https://www.youtube.com/channel/UCynRnKX32Zr8Hh_Rst6Mrug" target="_blank">
                      <Image src="/images/media/youtube_white_bg_bk.jpg" width={48} height={48} alt="youtube_social" />
                    </a>
                  </div>
                  <div class="inline-block">
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