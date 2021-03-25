import React, { Component } from 'react';

class Button extends Component {
    render() {
        return (
            <button type="button" className="btn btn-primary" onClick={this.props.onClick}>{this.props.name}</button>
        );
    }
}

export default Button;