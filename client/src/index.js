// index.js
import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Home from './components/Home';
import About from './components/About';
import Battle from './components/Battle';
import NotFound from './components/NotFound';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

class Index extends React.Component {
	render() {
		return (
			  <Router>
					<div className="overlay">
						<Switch>
							<Route exact path='/' component={Home} />
							<Route exact path='/about' component={About} />
							<Route exact path='/battle' component={Battle} />
							<Route path="*" component={NotFound} />
						</Switch>
					</div>
			  </Router>
			);
	}
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);