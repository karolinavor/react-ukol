import React, { Component } from 'react';

class HeadCell extends Component {
	render() {
		return (
			<th>
                {this.props.column}
            </th>
		);
	}
}

export default HeadCell;