import React, { Component } from 'react';
import { Button, Table, Nav, Navbar, Form, Container, Row, } from 'react-bootstrap';
import Select from 'react-select';
import Dropdown from './Dropdown';
import './Project.css';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

class MyApprovalTableList extends React.Component {
  state = {
    user: [
      { id: 1, Pd: "Pj454321", ProjectType: "New Development", ProjectD: "A/c Blower", safety: "yes", AplicableMarks: "Region1", NoOfPart: 2, CMimpact: "87Mi JPY", CurrentIl: 4, Status: "Delay", but: <button style={{ backgroundColor: "#333951", borderRadius: 14, color: "white", border: "none", width: 100, height: 30 }}>Padding</button> },
      { id: 2, Pd: "Pj454321", ProjectType: "New Development", ProjectD: "A/c Blower", safety: "yes", AplicableMarks: "Region1", NoOfPart: 2, CMimpact: "87Mi JPY", CurrentIl: 4, Status: "Delay", but: <button style={{ backgroundColor: "#333951", borderRadius: 14, color: "white", border: "none", width: 100, height: 30 }}>Padding</button> },
      { id: 3, Pd: "Pj454321", ProjectType: "New Development", ProjectD: "A/c Blower", safety: "yes", AplicableMarks: "Region1", NoOfPart: 2, CMimpact: "87Mi JPY", CurrentIl: 4, Status: "Delay", but: <button style={{ backgroundColor: "#333951", borderRadius: 14, color: "white", border: "none", width: 100, height: 30 }}>Padding</button> },
      { id: 4, Pd: "Pj454321", ProjectType: "New Development", ProjectD: "A/c Blower", safety: "yes", AplicableMarks: "Region1", NoOfPart: 2, CMimpact: "87Mi JPY", CurrentIl: 4, Status: "Delay", but: <button style={{ backgroundColor: "green", borderRadius: 14, color: "white", border: "none", width: 100, height: 30 }}>Approval</button> },
    ]
  }
  render() {

    return (
      <>
        <div className="container">
          <div className="row d-flex justify-content-between text1">
            <p className="text1">Module: Fuso Value Parts</p>
          </div>
        </div>
        <div className="container main-container">
          <div className="row">
            <div className="row">
              <div className="col-lg ml-4 Dropdown-div" ><Dropdown style={Dropdown1} para={'Project ID'} pstyle={pstyle1}/></div>
              <div className="col-lg Dropdown-div"><Dropdown style={Dropdown1} para={'Project Type'} pstyle={pstyle1} /></div>
              <div className="col-lg Dropdown-div"><Dropdown style={Dropdown1} para={'Project Description'} pstyle={pstyle1} /></div>
              <div className="col-lg Dropdown-div" ><Dropdown style={Dropdown1} para={'Approval Status'} pstyle={pstyle1} /></div>
            </div>
            <div className="row ml-2">
              <div className="col-lg-5 Dropdown-div" ><Button className="btn btn-dark button1" onclick="">Filter</Button></div>
              <div className="col-lg-7 Dropdown-div"><Button className="btn btn-dark button2" onclick="">Reset Filters</Button></div>
            </div>
          </div>
        </div>
        <div className="container d-flex justify-content-end container_last">
        <div className="container mt-3">
          <p className="float-right ml-2 add-Text"><b>Download this List </b></p>
          <div className="float-right image-box">
            <img src="assets/img/download.png" alt="plus-sign" className="p-2" />
          </div>
        </div>

        </div>
        <div className="container">
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

export default MyApprovalTableList;

