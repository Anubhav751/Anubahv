import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './cardDashboard.css';

function CardDashboard(props) {
    return (
        <>
            <div className="ml-2">
                <div className="card cardView shadow_box" style={{ backgroundColor: props.color, border:"none"}}>
                    <img className="card-img-top" src={props.src} style={{ height: 47.38, width: 47.38, paddingLeft: 13, paddingTop: 15 }} alt="Card image cap" />
                    <div className="card-body">
                        <p className="card-text card-text">{props.title}</p>
                        <h5 className="card-title" style={{color:props.colortext, fontSize:32, fontWeight:"bold" }}>{props.heading}  </h5>
                    </div>
                </div>
            </div>
            
        </>
    );
}



export default class CardDashboards extends Component {
    render() {
        return (
            <>
                <div className="container">
                <div class="dropdown show">
              <a class=" text1 dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Module: Fuso Value Parts  </a>

              <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </div>
                </div>
                <div className="container" style={{marginTop:40}}>
                    <div className="row" >
                        <Link to="/screen1" activeClassName="nav-font"><CardDashboard src="../../assets/img/rocket1.png" heading="36" colortext="#0C961C"  title="Launched Project" color="white"/></Link>
                        <Link to="/screen2" activeClassName="nav-font"><CardDashboard src="../../assets/img/wait1.png" heading="36" colortext="#EDAF29" title="Delayed – MIP" color="white" /></Link>
                        <Link to="/screen3" activeClassName="nav-font"><CardDashboard src="../../assets/img/load1.png" heading="36" colortext="#E2271E" title="Delayed Project" color="white" /></Link>
                        <Link to="/screen4" activeClassName="nav-font"><CardDashboard src="../../assets/img/load@2x.png" heading="36" colortext="#0365BD" title="On-Time Project" color="white" /></Link>
                        <Link to="/screen5" activeClassName="nav-font"><CardDashboard src="../../assets/img/rocket.png" heading="36" colortext="#F26921" colortext="#0C961C" title="On-Hold Project" color="white" /></Link>
                        <Link to="/screen6" activeClassName="nav-font"><CardDashboard src="../../assets/img/close1.png" heading="36" colortext="#F26921" title="Dropped Project" color="white" /></Link>
                    </div>   
                </div>
                <div className = "container" style={{marginLeft:70}}>
        <div className="row" style={{marginTop:100}}>
        <p className="bar-text">Il 0</p>  
            <div className="progress" style={{ marginTop: 30, height: 15, width: 136, borderRadius: 10, marginLeft: 20 }}>
                <div className="progress-bar" role="progressbar" style={{ width: '50%' }} aria-valuenow={15} aria-valuemin={0} aria-valuemax={100} />
                <div className="progress-bar bg-warning" role="progressbar" style={{ width: '30%' }} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} />
                <div className="progress-bar bg-danger" role="progressbar" style={{ width: '20%' }} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} />
            </div>
        </div>
        <div className="row">
        <p className="bar-text">Il 0</p>
            <div className="progress" style={{ marginTop: 30, height: 15, width: 136, borderRadius: 10, marginLeft: 20 }}>
                <div className="progress-bar" role="progressbar" style={{ width: '50%' }} aria-valuenow={15} aria-valuemin={0} aria-valuemax={100} />
                <div className="progress-bar bg-warning" role="progressbar" style={{ width: '50%' }} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} />
            </div>
        </div>
        <div className="row">
        <p className="bar-text">Il 0</p>
            <div className="progress" style={{ marginTop: 30, height: 15, width: 136, borderRadius: 10, marginLeft: 20 }}>
                <div className="progress-bar" role="progressbar" style={{ width: '50%' }} aria-valuenow={15} aria-valuemin={0} aria-valuemax={100} />
                <div className="progress-bar bg-warning" role="progressbar" style={{ width: '30%' }} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} />
                <div className="progress-bar bg-danger" role="progressbar" style={{ width: '20%' }} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} />
            </div>
        </div>
        <div className="row">
        <p className="bar-text">Il 0</p>
            <div className="progress" style={{ marginTop: 30, height: 15, width: 136, borderRadius: 10, marginLeft: 20 }}>
                <div className="progress-bar" role="progressbar" style={{ width: '50%' }} aria-valuenow={15} aria-valuemin={0} aria-valuemax={100} />
                <div className="progress-bar bg-warning" role="progressbar" style={{ width: '30%' }} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} />
                <div className="progress-bar bg-danger" role="progressbar" style={{ width: '20%' }} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} />
            </div>
        </div>
        <div className="row">
        <p className="bar-text">Il 0</p>
            <div className="progress" style={{ marginTop: 30, height: 15, width: 136, borderRadius: 10, marginLeft: 20 }}>
                <div className="progress-bar" role="progressbar" style={{ width: '100%' }} aria-valuenow={15} aria-valuemin={0} aria-valuemax={100} />
            </div>
        </div>
        <div className="row">
        <p className="bar-text">Il 0</p>
            <div className="progress" style={{ marginTop: 30, height: 15, width: 1000, borderRadius: 10, marginLeft: 20 }}>
                <div className="progress-bar" role="progressbar" style={{ width: '100%' }} aria-valuenow={15} aria-valuemin={0} aria-valuemax={100} />
               
            </div>
            
        </div>
        <div className="row">
        <p className="bar-text">Il 0</p>
            <div className="progress" style={{ marginTop: 30, height: 15, width: 136, borderRadius: 10, marginLeft: 20 }}>
                <div className="progress-bar bg-danger" role="progressbar" style={{ width: '100%' }} aria-valuenow={15} aria-valuemin={0} aria-valuemax={100} />
               
            </div>
            
        </div>
    </div>
            </>
        );
    }
}


