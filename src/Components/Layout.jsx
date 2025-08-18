import { Outlet, Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import '../Css/Layout.css';



const Layout = () => {







  return (
<>

 <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
  <Container>
    <Navbar.Brand>
      <Link to="/">Home</Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={Link} to="Examenes">
          Examenes 
        </Nav.Link>
        <NavDropdown title="Setting Questions" id="collapsible-nav-dropdown">
          <NavDropdown.Item as={Link} to="Setting">
            Setting Abm
          </NavDropdown.Item>
          <NavDropdown.Item>
            Nada 1
          </NavDropdown.Item>
          <NavDropdown.Divider />
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

<Outlet />
    
</>

  )
};

export default Layout;
