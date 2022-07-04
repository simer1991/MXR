import React from 'react'
import { Col, Container, Row } from 'react-bootstrap-v5'
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Slider from './Slider';
import ReCAPTCHA from 'react-google-recaptcha';
import { useState } from 'react'

function Project(props) {
  const [varified, setVarified] = useState(false)
  function onChange(value) {
    console.log("Captcha value:", value);
    setVarified(true);
  }
  return (
    <div className='mxr__project mxr__section'>
      <Container>
        <h3 className='mxr__section-title'>READY TO DISCUSS YOUR PROJECT?</h3>
        <div>
          <Row>
            <Col>
              <input type="text" placeholder='First name*' required/>
            </Col>
            <Col>
              <input type="text" placeholder='Last name*' required />
            </Col>
            <Col>
              <label><FaPhoneAlt /></label>
              <input type="text" placeholder='Home phone*' required />
            </Col>
          </Row>
          <Row>
            <Col>
              <label><FaEnvelope /></label>
              <input type="email" placeholder='Email' />
            </Col>
            <Col>
              <input type="text" placeholder="Company name" />
            </Col>
          </Row>
        </div>
        <Row>
          <Col>
            <div>
              {props.form.map((data, index) => (
                <>
                  <div>
                    {data.heading}
                  </div>
                  <div>
                    {data.labels.map((list, index) => (
                      <p><input type="radio" name="project_type" value={list} /> {list}</p>
                    ))}
                  </div>
                </>
              ))}
            </div>
          </Col>
          <Col>
            <h6>Estimated Budget *</h6>
            <Slider />
            <ReCAPTCHA
              sitekey="6LczRmYgAAAAAFc5pZRi9-opvqmOw9H1BEjp7nM6"
              onChange={onChange}
            />
            <button onChange={varified}>SEND</button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Project
