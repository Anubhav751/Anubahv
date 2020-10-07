import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css'
import { Badge, Avatar } from '@material-ui/core';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

class Header extends Component {
    render() {
        return (
            <div className="container-fluid nav_bg">
                <nav className="navbar navbar-expand-lg navbar-light navbar_expand" >
                    <a class="navbar-brand " href="#"><img src={"../../assets/img/img1.png"} className="navbar_brand logo" alt="Logo" /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ul"  >
                            {/* <li className="nav-item"> */}
                                {/* <a className="nav-link" href="#">Dashboard</a> */}
                                {/* <NavLink to="/" activeClassName="nav-font">Dashboard</NavLink> */}
                            {/* </li> */}
                            <li className="nav-item" >
                                <NavLink to="/" className="nav-font">Dashboard</NavLink>
                            </li>
                            <li className="nav-item" >
                                <NavLink to="/project" className="nav-font">Project</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/statuscard" className="nav-font">Status</NavLink>
                            </li>
                            
                            <li className="nav-item">
                                <NavLink to="/myapproval" className="nav-font">My Approval</NavLink>
                            </li>
                            <li className="nav-item" className="bell-icon" style={bellIcon}>
                                
                            </li>
                            <Badge badgeContent={2} color="secondary" overlap="circle">
                                    <NotificationsNoneIcon/>
                                </Badge>
                                <Avatar className="ul classes.large" style={{marginLeft:40 }}>A</Avatar>
                                <p className="profileText">Anubhav Bhatt<br /><p className="viewText"> View Profile</p></p>
                                <ArrowDropDownIcon className="DropDownIcon" />
                      

                        </ul>
                    </div>
                </nav>
            </div >
        );
    }
}

const bellIcon ={
    paddingTop: 5, 
    paddingBottom: 5, 
    paddingLeft: 150, 
    paddingRight: 100,
}

export default Header;




