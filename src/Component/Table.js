import React from "react";
import { BarChart, Bar } from 'recharts';

export default function Table() {

  const data = [
    {
      name: 'Page A',
      bg: 9000,
     orders: 2400,
    },
    {
      name: 'Page B',
      bg: 2000,
     orders: 9000,
    },
    {
      name: 'Page C',
      bg: 7000,
     orders: 4000,
    },
    {
      name: 'Page D',
      bg: 8000,
     orders: 3000,
      
    },
    {
      name: 'Page E',
      bg: 7000,
     orders: 4000,
    },
    
  ];

  return (
    <div style={{ background:"#1C243F", marginLeft:"10px", padding:"10px", width:"180px"}} className="rounded">
      <h6 className="fw-bold ps-3 pt-1">Orders</h6>
      <p style={{color:"#FF814A"}} className="fw-semibold fs-2 ps-3">189K</p>
      <BarChart
          width={180}
          height={103}
          data={data}
          margin={{
            top: 5,
            right: 15,
            left: 2,
            bottom: 5,
          }}
        >
          <Bar dataKey="orders" stackId="a" fill="#FF814A" radius={[0, 0, 10, 10]} barSize={9}/>
          <Bar dataKey="bg" stackId="a" fill="#2E4B85" radius={[10, 10, 0, 0]} barSize={9} />
        </BarChart>
    </div>
  )
}

