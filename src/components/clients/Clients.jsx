import { Container, Row, Col, Carousel } from 'react-bootstrap-v5'
import './clients.css'
import { testmonials } from "../../testmonials";
import clutch from '../../assets/icons/clients/clutch.jpg';
import google from '../../assets/icons/clients/google.jpg';
import good from '../../assets/icons/clients/good.jpg';
import top from '../../assets/icons/clients/top.jpg';
import reviewpphn from '../../assets/icons/clients/review-pphn.jpg';
const Clients = () => {
  return (
    <div className='mxr__clients'>
      <Container>
        <Row>
          <Col sm={12} lg={6} md={6}>
            <h3 className='mxr__section-title'>OVER 900+ SATISFIED CLIENTS</h3>
            <div className='mxr__clients-desktop d-none d-sm-block w-100'>
              <Row>
                <Col sm={12} lg={6} md={6}>
                  <img src={clutch} alt="clutch" />
                </Col>
                <Col sm={12} lg={6} md={6}>
                  <img src={google} alt="google" />
                </Col>
              </Row>
              <Row>
                <Col sm={12} lg={6} md={6}>
                  <img src={good} alt="good" />
                </Col>
                <Col sm={12} lg={6} md={6}>
                  <img src={top} alt="top" />
                </Col>
              </Row>
            </div>
            <div className='mxr__clients-mobile d-block d-sm-none w-100'>
              <img src={reviewpphn} alt="review" />
            </div>
          </Col>
          <Col sm={12} lg={6} md={6}>
            <Carousel variant='dark'>
              {testmonials.map((testi, index) => (

                <Carousel.Item>
                  <img
                    className="d-block "
                    src={require(`../../assets/icons/clients/${testi.image}`)}
                    alt="clutch"
                  />
                  <Carousel.Caption>
                    <h3>{testi.name}</h3>
                    <p>{testi.text}</p>
                  </Carousel.Caption>
                </Carousel.Item>

              ))}

            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Clients
