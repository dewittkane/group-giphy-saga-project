import React, { Component } from 'react';
import './App.css';
import {connect} from "react-redux";
//import createSagaMiddleware from 'redux-saga'

class App extends Component {

return(

    componentDidMount = () => {
        this.searchGifs();
      }
    
      searchGifs = () => {
        this.props.dispatch({ type: 'SEARCH_GIFS'})
      }
    

)

}
export default connect(mapPropsToState)(App);
