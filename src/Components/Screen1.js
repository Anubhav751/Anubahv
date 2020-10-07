import React, { Component } from 'react';
import DashboardDetails from './dashboardDetails';
import TableData from './table';



  const user = [
    { id: 1, Pd: "Pj454321", ProjectType: "New Development", ProjectD: "A/c Blower", safety: "yes", AplicableMarks: "Region1", NoOfPart: 2, CMimpact: "87Mi JPY", CurrentIl: 4, Status: "Delay", but:"Launched"},
    { id: 2, Pd: "Pj454321", ProjectType: "New Development", ProjectD: "A/c Blower", safety: "yes", AplicableMarks: "Region1", NoOfPart: 2, CMimpact: "87Mi JPY", CurrentIl: 4, Status: "Delay", but: "Launched" },
    { id: 3, Pd: "Pj454321", ProjectType: "New Development", ProjectD: "A/c Blower", safety: "yes", AplicableMarks: "Region1", NoOfPart: 2, CMimpact: "87Mi JPY", CurrentIl: 4, Status: "Delay", but: "Launched" },
    { id: 4, Pd: "Pj454321", ProjectType: "New Development", ProjectD: "A/c Blower", safety: "yes", AplicableMarks: "Region1", NoOfPart: 2, CMimpact: "87Mi JPY", CurrentIl: 4, Status: "Delay", but: "Launched "},
  ];
export default class Screen1 extends Component {
  render() {
    return (
        <>
        <DashboardDetails />
        <TableData user ={user} className ="green"/>
      </>
    );
  }
}





