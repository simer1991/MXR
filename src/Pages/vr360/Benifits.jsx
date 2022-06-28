import React from 'react'
import {Row,Col} from 'react-bootstrap-v5';

function Benifits(props){
  return (
   <div className='mxr__benifits mxr__section'>
    {props.data.map((list,index)=>(
      <>
        <Row>
        <Col>
        {list.images}  
        </Col>
        <Col>
        <h3 className='mxr__section-title'>{list.heading}</h3>
        {list.pharagraphs.map((read,index)=>(
          <p>{read}</p>
        ))}
        </Col>
        </Row>
      </>
    ))}
 </div>
  )
}


export default Benifits
