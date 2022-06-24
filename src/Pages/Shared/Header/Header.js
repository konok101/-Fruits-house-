import { signOut } from 'firebase/auth';
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="primary" sticky='top' variant="dark">
                <Container>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/"> <h5> Home</h5></Nav.Link>
                            <Nav.Link href="#Shop"><h5>Shop</h5></Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="about">  About</Nav.Link>
                            {
                                user ? <button onClick={handleSignOut} >Signout</button>
                                    :
                                    <Nav.Link as={Link} to="login">
                                        Login
                                    </Nav.Link>
                            }



                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;