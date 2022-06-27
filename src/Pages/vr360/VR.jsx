import React from 'react'
import Benifits from '../vr360/Benifits';
import images from '../../assets/icons/benifits/benifits.png'
import Advance from './Advance';
import Advance2 from './Advance2';
import Pictures from './Pictures';
import WhyChoose360 from './WhyChoose360';
import { Innerbanner, Readytotalk } from '../../components';

const dataList =[
  { id:"1", heading:"BENEFITS OF VR 360", peharagraph:"360° Virtual Reality (VR) Tours became a perfect marketing tool in real estate and design. It is particularly useful for those projects that are still in the development stage or under construction. Regardless of the project location or its stage of completion, a client or an investor has an opportunity not only to see how the project will look like, but also is able to walk around and feel the space. Thousands of brands have created 360 Virtual Reality Tours, including agencies, hotels, destination marketers, corporate recruiters, real estate brokers, photographers, tour operators, and restaurant owners.",images:<img src={images} alt='benifits of vr 360'/>},
];

const bannerdata = {
  img: 'vr-360-banner.jpg',
  title: "360 VIRTUAL TOURS MADE EASY.",
  text: "Create, edit, share. Upload 360/VR photos. Easily create virtual tours. Share anywhere!"
}
function VR() {
  return (
    <div>
      <Innerbanner banner={bannerdata}/>
      <Benifits data={dataList}/>
      <Advance />
      <Advance2 />
      <WhyChoose360 />
      <Pictures />
      <Readytotalk />
      
    </div>
  )
}

export default VR
