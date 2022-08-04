import React from 'react'
import { Col, Row } from 'react-bootstrap-v5'
import { Link } from 'react-router-dom';
import TechnologyList from '../../../src/technologydata.json'
import './technology.css';
import { Helmet } from 'react-helmet';

const Technology = () => {
  return (
    <div className="mxr__techno mxr__section">
      <Helmet>
    <title>AR, VR and MR Company in UK - MXR</title>
    <meta name="description" content="MXR is UK based software development company delivering reliable and in-budget solutions for AR, VR, MR, Web and Mobile App development to clients globally." />
   </Helmet>
      <div className='container'>
        {TechnologyList.map((lists, index) =>
          <>
            <h3 className='mxr__section-title'>{lists.title}</h3>
            <div className='mxr__section'>
              <Row>
                {lists.list.map(data => {
                  return (

                    <Col lg={3}>
                      <div className='mxr__techno-icons'>
                        <Link to={data.link}>
                          <img src={data.image} alt="mxr" />
                        </Link>
                      </div>
                    </Col>

                  )
                }

                )}

              </Row>
            </div>
          </>
        )}
      </div>
    </div >
  )
}

export default Technology
