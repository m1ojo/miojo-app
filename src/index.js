import React from 'react';
import ReactDOM from 'react-dom';
import 'flexboxgrid';
// import App from './App';
import SubmitCode from './components/SubmitCode';
import * as serviceWorker from './serviceWorker';

// Delete this after testing and prototyping

ReactDOM.render(<SubmitCode />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
