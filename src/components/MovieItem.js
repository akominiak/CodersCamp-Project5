import React, { Component } from 'react'
import PropTypes from 'prop-types';
import CinemaHall from './CinemaHall';
import { Link } from 'react-router-dom';

export class MovieItem extends Component {
    onClicked = (e) => {
        console.log(e.target);
    }

    render() {
        const {id, title, image, time} = this.props.movie;
        return (
            <div style={componentStyle}>
                <div style={{display: 'flex', justifyContent: 'flex-start'}}>
                    <img src={image} alt="Movie poster" height="100" width="100" />
                    <h4 style={titleStyle}>{title}</h4>
                </div>
                <div>
                    <Link to="/cinemaHall" style={btnStyle}>{time}</Link>
                </div>
            </div>
        )
    }
}

MovieItem.propTypes = {
    movie: PropTypes.object.isRequired
}
const componentStyle = {
    borderTop: '1px rgb(179, 247, 54) solid',
    paddingLeft: '10px',
    paddingTop: '30px',
    paddingBottom: '30px',
    color: 'rgb(255,255, 255)',
    //background: '#cddcdd',
    display: 'flex',
    justifyContent: 'space-between'
   // display: 'inline-block'
}

const titleStyle={
    margin: '0 25px',
    fontSize: '22px'
}

const btnStyle = {
    border: '1px rgb(179, 247, 54) solid',
    borderRadius: '3%',
    background: 'rgb(43, 43, 58)',
    color: 'rgb(255,255, 255)',
    padding: '10px 20px',
    margin: '6px',
    fontSize: '14px',
    cursor: 'pointer',
    textDecoration: 'none'
}

export default MovieItem
