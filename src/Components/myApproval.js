import React, { Component } from 'react';
import './Dashboard.css'
import { Box, Button } from '@material-ui/core';
import { NavLink, Link } from 'react-router-dom';

class MyApproval extends Component {
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
                                <NavLink to="/myapprovaltablelist" activeClassName="nav-font">
                                    <div class="card-body">
                                        <p class="card-title card_header">Fuso Value Parts</p>
                                        <p class="card-title card_ptag">Total projects:12</p>
                                    </div>
                                </NavLink>
                            </div>

                        </div>
                        <div className="col-3">
                            <div class="card w-60 card_style shadow_box border_less">
                                <div class="card-body">
                                    <p class="card-title card_header" >Accessories Part</p>
                                    <p class="card-title card_ptag">Total projects:12</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div class="card w-60 card_style shadow_box border_less" >
                                <div class="card-body">
                                    <p class="card-title card_header" >Fuso Value Parts</p>
                                    <p class="card-title card_ptag">Total projects:12</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div class="card w-60 card_style shadow_box border_less" >
                                <div class="card-body">
                                    <p class="card-title card_header">Fuso Value Parts</p>
                                    <p class="card-title card_ptag">Total projects:12</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 container-module">
                            <div class="card w-60 card_style shadow_box border_less">
                                <div class="card-body">
                                    <p class="card-title card_header">Fuso Value Parts</p>
                                    <p class="card-title card_ptag">Total projects:12</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 container-module">
                            <div class="card w-60 card_style shadow_box border_less">
                                <div class="card-body">
                                    <p class="card-title card_header">Fuso Value Parts</p>
                                    <p class="card-title card_ptag">Fuso Value Parts</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 container-module">
                            <div class="card w-60 card_style shadow_box border_less">
                                <div class="card-body">
                                    <p class="card-title card_header">Fuso Value Parts</p>
                                    <p class="card-title card_ptag">Fuso Value Parts</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 container-module">
                            <div class="card w-60 card_style shadow_box border_less">
                                <div class="card-body">
                                    <p class="card-title card_header">Fuso Value Parts</p>
                                    <p class="card-title card_ptag">Fuso Value Parts</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default MyApproval;