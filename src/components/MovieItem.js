import React, { Component } from 'react'
import PropTypes from 'prop-types';
import CinemaHall from './CinemaHall';
import { Link } from 'react-router-dom';

export class MovieItem extends Component {
    onClicked = (e) => {
        console.log(e.target);
    }

    render() {
        const {_id, title, description, url} = this.props.movie;
        const hour = this.props.hour;
        return (
            <div style={componentStyle}>
                <div style={{display: 'flex', justifyContent: 'flex-start'}}>
                    <img src={url} alt="Movie poster" height="100" width="100" />
                    <div style={{margin: '0 25px'}}>
                        <h4 style={{fontSize: '22px', marginBlockStart: '0'}}>{title}</h4>
                        <p>{description}</p>
                    </div>
                </div>
                <div>
                    <Link to="/cinemaHall" style={btnStyle}>{hour}</Link>
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
    display: 'flex',
    justifyContent: 'space-between'
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
