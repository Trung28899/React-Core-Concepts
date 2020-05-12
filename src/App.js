// // Original React:
import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 },
    ],
    otherState: "some other value",
  };

  switchNameHandler = (newName) => {
    // DONT DO THIS: this.state.persons[0].name = "Trung Trinh";
    this.setState({
      persons: [
        { name: "Trinh Quang Trung", age: 28 },
        { name: "My new Dude", age: 29 },
        { name: newName, age: 46 },
      ],
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Trinh Quang Trung", age: 28 },
        { name: event.target.value, age: 29 },
        { name: "Nam Nguyen", age: 46 },
      ],
    });
  };

  // Using bind() to pass a new name
  // Click the button and then the 2nd paragraph to see the output
  render() {
    const styleButton = {
      backgroundColor: "white",
      font: "inherit",
      border: "1x solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    return (
      <div className='App'>
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={styleButton}
          onClick={() => {
            this.switchNameHandler("Tuan Minh Nguyen");
          }}
        >
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          // Passing method reference, now can use it in Person.js
          // naming is up to you, can be 'click or whatever you want'
          click={this.switchNameHandler.bind(this, "Haider Ibrahim")}
          changed={this.nameChangedHandler}
        >
          My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;

// REACT HOOK:
// import React, { useState, Component } from "react";
// import "./App.css";
// import Person from "./Person/Person";

// const App = (props) => {
//   This is how you use state in Hook
//   useState() return array of 2 things:
//   - A updated state object
//   - A function to update the states in the objects and rerender the page
//   Replace this.state with personState
//   const [personState, setPersonState] = useState({
//     persons: [
//       { name: "Max", age: 28 },
//       { name: "Manu", age: 29 },
//       { name: "Stephanie", age: 26 },
//     ],
//   });

//   const switchNameHandler = () => {
//     setPersonState({
//       persons: [
//         { name: "Trinh Quang Trung", age: 28 },
//         { name: "My new Dude", age: 29 },
//         { name: "Steph", age: 46 },
//       ],
//     });
//   };

//   return (
//     <div className='App'>
//       <h1>Hi, I'm a React App</h1>
//       <p>This is really working!</p>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person
//         name={personState.persons[0].name}
//         age={personState.persons[0].age}
//       />
//       <Person
//         name={personState.persons[1].name}
//         age={personState.persons[1].age}
//       >
//         My Hobbies: Racing
//       </Person>
//       <Person
//         name={personState.persons[2].name}
//         age={personState.persons[2].age}
//       />
//     </div>
//   );
// };

// export default App;
