import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'U0QiwFIZvxJEvbzT9ufZT2DVRxoBeBHb';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends Component {

  state = {
    reviews: []
  }

  componentDidMount() {
    this.fetchLatestMovieReviews()
  }

  fetchLatestMovieReviews = () => {
    fetch(URL)
    .then(resp => resp.json())
    .then(json => {
      this.setState({
        reviews: this.addMoviesToState(json.results)
      })
    })
  }

  addMoviesToState = (json) => {
    return json.map( movie => movie)
  }

  renderMovieReviews = () => {
    return this.state.reviews.map( review => {
      return <MovieReviews displayTitle={review.display_title} img={review.multimedia.src} key={review.multimedia.headline}/>
    })

  }  

  render() {
    return (
      <div className="latest-movie-reviews">
        {this.renderMovieReviews()}
      </div>
    );
  }
}

export default LatestMovieReviewsContainer;