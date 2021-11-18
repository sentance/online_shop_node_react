import React from 'react';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {NavLink, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/constants";

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    return (
       <Container className="d-flex justify-content-center align-items-center"
        style={{height: window.innerHeight - 54}}
       >
           <Card style={{width: 600}} className="p-5">
               <h2 className="m-auto">{isLogin ?  "Authorization" : "Registration"}</h2>
               <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="enter your email..."
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="enter your password..."
                    />
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        {!isLogin ?
                            <div>
                                <NavLink to={LOGIN_ROUTE}>Login</NavLink>
                            </div>
                            :
                            <div>
                                <NavLink to={REGISTRATION_ROUTE}>Registration</NavLink>
                            </div>
                        }
                    </Row>
                   <Button
                       className="mt-3 align-self-end"
                       variant="outline-success"
                   >
                       {!isLogin ? "Register" : "Login"}
                   </Button>
               </Form>
           </Card>

       </Container>
    );
};

export default Auth;