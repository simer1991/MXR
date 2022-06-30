import React from 'react'
import { Container } from 'react-bootstrap-v5'
import pi from '../../assets/icons/pi.jpg'
const Pictures = () => {
  return (
    <div className='mxr__pictures mxr__section'>
      <Container>
        <img src={pi} alt=""  />
      </Container>
    </div>
  )
}

export default Pictures
