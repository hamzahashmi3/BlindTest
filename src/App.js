import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import MainLayoutRoute from "./components/higherOC/MainLayout";
import LayoutRoute from "./components/higherOC/Layout";
import Home from './components/home';
import BlindTest from './components/blindTest';
import ColorBlindExercises from './components/ColorBlindExercises/ColorBlindExercises';
import Doctors from './components/Doctors/doctors';
import About from './components/about';
import Contact from './components/contact';
import StartTest from './components/blindTest/startTest'; 
import ColorArrangementExercise from './components/ColorBlindExercises/ColorArrangementExercise/colorArrangementExercise';
import ColorMatchingExercise from './components/ColorBlindExercises/colorMatchngExercise/colorMatchingExercise';
import colorNamingExercise from './components/ColorBlindExercises/colorNamingexercise/colorNamingExercise';
import DoctorDetail from './components/Doctors/doctorDetail';
import Appoinntments from './components/layoutSection/showAppointment';
import ResultComplete from './components/blindTest/resultComplete'

class App extends Component{  

  render(){
    
      return (
        <React.Fragment>
            {/* <Header /> */}
              <Switch>
                <Route exact path="/">
                  <Redirect to="/home" />
                </Route>
                {/* <Appoinntments /> */}
                <MainLayoutRoute path="/home" exact component={Home} />
                <MainLayoutRoute path="/blindtest" exact component={BlindTest} />

                <LayoutRoute path="/startTset" exact component={StartTest} />
                
                <MainLayoutRoute path="resultComplete" exact Component={ResultComplete} />
                <MainLayoutRoute path="/ColorBlind-Exercises" exact component={ColorBlindExercises} />
                <MainLayoutRoute path="/colorarrangementexercise" exact component={ColorArrangementExercise} />
                <MainLayoutRoute path="/colormatchingexercise" exact component={ColorMatchingExercise} />
                <MainLayoutRoute path="/colornamingexercise" exact component={colorNamingExercise} />
                <MainLayoutRoute path="/doctors" exact component={Doctors} />
                <MainLayoutRoute path="/doctordetail" exact component={DoctorDetail} />
                <MainLayoutRoute path="/about" exact component={About} />
                <MainLayoutRoute path="/contact" exact component={Contact} />
              </Switch>
      </React.Fragment>
  );
}
}
export default App;
