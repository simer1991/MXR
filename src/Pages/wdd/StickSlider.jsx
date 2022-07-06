import React from 'react'
import './stickslider.css'
import { Container,Nav } from 'react-bootstrap-v5'
import {FaFacebook,FaTwitter,FaInstagram,FaLinkedin,FaGithub,FaYoutube} from 'react-icons/fa'
import { Link } from 'react-router-dom';

const StickSlider = () => {
  return (
    <div>
      <Container>
        <Nav>
              <ul>
                <li>
                    <Link><FaFacebook /></Link>
                </li>
                <li>
                    <Link><FaTwitter /></Link>
                </li>
                <li>
                    <Link><FaInstagram /></Link>
                </li>
                <li>
                    <Link><FaLinkedin /></Link>
                </li>
                <li>
                    <Link><FaGithub /></Link>
                </li>
                <li>
                    <Link><FaYoutube /></Link>
                </li>
              </ul>
        </Nav>
      </Container>
    </div>
  )
}

export default StickSlider
