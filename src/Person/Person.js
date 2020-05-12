// This is an example of component, look in App.js also
// to understand how to use a component

import React from "react";
import "./Person.css";

// Pass props here to get the field in the JSX
const person = (props) => {
  return (
    <div className='Person'>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old !!
      </p>
      <p>{props.children}</p>
      <input type='text' onChange={props.changed} />
    </div>
  );
};

export default person;
