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

  switchNameHandler = () => {
    // DONT DO THIS: this.state.persons[0].name = "Trung Trinh";
    this.setState({
      persons: [
        { name: "Trinh Quang Trung", age: 28 },
        { name: "My new Dude", age: 29 },
        { name: "Steph", age: 46 },
      ],
    });
  };

  render() {
    return (
      <div className='App'>
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
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

// import React from "react";
// import "./App.css";
// import Person from "./Person/Person.js";

// function App() {
//   return (
//     // The html here will be compiled to javascript eventually
//     // With the use of JSX
//     <div className='App'>
//       <h1>Hello Im a React App</h1>
//       <button>Switch Name</button>
//       <Person name='Trung' age='21'></Person>
//       <Person name='Manu' age='29'>
//         My Hobbies: Racing
//       </Person>
//       <Person name='Stephanie' age='26'></Person>
//     </div>
//   );

//   // The code above will be compiled into:
//   // This is why you need to import React even though
//   // you dont use it at all
//   // return React.createElement(
//   //   "div",
//   //   { className: "App" },
//   //   React.createElement("h1", null, "Hello Im a React App")
//   // );
// }

// export default App;
