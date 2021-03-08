import Image from 'next/image'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import Header from '../../components/header'

export default function SimpleSlider(){
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    lazyLoad: true,
    centerMode: true,
    adaptiveHeight: true,
    fade: true,
    arrows: true,
    autoplaySpeed: 5000,
    className: 'slides'
};

  return (
    <>
      <Header />
      <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <Image class="block" src="/images/topslider/bachicashley_hero.jpg" width={1280} height={640} alt="bachicashley_hero"/>
          </div>
          <div>
            <Image class="block" src="/images/topslider/bachicashley_hero.jpg" width={1280} height={640} alt="bachicashley_hero"/>
          </div>
          <div>
            <Image class="block" src="/images/topslider/bachicashley_hero.jpg" width={1280} height={640} alt="bachicashley_hero"/>
          </div>
          <div>
            <Image class="block" src="/images/topslider/bachicashley_hero.jpg" width={1280} height={640} alt="bachicashley_hero"/>
          </div>
          <div>
            <Image class="block" src="/images/topslider/bachicashley_hero.jpg" width={1280} height={640} alt="bachicashley_hero"/>
          </div>
        </Slider>
    </>
  )
}