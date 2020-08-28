import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchView extends Component {
    state = {
        search: '',
    }

    handleSearchChange = (event) => {
        console.log('event happened');
        // configure search here

        this.setState({
            search: event.target.value,
        });

    }

    handleGifSearch = (response) => {
        console.log('Fav gif ');
        // Dispatch goes here to SAGA w/Search value
        this.props.dispatch({ type: 'SEARCH_GIFS', payload: this.state.search });
    }

    handleFavGif = (gifId) => {
        console.log('in handleFavGif');
        console.log(gifId);
        this.props.dispatch({ type: 'SET_FAV', payload: gifId }) // need images still 
    }

    

    render(){
        return(
            <>
            <input type="text" placeholder='Search Gif' onChange={this.handleSearchChange}/>
            <button onClick={this.handleGifSearch}>Search</button>
                {/* Display to DOM */}
                {this.props.reduxState.search.map((newGif, i) => {
                    console.log(newGif);
                    return(
                        <div key={i}>
                            <img alt={newGif.title} src={newGif.images.original.url}/>
                            <button onClick={() => this.handleFavGif(newGif.images.original.url)} >Fav Gif</button>
                        </div>
                    )
                })}
            </>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return{
        reduxState
    }
}

export default connect(mapStateToProps)(SearchView);
