import React from 'react';
import { Container, Card } from 'react-bootstrap';

const ServicesHome = () => {
  return (
    <Container>
      <div className='row mb-5 mt-5'>
        <div className='col-md-4 '>
          <h3 className=' mb-5 '>Move Forward. Create Beautiful Templates.</h3>
          <div className='col-md-2'></div>
        </div>
        <div className='col-md-6'>
          <p className='lead'>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-4 col-md-6  mb-3 '>
          <Card style={{ width: '24rem' }}>
            <div className='probootstrap-icon mb-3'>
              <span className='oi oi-thumb-up display-4'>❤️</span>
            </div>
            <Card.Body>
              <Card.Title>Free Bootstrap 4</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='col-lg-4 col-md-6  mb-3 '>
          <Card style={{ width: '24rem' }}>
            <div className='probootstrap-icon mb-3'>
              <span className='oi oi-thumb-up display-4'>❤️</span>
            </div>
            <Card.Body>
              <Card.Title>Web Development</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='col-lg-4 col-md-6  mb-3 '>
          <Card style={{ width: '24rem' }}>
            <div className='probootstrap-icon mb-3'>
              <span className='oi oi-thumb-up display-4'>❤️</span>
            </div>
            <Card.Body>
              <Card.Title>For People Like You</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='col-lg-4 col-md-6  mb-3 '>
          <Card style={{ width: '24rem' }}>
            <div className='probootstrap-icon mb-3'>
              <span className='oi oi-thumb-up display-4'>❤️</span>
            </div>
            <Card.Body>
              <Card.Title>Free Bootstrap 4</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='col-lg-4 col-md-6  mb-3 '>
          <Card style={{ width: '24rem' }}>
            <div className='probootstrap-icon mb-3'>
              <span className='oi oi-thumb-up display-4'>❤️</span>
            </div>
            <Card.Body>
              <Card.Title>Web Development</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='col-lg-4 col-md-6 mb-3 '>
          <Card style={{ width: '24rem' }}>
            <div className='probootstrap-icon mb-3'>
              <span className='oi oi-thumb-up display-4'>❤️</span>
            </div>
            <Card.Body>
              <Card.Title>For People Like You</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default ServicesHome;
