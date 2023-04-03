import React, { useEffect, useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import bg1 from '../assets/images/bg_1.jpg';
import '../App.css';
import { useLocation } from 'react-router-dom';

const Header = () => {
  let location = useLocation();
  let pathName = location.pathname;
  const [text, setText] = useState('');
  useEffect(() => {
    if (pathName === '/') {
      setText('Create Good Free Templates');
    }
    if (pathName === '/about') {
      setText('A Good Company');
    }
    if (pathName === '/services') {
      setText('A Good Services');
    }
    if (pathName === '/contact') {
      setText('A Good Contact');
    }
  }, [pathName]);
  return (
    <section>
      <Navbar
        className='navbar navbar-expand-lg navbar-dark bg-dark probootstrap-navabr-dark'
        expand='lg'
        bg='dark'
        variant='dark'
      >
        <Container>
          <Navbar.Brand
            className='navbar-brand'
            href='/'
          >
            INITIAL
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'></Nav>
            <Nav>
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='about'>About</Nav.Link>
              <Nav.Link href='services'>Services</Nav.Link>
              <Nav.Link href='contact'>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section
        className='probootstrap-cover overlay'
        style={{ backgroundImage: `url(${bg1} )` }}
      >
        <Container>
          <div className='row align-items-center justify-content-center text-center probootstrap-vh-100'>
            <div className='col-md-8'>
              <h1 className='probootstrap-heading'>{text}</h1>
              <h2 className='h3 probootstrap-subheading mb-5'>
                A free template by{' '}
                <a
                  style={{ textDecoration: 'none' }}
                  href='uicookies.com'
                >
                  uicookies.com
                </a>
              </h2>

              <p>
                <a
                  href='https://uicookies.com/'
                  className='btn  btn-primary'
                >
                  GET STARTED
                </a>
              </p>
            </div>
          </div>
        </Container>
      </section>
    </section>
  );
};

export default Header;
