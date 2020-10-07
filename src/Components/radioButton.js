
import React, { Component } from 'react';
import './radioButton.css'
class RadioButton extends React.Component {
  render() {

    return (
        <>
         <input
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
       
  </>
    );
  }
}

export default RadioButton;

