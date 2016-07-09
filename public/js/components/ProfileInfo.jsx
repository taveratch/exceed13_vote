import React from 'react';

var ProfileInfo = React.createClass({
	getInitialState() {
		return {
			id: 'b5812345678',
			group: 'eXceed13',
		};
	},

	changeGroup(id, group) {
		this.setState({
			id: id,
			group: group,
		});
	},

	render() {
		return (
			<div className="profile-info">
				<h3>{this.state.id}</h3>
				<p>{this.state.group}</p>
			</div>
		);
	}
});

module.exports = ProfileInfo;
