import React, { Component } from 'react';
import HeadCell from './HeadCell';

class HeadRow extends Component {
	render() {
		return (
			<tr onChange={this.onChangeHandler}>
                {
                    this.props.row.map && this.props.row.map((column) =>
                    (
                        <HeadCell column={column}/>
                    ))
                }
                <HeadCell column={"Other"} />
            </tr>
		);
	}
}

export default HeadRow;