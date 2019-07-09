import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super()
    this.state = {
      text: ''
    }
  }
  updateText(e) {
    this.setState({
      text: e
    })
  }
  render() {
    return (
      <div className="App">
        <p>{this.state.text}</p>
        <input onChange={e => this.updateText(e.target.value)} type='text' />
      </div>
    );
  }
}

export default App;
