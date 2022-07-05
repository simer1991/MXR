import React from 'react'
import {Row,Col, Container} from 'react-bootstrap-v5';
import { Link } from 'react-router-dom';

function Benifits(props){
  return (
   <div className='mxr__benifits mxr__section mxr__hireus'>
    <Container>
    {props.data.map((list,index)=>(
      <>
        <Row>
        <Col md={6} sm={12}>
        {list.images}  
        </Col>
        <Col md={6} sm={12} >
        <h3 className='mxr__section-title'>{list.heading}</h3>
        {list.pharagraphs.map((read,index)=>(
          <p>{read}</p>
        ))}
        {list.link && <Link className="mxr__section-btn" to="/project1">READ MORE</Link>}
        </Col>
        </Row>
      </>
    ))}
    </Container>
 </div>
  )
}


export default Benifits
