import React from 'react';
import './stats.css'
import videoBg from "../../assets/videos/stats-sec.m4v"
import {FaThumbsUp} from 'react-icons/fa';
const Stats = () => {
  return (
    <div className='mxr__stats'>
      <div className='mxr__stats-video'>
        <video src={videoBg} autoPlay muted loop />
      </div>
      <div className='mxr__stats-numbers'>
        <div className='container'>
          <div className='row'>
              <div className='col-md-3 mxr__stats-number-sec'>
                  <div className='d-flex'>
                    <div  className="mxr__stats-number-icon">
                      <FaThumbsUp size={70} />
                    </div>
                    <div  className="mxr__stats-number-txt">
                      <h3 className='fw-bold'>10+</h3>
                      <h4>YEARS IN BUSINESS</h4>
                    </div>
                  </div>
              </div>
              <div className='col-md-3 mxr__stats-number-sec'>
              <div className='d-flex'>
                    <div className="mxr__stats-number-icon"><FaThumbsUp  size={70} /></div>
                    <div className="mxr__stats-number-txt">
                      <h3 className='fw-bold'>10+</h3>
                      <h4>YEARS IN BUSINESS</h4>
                    </div>
                  </div>
              </div>
              <div className='col-md-3 mxr__stats-number-sec'>
                <div className='d-flex'>
                    <div className="mxr__stats-number-icon"><FaThumbsUp size={70}/></div>
                    <div  className="mxr__stats-number-txt">
                      <h3  className='fw-bold'>10+</h3>
                      <h4>YEARS IN BUSINESS</h4>
                    </div>
                  </div>
              </div>
              <div className='col-md-3 mxr__stats-number-sec'>
              <div className='d-flex'>
                    <div className="mxr__stats-number-icon"><FaThumbsUp size={70}/></div>
                    <div  className="mxr__stats-number-txt">
                      <h3 className='fw-bold'>10+</h3>
                      <h4>YEARS IN BUSINESS</h4>
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
