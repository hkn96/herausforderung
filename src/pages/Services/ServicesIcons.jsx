import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faThumbsUp,
  faWrench,
  faUser,
  faPaperPlane,
  faDesktop,
  faPencil,
} from '@fortawesome/free-solid-svg-icons';

const ServicesIcons = () => {
  return (
    <Container>
      <div className='row mb-5 mt-5'>
        <div className='col-md-4 '>
          <h2 className='h1 mb-2 '>The Services</h2>
          <h2
            style={{
              lineHeight: 1.45,
              fontWeight: 'normal',
              color: '  #6dc234 ',
            }}
            className='h1 mb-5 mt-0'
          >
            Icons
          </h2>
          <div className='col-md-2'></div>
        </div>
        <div className='col-md-6'>
          <p className='lead'>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-4 col-md-6  mb-3 '>
          <Card style={{ width: '24rem' }}>
            <div className='probootstrap-icon mb-3 '>
              <span className='oi oi-thumb-up display-4'>
                <FontAwesomeIcon
                  style={{ color: '#6dc234', marginLeft: '15px' }}
                  icon={faThumbsUp}
                />
              </span>
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
              <span className='oi oi-thumb-up display-4'>
                <FontAwesomeIcon
                  style={{ color: '#6dc234', marginLeft: '15px' }}
                  icon={faWrench}
                />
              </span>
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
              <span className='oi oi-thumb-up display-4'>
                <FontAwesomeIcon
                  style={{ color: '#6dc234', marginLeft: '15px' }}
                  icon={faUser}
                />
              </span>
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
              <span className='oi oi-thumb-up display-4'>
                <FontAwesomeIcon
                  style={{ color: '#6dc234', marginLeft: '15px' }}
                  icon={faPaperPlane}
                />
              </span>
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
              <span className='oi oi-thumb-up display-4'>
                <FontAwesomeIcon
                  style={{ color: '#6dc234', marginLeft: '15px' }}
                  icon={faDesktop}
                />
              </span>
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
        <div
          className='col-lg-4 col-md-6 mb-3 '
          style={{ heigth: '24rem' }}
        >
          <Card>
            <div className='probootstrap-icon mb-3'>
              <span className='oi oi-thumb-up display-4'>
                <FontAwesomeIcon
                  style={{ color: '#6dc234', marginLeft: '15px' }}
                  icon={faPencil}
                />
              </span>
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

export default ServicesIcons;
