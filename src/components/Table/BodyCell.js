import React, { Component } from 'react';

class BodyCell extends Component {
	render() {
		return (
			<td>
				<label>
					{this.props.column}{this.props.children}
				</label>
            </td>
		);
	}
}

export default BodyCell;