import React from 'react';
import axios from 'axios';
import DatePicker from 'react-date-picker'
import MoviesSchedule from './components/MoviesSchedule';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import CinemaHall from './components/CinemaHall';

class App extends React.Component{

  state = {
    movies: [],
    cinemaShows:[],
    date: new Date()
  }

  componentDidMount(){
    const url = 'http://localhost:8080/';
    axios.get(url + 'cinemaShow')
    .then(res => this.setState({cinemaShows: res.data}));
    axios.get(url + 'movie')
    .then(res => this.setState({movies: res.data}));
  }

  onChange = date => this.setState({date});

 render() { 
      return (
      <Router>
        <div className="App" >
          <header className="App-header" style={headerStyle}>
            <h1>Kino <span style={{fontFamily: 'Shadows Into Light'}}>NEON</span></h1>
          </header>
          <Route exact path="/" render={props => (
            <div style={container}>
              <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <p style={{color: 'white'}}>
                  Zapraszamy do rezerwacji biletów na seanse!
                </p>
                <DatePicker onChange={this.onChange} value={this.state.date}/>
              </div>
              <MoviesSchedule movies={this.state.movies} cinemaShows={this.state.cinemaShows}/>
            </div>
          )} />
          <Route path="/cinemaHall" component={CinemaHall} />
        </div>
      </Router>
    );
  }
}
const headerStyle = {
  padding: '5px',
  backgroundColor: 'rgb(32, 32, 37)',
  color: 'rgb(179, 247, 54)',
  display: 'flex',
  justifyContent: 'center'
}

const container = {
  margin: '80px'
}

export default App;
