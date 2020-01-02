import React from 'react';
import MoviesSchedule from './components/MoviesSchedule';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import CinemaHall from './components/CinemaHall';

class App extends React.Component{

  state = {
    movies: [
      {      
      id: 1,
      title: 'Gone with the wind',
      image: 'https://popmaster.pl/userdata/gfx/60492.jpg',
      time: '18:45'
      },
      {      
        id: 2,
        title: 'The witcher',
        image: 'https://i.iplsc.com/the-witcher/00097NS0LFEPCN86-C122-F4.png',
        time: '16:15'   
        },
      {      
        id: 3,
        title: 'Riverdale',
        image: 'https://www.glamour.pl/media/cache/default_view/uploads/media/default/0004/20/6ebfb3929c4c943f13587f4db98473d25e3edeff.jpg',
        time: '13:00'
        },
      {      
        id: 4,
        title: 'The crown',
        image: 'https://s3.party.pl/seriale/the-crown-zwiastun-528294-MT.jpg',
        time: '18:05'   
        }
    ]
  }

  details = (id) => {
    console.log(id);
  }

 render() { 
      return (
      <Router>
        <div className="App" >
          <header className="App-header" style={headerStyle}>
            <h1>Kino <span style={{fontFamily: 'Shadows Into Light'}}>NEON</span></h1>
          </header>
          <Route exact path="/" render={props => (
            <div style={container}>
            <p style={{color: 'white'}}>
              Zapraszamy do rezerwacji biletów na seanse!
            </p>
              <MoviesSchedule movies={this.state.movies} details={this.details}/>
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
