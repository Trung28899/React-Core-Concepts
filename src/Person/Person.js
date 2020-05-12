// This is an example of component, look in App.js also
// to understand how to use a component

import React from "react";

// Pass props here to get the field in the JSX
const person = (props) => {
  return (
    <div>
      <p>
        I'm a {props.name} and I am {props.age} years old !!
      </p>
      <p>{props.children}</p>
    </div>
  );
};

export default person;
