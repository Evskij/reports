import React, {useState} from 'react';
import  { Navbar, Nav, NavDropdown, Button, Container, Modal, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import logo from '../logo.svg';

export default function NaviBar() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src={logo}
                        height="30px"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title="Отчёты ЭСПЦ" id="collasible-nav-dropdown">
                        <NavDropdown.Item><Link to="/scraplog">УПП учёт лома</Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">УПП отчёт по смене</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">УВиВОС отчёт по смене</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Отчёты ПЦ" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Отчёт 1</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Отчёт 2</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Отчёт 3</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Отчёт 4</NavDropdown.Item>
                    </NavDropdown>  
                </Nav>
                <Nav>
                    <Button type="submit" onClick={handleShow}>Войти</Button>
                </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Войти в систему</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Введите адрес эектронной почты" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Введите пароль" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Запонить меня" />
                    </Form.Group>
                </Form>
    
                </Modal.Body> 
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Закрыть</Button>
                    <Button variant="primary">Войти</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}