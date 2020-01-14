import React, { Component } from 'react';
import { Link, Route, BrowserRouter, Switch } from 'react-router-dom';
import asyncComponent from './asyncComponent';
import './index.css';
// import A from './components/a.jsx'
// import B from './components/b.jsx'
// import C from './components/c.jsx'
// 修改引入方式
const A = asyncComponent(() => import('./components/a.jsx'))
const B = asyncComponent(() => import('./components/b.jsx'))
const C = asyncComponent(() => import('./components/c.jsx'))
export default class LazyLoadLearning extends Component {
  render(){
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Link to='/a'>to a组件</Link>---
            <Link to='/b'>to b组件</Link>---
            <Link to='/c'>to c组件</Link>---
            <Link to='/'>index</Link>
            <hr/>
            <Switch>
              <Route path='/a' component={A}/>
              <Route path='/b' component={B}/>
              <Route path='/c' component={C}/>
              <Route path='/' component={() => <div>index</div>}/>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

/**
 * new webpack.optimize.CommonsChunkPlugin('vender','vender.js')
 */