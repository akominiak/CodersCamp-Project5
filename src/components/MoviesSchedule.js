import React from 'react';
import MovieItem from './MovieItem';
import PropTypes from 'prop-types';

class MovieSchedule extends React.Component{

  findHour(id){
     return this.props.cinemaShows.find(show => show.movie == id).hour;
   }
 
 render() { 
      return this.props.movies.map((movie) => (
        <MovieItem key={movie._id} movie={movie} hour={this.findHour(movie._id)}/>
      ));
  }
}

MovieSchedule.propTypes = {
    movies: PropTypes.array.isRequired
}

export default MovieSchedule;
