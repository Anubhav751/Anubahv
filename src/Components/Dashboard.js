import React, { Component } from 'react';
import './Dashboard.css'
import { Box, Button } from '@material-ui/core';
import { NavLink, Link } from 'react-router-dom';

class Dashboard extends Component {
    render() {
        return (
            <>
                <div className="container col-" >
                    <p className="module-text">Select a Module</p>
                </div>
                <div className="container" >
                    <div className="row row justify-content-md-center">
                        <div className="col-3">
                            <div class="card w-60 card_style card1 shadow_box border_less">
                                <NavLink to="/carddashboards" activeClassName="nav-font">
                                    <div class="card-body">
                                        <p class="card-title card_header">Fuso Value Parts</p>
                                        <p class="card-title card_ptag">Total projects:12</p>
                                        <p className="progress_bar">
                                            <div className="progress-bar bg-success progress_linebar">
                                                <div className="progress-bar" role="progressbar" style={{ width: '100%' }} aria-valuenow={30} aria-valuemin={20} aria-valuemax={100} />
                                            </div>
                                        </p>
                                    </div>
                                </NavLink>
                            </div>

                        </div>
                        <div className="col-3">
                            <div class="card w-60 card_style shadow_box border_less">
                                <div class="card-body">
                                    <p class="card-title card_header" >Accessories Part</p>
                                    <p class="card-title card_ptag">Total projects:12</p>
                                    <p className="progress_bar">
                                        <div className="progress-bar bg-success progress_linebar">
                                            <div className="progress-bar" role="progressbar" style={{ width: '100%' }} aria-valuenow={30} aria-valuemin={20} aria-valuemax={100} />
                                        </div>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div class="card w-60 card_style shadow_box border_less" >
                                <div class="card-body">
                                    <p class="card-title card_header" >Fuso Value Parts</p>
                                    <p class="card-title card_ptag">Total projects:12</p>
                                    <p className="progress_bar">
                                        <div className="progress-bar bg-success progress_linebar" >
                                            <div className="progress-bar" role="progressbar" style={{ width: '100%' }} aria-valuenow={30} aria-valuemin={20} aria-valuemax={100} />
                                        </div>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div class="card w-60 card_style shadow_box border_less" >
                                <div class="card-body">
                                    <p class="card-title card_header">Fuso Value Parts</p>
                                    <p class="card-title card_ptag">Total projects:12</p>
                                    <p className="progress_bar">
                                        <div className="progress-bar bg-success progress_linebar">
                                            <div className="progress-bar" role="progressbar" style={{ width: '100%' }} aria-valuenow={30} aria-valuemin={20} aria-valuemax={100} />
                                        </div>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 container">
                            <div class="card w-60 card_style shadow_box border_less">
                                <div class="card-body">
                                    <p class="card-title card_header">Fuso Value Parts</p>
                                    <p class="card-title card_ptag">Total projects:12</p>
                                    <p className="progress_bar">
                                        <div className="progress-bar bg-success progress_linebar">
                                            <div className="progress-bar" role="progressbar" style={{ width: '100%' }} aria-valuenow={30} aria-valuemin={20} aria-valuemax={100} />
                                        </div>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 container-module">
                            <div class="card w-60 card_style shadow_box border_less">
                                <div class="card-body">
                                    <p class="card-title card_header">Fuso Value Parts</p>
                                    <p class="card-title card_ptag">Fuso Value Parts</p>
                                    <p className="progress_bar">
                                        <div className="progress-bar bg-success progress_linebar">
                                            <div className="progress-bar" role="progressbar" style={{ width: '100%' }} aria-valuenow={30} aria-valuemin={20} aria-valuemax={100} />
                                        </div>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 container-module">
                            <div class="card w-60 card_style shadow_box border_less">
                                <div class="card-body">
                                    <p class="card-title card_header">Fuso Value Parts</p>
                                    <p class="card-title card_ptag">Fuso Value Parts</p>
                                    <p className="progress_bar">
                                        <div className="progress-bar bg-success progress_linebar">
                                            <div className="progress-bar" role="progressbar" style={{ width: '100%' }} aria-valuenow={30} aria-valuemin={20} aria-valuemax={100} />
                                        </div>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 container-module">
                            <div class="card w-60 card_style shadow_box border_less">
                                <div class="card-body">
                                    <p class="card-title card_header">Fuso Value Parts</p>
                                    <p class="card-title card_ptag">Fuso Value Parts</p>
                                    <p className="progress_bar">
                                        <div className="progress-bar bg-success progress_linebar">
                                            <div className="progress-bar" role="progressbar" style={{ width: '100%' }} aria-valuenow={30} aria-valuemin={20} aria-valuemax={100} />
                                        </div>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Dashboard;