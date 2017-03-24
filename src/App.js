import React, { Component } from 'react';
import Route from './Route';
import Direction from './Direction';
import Stop from './Stop';
import Search from './Search';
import axios from 'axios'
import './App.css';

class App extends Component {

  state = {
    routes: [],
    directions: [],
    stops: [],
    predictions: [],
    selectedRoute: {},
    selectedDirection: "",
    selectedStop: {}

  };

  componentDidMount() {
    if (this.state.routes.length === 0) {
      axios.get('https://server-proxy-oxehksffjs.now.sh/api/routes')
        .then((response) => {
          this.setState({routes: response.data })
        })
        .catch((error) => console.error('axios error', error))
      } else if (this.state.routes.length >= 1 && this.state.directions.length === 0) {
        axios.get(`https://server-proxy-oxehksffjs.now.sh/api/directions/${this.state.selectedRoute.number}`)
          .then((response) => {
            this.setState({directions: response.data })
          })
          .catch((error) => console.error('axios error', error))
      } else if (this.state.routes.length >= 1 && this.state.directions.length >= 1 && this.state.stops.length === 0) {
        axios.get(`https://server-proxy-oxehksffjs.now.sh/api/stops/${this.state.selectedRoute.number}/${this.state.selectedDirection}`)
          .then((response) => {
            this.setState({stops: response.data })
          })
          .catch((error) => console.error('axios error', error))
      } else {
        axios.get(`https://server-proxy-oxehksffjs.now.sh/api/predictions/${this.state.selectedRoute.number}/${this.state.selectedStop.id}`)
          .then((response) => {
            this.setState({predictions: response.data })
          })
          .catch((error) => console.error('axios error', error))
      }
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

  chooseSearch = () => {
    if (this.state.routes.length >= 1 && this.state.directions.length === 0 && this.state.stops.length === 0) {
      <Search searchType={this.state.routes} selectFunc={this.selectRoute}/>
    } else if (this.state.routes.length >= 1 && this.state.directions.length >= 1 && this.state.stops.length === 0) {
      <Search searchType={this.state.directions} selectFunc={this.selectDirection}/>
    } else if (this.state.routes.length >= 1 && this.state.directions.length >= 1 && this.state.stops.length >= 1) {
      <Search searchType={this.state.stops} selectFunc={this.selectStop}/>
    } else {
      <Search SearchType={this.state.predictions} />
    }
  }

  render() {
    return (
      <div className="App">
        <div className="details">
          <Route selectedRoute={this.state.selectedRoute} />
          <Direction selectedDirection={this.state.selectedDirection} />
          <Stop selectedStop={this.state.selectedStop} />
        </div>
        <Search routes={this.state.routes} selectRoute={this.selectRoute}/>
      </div>
    );
  }
}

export default App;
