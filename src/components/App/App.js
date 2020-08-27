import React, { Component } from 'react';
import SearchView from '../SearchView/SearchView';


class App extends Component {

  componentDidMount = () => {
    
  }

  render() {
    return (
      <>
      <div>
        <h1>Giphy Search!</h1>
      </div>
      <SearchView />

      </>
    );
  }
  
}

export default App;
