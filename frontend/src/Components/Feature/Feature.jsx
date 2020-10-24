import React, { Component } from 'react'
import Fsdata from './Fsdata';
import Fcard from './Fcard';

import WOW from 'wowjs';

export default class Feature extends Component {

    componentDidMount(){

        new WOW.WOW().init();
    }


    render() {

        
        return (
            <>
                <section className="Fa-our-work">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="titel-box animate__delay-1s animate__animated animate__bounceInDown animate__slower"  data-wow-duration="2s" data-wow-delay="5s">
                                <h1 className="Fh1 animate__animated animate__bounce">Feature of our Work</h1>
                                <p className="fpra">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae hic nam rem officiis, necessitatibus aperiam corrupti voluptate. Iste itaque culpa suscipit magnam quo perferendis, natus, tempora libero vel, sint ex!</p>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            {
                                Fsdata.map((val,index)=>{
                                    return<Fcard 
                                    key={index}
                                    iconphoto={val.iconphoto}
                                    title={val.title}
                                    para={val.para}
                                    
                                    />
                                })
                            }
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
