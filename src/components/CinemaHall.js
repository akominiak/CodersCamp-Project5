import React, { Component } from 'react'
import Sits from './Sits';
import Details from './Details';

export default class CinemaHall extends Component {
    constructor(props) {
        super(props)
        this.changeState = this.changeState.bind(this)
      }

    state = {
        chosenSits: []
    }

    changeState = (newState) => {
        this.setState({chosenSits: newState});
    }

    render() {
        return (
            <div style={container}>
                <Sits chosenSits={this.state.chosenSits} changeState={this.changeState}/>
                <Details chosenSits={this.state.chosenSits}/>
            </div>
        )
    }
}
const container = {
    margin: '30px 40px',
    display: 'flex'
}

