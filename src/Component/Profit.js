import React from "react";
import { LineChart, Line, CartesianGrid} from 'recharts';

export default function Profit() {
    const data = [
        {
          name: 'Page A',
          profit: 500,
        },
        {
          name: 'Page B',
          profit: 1000,
        },
        {
          name: 'Page C',
          profit: 750,
        },
        {
          name: 'Page D',
          profit: 1500,
        },
        {
          name: 'Page E',
          profit: 1250,
        },
        {
          name: 'Page F',
          profit: 2000,
        },
        
      ];


    return (
        <>
             <div style={{ background:"#1C243F", marginLeft:"10px", padding:"10px", width:"180px"}} className="rounded">
      <h6 className="fw-bold ps-3 pt-1">Profit</h6>
      <p style={{color:"#0BB885"}} className="fw-semibold fs-2 ps-3">8,24K</p>
      <LineChart
          width={180}
          height={105}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 10,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="7" stroke="#0A1826" horizontal={false}/>
          <Line type="linear" dataKey="profit" stroke="#0BB885" strokeWidth={4} dot={{ fill: "#1C243F", r:4}}/>
        </LineChart>
    </div>
        </>
    )
}