import React, { useEffect, useState } from 'react'

import "./dashboard.css";

import { useStateContext } from '../context'
import Dashboardcard from '../components/dashboardcard.component';

import { DevIcon, OperationsIcon, MarketingIcon, BusinessIcon, WalletIcon, RightArrowIcon, Logo, PolygonScan, AccountBG } from '../assets';
import { Employee, TransactionGraph, Transactions } from '../components';

import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [navTitle, setNavTitle, address, contract, connect] = useStateContext();

    const navigate = useNavigate();

    let addr = !address ? "0x000...000" : `${address.slice(0, 3)}...${address.slice(-5,)}`;

    useEffect(() => {
        document.title = "Dashboard | SalaryStream powered by Fantom"
    }, []);

    setNavTitle(() => "Dashboard");

    const handleClick = () => {
        window.location.href = "https://explorer.testnet.mantle.xyz/address/0xE10488fcd9994E1002f38Ffb1E5cE1392473B77c";
    }

    return (
        <div className="dashboard-container flex gap-10">
            <div className="main-dashboard-items">
                <span className="page-title">Departments</span>
                <span className="err-text">Revenue distribution among departments</span>
                <div className="department-wrapper">
                    <Dashboardcard background="#1866f3" title="IT" amount="20.00" img={DevIcon} />
                    <Dashboardcard background="#1866f380" title="Business Dev" amount="04.02" img={BusinessIcon} />
                    <Dashboardcard background="#1866f350" title="Marketing" amount="10.03" img={MarketingIcon} />
                    <Dashboardcard background="#1866f330" title="Operations" amount="02.60" img={OperationsIcon} />
                </div>
                <br />
                <span className="page-title">Account Details</span>
                <div className="account-details">
                    <div className="flex al-cnt jst-spc-btw flex-wrap" style={{ padding: '10px' }}>
                        <div className="flex gap-20">
                            <span className="wallet-icon">
                                <img src={WalletIcon} />
                            </span>
                            <div className="flex flex-dr-clm">
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <span className="page-title-sec">ADDRESS</span>
                                    <span className="err-text" style={{ marginTop: '10px' }}>{address ? address : addr}</span>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <span className="page-title-sec">BALANCE</span>
                                    <span style={{ marginTop: '10px', opacity: 0.5 }}> 20.00 FTM</span>
                                </div>
                            </div>
                        </div>
                        <img src={AccountBG} style={{ height: '140px', flex: '0.5' }} />
                    </div>
                </div>

                <div className="flex jst-spc-btw al-cnt mr-tp-20">
                    <span className="page-title">Recent Transactions</span>
                    <span style={{ display: 'flex', alignItems: 'center', cursor: "pointer" }} onClick={() => handleClick()}>
                        <img src={PolygonScan} className="arrow-icon" alt="polygonscan_logo" /></span>
                </div>
                <div className="transactions-details">
                    <Transactions filterType="" />
                </div>
                <center>
                    <span className="load-more-btn">Load More</span>
                </center>
            </div>
            <div className="dashboard-sidebar">
                <div className="transactions-graph-container">
                    <span className="sidebar-span">Transactions</span>
                    <span className="err-text">Updating Live</span>
                    <TransactionGraph />
                </div>
                <div className="transactions-employee-container">
                    <span className="sidebar-span">Employee Data</span>
                    <div className="err-text">Employee details</div>
                    <Employee />

                </div>
            </div>
        </div>
    )
}

export default Dashboard;