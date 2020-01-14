import React, { Component } from 'react';
import './a.css';
export default class A extends Component {
  componentDidMount(){
    console.log('aaaaa')
  }
  render(){
    return (
      <div className='a'>a</div>
    )
  }
}