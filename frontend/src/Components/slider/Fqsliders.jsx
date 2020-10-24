import React, { Component } from 'react'

import { NavLink ,Link} from "react-router-dom";

// import Swiper core and required components
import SwiperCore, { EffectCube,EffectFade,EffectCoverflow,EffectFlip,Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import 'swiper/components/effect-cube/effect-cube.scss';
import 'swiper/components/effect-flip/effect-flip.scss';
import 'swiper/components/effect-coverflow/effect-coverflow.scss'


import playicon from '../../assets/images/cardimg/playicon.png'
import img1 from '../../assets/images/cardimg/fslider/fslider1.jpg';
import img2 from '../../assets/images/cardimg/fslider/fslider2.jpg';
import img3 from '../../assets/images/cardimg/fslider/fslider3.jpg';



// model video


import ModalVideo from 'react-modal-video'
import '../../../node_modules/react-modal-video/scss/modal-video.scss';






// install Swiper components
SwiperCore.use([EffectFade,Autoplay,Navigation, Pagination, Scrollbar, A11y]);


export default class Fqsliders extends Component{


    constructor () {
        super()
        this.state = {
          isOpen: false
        }
        this.openModal = this.openModal.bind(this)
      }
     
      openModal () {
        this.setState({isOpen: true})
      }


render() {

    return (
        <>
            <section className="footer_slider_section">
            <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='L61p2uyiMSo' onClose={() => this.setState({isOpen: false})} />
                <div className="container-fluid">
                    
                    <Swiper

                        autoplay={{delay:5000}}
                        speed={700}
                        spaceBetween={50}
                        slidesPerView={1}
                        waitForTransition={true}
                        navigation
                        pagination={{ clickable: true }}
                        // scrollbar={{ draggable: false }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        >

                        <SwiperSlide className="contain">
                            <div className="row">
                                <div className="text-div col-sm-6 col-md-6 col-lg-6">
                                    <h1 className="h1">hi hellow i am hasnat </h1>
                                    <p className="para">Lorem ipsum dolor sit,adipisicing elit. Necessitatibus aliquam quibusdam quasi libero esse ipsam deleniti quae recusandae sapiente quos magni nisi, aspernatur deserunt consequatur mollitia quidem perspiciatis, provident ratione!</p>
                                    <div className="btn-f-slider">
                                        <Link className="btn-pill btn-f" to="#">
                                            <span>Order</span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="img-div col-sm-6 col-md-6 col-lg-6">
                                    <div className="img_div_v">
                                       <Link to="#">
                                            <img  src={img1} alt="photos"/>
                                       </Link>
                                    </div>
                                    <div className="vido_btn">
                                        <img onClick={this.openModal} src={playicon} alt="photos" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="contain">
                            <div className="row">
                                <div className="text-div col-sm-6 col-md-6 col-lg-6">
                                    <h1 className="h1">hi hellow i am hasnat </h1>
                                    <p className="para">Lorem ipsum dolor sit,adipisicing elit. Necessitatibus aliquam quibusdam quasi libero esse ipsam deleniti quae recusandae sapiente quos magni nisi, aspernatur deserunt consequatur mollitia quidem perspiciatis, provident ratione!</p>
                                    <div className="btn-f-slider">
                                        <Link className="btn-pill btn-f" to="#">
                                            <span>Order</span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="img-div col-sm-6 col-md-6 col-lg-6">
                                    <div className="img_div_v">
                                       <Link to="#">
                                            <img src={img2} alt="photos"/>
                                       </Link>
                                    </div>
                                    <div className="vido_btn">
                                        <img onClick={this.openModal} src={playicon} alt="photos" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="contain">
                            <div className="row">
                                <div className="text-div col-sm-6 col-md-6 col-lg-6">
                                    <h1 className="h1">hi hellow i am hasnat </h1>
                                    <p className="para">Lorem ipsum dolor sit,adipisicing elit. Necessitatibus aliquam quibusdam quasi libero esse ipsam deleniti quae recusandae sapiente quos magni nisi, aspernatur deserunt consequatur mollitia quidem perspiciatis, provident ratione!</p>
                                    <div className="btn-f-slider">
                                        <Link className="btn-pill btn-f" to="#">
                                            <span>Order</span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="img-div col-sm-6 col-md-6 col-lg-6">
                                    <div className="img_div_v">
                                       <Link to="#">
                                            <img onClick={this.openModal} src={img3} alt="photos"/>
                                       </Link>
                                    </div>
                                    <div className="vido_btn">
                                        <img src={playicon} alt="photos" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="contain">
                            <div className="row">
                                <div className="text-div col-sm-6 col-md-6 col-lg-6">
                                    <h1 className="h1">hi hellow i am hasnat </h1>
                                    <p className="para">Lorem ipsum dolor sit,adipisicing elit. Necessitatibus aliquam quibusdam quasi libero esse ipsam deleniti quae recusandae sapiente quos magni nisi, aspernatur deserunt consequatur mollitia quidem perspiciatis, provident ratione!</p>
                                    <div className="btn-f-slider">
                                        <Link className="btn-pill btn-f" to="#">
                                            <span>Order</span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="img-div col-sm-6 col-md-6 col-lg-6">
                                    <div className="img_div_v">
                                       <Link to="#">
                                            <img src={img2} alt="photos"/>
                                       </Link>
                                    </div>
                                    <div className="vido_btn">
                                        <img onClick={this.openModal} src={playicon} alt="photos" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                       
                        

                    </Swiper>
                </div>
            </section>
        </>
    );
 }
}



