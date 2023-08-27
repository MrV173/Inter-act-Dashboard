import React from "react";
import Line from "../Img/Line.svg"
import Circle from "../Img/Circle.svg"
import { Col, Row } from "react-bootstrap";

export default function Overview(props) {
    return (
        <>
            <div>
                <Row>
                    <Col xs={1} className="d-flex flex-column">
                        <img src={Circle} alt="circle" style={{width:"21px"}} />
                        <img src={Line} alt="line" style={{width:"21px", height:"72px"}}/>
                    </Col>
                    <Col style={{fontSize:"15px"}} className="ms-1 fw-semibold">
                        {props.description}
                        <p className="text-secondary">{props.time}</p>
                    </Col>
                </Row>
            </div>
        </>
    )
}