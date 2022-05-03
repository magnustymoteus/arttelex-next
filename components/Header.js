import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import Logo from '../public/images/logo.svg';
import Link from 'next/link'
import Image from 'next/image';

const Header = (props) => {
    const isPage = (pageName) => {
        return props.page===pageName;
    }
    return (
        <header>
            <section className="section" id="section-title">
                <Image src={Logo} alt="Art Telex Logo" id="header-logo"/>
                <h1 className="display-1" data-aos="zoom-in">a space of visual art</h1>
            </section>
        <Navbar expand="md" className="container-fluid navbar-dark justify-content-center">
        <Nav>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Link href="/" passHref><Nav.Link disabled={isPage("home")} active={isPage("home")}>artTelex</Nav.Link></Link>
                <NavDropdown title="Expositions">
                <Link href="/upcoming" passHref><NavDropdown.Item disabled={isPage("upcoming")} active={isPage("upcoming")}>upcoming</NavDropdown.Item></Link>
                <Link href="/archived" passHref><NavDropdown.Item disabled={isPage("archived")} active={isPage("archived")}>archived</NavDropdown.Item></Link>
                </NavDropdown>
                <Link href="/contact" passHref><Nav.Link disabled={isPage("contact")} active={isPage("contact")}>contact</Nav.Link></Link>
            </Navbar.Collapse>
            </Nav>
        </Navbar>
        </header>
    );
}
export default Header;