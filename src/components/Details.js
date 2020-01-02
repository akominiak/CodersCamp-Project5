import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class Details extends Component {
    render() {
        return (
            <div style={details}>
                <h3>Wybrane miejsca</h3>
                <div style={numbersStyle}>
                    {this.chosenSits()}
                </div> 
                <Link to="/" style={btnStyle}>Zarezerwuj miejsca</Link>
            </div>
        )
    }

    chosenSits = () => {
        const {chosenSits} = this.props;
        console.log(chosenSits);
        let newSits = chosenSits.map((sit) => {
            return <p key={sit}>{sit} </p>;
        });
        return newSits;
    }
}

const details = {
    width: '70vh',
    textAlign: 'center',
    color: 'rgb(150, 200, 0)',
    backgroundColor: 'rgb(32, 32, 37)',
    marginLeft: '30px'
}

const numbersStyle = {
    display: 'grid', 
    gridTemplateColumns: 'repeat(3, 1.5fr)'
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