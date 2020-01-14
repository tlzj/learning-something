import React, { Component } from 'react';
export default class One extends Component {
  render(){
    const { match, history, location} = this.props
    console.log('history-one', history)
    console.log('match-one', match)
    console.log('location-one', location)
    return (
      <React.Fragment>
        One组件
      </React.Fragment>
    )
  }
}