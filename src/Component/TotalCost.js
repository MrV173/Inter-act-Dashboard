import React from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {Row, Col} from 'react-bootstrap'


export default function TotalCost() {

    const percentage = 55;


    return (
        <div style={{background:"#0BB885", width:"205px", height:"100px"}} className="rounded p-3">
            <div className="text-center pt-2">
                <Row>
                    <Col xs={4}>
                        <div style={{width:"56px", height:"56px"}}>
                            <CircularProgressbar value={percentage} background={true}  counterClockwise styles={buildStyles({
                                        trailColor: '#0BB885',
                                        pathColor:"#FFFFFF",
                                        rotation:0.15,
                                        backgroundColor:"#0BC885"
                                    })}/>
                        </div>
                    </Col>
                    <Col>
                        <div className="text-start">
                            <b>Total Cost</b>
                            <p>$31.868</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}