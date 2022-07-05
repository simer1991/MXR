import React from 'react'
import { Col, Row } from 'react-bootstrap-v5'


export default class Slider extends React.Component{
    state={
        value:0
    }

    handleOnChange=(e)=>this.setState({value:e.target.value})

    render(){
        return(
            <>
            <Row>
            <Col sm={12} className='estimate'>
            <div className='value'>{this.state.value}</div>
            <input type="range" min={0} max={100} value={this.state.value} className="slider" onChange={this.handleOnChange} />
           
            </Col>
            </Row>
            </>
        )
    }
}