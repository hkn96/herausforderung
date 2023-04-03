import React from 'react';
import { Container } from 'react-bootstrap';
import Cauresel from '../About/Couresel';
import ServicesHome from './ServicesHome';
import Subscribe from '../About/Subscribe';
import WorkTogether from '../About/WorkTogether';

const Home = () => {
  return (
    <section className='probootstrap-section'>
      <Container>
        <Cauresel />
        <ServicesHome />
        <Subscribe />
        <WorkTogether />
      </Container>
    </section>
  );
};

export default Home;
