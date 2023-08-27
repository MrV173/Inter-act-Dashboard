import React, {useState} from "react";
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Row, Col } from "react-bootstrap";
import DotsGreen from "../Img/DotsGreen.svg"
import DotsOrange from '../Img/DotsOrange.svg'


function TotalSales() {
    return (
        <>
             <Row>
                    <Col xs={6}>
                        <div style={{width:"120px", height:"128px", background:"#1C243F", paddingTop:"20px"}}>
                        <CircularProgressbarWithChildren 
                            value={75} 
                            styles={buildStyles({
                            trailColor: '#1F2849',
                            pathColor:"#0BB885"
                            })}>
                                <div style={{ width:"70%"}}>
                                    <CircularProgressbar 
                                        value={50} 
                                        styles={buildStyles({
                                        trailColor: '#1F2849',
                                        backgroundColor: 'green',
                                        pathColor:"#FF814A"
                                    })} />
                                </div>
                            </CircularProgressbarWithChildren>
                        </div>
                    </Col>
                    <Col style={{fontSize:"12px"}} className="fw-semibold">
                        <div className="d-flex m-auto pt-3 fw-semibold">
                            <img src={DotsGreen} alt="dotsGreen" className="me-2 pb-3"/>
                            <div>
                            Total Sales
                            <p className="text-secondary">251K</p>
                            </div>    
                        </div>
                        <div className="d-flex m-auto pt-5 fw-semibold">
                            <img src={DotsOrange} alt="dotsGreen" className="me-2 pb-3"/>
                            <div>
                            Total Orders
                            <p className="text-secondary">176K</p>
                            </div>    
                        </div>
                    </Col>
            
            </Row>
        </>
    )
}

function TotalSales2() {
    return (
        <>
             <Row>
                    <Col xs={6}>
                        <div style={{width:"120px", height:"120px", background:"#1C243F", paddingTop:"20px"}}>
                        <CircularProgressbarWithChildren 
                            value={50} 
                            styles={buildStyles({
                            trailColor: '#1F2849',
                            pathColor:"#0BB885"
                            })}>
                                <div style={{ width:"70%"}}>
                                    <CircularProgressbar 
                                        value={40} 
                                        styles={buildStyles({
                                        trailColor: '#1F2849',
                                        backgroundColor: 'green',
                                        pathColor:"#FF814A"
                                    })} />
                                </div>
                            </CircularProgressbarWithChildren>
                        </div>
                    </Col>
                    <Col style={{fontSize:"12px"}} className="fw-semibold">
                        <div className="d-flex m-auto pt-3 ">
                            <img src={DotsGreen} alt="dotsGreen" className="me-2 pb-3"/>
                            <div>
                            Total Sales
                            <p className="text-secondary">165K</p>
                            </div>    
                        </div>
                        <div className="d-flex m-auto pt-5">
                            <img src={DotsOrange} alt="dotsGreen" className="me-2 pb-3"/>
                            <div>
                            Total Orders
                            <p className="text-secondary">147K</p>
                            </div>    
                        </div>
                    </Col>
            
            </Row>
        </>
    )
}

export default function Earnings() {

    const [show, setShow] = useState(false)

    const handleShowTotalSales = () => {
        setShow(!show)
    }
    

    return (
        <>
            <div style={{background:"#1C243F", width:"280px"}} className="ms-3 p-3 rounded" >
                <Container style={{display:"flex", justifyContent:"space-between"}}>
                    <Navbar.Brand className="fw-bold">Earnings</Navbar.Brand>       
                        <select style={{border:"none", background:"#1C243F"}} className="text-secondary" onChange={handleShowTotalSales}>
                            <option style={{color:"white", background:"#2E4B85"}}>Last Week</option>
                            <option style={{color:"white", background:"#2E4B85"}}>2 Weeks ago</option>
                            <option style={{color:"white", background:"#2E4B85"}}>Last Month</option>
                        </select>
                </Container>
                <div >
                {show ? <TotalSales2 /> : <TotalSales />}
                </div>
                
                  
            </div>
        </>
    )
}