import React, { Component } from 'react';
export default class Topics extends Component {
  constructor(props){
    super(props);
    console.log('---======render=====-----')
  }
  render (){
    console.log('----render');
    return (
      <React.Fragment>
        topics组件
      </React.Fragment>
    )
  }
}