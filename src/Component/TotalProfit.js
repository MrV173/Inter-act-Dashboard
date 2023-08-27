import React from "react";
import { Col, Row } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown'
import GreenDot from "../Img/DotsGreen.svg"
import OrangeDot from "../Img/DotsOrange.svg"
import { BarChart,Bar,XAxis, YAxis,ReferenceLine,LineChart, Line,} from 'recharts';

  const data = [
    {
      name: 'Jan',
      earning: 124,
      expense: -200,
    },
    {
      name: 'Feb',
      earning: 250,
      expense: -120,
    },
    {
      name: 'Mar',
      earning: 350,
      expense: -80,
    },
    {
      name: 'Apr',
      earning: 300,
      expense: -250,
    },
    {
      name: 'May',
      earning: 150,
      expense: -150,
    },
    {
      name: 'Jun',
      earning: 100,
      expense: -100,
    },
    {
      name: 'July',
      earning: 200,
      expense: -70,
    },
    {
        name: 'Aug',
        earning: 300,
        expense: -90,
    },
    {
        name: 'Sep',
        earning: 75,
        expense: -150,
    },
  ];

  const dataInYear = [
    {
        name: 'Jan',
        sales: 300,
      },
      {
        name: 'Feb',
        sales: 250,
      },
      {
        name: 'Mar',
        sales: 350,
    },
      {
        name: 'Apr',
        sales: 270,
      },
      {
        name: 'May',
        sales: 285,
      },
      {
        name: 'Jun',
        sales: 200,
      },
      {
        name: 'July',
        sales: 550,
      },
      {
          name: 'Aug',
          sales: 400,
      },
      {
          name: 'Sep',
          sales: 380,
      },

       {
          name: 'Okt',
          sales: 300,
      },
       {
          name: 'Nov',
          sales: 350,
      },
      {
        name: 'Des',
        sales: 470,
       },
  ]

export default function TotalProfit() {
    return (
        <>
        <div className="ps-3 mt-3 ms-3 rounded" style={{background:"#1C243F", width:"95%"}}>
            <Row>
                <Col>
                    <div style={{border:"solid 1px", 
                    width:"380px", 
                    borderTop:"none",
                    borderLeft:"none",
                    borderBottom:"none",
                    borderColor:"#2E4B85"}} className="p-2">
                        <Row className="mt-4">
                            <Col className="fw-semibold">Total Profit</Col>
                            <Col className="text-secondary">
                                <img src={GreenDot} alt="greenDot"/> Earning
                                <img src={OrangeDot} alt="orangeDot" className="ms-4"/> Expense
                            </Col>
                        </Row>
                        <BarChart
                            width={360}
                            height={300}
                            data={data}
                            stackOffset="sign"
                            margin={{
                            top: 25,
                            bottom: 5,
                            }}>
                            <XAxis axisLine={false} dataKey="name" tickLine={false} />
                            <YAxis axisLine={false} tickLine={false} />          
                            <Bar dataKey="earning" fill="#0BB885" stackId="stack" radius={[10, 10, 0, 0]} barSize={9} />
                            <Bar dataKey="expense" fill="#FF9F43" stackId="stack" radius={[10, 10, 0, 0]} barSize={9} />
                            <ReferenceLine y={0} stroke="#1C243F"  strokeWidth={10}/>    
                        </BarChart>
                    </div>
                </Col>
                <Col className="text-center pt-4 pe-3">
                    <Dropdown.Toggle style={{background:"#1C243F", borderColor:"#0BB885", color:"#0BB885", }} className="ps-4 pt-2 pb-2 pe-4 fw-bold">
                      2023
                    </Dropdown.Toggle>
                    <div className="mt-5">
                        <h1>$842.98</h1>
                        <p style={{fontSize:"12px"}} className="text-secondary fw-semibold">Latest Month Balance $426.20k</p>
                        <LineChart
                            width={180}
                            height={90}
                            data={dataInYear}
                            margin={{
                            top: 5,
                            right: 10,
                            left: 20,
                            bottom: 5,
                        }}>
                            <Line type="monotone" dataKey="sales" stroke="#0BB885" dot={false} strokeWidth={2} />
                        </LineChart>
                        <button style={{border:"none", color:"white", backgroundColor:"#0BB885"}} className="rounded fw-semibold pt-2 pb-2 ps-4 pe-4">
                             View Report
                        </button>
                    </div>
                </Col>

            </Row>
            
        </div>
        </>
    )
}