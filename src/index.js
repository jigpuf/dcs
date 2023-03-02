import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//All this is standard.  App component is being called in this components
//so it needs to be imported.

ReactDOM.render(<App />, document.getElementById('root'));
//This puts the DOM into the root that lives in index.html


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
