import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {FaPlayCircle,FaHeart,FaFolderOpen,FaShoppingCart} from 'react-icons/fa';
// import Modelvideo from './Modelvideo';

import ModalVideo from 'react-modal-video'
import '../../../node_modules/react-modal-video/scss/modal-video.scss'


export default class Videocard extends Component {
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




    render(props) {
        return (
            <>
                <div className="col-sm-6 col-md-4 col-lg-4">
                   <div className="video-card">
                       <div className="inner-box">
                            <div className="tham-img">
                                <Link to="#">
                                    <img src={this.props.imgsrc} alt="Photos" />
                                </Link>
                            </div>
                            <div className="over-layer">
                                <div className="over-layer-inner">
                                    <span className="icon-v-play" >
                                        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='L61p2uyiMSo' onClose={() => this.setState({isOpen: false})} />
                                        <p onClick={this.openModal}> <FaPlayCircle /></p>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="text-part">
                            <div className="idno">
                                <Link className="text-id" to="#">
                                ID 1025
                                </Link>
                            </div>
                            <div className="div">
                                <div className="icon">
                                    <Link className="icon-link" to="#">
                                        <FaHeart />
                                    </Link>
                                    <Link className="icon-link" to="#">
                                        <FaFolderOpen />
                                    </Link>
                                    <Link className="icon-link" to="#">
                                        <FaShoppingCart />
                                    </Link>
                                </div>
                            </div>
                        </div>
                   </div>
                </div>
            </>
        )
    }
}
