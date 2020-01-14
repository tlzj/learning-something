import React, { Component } from 'react';
import { Consumer } from './context.js'
export default class Middle extends Component {
  render(){
    const obj = this.props
    console.log('button', this.props)
    return (
      <Consumer>
        {
          theme => {
            return <button {...obj} style={{
              backgroundColor: theme.background
            }} />
          }
        }
      </Consumer>
    )
  }
}