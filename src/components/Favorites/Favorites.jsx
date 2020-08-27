import React, { Component } from 'react';
import { connect } from 'react-redux';
import Categories from '../Categories/Categories.js'

class Favorites extends Component {
    render() {
        return(
          <Categories />
        );
    };
};

const mapStateToProps = (reduxState) => {
  return {
    reduxState
  }
}
export default connect(mapStateToProps)(Favorites);