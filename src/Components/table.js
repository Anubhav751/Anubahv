import React, { Component } from 'react';
import './table.css'
import { NavLink, Link } from 'react-router-dom';
import { colors } from '@material-ui/core';


function TableData(props) {

    return (
      <>
        <div className="container" style={{ marginTop: 73 }}>
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
              {props.user.map(item => (
                
                <tbody>
                  <tr key={item.id} className="table-item">
                  <NavLink to="/tabledetails" style={{color:"black"}}>
                    <td>{item.Pd}</td>
                    </NavLink>
                    <td>{item.ProjectType}</td>
                    <td>{item.ProjectD}</td>
                    <td> {item.safety}</td>
                    <td>{item.AplicableMarks}</td>
                    <td>{item.NoOfPart}</td>
                    <td> {item.CMimpact}</td>
                    <td> {item.CurrentIl}</td>
                    <td className={props.className}>{item.but}</td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </>
    );
  }
export default TableData;



