// Code MovieReviews Here

import React from 'react';

function MovieReviews(props) {
  return (
    <div className="review-list">
      <h1>{props.displayTitle}</h1>
      <img src={props.img} alt='movie-review' key={props.key}/>
    </div>
  );
}

export default MovieReviews;