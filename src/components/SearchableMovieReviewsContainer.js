import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'U0QiwFIZvxJEvbzT9ufZT2DVRxoBeBHb';

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {

  state = {
    searchTerm: '',
    reviews: []
  }
  
  createUrl = (search) => {
    return `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${search}&`
      + `api-key=${NYT_API_KEY}`;
  }

  handleSearchChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.fetchMovieReviews()
  }
  
  fetchMovieReviews = () => {
    fetch(this.createUrl(this.state.searchTerm))
    .then(resp => resp.json())
    .then(json => {
      console.log(this.createUrl(this.state.searchTerm))
      this.setState({
        reviews: this.addMoviesToState(json.results)
      })
    })
  }

  setDefaultImage = (review) => {
    const defaultImageUrl = 'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie-800x800.jpg' 
    return review.multimedia ? review.multimedia.src : defaultImageUrl
  }
  
  addMoviesToState = (json) => {
    return json.map( movie => movie)
  }
  
  renderMovieReviews = () => {
    return this.state.reviews.map( review => {
      return <MovieReviews displayTitle={review.display_title} img={this.setDefaultImage(review)} key={review.headline}/>
    })

  }

  render() {
    return (
    <div  className="searchable-movie-reviews">
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="search" value={this.state.searchTerm} onChange={this.handleSearchChange} />
          <input type="submit" value="Search" />
        </form>
      </div>
      <div>
        {this.renderMovieReviews()}
      </div>
    </div>
    );
  }
}

export default SearchableMovieReviewsContainer;