import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';


const Header = () => {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="/"><img width="60" height="60" src="/images/logo_shop.svg" alt="" /> </Navbar.Brand>
                <Navbar.Brand href="/">ShopCase</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link target="blank_" href="https://github.com/poring931/react-paid_course-ShopCase">Репозиторий</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
