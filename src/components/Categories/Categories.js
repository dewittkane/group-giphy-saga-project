import React, { Component } from 'react';
import { connect } from 'react-redux';

class Categories extends Component {
    componentDidMount() {
        this.props.dispatch({
            type: 'FETCH_CATEGORIES'
        })
    }

    handleCategoryAdd = (catId) => {
        this.props.dispatch({type: 'ADD_CATEGORY', payload: catId})
    }

    render() {
        return(
            <>
            {this.props.reduxState.categoriesReducer.map(category => (
                <button onClick={() => this.handleCategoryAdd(category.id)} key={category.id}>{category.name}</button>
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