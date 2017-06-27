import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import App from './container/App';
import Login from './component/login';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
	<Router>
	  <Switch>
		<Route exact path="/" component={Login}/>
		<Route path="/home" component={App}/>
	  </Switch>
	</Router>
	, document.getElementById('root'));
registerServiceWorker();
