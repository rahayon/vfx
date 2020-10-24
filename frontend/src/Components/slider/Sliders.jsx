import React from 'react';

// import Swiper core and required components
import SwiperCore, { EffectFade,EffectOverflow,EffectFlip,Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import 'swiper/components/effect-cube/effect-cube.scss';
import 'swiper/components/effect-flip/effect-flip.scss';
import 'swiper/components/effect-coverflow/effect-coverflow.scss'



import img1 from '../../images/img2.jpg';
import img2 from '../../images/img2.jpg';

// install Swiper components
SwiperCore.use([EffectFade,Autoplay,Navigation, Pagination, Scrollbar, A11y]);


const Sliders = () => {
    return (
        <>
            <section className="slider_section">
                <div className="maindiv">
                    <Swiper

                        autoplay={{delay:4000}}
                        effect='fade'
                        speed={700}

                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        // scrollbar={{ draggable: false }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        >

                        <SwiperSlide><img src={img1} alt="photos"/></SwiperSlide>
                        <SwiperSlide><img src={img2} alt="photos"/></SwiperSlide>
                        <SwiperSlide><img src={img1} alt="photos"/></SwiperSlide>
                        <SwiperSlide><img src={img2} alt="photos"/></SwiperSlide>

                    </Swiper>
                </div>
            </section>
        </>
    );
}

export default Sliders;


