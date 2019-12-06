import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import NextHead from "next/head";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

export default function LayoutLogout(props) {
    return (
        <>
            <NextHead>
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                    crossOrigin="anonymous"
                />
            </NextHead>
            <Navbar bg="dark" variant="dark" expand="lg" className="layout__navbar">
                <Link href="/">
                    <a>
                        <Navbar.Brand className="layout__brand">Noroff Javascript Frameworks CA</Navbar.Brand>
                    </a>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link href="/">
                            <a className="layout__link">
                                <Nav.Link as="span" className="layout__linktext">Register</Nav.Link>
                            </a>
                        </Link>
                        <Link href="/login">
                            <a className="layout__link">
                                <Nav.Link as="span" className="layout__linktext">Login</Nav.Link>
                            </a>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Container>{props.children}</Container>
        </>
    );
}

LayoutLogout.propTypes = {
    children: PropTypes.node.isRequired,
};