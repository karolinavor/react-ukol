import React, { Component } from 'react';
import BodyCell from './BodyCell';

class BodyRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
			row: null
		}
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    componentDidMount() {
		this.setState({
            row: this.props.row
        })
	}

    onChangeHandler(e) {
        let rowName = this.state.row[0];
        let value = null;
        let type = false;
        if (e.target.type === "checkbox") {
            if (e.target.checked) {
                type = "plus";
            } else {
                type = "minus";
            }
            value = parseInt(e.target.previousSibling.data);
        } else if (e.target.type === "number") {
            if (e.target.value > 0) {
                value = parseInt(e.target.value);
            }
            type = "other";
        }    
        this.props.onChange(rowName, value, type);
    }

	render() {
		return (
			<tr onChange={this.onChangeHandler}>
                {
                    this.props.row.map && this.props.row.map((column, colId) => (
                        <BodyCell column={column} colId={colId}>
                            {colId !== 0 ? <input type="checkbox" /> : ''}
                        </BodyCell>
                    ))
                }
                <BodyCell type={this.props.type} onChange={this.onChangeHandler}>
                    <input type="number" min="0" max="999" />
                </BodyCell>
            </tr>
		);
	}
}

export default BodyRow;