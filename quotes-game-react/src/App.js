import { Route, Routes } from 'react-router';
import Home from './Home/Home';
import Game from './Game/Game';
import './App.css';
import { Component } from 'react';
import axios from 'axios';

class App extends Component {

  state = {
    data: []
  }

  componentDidMount() {
      axios.get('https://api.api-ninjas.com/v1/quotes?category=',{
          headers: { 'X-Api-Key': 't5uH4CHnIvhCe1J1jemWVA==oKu96FgPeJT5o3np'}
      }).then(resp => {
          console.log(resp);
          this.setState({data: resp.data});
      })
  }

  render() {
    return (
      <div className="App">
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='game' element={<Game quote={this.state.data.quote} />} />
        </Routes> 
      </div>
    );
  }
}

export default App;
