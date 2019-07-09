import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super()
    this.state = {
      typedList: '',
      scotch: ['Clynelish', 'Ardbeg', 'Lagavulin', 'Laphroaig', 'Glenfarclas', 'Glenkinchie', 'Bowmore', 'Yamazaki', 'Talisker', 'Balvenie']
    }
  }
  handleTyping(e) {
    this.setState({
      typedList: e
    })
  }
  render() {
    let scotchesToDrink = this.state.scotch
      .filter(el => {
        return el.toLowerCase().includes(this.state.typedList.toLowerCase())
      })
      .map((el, i) => {
        return <h2>{++i} {el}</h2>
      })
      console.log(this.state.scotch.filter(el => {
        return el.includes(this.state.typedList)
      }))
    return <div className='App'>
      <input onChange={e => this.handleTyping(e.target.value)} type='text' />
      {scotchesToDrink}
    </div>
  }
}

export default App;
