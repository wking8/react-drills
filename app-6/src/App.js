import React, { Component } from "react";
import "./App.css";
import Input from './components/Input'

class App extends Component {
  constructor() {
    super()
    this.state = {
        input: '',
        list: []
    }
}
addToList = (e) => {
  this.setState({
    input: e
  })
}
handleAdd = (e) => {
  this.setState({
    list: [...this.state.list, this.state.list],
    input: ''
  })
}
  render() {
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <Input handleAdd={this.handleAdd}/>
      </div>
    );
  }
}

export default App;
