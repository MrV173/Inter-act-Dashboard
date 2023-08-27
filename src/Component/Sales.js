import React from "react";
import TotalCost from '../Component/TotalCost';
import Card from "../Component/Card";
import Champion from "../Img/Champion.svg"
import Calendar from "../Img/Calendar.svg"
import Revenue from "../Img/Revenue.svg"
import Wallet from "../Img/Wallet.svg"


export default function Sales() {
    return (
        <>
        <div style={{display:"flex", justifyContent:"space-between"}}>
            <TotalCost />
            <Card image={Champion} title="Total Sales" value="$66,053" />
            <Card image={Calendar} title="This Week" value="$35,000,00" />
            <Card image={Revenue} title="Revenue" value="$63,00K" />
            <Card image={Wallet} title="$1250" value="Last Payment" />
        </div>
        </>
    )
}