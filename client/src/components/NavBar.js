import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {NavLink, useNavigate} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/constants";
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    return (

            <Navbar bg="secondary" expand="lg">
                <Container>
                    <NavLink to={SHOP_ROUTE} style={{color: "whitesmoke"}}>Online Shop</NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" style={{color: 'black'}}/>
                    {user.isAuth ?
                        <Nav className="ml-auto">
                            <Button variant="outline-light" onClick={()=>navigate(ADMIN_ROUTE)}>Admin</Button>
                            <Button style={{marginLeft: 20}} variant="outline-light" onClick={()=>navigate(LOGIN_ROUTE)}> Logout</Button>
                        </Nav>
                        :
                        <Nav className="ml-auto">
                            <Button variant="outline-light"  onClick={()=>navigate(LOGIN_ROUTE)}> Login</Button>
                        </Nav>
                    }
                </Container>
            </Navbar>

    );
});

export default NavBar;