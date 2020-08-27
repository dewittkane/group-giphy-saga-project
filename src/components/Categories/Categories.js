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
            {this.props.reduxState.categories.map(category => (
                <button>Category Name</button>
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