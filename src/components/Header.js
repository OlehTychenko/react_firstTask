import React, { Component } from 'react';
import HeaderValue from './HeaderValue';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        };
    }
    handleChange = e => this.setState({ inputValue: e.target.value })
    render() {
        return (
            <div>
                <input value={this.inputValue} placeholder='Write something' onChange={this.handleChange}></input>
                <HeaderValue value={this.state.inputValue} />
            </div>
        )
    }
};

export default Header;