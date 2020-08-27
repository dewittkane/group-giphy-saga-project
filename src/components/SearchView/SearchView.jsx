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

    handleFavGif = (response) => {
        console.log('Fav gif ');
        // Dispatch goes here to SAGA w/Search value
        this.props.dispatch({ type: 'SEARCH_GIFS', payload: this.state.search });
    }

    render(){
        return(
            <>
            <div>
                <input type="search" placeholder='Search Gif' onChange={this.handleSearchChange}/>

                <button onClick={this.handleFavGif}>Fav Gif</button>

            </div>


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