import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Fcard extends Component {

    render(props) {
        return (
            <>
             <div className="col-sm-6 col-md-4 col-lg-4 margin animate__backInLeft animate__delay-1s animate__animated">
                 <div className="wrapper-box">
                     <div className="iconimg">
                        <img className="img" src={this.props.iconphoto} alt="picture"/>
                     </div>
                     <div className="text">
                        <h4 className="h4"> {this.props.title}</h4>
                        <p className="para">{this.props.para}</p>
                     </div>
                     <div className="more">
                         <Link className="more-btn" to="#">
                             Read More
                         </Link>
                     </div>
                 </div>
             </div>
            </>
        )
    }
}
