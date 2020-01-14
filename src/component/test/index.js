import React, { Component } from 'react';
import Item from './item.js'
export default class Test extends Component {
  state = {
    data: [
      {name: 'zs', age: 18},
      {name: 'ls', age: 19}
    ]
  }
  changeData = () => {
    this.setState({
      data: [
        {name: 'zs123', age: 18},
        {name: 'ls123', age: 19},
        {name: 'ls', age: 19}
      ]
    })
  }
  render(){
    return (
      <div>
        {
          this.state.data.map((item, index) => <Item list={item} key={index}/>)
        }
        <button onClick={this.changeData}>切换</button>
      </div>
    )
  }
}