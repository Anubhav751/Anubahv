import React, { Component } from 'react';
import DashboardDetails from './dashboardDetails'
import Dropdown from './Dropdown';
import TableData from './table';

const user = [
  { id: 1, Pd: "Pj454321", ProjectType: "New Development", ProjectD: "A/c Blower", safety: "yes", AplicableMarks: "Region1", NoOfPart: 2, CMimpact: "87Mi JPY", CurrentIl: 4, Status: "Delay", but: "Launched" },

]
export default class Screen6 extends Component {
  render() {
    return (
      <>
        <DashboardDetails />
        <div className="container main-container" style={{ marginTop: 32 }}>
          <div className="row">
            <div className="row">
              <div className="col-lg ml-4 Dropdown-div" ><Dropdown style={Dropdown1} para={'IL Gate'} pstyle={pstyle1} reqe={"*"} /></div>
              <div className="col-lg Dropdown-div"><Dropdown style={Dropdown1} para={'Status'} pstyle={pstyle1} /></div>
            </div>
          </div>
        </div>
        <TableData user={user} className="black" />
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










