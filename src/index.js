import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'html5-player/libs/assets/css/style.css';
// 换肤
// import App from './changeColor/index.jsx';
// 路由切换相关点
import App from './App.js';
// import App from './App';
// import App from './react-learning/app.js';
// import App from './component/context/index';
// import App from './component/Hooks';
// 按需加载
// import App from './lazyLoadLearning';
// import App from './component/Hooks/index.js'
// import App from './component/test/index.js'
// import App from './videoTest/index.jsx'

// 打包后的loading使用
// import PublicComponent from './publicComponent/index.js'

// 打包后的pagination
// import Pagination from './pagination/index.jsx'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
