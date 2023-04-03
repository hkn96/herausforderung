import React from 'react';
import { Container } from 'react-bootstrap';

const WorkTogether = () => {
  return (
    <section className='mb-5 mt-5'>
      <Container>
        <div className='row mb-5 mt-5'>
          <div className='col-md-12'>
            <div className='border p-5'>
              <div className='row'>
                <div className='col-md-4'>
                  <h4>Let's Work Together</h4>
                  <h4>Get Started</h4>
                </div>
                <div className='col-md-7'>
                  <p className='mb-4'>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean.
                  </p>
                  <p>
                    <a
                      href='https://uicookies.com/'
                      className='btn  btn-primary'
                    >
                      GET IN TOUCH
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WorkTogether;
