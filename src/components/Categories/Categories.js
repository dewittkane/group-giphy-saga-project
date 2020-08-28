import React, { Component } from 'react';
import { connect } from 'react-redux';

class Categories extends Component {
    componentDidMount() {
        this.props.dispatch({
            type: 'FETCH_CATEGORIES'
        })
    }
    render() {
        return(
            <>
            {this.props.reduxState.categoriesReducer.map(category => (
                <button key={category.id}>{category.name}</button>
            ))}
            </>
        );
    };
};

const mapStateToProps = (reduxState) => {
  return {
    reduxState
  }
}
export default connect(mapStateToProps)(Categories);