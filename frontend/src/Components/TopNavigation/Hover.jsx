import React, { useState } from 'react';
import {NavDropdown, NavLink} from 'react-bootstrap';
import '../../mystyle.scss';


const Hover = () => {
    const [show, setShow] = useState(false);
    const showDropdown = (e)=>{
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }

    return (
        <div>
            <NavDropdown title="Dropdown" 
                        id="collasible-nav-dropdown" 
                        show={show}
                        onMouseEnter={showDropdown} 
                        onMouseLeave={hideDropdown}
                        className="hovereff"
                        >
                            <div className="sub-manu">
                                <div className="box-innn">
                                    <div className="list-one">
                                        <ul>
                                            <li><NavLink to ="#">Grapic design</NavLink></li>
                                            <li><NavLink to ="#">Grapic design</NavLink></li>
                                            <li><NavLink to ="#">Grapic design</NavLink></li>
                                            <li><NavLink to ="#">Grapic design</NavLink></li>
                                            <li><NavLink to ="#">Grapic design</NavLink></li>
                                            <li><NavLink to ="#">Grapic design</NavLink></li>

                                        </ul>
                                    </div>
                                    <div className="list-two">
                                        <ul>
                                            <li><NavLink to ="#">Grapic design</NavLink></li>
                                            <li><NavLink to ="#">Grapic design</NavLink></li>
                                            <li><NavLink to ="#">Grapic design</NavLink></li>
                                            <li><NavLink to ="#">Grapic design</NavLink></li>
                                            <li><NavLink to ="#">Grapic design</NavLink></li>
                                            <li><NavLink to ="#">Grapic design</NavLink></li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </NavDropdown>
        </div>
    );
}

export default Hover;
