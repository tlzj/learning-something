import React, { Component } from 'react';
import {
  BrowserRouter, 
  Route, 
  NavLink, 
  Switch,
  Redirect,
  Link,
  Prompt
} from 'react-router-dom';
import Index from './router/component1/index'
import About from './router/component1/about'
import Topics from './router/component1/topics'
import RouterComponent from './router/component1/routerComponent'

import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            {/* 在使用NavLink时，'/'最好加上exact,避免处于激活状态，出现激活的样式,另外isActive给一个navLink加上后，
              点击任何navLink都会触发对应的函数,可以根据match存在与否判断是不是点击的绑定isActive的navLink */}
            {/* <Prompt message="确定要切换路由吗？" /> */}
            <NavLink to='/' exact activeClassName='tlzj-active'>首页</NavLink>---
            <NavLink to='/about/123/789/' activeClassName='tlzj-active' isActive={(match, location) => {
              // console.log('about')
              // console.log('激活',match, location)
            }}>关于页面</NavLink>---
            <NavLink to='/topics' activeClassName='tlzj-active' isActive={(match, location) => {
              // console.log('topics')
              // console.log('激活',match, location)
            }}>topics</NavLink>---
            <NavLink to='/topics1' activeClassName='tlzj-active' isActive={(match, location) => {
              // console.log('topics')
              // console.log('激活',match, location)
            }}>topics1</NavLink>---
            <NavLink to='/render' activeClassName='tlzj-active'>render</NavLink>---
            <NavLink to='/router' activeClassName='tlzj-active'>react路由传参和路由跳转</NavLink>
            <hr/>
            <Switch>
              <Route path='/' exact component={Index}/>
              <Route path='/about/:id/:key' strict component={About}/>
              <Route path='/topics' component={Topics}/>
              <Route path='/topics1' component={Topics}/>
              <Route path='/render' render={() => '组件render'}/>
              <Route path="/home" render={()=><Redirect to="/render"/>}/>
              <Route path="/router" component={RouterComponent}/>
              {/* <Redirect from='/' to='/render'></Redirect> */}
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

/**
 * 关于history的一些知识点
 * 分类：
 * browser history" - history 在 DOM 上的实现，用于支持 HTML5 history API 的浏览器
 * "hash history" - history 在 DOM 上的实现，用于旧版浏览器。
 * "memory history" - history 在内存上的实现，用于测试或非 DOM 环境（例如 React Native）。
 * 
 * history 对象通常具有以下属性和方法：
 *   length: number 浏览历史堆栈中的条目数
 *   action: string 路由跳转到当前页面执行的动作，分为 PUSH, REPLACE, POP
 *   location: object 当前访问地址信息组成的对象，具有如下属性：
 *      ---pathname: string URL路径
 *      ---search: string URL中的查询字符串
 *      ---hash: string URL的 hash 片段
 *      ---state: string 例如执行 push(path, state) 操作时，location 的 state 将被提供到堆栈信息里，state 只有在 browser 和 memory history 有效。
 *   push(path, [state]) 在历史堆栈信息里加入一个新条目。
 *   replace(path, [state]) 在历史堆栈信息里替换掉当前的条目
 *   go(n) 将 history 堆栈中的指针向前移动 n。
 *   goBack() 等同于 go(-1)
 *   goForward 等同于 go(1)
 *   block(prompt) 阻止跳转
 * 注：history 对象是可变的，因此建议从 <Route> 的 prop 里来获取 location，而不是从 history.location 直接获取。这样可以保证 React 在生命周期中的钩子函数正常执行
 * 
 * 
 * 
 * 其他
 * 当一个 Route 没有 path 时，它会匹配一切路径。
 * 
 * 
 * 
 * match对象
 *   ---isExact：刚才已经说过这个关键字，表示是为作全等匹配
 *   ---params:path中包含的一些额外数据
 *   ---path:Route组件path属性的值
 *   ---url:实际url的hash值
 * 
 * 
 * 关于路由传参的相关问题：https://blog.csdn.net/qq_23158083/article/details/68488831
 * query传参：
 *      <Route path='/user' component={UserPage}></Route>
 *      -------------------------------------------------
 *      var data = {id:3,name:sam,age:36};
 *      var path = {
 *        pathname:'/user',
 *        query:data,
 *      }
 *      -----------------------
 *      <Link to={path}>用户</Link>
 *      --------------------------
 *      2.hashHistory.push(path);
 * 获取：
 *      var data = this.props.location.query;
 *      var {id,name,age} = data;
 * 注：query方式可以传递任意类型的值，但是页面的URL也是由query的值拼接的，URL很长
 * 
 * 
 * state传参：(刷新之后数据还存在)
 *      <Route path='/user' component={UserPage}></Route>
 *       ------------------------
 *       var data = {id:3,name:sam,age:36};
 *       var path = {
 *          pathname:'/user',
 *          state:data,
 *       }
 *       ------------------------
 *       <Link to={path}>用户</Link>
 *       -----------------------------
 *       hashHistory.push(path);
 *       -------------------
 *       
 *       获取：
 *       var data = this.props.location.state;
 *       var {id,name,age} = data;
 * 
 * 
 * 
 * this.setState({})
 * this.setState((prevState, props) => {
 *    counter: prevState.counter + props.increment
 * })
 * 
 * *** 通过 bind 方式向监听函数传参，在类组件中定义的监听函数，事件对象 e 要排在所传递参数的后面
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
