import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Sdatavideo from './Sdatavideo';
import Videocard from './Videocard';
export default class Videosection extends Component {
    render() {
        return (
            <>
             <section className="video-section">
                <div className="container-fluid">
                    <div className="title">
                        <h1 className="h1">Our Video Logo</h1>
                    </div>
                    <div className="row">
                        {
                            Sdatavideo.map((val,index)=>{
                                return <Videocard 
                                key={index}
                                imgsrc={val.imgsrc}
                                idno={val.id}
                                
                                />
                            })
                        }
                    </div>
                    <div className="buttton-sectin">
                        <div className="view-btn">
                            <Link className="btn btn-secondary" to="#" >View More</Link>
                        </div>
                    </div>
                </div>
             </section>

            </>
        )
    }
}
