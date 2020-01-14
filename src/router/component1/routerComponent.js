import React, { Component } from 'react';
import One from './routerTest/one.js'
import Two from './routerTest/two.js'
import Three from './routerTest/three.js'
import CommonComponent from './routerTest/commonComponent.js'
import {
  Link,
  Route,
} from 'react-router-dom';
export default class RouterComponent extends Component {
  goOneComponent = () => {
    // query传参
    const { match, history, location} = this.props
    // console.log('history', history)
    // console.log('match', match)
    // console.log('location', location)
    const data = {
      name: 'zs',
      age: 18
    }
    history.push({
      pathname: `${match.url}/one`,
      query: data,
      search: '?a=122&b=809098'
    })
  }
  goTwoComponent = () => {
    // query传参
    const { match, history, location} = this.props
    const data = {
      name1: 'zs',
      age1: 18
    }
    history.push({
      pathname: `${match.url}/two`,
      state: data, // state传参刷新后数据依然存在
      onlyKey:data,
      search: '?a=122&b=809098'
    })
  }
  render(){
    const { match } = this.props;
    console.log(match,'match')
    return (
      <React.Fragment>
        <Link to={`${match.url}/one`}>导航到one组件</Link>---
        <Link to={`${match.url}/two`}>导航到one组件</Link>---
        <Link to={`${match.url}/three`}>导航到one组件</Link>
        <div>
          <h3>使用history跳转路由</h3>
          <div style={{
            textAlign: 'center'
          }}>
            <button onClick={this.goOneComponent}>1-query传参</button>
            <button onClick={this.goTwoComponent} style={{ marginLeft: '10px'}}>2-state传参</button>
          </div>
          <div>
            <Three />
          </div>
        </div>
        <hr />
        {/* <Route path={`${match.url}/:id`} component={CommonComponent}/> */}
        <Route path={`${match.url}/one`} component={One}/>
        <Route path={`${match.url}/two`} component={Two}/>
        <Route path={`${match.url}/three`} component={Three}/>
      </React.Fragment>
    )
  }
}