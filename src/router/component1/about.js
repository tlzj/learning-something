import React, { Component } from 'react';
export default class About extends Component {
	render() {
		console.log('match',this.props.match)
		console.log('history', this.props.history)
		console.log('location', this.props.location)
		return (
			<React.Fragment>
				about组件
			</React.Fragment>
		)
	}
}