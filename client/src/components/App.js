import React from 'react';
import {Route, Switch} from 'react-router-dom';
import About from './About';
import Home from './Home';
import Login from './RegisterLogin/Login';
import Register from './RegisterLogin/Register';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/register" component={Register}></Route>
      </Switch>
    </div>
  );
}

export default App;
