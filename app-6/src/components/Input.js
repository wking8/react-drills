import React, { Component } from 'react'

export default class Input extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <input onChange={e => this.props.handleAdd(e)}placeholder='Enter New Task' type='text' />
                <button onClick={this.props.handleAdd}>Add</button>
                <h4>{this.props.list}</h4>
            </div>
        )
    }
}