import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className='probootstrap-footer bg-dark'>
      <Container>
        <div className='row mb-5'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='col-md mb-4'>
                <h2 className='probootstrap-heading probootstrap-footer-logo'>
                  <Nav.Link to='#'>initial</Nav.Link>
                </h2>
              </div>
              <div className='col-md'>
                <div className='probootstrap-footer-widget mb-4'>
                  <h2
                    style={{ marginLeft: '2rem' }}
                    className='probootstrap-heading-2'
                  >
                    COMPANY
                  </h2>
                  <ul style={{ listStyle: 'none' }}>
                    <li>
                      <Nav.Link
                        className='py-2  d-block'
                        href='#'
                      >
                        About
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link
                        className='py-2 d-block'
                        href='#'
                      >
                        Jobs
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link
                        className='py-2 d-block'
                        href='#'
                      >
                        Press
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link
                        className='py-2 d-block'
                        href='#'
                      >
                        News
                      </Nav.Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-md'>
                <div className='probootstrap-footer-widget mb-4'>
                  <h2
                    style={{ marginLeft: '2rem' }}
                    className='probootstrap-heading-2'
                  >
                    COMMUNITIES
                  </h2>
                  <ul style={{ listStyle: 'none' }}>
                    <li>
                      <Nav.Link
                        className='py-2 d-block'
                        href='#'
                      >
                        Support
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link
                        className='py-2 d-block'
                        href='#'
                      >
                        Sharing is Caring
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link
                        className='py-2 d-block'
                        href='#'
                      >
                        Better Web
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link
                        className='py-2 d-block'
                        href='#'
                      >
                        Good Template
                      </Nav.Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-md'>
                <div className='probootstrap-footer-widget mb-4'>
                  <h2
                    style={{ marginLeft: '2rem' }}
                    className='probootstrap-heading-2'
                  >
                    USEFUL LINKS
                  </h2>
                  <ul style={{ listStyle: 'none' }}>
                    <li>
                      <Nav.Link
                        className='py-2 d-block'
                        href='#'
                      >
                        Bootstrap 4
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link
                        className='py-2 d-block'
                        href='#'
                      >
                        jQuery
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link
                        className='py-2 d-block'
                        href='#'
                      >
                        HTML5
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link
                        className='py-2 d-block'
                        href='#'
                      >
                        Sass
                      </Nav.Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='probootstrap-footer-widget mb-4'>
              <ul className='probootstrap-footer-social list-unstyled float-md-right float-lft'>
                <li>
                  <Nav.Link href='#'>
                    <FontAwesomeIcon
                      style={{ marginLeft: '1rem', marginTop: '1rem' }}
                      size='2x'
                      icon={faTwitter}
                    />
                  </Nav.Link>
                </li>
                <li>
                  {' '}
                  <Nav.Link href='#'>
                    <FontAwesomeIcon
                      style={{ marginLeft: '1rem', marginTop: '1rem' }}
                      size='2x'
                      icon={faFacebook}
                    />
                  </Nav.Link>
                </li>
                <li>
                  {' '}
                  <Nav.Link href='#'>
                    <FontAwesomeIcon
                      style={{ marginLeft: '1rem', marginTop: '1rem' }}
                      size='2x'
                      icon={faInstagram}
                    />
                  </Nav.Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='row  '>
          <div className='col-md text-left'>
            <ul className='list-unstyled footer-small-nav'>
              <li>
                {' '}
                <Nav.Link href=''>Legal</Nav.Link>{' '}
              </li>
              <li>
                <Nav.Link href=''> Privacy</Nav.Link>
              </li>
              <li>
                <Nav.Link href=''> Cookies</Nav.Link>
              </li>
              <li>
                <Nav.Link href=''>Terms</Nav.Link>
              </li>
              <li>
                <Nav.Link href=''> About</Nav.Link>
              </li>
            </ul>
          </div>
          <div className='col-md text-md-right text-left col-md-4'>
            <p>© Hakan Ünlü 2023. All Rights Reserved. </p>

            <p style={{ display: 'flex', margin: '3px' }}>
              Made with ❤️❤️❤️ by Hakan Ünlü
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
