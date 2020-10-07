import React     from 'react';
import Select from 'react-select';
 
export default function Dropdown(props){
    return (
      <div>
          <p style={props.pstyle}>{props.para}</p>
  <select name="cars" id="cars" style={props.style}>

    <option value="volvo">All</option>
    <option value="saab">Saab</option>
    <option value="opel">Opel</option>
    <option value="audi">Audi</option>
  </select>
      </div>
    );
  }


