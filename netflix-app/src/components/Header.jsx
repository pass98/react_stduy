import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
         <Navbar expand="lg" bg='dark' variant='dark' >
      <Container fluid>
        <Navbar.Brand  className='title'  >
          <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="" width= {100} />
         
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          <Link to={"/"} className='nav-item'>Home</Link>
          <Link to={"/movies"} className='nav-item'>Movies</Link>
         </Nav>
        
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="검색"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-danger">영화검색</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  )
}

export default Header