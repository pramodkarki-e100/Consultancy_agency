import React from 'react';
import './Navbar.css';
import { HashLink as Link } from 'react-router-hash-link';

import { Navbar, Nav, Button, Container, Row, Col } from 'react-bootstrap';

const NavbarComponent = () => {
  return (
    <Navbar expand='lg' className='navbar'>
      <Navbar.Brand className='logo' href='#home'>
        Educational <span className='logo-span'>Consultancy</span>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse
        id='basic-navbar-nav'
        className='justify-content-md-center'
      >
        <Container>
          <Row className='main__head justify-content-md-end'>
            <Col xs lg='auto'>
              <i class='fas fa-phone-volume'></i>
              <span className='contact__info'>
                Contact Us: +977-983127984
              </span>{' '}
              (Sum-Fri)
            </Col>
            <Col md='auto'>
              <i class='fas fa-envelope-open-text'></i>
              <span className='contact__info'>Hire Us</span>
            </Col>
            <Col xs lg='4'>
              <i class='fas fa-map-marked-alt'></i>
              <span className='contact__info'>Our Address</span>
            </Col>
          </Row>

          <Row className='nav__link'>
            <Col className='navbar__link'>
              <Nav>
                <Link smooth to='#home'>
                  Home
                </Link>
                <Link smooth to='#about'>
                  About Us
                </Link>
                <Link smooth to='#service'>
                  Services
                </Link>
                <Link smooth to='#testimonials'>
                  Testimonials
                </Link>
                <Link smooth to='#  blogs'>
                  Blogs
                </Link>
                <Link smooth to='#contact'>
                  Contact Us
                </Link>
              </Nav>
              <Link smooth to='#contact'>
                <Button className='btn-primary'>Get a quote now</Button>
              </Link>
            </Col>
          </Row>
        </Container>

        {/* <div className='call row'></div> */}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
