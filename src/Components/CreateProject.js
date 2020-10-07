import React, { Component } from 'react';
import { Button, Table, Nav, Navbar, Container,  } from 'react-bootstrap';
import Select from 'react-select';
import Dropdown from './Dropdown';
import './CreateProject.css';
import RadioButton from './radioButton';

class CreateProject extends React.Component {
    state = {
        user: [
            { id: 1, select: <input type="checkbox" />, IGate: "IG 1", ILTitle: "RFQ Preparation", StartDate: <input type="date"  style={{ border: "none", height:30, borderRadius:5 }} />, EndDate: <input type="date" placeholder="12/02/2020" style={{ border: "none", height:30, borderRadius:5 }} />, AssignedBy: "Anubhav", AssignedTo: <select name="cars" id="cars" style={{ border: "none", width: 150, height: 30, borderRadius:5}}><option value="volvo">All</option></select> },
            { id: 2, select: <input type="checkbox" />, IGate: "IG 2", ILTitle: "RFQ Preparation", StartDate: <input type="date" style={{ border: "none", height:30, borderRadius:5 }} />, EndDate: <input type="date" style={{ border: "none", height:30, borderRadius:5 }} />, AssignedBy: "vaibhav", AssignedTo: <Dropdown style={{ border: "none" }} />, AssignedBy: "Anubhav", AssignedTo: <select name="cars" id="cars" style={{ border: "none", width: 150, height: 30, borderRadius:5 }}><option value="volvo">All</option></select> },
            { id: 3, select: <input type="checkbox" />, IGate: "IG 3", ILTitle: "RFQ Preparation", StartDate: <input type="date" style={{ border: "none",height:30, borderRadius:5 }} />, EndDate: <input type="date" style={{ border: "none" ,height:30, borderRadius:5 }} />, AssignedBy: "kuldeep", AssignedTo: <Dropdown style={{ border: "none" }} />, AssignedBy: "Anubhav", AssignedTo: <select name="cars" id="cars" style={{ border: "none", width: 150, height: 30, borderRadius:5 }}><option value="volvo">All</option></select> },
            { id: 4, select: <input type="checkbox" />, IGate: "IG 4", ILTitle: "RFQ Preparation", StartDate: <input type="date" style={{ border: "none", height:30, borderRadius:5  }} />, EndDate: <input type="date" style={{ border: "none", height:30, borderRadius:5 }} />, AssignedBy: "gurdeep", AssignedTo: <Dropdown style={{ border: "none" }} />, AssignedBy: "Anubhav", AssignedTo: <select name="cars" id="cars" style={{ border: "none", width: 150, height: 30, borderRadius:5 }}><option value="volvo">All</option></select> },
        ]
    }
    render() {

        return (
            <>
                <div className="container">
                    <div className="row d-flex justify-content-between">
                        <p className="text1">Create Project</p>
                        <p className="text2">Module: Fuso Value Parts</p>
                    </div>
                </div>
                <div className="container container-dropwown">
                    <div className="row">
                        <div className="col-lg-3"><Dropdown style={Dropdown1} para={'Project ID'} pstyle={pstyle} /></div>
                        <div className="col-lg-6"> <form>
                            <div className="form-group">
                                <label htmlFor="usr" className="required-field projectDesc"  >Project Description</label>
                                <input type="text" placeholder="Enter Description" className="form-control" id="usr" />
                            </div>
                        </form></div>
                        <div className="col-lg-3"><Dropdown style={Dropdown1} para={'Project ID'} pstyle={pstyle} /></div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3"><Dropdown style={Dropdown1} para={'Project ID'} pstyle={pstyle} /></div>
                        <div className="col-lg-6"><Dropdown style={Dropdown2} para={'Project ID'} pstyle={pstyle} /></div>
                        <div className="col-lg-3">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="usr" className="required-field projectDesc">Name:</label>
                                    <input type="text" className="form-control" id="usr" placeholder="Enter Description" />
                                </div>
                            </form></div>
                    </div>
                </div>
                <div className="container table_container">
                <div className="row">
                    <p className="p">IL Gate Details</p>
                    <table className="table table-borderless">
                        <thead>
                            <tr className="table-heading">
                                <th scope="col">Select</th>
                                <th scope="col">IL Gate Serial</th>
                                <th scope="col">IL Gate Title</th>
                                <th scope="col">Start Date</th>
                                <th scope="col">End Date</th>
                                <th scope="col">Assigned by</th>
                                <th scope="col">Assigned to</th>


                            </tr>
                        </thead>
                        {this.state.user.map(item => (
                            <tbody>
                                <tr key={item.id} className="table-item">
                                    <td>{item.select}</td>
                                    <td>{item.IGate}</td>
                                    <td>{item.ILTitle}</td>
                                    <td> {item.StartDate}</td>
                                    <td>{item.EndDate}</td>
                                    <td>{item.AssignedBy}</td>
                                    <td>{item.AssignedTo}</td>

                                </tr>
                            </tbody>
                        ))}
                    </table>

                    <div className="toggle-container">
                        <span className="toggle"> Project On-Hold</span>
                        <RadioButton />
                        <span className="toggle" style={{ marginLeft: 71 }}>Project Drop</span>
                        <RadioButton />
                    </div>
                    </div>
                </div>
                <div className="divButton">
                    <button className="createText">Cancel</button>
                    <button className="submitText">Submit & Create</button>

                </div>
            </>
        );
    }
}

const pstyle = {
    color: " #A0A7B4",
    fontSize: 12,
    fontWeight: "bold",
    fontFamily: "Montserrat",
}

const Dropdown1={
    height: 35, 
    width: 250, 
    borderRadius: 5, 
    border:"none"
}
const Dropdown2={
    height: 35, 
    width: 540, 
    borderRadius: 5, 
    border:"none"

}
const requiredField={
        color: "#d00",
        content: "*",
        position: "absolute",
        marginLeft: 3,
        top: 5,
}

export default CreateProject;



