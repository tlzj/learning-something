import React, { Component } from 'react';
import { Provider, themes } from './context.js'
import Middle from './middle'
export default class ContextIndex extends Component {
  constructor(props){
    super(props)
    this.state = {
      theme: themes.light
    }
  }
  toggleTheme = () => {
    this.setState(state => ({
      theme: state.theme === themes.dark ? themes.light : themes.dark
    }))
  }
  handle = (e) => {
    console.log(e);
    console.log(e.type);
    e.persist()
    setTimeout(() => {
      console.log(e.type)
    }, 1000)
  }
  render(){
    return (
      <div>
        <button onClick={this.handle}>test</button>
        <Provider value={this.state.theme}>
          <Middle changeTheme={this.toggleTheme} />
        </Provider>
      </div>
    )
  }
}