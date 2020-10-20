import React from 'react'
// import Swiper core and required components
import SwiperCore, {EffectCube ,Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';


import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
// import img4 from '../images/img4.jpg';

import '../mystyle.scss'


// install Swiper components
SwiperCore.use([EffectCube,Navigation, Pagination, Scrollbar, A11y]);

export default function Sliders() {
    return (
        <>
        <section>
            <div className="control-margin">
                <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                >
                <SwiperSlide navigation><img src={img1} alt="photo"/></SwiperSlide>
                <SwiperSlide navigation><img src={img2} alt="photo"/> </SwiperSlide>
                <SwiperSlide navigation><img src={img3} alt="photo"/></SwiperSlide>
                {/* <SwiperSlide navigation><img src={img4} alt="photo"/></SwiperSlide> */}
                </Swiper>
            </div>
        </section>
        </>
    )
}
