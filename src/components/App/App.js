import React, { Component } from 'react';
import SearchView from '../SearchView/SearchView';
import Favorites from '../Favorites/Favorites.jsx'
import {connect} from "react-redux";
import { HashRouter as Router, Route, Link } from 'react-router-dom'


class App extends Component {

  componentDidMount = () => {
    
  }

  render() {
    return (
      <Router>
        <div>
          <h1>Giphy Search!</h1>
          <ul>
            <li><Link to="/">Search</Link></li>
            <li><Link to="/favorites">Favorites</Link></li>            
          </ul>
        </div>
        
        <Route path="/" component={SearchView} />
        <Route path="/favorites" component={Favorites} />

      </Router>
    );
  }
  
}

export default App;
