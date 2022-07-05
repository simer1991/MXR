import React from 'react'
import './banner.css'
import { Carousel } from 'react-bootstrap-v5';
import img1 from '../../assets/icons/banner/img1.jpg'
import img2 from '../../assets/icons/banner/img2.jpg'
import video from '../../assets/icons/banner/video.mov'
import { Link } from 'react-router-dom';

function Banner() {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item interval={1000}>
          <video src={video} autoPlay muted loop />
          <Carousel.Caption>
            <h3 className='mxr__section-title'>LET US HELP YOU TO DEVELOPE THE NEXT GENERATION TRAINING EXPERIENCES (MXR)</h3>
            <Link to="/contact" className="mxr__section-btn" >CONTACT US</Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className='mxr__section-title'>EMPLOY THE SHEER POWER OF MIXED REALITY WITH MXR</h3>
            <Link to="/contact" className="mxr__section-btn" >CONTACT US</Link>
          </Carousel.Caption>
        </Carousel.Item >
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={img2}
            alt="Second slide"
          />
         <Carousel.Caption>
            <h3 className='mxr__section-title'>SCALE YOUR DEVELOPMENT WITH META EXTANDERED REALITY (MXR)</h3>
            <Link to="/contact" className="mxr__section-btn" >CONTACT US</Link>
          </Carousel.Caption>
        </Carousel.Item>
       </Carousel>
    </div>
  )
}

export default Banner

