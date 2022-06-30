import React from 'react'
import { Container } from 'react-bootstrap-v5'
import unity from '../../assets/icons/platform/unity.png'

const Platform = () => {
  return (
    <div className='mxr__platform mxr__section'>
      <Container>
        <h3 className='mxr__section-title'>BUILD ONCE DEPLOY MULTIPLE PLATFORMS</h3>
        <img src={unity} alt="unity"/>
      </Container>
    </div>
  )
}

export default Platform
