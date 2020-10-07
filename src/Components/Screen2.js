import React, { Component } from 'react';
import DashboardDetails from './dashboardDetails'
import TableData from './table'
import './table.css'


  const user = [
    { id: 4, Pd: "Pj454321", ProjectType: "New Development", ProjectD: "A/c Blower", safety: "yes", AplicableMarks: "Region1", NoOfPart: 2, CMimpact: "87Mi JPY", CurrentIl: 4, Status: "Delay", but:"Delayed" },
  ]
export default class Screen2 extends Component {
  render() {
    return (
        <>
        <DashboardDetails/>
        <TableData user ={user} className ="yellow"/>
      </>
    );
  }
}
