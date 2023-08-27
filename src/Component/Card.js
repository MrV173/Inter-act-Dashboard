import React from "react";
import 'react-circular-progressbar/dist/styles.css';
import {Row, Col, Container} from 'react-bootstrap'

export default function Card(props) {
    return (
        <>
        <div style={{background:"#1C243F", width:"195px", height:"100px"}} className="rounded p-3">
                <Container>
                <Row className="text-center pt-2">
                    <Col xs={3}>
                        <img src={props.image}/>
                    </Col>
                    <Col>
                        <div className="text-start ms-1">
                           <b>{props.title}</b>
                            <p className="text-secondary">{props.value}</p>
                        </div>
                    </Col>
                </Row>
                </Container>
        </div>
        </>
    )
}