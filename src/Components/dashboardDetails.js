import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import "./dashboardDetails.css";

function DashboardCard(props) {
    return (
        <>
            <div className="ml-2">
                <div className="card cardView" style={{ backgroundColor: props.color }}>
                    <img className="card-img-top" src={props.src} style={{ height: 47.38, width: 47.38, paddingLeft: 13, paddingTop: 15 }} alt="Card image cap" />
                    <div className="card-body">
                        <p className="card-text textStyle">{props.title}</p>
                        <h5 className="card-title textStyle" style={{fontSize:32, fontWeight:"bold"}}> {props.heading}  </h5>
                    </div>
                </div>
            </div>
        </>
    );
}



export default class DashboardDetails extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <p className="text1">Module: Fuso Value Parts</p>
                </div>
                <div className="container">
                    <div className="row" >
                        <Link to="/screen1" activeClassName="nav-font"><DashboardCard src="../../assets/img/rocket.png" heading="36" title="Launched Project" color="green"/></Link>
                        <Link to="/screen2" activeClassName="nav-font"><DashboardCard src="../../assets/img/wait.png" heading="36" title="Delayed – MIP" color="#EDAF29" /></Link>
                        <Link to="/screen3" activeClassName="nav-font"><DashboardCard src="../../assets/img/load.png" heading="36" title="Delayed Project" color="#EE2219" /></Link>
                        <Link to="/screen4" activeClassName="nav-font"><DashboardCard src="../../assets/img/wright.png" heading="36" title="On-Time Project" color="#0365BD" /></Link>
                        <Link to="/screen5" activeClassName="nav-font"><DashboardCard src="../../assets/img/rocket.png" heading="36" title="On-Hold Project" color="#F26921" /></Link>
                        <Link to="/screen6" activeClassName="nav-font"><DashboardCard src="../../assets/img/close.png" heading="36" title="Dropped Project" color="#080808" /></Link>
                    </div>
                   
                   
                </div>
            </>
        );
    }
}


