import React from 'react';
import  { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../logo.svg';

const Styles = styled.div `
    a {
        color: white;
        margin-right: 10px;
    }
`

export default function NaviBar() {
    return (
        <Navbar bg="primary">
            <Container>
            <Navbar.Brand>
                <img
                    alt=""
                    src={logo}
                    height="30px"
                />
            </Navbar.Brand>
            
            <Nav className="mr-auto">
                <Styles>
                    <Link to="/espc">ЭСПЦ</Link>
                    <Link to="/pc">ПЦ</Link>                
                </Styles>
            </Nav>
            
            <Nav>
                <Button variant="outline-light">Вход</Button>
            </Nav>
            </Container>
        </Navbar>
    )
}