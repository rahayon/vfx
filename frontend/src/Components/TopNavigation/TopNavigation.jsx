import React, { Component, Fragment } from 'react';
import {Nav, Navbar, Form, FormControl,NavDropdown,Button, NavLink} from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../mystyle.scss';
import Hover from './Hover'
import { FaSearch } from 'react-icons/fa';
import Logo from '../../images/logo.png';

class TopNavigation extends Component {

    render() {
        return (
          <Fragment>
           <div className="main_div">
               <div className="container-fluid Navbarsection">
                <Navbar fixed="top" expand="lg" className="nav-color">
                    <Navbar.Brand to="/">
                        <img src={Logo} alt="pictures" />
                    </Navbar.Brand>
                    <div className="control-up-searchber">
                        <div className="control-serarch">
                            <Form inline>
                                <Button variant="outline-success"><FaSearch/></Button>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2 inputsearch" />
                            </Form>
                            <div className="log-in">
                                <NavLink className="linklogin" to="#">Log in</NavLink>
                                <NavLink className="linklogin" to="#">sign up</NavLink>
                            </div>
                        </div>
                    </div>
                    <Navbar.Toggle   className="navbar-hamburger "  aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link className="link-color" to="#home">Home</Nav.Link>
                        <Nav.Link className="link-color" to="#link">Link</Nav.Link>
                        <Nav.Link className="link-color" to="#link">Link</Nav.Link>
                        <Hover />
                        </Nav>
                        <div className="control-serarch">
                            <Form inline>
                                <Button variant="outline-success"><FaSearch/></Button>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2 inputsearch" />
                            </Form>
                            <div className="log-in">
                                <NavLink className="linklogin" to="#">Log in</NavLink>
                                <NavLink className="linklogin" to="#">sign up</NavLink>
                            </div>
                        </div>
                    </Navbar.Collapse>
                    </Navbar>
               </div>
           </div>
          </Fragment>
        );
    }
}

export default TopNavigation;