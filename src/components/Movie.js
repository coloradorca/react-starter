import React from 'react';

var Movie = (props) => {
  return (
    <div className="eachmovie">{props.film.title}</div>
  )
};

export default Movie;