import React, { Component } from 'react';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import './App.css';

class App extends Component {

  state = {
    sideDrawerOpened: false
  }

  drawerToggleHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpened: !prevState.sideDrawerOpened};
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar drawerToggleHandler={this.drawerToggleHandler}/>
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
