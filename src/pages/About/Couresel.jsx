import React from 'react';
import { Card, Container } from 'react-bootstrap';
import person1 from '../../assets/images/person_1.jpg';
import person2 from '../../assets/images/person_2.jpg';
import person3 from '../../assets/images/person_3.jpg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Couresel = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Container>
      <Carousel
        infinite={true}
        responsive={responsive}
        showDots={true}
        itemClass='carousel-item-padding-40-px'
        dotListClass='custom-dot-list-style'
        containerClass='carousel-container'
      >
        <div>
          <Card
            style={{
              width: '26rem',
              backgroundColor: 'white',
              padding: '10px',
            }}
          >
            <Card.Img src={person1} />
            <Card.Body>
              <Card.Title>Peter Wood</Card.Title>
              <Card.Text>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card
            style={{
              width: '26rem',
              backgroundColor: 'white',
              padding: '10px',
            }}
          >
            <Card.Img
              variant='top'
              src={person2}
            />
            <Card.Body>
              <Card.Title>James Carl</Card.Title>
              <Card.Text>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card
            style={{
              width: '26rem',
              backgroundColor: 'white',
              padding: '10px',
            }}
          >
            <Card.Img
              variant='top'
              src={person3}
            />
            <Card.Body>
              <Card.Title>Craig Smith</Card.Title>
              <Card.Text>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Carousel>
    </Container>
  );
};

export default Couresel;
