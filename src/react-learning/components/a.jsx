import React, { Component } from 'react';
import Sub from './sub'
export default class A extends Component {
  constructor(props){
    super(props)
    this.myRef = React.createRef()
    this.myRef1 = React.createRef()
  }
  componentDidMount(){
    console.log(this.myRef.current)
    
  }
  render(){
    return <div>
      <Sub ref={this.myRef} />
      {/* <div ref={this.myRef}>one</div>
      <div ref={this.myRef1}>two</div> */}
    </div>
  }
}


/// React.PureComponent ---- 用于react优化，但是只能用于浅比较，对于数组和对象的比较有问题