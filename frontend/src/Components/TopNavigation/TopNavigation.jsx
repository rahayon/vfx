import React, { Component, Fragment } from 'react';
<<<<<<< HEAD
import {Nav, Navbar, Form, FormControl,NavDropdown,Button, NavLink} from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../mystyle.scss';
import Hover from './Hover'
import { FaSearch } from 'react-icons/fa';
import Logo from '../../images/logo.png';
=======
import {Nav, Navbar, Form, FormControl,NavDropdown,Button} from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
>>>>>>> 11f0e29474116e03fdd58021ee63932fe905b425

class TopNavigation extends Component {

    render() {
        return (
          <Fragment>
           <div className="main_div">
<<<<<<< HEAD
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
=======
               <div className="container-fluid">
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand to="/">demo site</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link to="#home">Home</Nav.Link>
                        <Nav.Link to="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item to="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item to="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item to="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item to="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                        <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                        </Form>
>>>>>>> 11f0e29474116e03fdd58021ee63932fe905b425
                    </Navbar.Collapse>
                    </Navbar>
               </div>
           </div>
          </Fragment>
        );
    }
}

export default TopNavigation;