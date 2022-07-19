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
            <Navbar collapseOnSelect expand="lg" bg="dark" sticky='top' variant=" white">
                <Container>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="blogs">  Blogs</Nav.Link>
                            <Nav.Link as={Link} to="healty">  Healthy </Nav.Link>
                            <Nav.Link as={Link} to="Seasional">Seasional</Nav.Link>



                        </Nav>
                        <Nav>
                            {
                                user && <Nav.Link as={Link} to="add"> Add item </Nav.Link>
                            }
                        </Nav>

                        <Nav>
                            {
                                user && <Nav.Link as={Link} to="manage">   Manage items </Nav.Link>
                            }
                        </Nav>
                        <Nav>
                            {
                                user && <Nav.Link as={Link} to="myitem">   My items </Nav.Link>
                            }
                        </Nav>

                        <Nav>

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