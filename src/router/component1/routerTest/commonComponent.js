import React, { Component } from 'react';
export default class CommonComponent extends Component {
  render(){
    const { match } = this.props;
    console.log(match, 'CommonComponent')
    return (
      <React.Fragment>
        CommonComponent组件----{match.params.id}
      </React.Fragment>
    )
  }
}