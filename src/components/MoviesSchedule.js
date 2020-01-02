import React from 'react';
import MovieItem from './MovieItem';
import PropTypes from 'prop-types';

class MovieSchedule extends React.Component{

 render() { 
      return this.props.movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} details={this.props.details}/>
      ));
  }
}

MovieSchedule.propTypes = {
    movies: PropTypes.array.isRequired
}

export default MovieSchedule;
