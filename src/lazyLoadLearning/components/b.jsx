import React, { Component } from 'react';
import './b.css';
export default class B extends Component {
  componentDidMount(){
    console.log('bbbbb')
  }
  render(){
    return (
      <div className='b'>
        b
        <a href='/about.html'>about</a>
      </div>
    )
  }
}