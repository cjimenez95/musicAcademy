import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './App.css';

import Nav from './components/Header';
import Footer from './components/Footer';


class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };
  render() {
    const { children } = this.props;
    return (
      <div className="App" >
        <header id="header">
          <Nav />
        </header>
        <body id="body" className="body">
          <br />
          {children}
          <br />
        </body>
        <footer id="footer">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;