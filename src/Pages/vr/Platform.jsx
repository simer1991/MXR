import React from 'react'
import { Container } from 'react-bootstrap-v5'
import unity from '../../assets/icons/platform/unity.png'

const Platform = () => {
  return (
    <div>
      <Container>
        <h3>BUILD ONCE DEPLOY MULTIPLE PLATFORMS</h3>
        <img src={unity} alt="unity"/>
      </Container>
    </div>
  )
}

export default Platform
