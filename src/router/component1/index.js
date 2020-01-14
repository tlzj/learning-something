import React, { Component } from 'react';
import $ from 'jquery';
export default class Index extends Component {
	getList = () => {
		$.ajax({
			url: '/api/getList',
			type: 'post',
			success: function(data){
				console.log(data,123)
			}
		})
	}
	render() {
		return (
			<React.Fragment>
				组件Index
				----------------------
				<button onClick={this.getList}>获取后台数据</button>
			</React.Fragment>
		)
	}
}