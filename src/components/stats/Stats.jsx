import React from 'react';
import './stats.css'
import videoBg from "../../assets/videos/stats-sec.m4v"
import increse from '../../assets/icons/stats/incrrease-2.png'
import thumb from '../../assets/icons/stats/thmbs-2.png'
import star from '../../assets/icons/stats/star-2.png'
import hands from '../../assets/icons/stats/hands-3.png'
const Stats = () => {
  return (
    <div className='mxr__stats mxr__section'>
      <div className='mxr__stats-video'>
        <video src={videoBg} autoPlay muted loop />
      </div>
      <div className='mxr__stats-numbers'>
        <div className='container'>
          <div className='row'>
              <div className='col-md-3 col-sm-6 col-lg-3 mxr__stats-number-sec'>
                  <div className='d-flex'>
                    <div  className="mxr__stats-number-icon">
                      <img src={increse} alt="increase"/>
                    </div>
                    <div  className="mxr__stats-number-txt">
                      <h3 className='fw-bold'>10+</h3>
                      <h4>YEARS IN BUSINESS</h4>
                    </div>
                  </div>
              </div>
              <div className='col-md-3 col-sm-6 col-lg-3 mxr__stats-number-sec'>
              <div className='d-flex'>
                    <div className="mxr__stats-number-icon"><img src={thumb} alt="thumb"/></div>
                    <div className="mxr__stats-number-txt">
                      <h3 className='fw-bold'>1200+</h3>
                      <h4>SOLUTIONS DELIVERED</h4>
                    </div>
                  </div>
              </div>
              <div className='col-md-3 col-sm-6 col-lg-3 mxr__stats-number-sec'>
                <div className='d-flex'>
                    <div className="mxr__stats-number-icon"><img src={star} alt="star"/></div>
                    <div  className="mxr__stats-number-txt">
                      <h3  className='fw-bold'>150+</h3>
                      <h4>TECHNOLOGY EXPERTS</h4>
                    </div>
                  </div>
              </div>
              <div className='col-md-3 col-sm-6 col-lg-3 mxr__stats-number-sec'>
              <div className='d-flex'>
                    <div className="mxr__stats-number-icon"><img src={hands} alt="hands"/></div>
                    <div  className="mxr__stats-number-txt">
                      <h3 className='fw-bold'>$50M+</h3>
                      <h4>BUSINESS DELIVERED</h4>
                    </div>
                  </div>
              </div>
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default Stats
