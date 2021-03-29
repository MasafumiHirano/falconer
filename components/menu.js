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
        <div class="w-1/6">
            <button onClick={toggleDrawer}>
              <Image src="/images/media/menu_bar.png" width={36} height={36} alt="" />
            </button>
            <Drawer open={isOpen} onClose={toggleDrawer} direction='left' style={{width: "50%"}}>
              <div class="bg-black h-screen px-2 pt-4 text-white tracking-wide leading-8">
                <ul>
                  <li class="hover:text-yellow-300"><Link href="/topics"><a>最新情報</a></Link></li>
                  <li class="hover:text-yellow-300"><Link href="/brand"><a>ブランド</a></Link></li>
                  <li class="hover:text-yellow-300"><Link href="/company"><a>企業情報</a></Link></li>
                  <li class="hover:text-yellow-300"><Link href="/media"><a>メディア</a></Link></li>
                  <li class="hover:text-yellow-300"><Link href="/contact"><a>お問合わせ</a></Link></li>
                </ul>
                <div class="pt-4">
                  <div class="inline-block">
                    <a href="https://www.instagram.com/masaki.s_japan/">
                      <Image src="/images/media/instagram_white_bg_bk.jpg" width={36} height={36} alt="instagaram_social" />
                    </a>
                  </div>
                  <div class="inline-block"><Image src="/images/media/youtube_white_bg_bk.jpg" width={36} height={36} alt="youtube_social" /></div>
                  <div class="inline-block"><Image src="/images/media/twitter_white_bg_bk.jpg" width={36} height={36} alt="twitter_social" /></div>
                </div>
              </div>
            </Drawer>
        </div>
    );
};
 
export default Menu;