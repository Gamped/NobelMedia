import React from "react";
import { Navbar, Nav, NavDropdown} from "react-bootstrap";
import logo from "../../Media/NewLogo.svg";

// This is the navigation bar, using Bootstrap
const NavBar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    /> {'  '}
                    Nobel Media
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/remote">Remote</Nav.Link>
                        <NavDropdown title="Music" id="basic-nav-dropdown" variant="secondary">
                            <NavDropdown.Item href="/music/queue">Current queue</NavDropdown.Item>
                            <NavDropdown.Item href="/music/queue-song">Add to queue</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/login">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar;