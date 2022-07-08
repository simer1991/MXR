import React from 'react'
import { Container, Row,Col} from 'react-bootstrap-v5'
import {FaDesktop,FaImage,FaTv,FaSun} from 'react-icons/fa'

const Capabilities = () => {
  return (
    <div className='mxr__capabilities mxr__section mxr__whychoose'>
        <Container>
        <h3 className='mxr__section-title'>OUR APP CAPABILITIES</h3>
        <Row>
          <Col md={6} sm={12}>
            <div className='icon_leftside' ><FaDesktop size={30} /></div>
            <div>
                <h5>SCENE DETECTION</h5>
                <p>Our AR apps scan real life surroundings with the camera lens, perceive gathered data as an image on a coordinate plane, and translate it into a depth map to ensure realistic 3D model placement.</p>
            </div>
          </Col>
          <Col md={6} sm={12}>
          <div className='icon_leftside'>
             <FaImage size={30} />
          </div>
          <div>
            <h5>IMAGE AND OBJECT RECOGNITION</h5>
            <p>Along with scene understanding, our AR apps can be trained to recognize specific 2D images and 3D real life objects and augment them with the relevant text or model data on the device screen.</p>
          </div>
          </Col>
        </Row>
        <Row>
            <Col md={6} sm={12}>
            <div className='icon_leftside'>
               <FaTv size={30} />
            </div>
            <div>
                <h5>MOTION TRACKING</h5>
                <p>Common for all smartphones and tablets, GPS, gyroscope, and accelerometer allow our AR apps dynamically resize and calibrate augmentations on the screen as you and your device move around.</p>
            </div>
            </Col>
            <Col md={6} sm={12}>
               <div className='icon_leftside'>
                  <FaSun size={30} />
               </div>
               <div>
                <h5>LIGHT ESTIMATION</h5>
                <p>With the help of smart light estimation algorithms, our AR apps can automatically adjust the lighting of the 3D model to naturally match that of the scene in the camera lens.</p>
               </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Capabilities
