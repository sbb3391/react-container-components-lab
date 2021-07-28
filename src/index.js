import React from 'react';
import ReactDOM from 'react-dom';

import LatestMovieReviewsContainer from './components/LatestMovieReviewsContainer';
import SearchableMovieReviewsContainer from './components/SearchableMovieReviewsContainer';
import Pdf from './components/Pdf';

ReactDOM.render(
  <div className="app">
    <Pdf />
    <SearchableMovieReviewsContainer />
    <LatestMovieReviewsContainer />
  </div>,
  document.getElementById('root')
);