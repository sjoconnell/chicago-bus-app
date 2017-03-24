import React, { Component } from 'react';
import Route from './Route';
import Direction from './Direction';
import Stop from './Stop';
import Search from './Search';
import axios from 'axios'
import './App.css';

class App extends Component {

  state = {
    searchItems: [],
    selectedRoute: {},
    selectedDirection: "",
    selectedStop: {}

  };

  componentDidMount() {
    axios.get('https://server-proxy-oxehksffjs.now.sh/api/routes')
      .then((response) => {
        this.setState({searchItems: response.data })
      })
      .catch((error) => console.error('axios error', error))
  }

  selectRoute = (name, number) => {
    this.setState({selectedRoute: {name, number}})

  }

  selectDirection = (direction) => {
    this.setState({selectedDirection: direction})
  }

  selectStop = (name, id) => {
    this.setState({selectedStop: {name, id}})
  }

  render() {
    return (
      <div className="App">
        <div className="details">
          <Route selectedRoute={this.state.selectedRoute} />
          <Direction selectedDirection={this.state.selectedDirection} />
          <Stop selectedStop={this.state.selectedStop} />
        </div>
        <Search searchItems={this.state.searchItems} selectFunc={this.state}/>
      </div>
    );
  }
}

export default App;
