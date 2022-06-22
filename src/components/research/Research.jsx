import React from 'react'
import './research.css';
import { Container, Row } from 'react-bootstrap-v5';
import ReasearchImg from "../../assets/images/reasearch-innovation.png";
import img1 from "../../assets/icons/reasearch/TECHNOLOGY-RESEARCH.png";
import img2 from "../../assets/icons/reasearch/setting.png";
import img3 from "../../assets/icons/reasearch/growth.png";
import img4 from "../../assets/icons/reasearch/setttings.png";


const Research = () => {
  return (
    <div id="research" className='mxr__research'>
        <Container>
          <Row>
            <div className='col-6 mxr-reseach-secright'>
              <img src={ReasearchImg} alt="Reasearch and Innovation" className='w-100'/>
            </div>
            <div className='col-6  mxr-reseach-secright'>
              
              <h2>R&D AND INNOVATION</h2>
              <p>Any new and innovative ideas are welcomed in our organization and we will provide you the right kind of R&D service which will act as a fuel to kick start your new business objective. MXR is an organization which not only creates technological solutions but also helps & guides people who want to develop something of their own. We support and guide you throughout your innovative journey by providing tech support, R&D engineers and a team of experienced people.</p>

              <div className='row mxr__research-borders-sec text-center'>
                  <div className='col-lg-6 mxr__research-border1'>
                      <div className="mxr__research-icon">
                          <img src={img1} alt="TECHNOLOGY RESEARCH" />
                      </div>
                      <div className='mxr__research-heading'>
                        <h6>TECHNOLOGY RESEARCH</h6>
                      </div>
                  </div>
                  <div className='col-lg-6 mxr__research-border2'>
                      <div className="mxr__research-icon">
                      <img src={img2} alt="TECHNOLOGY RESEARCH" />
                      </div>
                      <div className='mxr__research-heading'>
                        <h6>POC AND PROTOTYPING</h6>
                      </div>
                  </div>
                  <div className='col-lg-6 mxr__research-border3'>
                      <div className="mxr__research-icon">
                      <img src={img3} alt="TECHNOLOGY RESEARCH" />
                      </div>
                      <div className='mxr__research-heading'>
                        <h6>FULL CYCLE R&D</h6>
                      </div>

                  </div>
                  <div className='col-lg-6 mxr__research-border4'>
                      <div className="mxr__research-icon">
                      <img src={img4} alt="TECHNOLOGY RESEARCH" />
                      </div>
                      <div className='mxr__research-heading'>
                        <h6>MVP DEVELOPMENT</h6>
                      </div>
                  </div>
              </div>
            </div>
          </Row>
        </Container>
    </div>
  )
}

export default Research
