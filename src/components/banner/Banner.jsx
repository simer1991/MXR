import React from 'react'
import './banner.css'
import { Carousel } from 'react-bootstrap-v5';
import img1 from '../../assets/icons/banner/img1.jpg'
import img2 from '../../assets/icons/banner/img2.jpg'
import video from '../../assets/icons/banner/video.mov'
function Banner() {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item interval={1000}>
          <video src={video} autoPlay muted loop />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item >
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={img2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    </div>
  )
}

export default Banner

