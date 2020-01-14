import React, { Component } from 'react';
import PaginationComponent from './component/index.js';
export default class Pagination extends Component {
  change(page, pagesize, type){
    console.log(page, pagesize, type)
  }
  render(){
    return <PaginationComponent 
      current={0}
      total={500}
      pagesize={10}
      onChange={this.change}
    />
  }
}