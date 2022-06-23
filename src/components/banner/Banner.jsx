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
        <Carousel.Item interval={100}>
        <video src={video} autoPlay muted loop />
          <Carousel.Caption>
            <h3>LET US HELP YOU TO DEVELOPE THE NEXT GENERATION TRAINING EXPERIENCES (MXR)</h3>
            <button>CONTACT US</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={100}>
          <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>EMPLOY THE SHEER POWER OF MIXED REALITY WITH MXR</h3>
            <button>CONTACT US</button>
          </Carousel.Caption>
        </Carousel.Item >
        <Carousel.Item interval={100}>
          <img
            className="d-block w-100"
            src={img2}
            alt="Second slide"
          />
         <Carousel.Caption>
            <h3>SCALE YOUR DEVELOPMENT WITH META EXTANDERED REALITY (MXR)</h3>
            <button>CONTACT US</button>
          </Carousel.Caption>
        </Carousel.Item>
       </Carousel>
    </div>
  )
}

export default Banner

