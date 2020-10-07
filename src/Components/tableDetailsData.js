import React, { Component } from 'react';
import './tableDetailsData.css';
import RadioButton from "./radioButton";
import Dropdown from './Dropdown'
import { red } from '@material-ui/core/colors';

export default class TableDetailsData extends Component {
  render() {
    return (
      <>
        <div className="container d-flex justify-content-end checkbox-txt"><p>Switch To Steps View</p></div>
        <div className="container prepapration-heading">
          <div className="row prepapration-space">
            <div className="col-sm"><label className="p-Text"> IL Description </label>
              <br />
              <p className="paraData-txt">IL1 : Prepapration</p></div>
            <div className="col-sm"><label className="p-Text"> IL Gate Approver </label>
              <br />
              <p className="paraData-txt" >IL1 : Prepapration</p></div>
            <div className="col-sm"><label className="p-Text"> Start Date </label>
              <br />
              <input type="date" className="input-box"></input></div>
            <div className="col-sm"><label className="p-Text">End Date  </label>
              <br />
              <input type="date" className="input-box"></input></div>
            <div className="col-sm"><label className="p-Text"> Status</label>
              <br />
              <p className="green-text">Launched</p></div>
            <div className="col-sm"></div>
          </div>
          <div className="row" style={{ padding: "0px 20px" }}>
            <div className="col-sm"><label className="p-Text"> IL Description </label>
              <br />
              <input type="input" className="input-image" style={{backgroundImage:'url(assets/img/upload.png)'}} />
            </div>
            <div className="col-sm"><label className="p-Text"> IL Description </label>
              <br />
              <input type="input" className="input-image" style={{ backgroundImage:'url(assets/img/upload.png)',}}  />
            </div>
            <div className="col-sm"><label className="p-Text"> IL Description </label>
              <br />
              <textarea className="text-area-input"></textarea>
            </div>
          </div>
          <dvi className="row" style={{ marginLeft: 20, marginTop: 60 }}>

            <span><input type="checkbox" /></span>
            <p className="checkbox-txt" style={{ marginLeft: 5 }} >Online Approval Required</p>
            <span className="checkbox-txt" style={{ marginLeft: 363 }}>Mark as Completed</span>
            <RadioButton />

          </dvi>


        </div>
      </>
    );
  }
}


const drop = {
  paddingBottom: 20,
}

const pstyle = {
  backgroundColor: "red"
}

