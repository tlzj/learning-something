import React, { Component } from 'react';
import './index.css';
import { Button, message } from 'antd';
const colorArr = [
  {
    "@primary-color": "#f80",
    "@header-bg": "#0b1532",
    "@menu-bg": "#181c2a",
    "@gradient-bg":"linear-gradient(-180deg, lighten(@primary-color, 10%) 0%, @primary-color 50%, darken(@primary-color, 10%) 100%)",
    "@lightbg1": "lighten(@primary-color, 1%)",
    "@lightbg2": "lighten(@primary-color, 90%)",
  },
  {
    "@primary-color": "#1890ff",
    "@header-bg": "#f0f2f5",
    "@menu-bg": "#f3f3f3",
    "@gradient-bg":"linear-gradient(-180deg, lighten(@primary-color, 10%) 0%, @primary-color 50%, darken(@primary-color, 10%) 100%)",
    "@lightbg1": "lighten(@primary-color, 1%)",
    "@lightbg2": "lighten(@primary-color, 90%)",
  },
  {
    "@primary-color": "#74b1be",
    "@header-bg": "#2f3241",
    "@menu-bg": "#2f3242",
    "@gradient-bg":"linear-gradient(-180deg, lighten(@primary-color, 10%) 0%, @primary-color 50%, darken(@primary-color, 10%) 100%)",
    "@lightbg1": "lighten(@primary-color, 1%)",
    "@lightbg2": "lighten(@primary-color, 90%)",
  }
]
export default class ChangeColor extends Component{
  onchange = (index) => {
    console.log(colorArr[index - 1])
    window.less
    .modifyVars(colorArr[index - 1])
    .then(() => { })
    .catch(error => {
      message.error(`Failed to update theme`);
    });
  }
  render(){
    return (
      <div>
        <Button type='primary' onClick={this.onchange.bind(this, 1)}>antd 按钮 - 橙</Button>
        <Button type='primary' onClick={this.onchange.bind(this, 2)}>antd 按钮 - 蓝</Button>
        <Button type='primary' onClick={this.onchange.bind(this, 3)}>antd 按钮 - 青</Button>
      </div>
    )
  }
}