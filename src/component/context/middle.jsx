import React, { Component } from 'react';
import ThemedButton from './themedButton';
export default class Middle extends Component {
  constructor(props, context){
    super(props);
    console.log('context', context)
  }
  componentWillReceiveProps(nextProps, nextContext){
    console.log('nextContext', nextContext)
  }
  render(){
    console.log('middle', this.props)
    return (
      <ThemedButton onClick={this.props.changeTheme}>
        Change Theme
      </ThemedButton>
    )
  }
}