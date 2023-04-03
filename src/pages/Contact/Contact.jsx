import React from 'react';
import GetInTouch from './GetInTouch';
import { Container } from 'react-bootstrap';
import ContactFrom from './ContactFrom';
import Subscribe from '../About/Subscribe';
import WorkTogether from '../About/WorkTogether';

const Contact = () => {
  return (
    <section className='probootstrap-section'>
      <Container>
        <GetInTouch />
        <ContactFrom />
        <Subscribe />
        <WorkTogether />
      </Container>
    </section>
  );
};

export default Contact;
