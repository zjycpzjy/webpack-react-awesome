// const element = document.createElement('div');
// element.className = "custom";
// element.innerText = "hello world";
// const dom = document.getElementById('root');
// dom.appendChild(element);
import React from 'react';
import ReactDom from 'react-dom';
import App from './pages/App';

ReactDom.render(<App/>,document.getElementById('root'));