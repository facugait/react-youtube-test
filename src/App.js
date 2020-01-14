import React from 'react';
import Nav from './components/Nav';
import Videos from './components/Videos';
import Register from './components/Register';
import Login from './components/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/home' exact component={Home} />
          <Route path='/videos' component={Videos} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
	<div>
		<h1 className="top">Home</h1>
	</div>
)

export default App;
