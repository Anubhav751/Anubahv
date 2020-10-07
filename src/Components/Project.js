import React, { Component } from 'react';
import { Button, Table, Nav, Navbar, Form, Container, Row, } from 'react-bootstrap';
import Select from 'react-select';
import Dropdown from './Dropdown';
import './Project.css';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

class Project extends React.Component {
  state = {
    user: [
      { id: 1, Pd: "Pj454321", ProjectType: "New Development", ProjectD: "A/c Blower", safety: "yes", AplicableMarks: "Region1", NoOfPart: 2, CMimpact: "87Mi JPY", CurrentIl: 4, Status: "Delay", but: <button style={{ backgroundColor: "#ffb3b3", borderRadius: 14, color: "red", border: "none", width: 100, height: 30 }}>Delayed</button> },
      { id: 2, Pd: "Pj454321", ProjectType: "New Development", ProjectD: "A/c Blower", safety: "yes", AplicableMarks: "Region1", NoOfPart: 2, CMimpact: "87Mi JPY", CurrentIl: 4, Status: "Delay", but: <button style={{ backgroundColor: "#e6ffe6", borderRadius: 14, color: "green", border: "none", width: 100, height: 30 }}>Completed</button> },
      { id: 3, Pd: "Pj454321", ProjectType: "New Development", ProjectD: "A/c Blower", safety: "yes", AplicableMarks: "Region1", NoOfPart: 2, CMimpact: "87Mi JPY", CurrentIl: 4, Status: "Delay", but: <button style={{ backgroundColor: "#ccf2ff", borderRadius: 14, color: "blue", border: "none", width: 100, height: 30 }}>On-Time</button> },
      { id: 4, Pd: "Pj454321", ProjectType: "New Development", ProjectD: "A/c Blower", safety: "yes", AplicableMarks: "Region1", NoOfPart: 2, CMimpact: "87Mi JPY", CurrentIl: 4, Status: "Delay", but: <button style={{ backgroundColor: "#ffffe6", borderRadius: 14, color: "yellow", border: "none", width: 100, height: 30 }}>Delayed-MLP</button> },
    ]
  }
  render() {

    return (
      <>
        <div className="container">
          <div className="row d-flex justify-content-between text1">
            {/* <p className="text1">Module: Fuso Value Parts</p> */}
            <div class="dropdown show">
              <a class=" text1 dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Module: Fuso Value Parts  </a>

              <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </div>

            <Link to={"/createproject"}>
            <p className="float-right ml-2 add-Text">Create Project</p>
            <div className="float-right image-box">
              <img src="assets/img/plus.png" alt="plus-sign" className="p-2" />
            </div>
          </Link>
          </div>
        </div>
        <div className="container main-container">
          <div className="row">
            <div className="row">
              <div className="col-lg ml-4 Dropdown-div" ><Dropdown style={Dropdown1} para={'Status'} pstyle={pstyle1} reqe={"*"} /></div>
              <div className="col-lg Dropdown-div"><Dropdown style={Dropdown1} para={'Project ID'} pstyle={pstyle1} /></div>
              <div className="col-lg Dropdown-div"><Dropdown style={Dropdown1} para={'Project Type'} pstyle={pstyle1} /></div>
              <div className="col-lg Dropdown-div" ><Dropdown style={Dropdown1} para={'Project Description'} pstyle={pstyle1} /></div>
            </div>
            <div className="row ml-2">
              <div className="col-lg-5 Dropdown-div" ><Button className="btn btn-dark button1" onclick="">Filter</Button></div>
              <div className="col-lg-7 Dropdown-div"><Button className="btn btn-dark button2" onclick="">Reset Filters</Button></div>
            </div>
          </div>
        </div>
        <div className="container mt-3">
          <p className="float-right ml-2 add-Text"><b>Download this List </b></p>
          <div className="float-right image-box">
            <img src="assets/img/download.png" alt="plus-sign" className="p-2" />
          </div>
        </div>
        <div className="container" style={{marginTop:60}}>
          <div className="row">
            <table className="table table-borderless">
              <thead>
                <tr className="table-heading" >
                  <th scope="col">Product Id</th>
                  <th scope="col">Product Type</th>
                  <th scope="col">Project Description</th>
                  <th scope="col">Safety</th>
                  <th scope="col">Ablicable Markets</th>
                  <th scope="col">No of Parts</th>
                  <th scope="col">CM Impact</th>
                  <th scope="col">Current Il Gate</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              {this.state.user.map(item => (
                <tbody>
                  <tr key={item.id} className="table-item">
                    <td>{item.Pd}</td>
                    <td>{item.ProjectType}</td>
                    <td>{item.ProjectD}</td>
                    <td> {item.safety}</td>
                    <td>{item.AplicableMarks}</td>
                    <td>{item.NoOfPart}</td>
                    <td> {item.CMimpact}</td>
                    <td> {item.CurrentIl}</td>
                    <td >{item.but}</td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </>
    );
  }
}

const Dropdown1 = {
  width: 130,
  height: 28,
  borderRadius: 6,
  border: 'none',
}

const pstyle1 = {
  color: " #A0A7B4",
  fontSize: 12,
  fontWeight: "bold",
  fontFamily: "Montserrat",
}

export default Project;

