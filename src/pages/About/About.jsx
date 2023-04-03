import React from 'react';
import { Container } from 'react-bootstrap';

import OurServices from './OurServices';
import WorkTogether from './WorkTogether';
import Couresel from './Couresel';

const About = () => {
  return (
    <section className='probootstrap-section'>
      <Container>
        <div className='row mb-5'>
          <div className='col-md-4'>
            <h2 className='h1 mb-5 mt-0'>The Team</h2>
            <div className='col-md-2'></div>
          </div>
          <div className='col-md-6'>
            <p className='lead'>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
        </div>
        <div className='row mb-5'>
          <div className='col-md-12'>
            <Couresel />
          </div>
        </div>
        <OurServices />
        <WorkTogether />
      </Container>
    </section>
  );
};

export default About;
