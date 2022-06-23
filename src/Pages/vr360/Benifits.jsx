import React from 'react'
import {Row,Col} from 'react-bootstrap-v5';

function Benifits(props){
  return (
   <div>
    {props.data.map(list=>(
      <div>
        <Row>
        <Col>
        {list.images}  
        </Col>
        <Col>
        <h2>{list.heading}</h2>
        <p>{list.peharagraph}</p>
        </Col>
        </Row>
      </div>
    ))}
 </div>
  )
}


export default Benifits
