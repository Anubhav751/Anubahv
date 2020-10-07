import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './cardDashboard.css';

function CardStatus(props) {
    return (
        <>
            <div className="ml-2">
                <div className="card cardView shadow_box" style={{ backgroundColor: props.color, border:"none"}}>
                    <img className="card-img-top" src={props.src} style={{ height: 47.38, width: 47.38, paddingLeft: 13, paddingTop: 15 }} alt="Card image cap" />
                    <div className="card-body">
                        <p className="card-text card-text">{props.title}</p>
                        <h5 className="card-title" style={{color:props.colortext, fontSize:32, fontWeight:"bold", paddingBottom:20 }}>{props.heading}  </h5>
                    </div>
                </div>
            </div>
            
        </>
    );
}



export default class StatusCard extends Component {
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
                        <Link to="/screen2" activeClassName="nav-font"><CardStatus src="../../assets/img/folder1.png" heading="36" colortext="#EDAF29" title="Total Task" color="white" /></Link>
                        <Link to="/screen3" activeClassName="nav-font"><CardStatus src="../../assets/img/load@2x.png" heading="36" colortext="#0365BD" title="On Track" color="white" /></Link>
                        <Link to="/screen4" activeClassName="nav-font"><CardStatus src="../../assets/img/load1.png" heading="36" colortext="#E2271E" title="Delayed" color="white" /></Link>
                        <Link to="/screen5" activeClassName="nav-font"><CardStatus src="../../assets/img/wait1.png" heading="7"  colortext="#EDAF29" title="Delayed – MIP" color="white" /></Link>
                        <Link to="/screen6" activeClassName="nav-font"><CardStatus src="../../assets/img/close1.png" heading="36" colortext="#0C961C" title="Completed Project" color="white" /></Link>
                    </div>   
                </div>
            </>
        );
    }
}


