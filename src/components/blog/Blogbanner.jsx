import React from 'react'

import styled from "styled-components";


const Outerdiv = styled.div`
  background-image: url('assets/images/Innerbanner/${props => props.$banner}');  
  `;
const Blogbanner = (props) => {
  return (
    <div className='internal_page_banner blog_banner' >
    <Outerdiv $banner={props.banner.img} >
    </Outerdiv >
  </div >
  )
}

export default Blogbanner
 