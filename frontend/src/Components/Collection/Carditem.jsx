import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Carditem extends Component {
    render(props) {

        return (
            <>
             <div className="col-6 col-sm-6 col-md-3 col-lg-3 mr-down">
                 <div className="innterbox">
                     <div className="title-card">
                        <h4 className="h4">{this.props.titel}</h4>
                     </div>
                     <div className="photodiv">
                            <Link className="hoverimg" to="#">
                                <img src={this.props.imgsrc} alt="image" />
                            </Link>
                     </div>
                 </div>
             </div>
            </>
        )
    }
}
