import React from 'react';
import { Container } from 'react-bootstrap';
import bg1 from '../../assets/images/bg_1.jpg';

const Subscribe = () => {
  return (
    <section
      className='bg-image probootstrap-cover overlay'
      style={{
        backgroundImage: `url(${bg1} )`,
      }}
    >
      <Container>
        <div className='row align-items-center justify-content-center text-center probootstrap-vh-75'>
          <div className='col-md-12'>
            <h2 className='mb-2 '>Subscribe To Download</h2>
            <h3 className='mb-2'>
              A free template by
              <span style={{ color: '#fff', marginLeft: '10px' }}>
                uicookies.com
              </span>
            </h3>
            <p className='mt-5'>
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
  );
};

export default Subscribe;
