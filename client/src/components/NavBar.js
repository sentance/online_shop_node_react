import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {SHOP_ROUTE} from "../utils/constants";
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    return (

            <Navbar bg="secondary" expand="lg">
                <Container>
                    <NavLink to={SHOP_ROUTE} style={{color: "whitesmoke"}}>Online Shop</NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" style={{color: 'black'}}/>
                    {user.isAuth ?
                        <Nav className="ml-auto">
                            <Button variant="outline-light">Admin</Button>
                            <Button style={{marginLeft: 20}} variant="outline-light" onClick={()=>user.setIsAuth(!user.isAuth)}> Logout</Button>
                        </Nav>
                        :
                        <Nav className="ml-auto">
                            <Button variant="outline-light"  onClick={()=>user.setIsAuth(!user.isAuth)}> Login</Button>
                        </Nav>
                    }
                </Container>
            </Navbar>

    );
});

export default NavBar;