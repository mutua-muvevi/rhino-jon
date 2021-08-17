import React from 'react'
import DashboardBanner from './DashboardBanner/dashboardBanner'
import "./dashboard.css"
import DashboardCards from './dashboardCards/dashboardCards'
import Analitics from './analitics/analitics'
import axios from "axios"

const getusers = () => {
    axios.get("http://localhost:8080/api/users")
        .then((res) => console.log(res.data))
        .catch(err => console.log(err)) 
}

const Dashboard = () => {
    return (
        <div className="dashboard">
            {getusers()}
            <DashboardBanner/>
            <DashboardCards/>
            <Analitics/>
        </div>
    )
}

export default Dashboard
