import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super()
    this.state = {
      scotch: ['Clynelish', 'Ardbeg', 'Lagavulin', 'Laphroaig', 'Glenfarclas', 'Glenkinchie', 'Bowmore', 'Yamazaki', 'Talisker', 'Balvenie']
    }
  }
  render() {
    let scotchesToDrink = this.state.scotch.map((e, i) => {
      return <h2> {++i} {e}</h2>
    })
    return <div className='App'>
      {scotchesToDrink}
    </div>
  }
}

export default App;
