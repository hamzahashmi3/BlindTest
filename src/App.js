import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import BlindTest from './components/blindTest';
import ColorBlindExercises from './components/ColorBlindExercises/ColorBlindExercises';
import Doctors from './components/doctors';
import About from './components/about';
import Contact from './components/contact';
import StartTest from './components/startTest'; 

function App() {
  return (
    <Router>
      <Header />
      {/* <StartTest /> */}
        <Route path="/" exact component={Home} />
        <Route path="/blindtest" exact component={BlindTest} />
        <Route path="/startTset" exact component={StartTest} />
        <Route path="/ColorBlind-Exercises" exact component={ColorBlindExercises} />
        <Route path="/doctors" exact component={Doctors} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
      <Footer />
    </Router>
  );
}

export default App;
