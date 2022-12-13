import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/lygi.web/public/">
            <img
              alt=''
              src='http://localhost/lygi.web/resources/images/logo.svg'
              width='100'
              height='60'
              className='d-inline-block align-top' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll>
              <Nav.Link as={Link} to="/lygi.web/public/">Home</Nav.Link>
              <Nav.Link as={Link} to="/lygi.web/public/cars/">Cars</Nav.Link>
              <Nav.Link as={Link} to="/lygi.web/public/motorcycles">Motorcycles</Nav.Link>
              <Nav.Link as={Link} to="/lygi.web/public/planes">Planes</Nav.Link>
              <Nav.Link as={Link} to="/lygi.web/public/ships">Ships</Nav.Link>
              <Nav.Link as={Link} to="/lygi.web/public/trains">Trains</Nav.Link>
              <Nav.Link as={Link} to="/lygi.web/public/trucks">Trucks</Nav.Link>
              <Nav.Link as={Link} to="/lygi.web/public/vintage">Vintage</Nav.Link>
              <Nav.Link as={Link} to="/lygi.web/public/register">Register</Nav.Link>
              <Nav.Link as={Link} to="/lygi.web/public/login">Login</Nav.Link>
              <Nav.Link as={Link} to="/lygi.web/public/cart">Cart</Nav.Link>
              <Nav.Link as={Link} to="/lygi.web/public/checkout">Checkout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section>
        <Outlet></Outlet>
      </section>
    </>
  );
}

export default NavBar;
