import React, { Component } from 'react'
import ComponentB from './ComponentB'

class ComponentA extends Component {
    constructor(props) {
        super(props)
        this.state = {
            numb: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick = e => this.setState({ numb: Math.random() * 1000 })
    render() {
        return (
            <div>
                <ComponentB numbFuncValue={this.handleClick}/>
                {this.state.numb}
            </div>
        )
    }
}

export default ComponentA;