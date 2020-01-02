import React, { Component } from 'react'

export default class Sits extends Component {

render() {
    return (
        <div style={sitsStyle}>
        {this.insertSits()}
        </div>
    )
}

sitClicked = (sit, e) => {
    const {chosenSits, changeState} = this.props;
    const newSits = chosenSits.filter(el => el !== sit);
   // console.log(newSits);
    if (chosenSits.length == newSits.length + 1)  {
        e.target.style.background = 'rgb(43, 43, 58)';
        changeState(newSits);
    }
    else {
       changeState([...chosenSits, sit]);
        e.target.style.background = 'rgba(100,100,100,0.5)';
    }
}

insertSits = () => {
    let sits = [];
    for(let i = 0; i < 48; i++) {
        sits.push(i+1);
    }
    let sitsCreated = sits.map((sit) => {
        return <div style={sitStyle} onClick={this.sitClicked.bind(this, sit)} key={sit}>{sit}</div>;
    });
    return sitsCreated;
    }
}

const sitsStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(8, 1fr)',
    width: '130vh'
}

const sitStyle = {
    border: '1px rgb(150, 200, 0) solid',
    padding: '30px',
    textAlign: 'center',
    color: 'white'
}

