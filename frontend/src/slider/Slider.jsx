import React, { Component } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../node_modules/swiper/components/navigation/navigation.scss';
import '../../node_modules/swiper/components/pagination/pagination.scss';
import '../../node_modules/swiper/components/scrollbar/scrollbar.scss';
// Import Swiper styles
import 'swiper/swiper.scss';
import '../../node_modules/swiper/swiper-bundle.css';

import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpeg';
import img4 from '../images/img4.jpg';

import '../mystyle.scss'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


export default class Slider extends Component {

    
    render() {
        return (
            <>
             <section className="slider">
                <div className="container-fluide">
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={3}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        >



                        <SwiperSlide navigation><img src={img1} alt="photo"/></SwiperSlide>
                        <SwiperSlide><img src={img2} alt="photo"/> </SwiperSlide>
                        <SwiperSlide><img src={img3} alt="photo"/></SwiperSlide>
                        <SwiperSlide><img src={img4} alt="photo"/></SwiperSlide>
                    </Swiper>
                </div>
             </section>
            </>
        )
    }
}
