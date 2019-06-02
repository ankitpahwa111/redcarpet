import React, { Component } from 'react';
import Navbar from './components/Layout/Navbar';
import { BrowserRouter, Route } from 'react-router-dom'
import { Switch } from 'react-router-dom'
import Dashboard from './components/Dashboard/dashboard';
import Footer from './components/Layout/Footer'
import StoreList from './components/Store/StoreList'
import Signin from './components/Auth/signin'
import StoreDetails from './components/Store/StoreDetails'
//import Create from './components/Rrojects/createProject';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />

          <Switch>
            <Route exact path='/' component={Dashboard}></Route>
            <Route exact path = '/stores' component = {StoreList} ></Route>
            <Route exact path = '/stores/store' component = {StoreDetails}></Route>
            <Route path="/login" component={Signin}></Route>
          </Switch>
          <Footer/>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
