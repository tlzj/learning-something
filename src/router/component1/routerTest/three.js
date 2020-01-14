import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Three extends Component {
  render(){
    const { match, history, location} = this.props
    // console.log('history-three', history)
    // console.log('match-three', match)
    // console.log('location-three', location)
    return (
      <React.Fragment>
        Three组件
      </React.Fragment>
    )
  }
}
export default withRouter(Three);