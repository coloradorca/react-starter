import React from 'react';

import Movie from './Movie'

var Movies = (props) => {
  return (
    props.films.map((film, i) =>
     <Movie film={film} key={i}/>)
    )
};

export default Movies;

// {props.film.map(film, i ) => (
//   <Movie film={film} key={i}/>
// )}