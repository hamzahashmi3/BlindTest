import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/header';
import Home from './components/home';

function App() {
  return (
    <Router>
      <Header />
    <Home />
    {/* <Route path="/user" component={CreateUser} /> */}
</Router>
  );
}

export default App;
