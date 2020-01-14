import React, { Component } from 'react';
export default class Item extends Component {
  componentDidMount(){
    console.log(123)
  }
  render(){
    const { list } = this.props
    return (
      <div>
        <div>{list.name}</div>
        <div>{list.age}</div>
      </div>
    )
  }
}