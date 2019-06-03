import React, { Component } from 'react';
import Navbar from './components/Layout/Navbar';
import { BrowserRouter, Route } from 'react-router-dom'
import { Switch } from 'react-router-dom'
import Dashboard from './components/Dashboard/dashboard';
import Footer from './components/Layout/Footer'
import ReviewList from './components/Review/ReviewList'
import Signin from './components/Auth/signin'
import ReviewDetails from './components/Review/ReviewDetails'
//import Create from './components/Rrojects/createProject';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />

          <Switch>
            <Route exact path='/' component={Dashboard}></Route>
            <Route exact path = '/signin' component = {Signin} ></Route>
            <Route exact path = '/userwall' component = {Signin}></Route>
            <Route path="/adminwall" component={Signin}></Route>
          </Switch>
          <Footer/>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
