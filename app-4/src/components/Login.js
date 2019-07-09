import React, { Component } from 'react'


export default class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
    }
    handleUsername(e) {
        this.setState({
            username: e
        })
    }
    handlePassword(e) {
        this.setState({
            password: e
        })
    }
    hadleLogin = () => {
        alert(`Username: ${this.state.username} Password: I'll never tell...` )
    }
    render() {
        return (
            <div>
                <input onChange={e => this.handleUsername(e.target.value)} placeholder='username' type='text' />
                <input onChange={e => this.handlePassword(e.target.value)} placeholder='password' type='text'/>
                <button onClick={this.hadleLogin}>Login, NOW</button>
            </div>
        )
    }
}