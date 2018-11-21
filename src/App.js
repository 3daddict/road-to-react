import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const hellowWorld = 'Welcome to the Road to Learn React';
    let person = {
      firstName: 'Mike',
      lastName: 'Salvati'
    }
    return (
      <div className="App">
        <h2>{hellowWorld}</h2>
        <p>by {person.firstName} {person.lastName}</p>
      </div>
    );
  }
}

export default App;
