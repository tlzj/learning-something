import React, { Component } from 'react';
import './index.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
export default class A extends Component {
    render(){
        return (
            <div>
                <h1 className='a'>a页面</h1>
                <a href="/about.html">跳转到关于</a>
                <img src="https://ss0.baidu.com/73F1bjeh1BF3odCf/it/u=3396401094,1208067996&fm=85&s=4A34AC434B9143F7CF60E0FF03004063" alt=""/>
            </div>
        )
    }
}