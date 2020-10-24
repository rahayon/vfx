import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import Logoimg from '../../assets/images/cardimg/logof.png';

import {FaFacebookSquare,FaTwitter,FaTelegramPlane, FaTwitch, FaLinkedin ,FaInstagram} from 'react-icons/fa';
import {MdLocationOn,MdCall,MdEmail} from "react-icons/md";
import '../../mystyle.scss';
export default class Footer extends Component {
    render() {
        return (
           <>
           <footer className="footersection">
               <div className="container-fluid">
                    <div className="row ">
                        <div className="col-sm-6 col-md-3 col-lg-3 margin">
                            <div className="logo">
                                <img src={Logoimg} alt="photo"/>
                            </div>
                        </div>


                        <div className="col-sm-6 col-md-3 col-lg-3 margin">
                            <div className="manu">
                               <h4 className="h4">ABOUST US</h4>
                               <span className="span">Lorem input ipsum lorem input</span>
                               <div className="address">
                                   <h5 className="h5">
                                       <MdLocationOn className="icon-a" />Address
                                    </h5>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, dicta blanditiis iste dolorum earum</p>
                                    <h5 className="h5">
                                        <MdEmail  className="icon-a" /> Have any Questions ?
                                    </h5>
                                    <p><Link className="link-f"  to="#">hasnattanvir014@gmail.com</Link></p>
                                    <h5 className="h5">
                                        <MdCall  className="icon-a" /> Phone
                                    </h5>
                                    <span>xxxxxxxxxxxxxx</span>
                                    <br/>
                                    <span>xxxxxxxxxxxx</span>
                               </div>
                            </div>
                        </div>


                        <div className="col-sm-6 col-md-3 col-lg-3 margin">
                            <div className="contacts">
                                <h5 className="h4">NAVIGATION</h5>
                                <div className="sl-manu">
                                    <ul>
                                        <li><Link className="link" to="">Contact us</Link></li>
                                        <li><Link className="link" to="">About us</Link></li>
                                        <li><Link className="link" to="">Service us</Link></li>
                                        <li><Link className="link" to="">contact us</Link></li>
                                    </ul>

                                </div>
                                
                            </div>
                        </div>




                        <div className="col-sm-6 col-md-6 col-lg-3 margin">
                            <div className="social">
                                <h5 className="h4">Suscribe</h5>
                                <div className="form">
                                    <form>
                                        <input className="inputbtn" type="email"  name="subs" placeholder="Your email"/>
                                        <div className="btn-div">
                                            <button className="btn skewBtn blue">subscribe</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="social-con">
                                    <div className="container">
                                        <ul className="social">
                                            <li className="facebook"><Link to="#" className="entypo-facebook"><FaFacebookSquare /></Link></li>
                                            <li className="twitter"><Link to="#" className="entypo-twitter"><FaTwitch/></Link></li>
                                            <li className="dribbble"><Link to="#" className="entypo-dribbble"><FaLinkedin /></Link></li>
                                            <li className="behance"><Link to="#" className="entypo-behance"><FaInstagram /></Link></li>
                                            <li className="linked-in"><Link to="#" className="entypo-linkedin"><FaTelegramPlane /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
               </div>
           </footer>
           </>
        )
    }
}
