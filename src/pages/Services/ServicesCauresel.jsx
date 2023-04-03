import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Card } from 'react-bootstrap';
import img1 from '../../assets/images/img_1.jpg';
import img2 from '../../assets/images/img_2.jpg';
import img3 from '../../assets/images/img_3.jpg';

const ServicesCauresel = () => {
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
    <div className='row mb-5 mt-5'>
      <div className='col-md-4'>
        <h2
          style={{ lineHeight: 1.45, fontWeight: 'normal', color: ' #000' }}
          className='h1 mb-2 mt-0'
        >
          The Services
        </h2>
        <h2
          style={{
            lineHeight: 1.45,
            fontWeight: 'normal',
            color: '  #6dc234 ',
          }}
          className='h1 mb-5 mt-0'
        >
          Images
        </h2>
        <div className='col-md-2'></div>
      </div>
      <div className='col-md-6'>
        <p className='lead'>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
      </div>
      <Carousel
        infinite={true}
        responsive={responsive}
        showDots={true}
        itemClass='carousel-item-padding-40-px'
      >
        <div>
          <Card style={{ width: '26rem' }}>
            <Card.Img src={img1} />
            <Card.Body>
              <Card.Title>Service Title Here</Card.Title>
              <Card.Text>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: '26rem' }}>
            <Card.Img
              variant='top'
              src={img2}
            />
            <Card.Body>
              <Card.Title>Service Title Here</Card.Title>
              <Card.Text>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: '26rem' }}>
            <Card.Img
              variant='top'
              src={img3}
            />
            <Card.Body>
              <Card.Title>Service Title Here</Card.Title>
              <Card.Text>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Carousel>
    </div>
  );
};

export default ServicesCauresel;
