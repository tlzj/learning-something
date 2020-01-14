import React, { Component } from 'react';
export default class Two extends Component {
  componentDidMount(){
    console.log('-two----------didMount')
  }
  render(){
    const { match, history, location} = this.props
    console.log('history-two', history)
    console.log('match-two', match)
    console.log('location-two', location)
    return (
      <React.Fragment>
        Two组件
      </React.Fragment>
    )
  }
}