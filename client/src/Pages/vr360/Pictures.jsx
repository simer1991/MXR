import React from 'react'
import { Container } from 'react-bootstrap-v5'
import pi from '../../assets/icons/pi.jpg'
import process2 from '../../assets/icons/process-web.png'
const Pictures = () => {
  return (
    <div className='mxr__pictures mxr__section '>
      <Container>
           <div className='vr-360pic'>
            <img className="mxr__process-desktop d-none d-sm-block w-100" src={pi} alt="process"/>
            <img className="mxr__process-mobile d-block d-sm-none w-100" src={process2} alt="process sm"/>
            </div>
      </Container>
    </div>
  )
}

export default Pictures
 