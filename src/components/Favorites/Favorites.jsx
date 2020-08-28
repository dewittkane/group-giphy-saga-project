import React, { Component } from 'react';
import { connect } from 'react-redux';
import Categories from '../Categories/Categories.js'

class Favorites extends Component {

    componentDidMount() {
        // use component did mount to dispatch an action to request the plantList from the API
        this.getImages();
    }

    getImages = () => {
        this.props.dispatch({type: 'FETCH_IMAGES'})
    }
    render() {
        return(
            <div>
                <Categories />
                {this.props.reduxState.favoriteImages.map((favoriteImages) => {
                   return <p>key={favoriteImages.id}>{favoriteImages}</p>
                })}
                  <pre>{JSON.stringify(this.props.reduxState)}</pre>
            </div>
        );
    };
};

const mapStateToProps = (reduxState) => {
  return {
    reduxState
  }
}

export default connect(mapStateToProps)(Favorites);