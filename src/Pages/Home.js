import React from "react";
import Sidebar from "../Component/Sidebar";
import Icon from '../Img/Icon.png'
import Sales from "../Component/Sales";
import Earnings from "../Component/Earnings";
import TableData from '../Component/Table'
import Profit from "../Component/Profit";
import TotalProfit from "../Component/TotalProfit";
import Arrow from "../Img/Arrow.svg"
import Overview from "../Component/Overview";


export default function Home() {
    return (
        <>
            <div style={{display:"flex"}}>
                <div style={{ width:"250px", height:"1024px", background:"#171E37"}} className="p-3">
                <Sidebar />
                </div>
                <div style={{background:"#151A2E", width:"100%", color:"white"}}>
                    <div className='text-end pe-4 pt-3 text-secondary'>
                        <img src={Icon} alt='icon' style={{width:"36px", height:"36px", backgroundColor:"#B5B4B4"}} className='rounded-circle'/> Hello, User!
                    </div>
                    <hr />
                    <div className="p-3">
                        <h2>Marketing Dashboard</h2>
                        <p className="text-secondary fw-bold">Home / <span style={{color:"#0BB885"}}>Dashboard </span></p>
                    </div>
                    <div className="p-3">
                        <Sales />
                    </div>     
                    <div className="d-flex">
                        <div>
                            <div className="d-flex" style={{width:"97%"}}>
                                <Earnings />
                                <TableData />
                                <Profit />
                            </div>
                        <TotalProfit />
                        </div>               
                    <div style={{backgroundColor:"#1C243f", width:"410px"}} className="rounded p-4">
                       <h5>Activity Overview</h5>
                       <img src={Arrow} alt="arrow" /> 16% this month
                       <div className="mt-4">
                            <Overview description="Nick Mark mentioned Sara Smith in New Post" time="11 JUL 8:10 PM"/>
                            <Overview description="The Post Name was removed by Nick Mark" time="11 JUL 9:10 PM"/>
                            <Overview description="Patrick Sulivan Published a New Post" time="12 JUL 10:10 PM" />
                            <Overview description="240+ users have subscribed to Newsletter #1" time="18 JUL 19:10 PM"/>
                            <Overview description="The Post Name was suspanded by Nick Mark" time="11 JUL 9:10 PM"/>
                       </div>
                    </div>
                </div>
                <div className="p-3 text-secondary">
                    <p>Privacy Policy <span className="ms-4"> Terms of Use</span></p>
                </div>
                </div>
            </div>
        
        </>
    )
}