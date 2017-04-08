import React, { Component } from 'react';
import Route from './Route';
import Direction from './Direction';
import Stop from './Stop';
import Search from './Search';
import axios from 'axios'
import './App.css';
const nowUrl = 'https://server-proxy-lnifbozuny.now.sh'

class App extends Component {

  state = {
    searchItems: {},
    selectedRoute: false,
    selectedDirection: false,
    selectedStop: false,
    searchType: ''
  };

  componentDidMount() {
    this.getSearchItems(`${nowUrl}/api/routes`, 'routes')
  }

  getSearchItems = (url, type) => {
    axios.get(url)
      .then((response) => {
        this.setState({
          searchItems: response.data,
          searchType: type
        })
      })
      .catch((error) => console.error('axios error', error))
  }

  resetRoute = () => {
    this.setState({
      selectedRoute: false,
      selectedDirection: false,
      selectedStop: false,
      searchItems: {}
    })
    this.getSearchItems(`${nowUrl}/api/routes`, 'routes')
  }

  resetDirection = () => {
    this.setState({
      selectedDirection: false,
      selectedStop: false,
      searchItems: {}
    })
    this.getSearchItems(`${nowUrl}/api/directions/${this.state.selectedRoute.number}`, 'directions')
  }

  resetStop = () => {
    this.setState({
      selectedStop: false,
      searchItems: {}
    })
    this.getSearchItems(`${nowUrl}/api/stops/${this.state.selectedRoute.number}/${this.state.selectedDirection}`, 'stops')
  }

  selectRoute = (name, number) => {
    this.setState({
      selectedRoute: {name, number},
      searchItems: {}
    })
    this.getSearchItems(`${nowUrl}/api/directions/${number}`, 'directions')
  }

  selectDirection = (direction) => {
    this.setState({
      selectedDirection: direction,
      searchItems: {}
    })
    this.getSearchItems(`${nowUrl}/api/stops/${this.state.selectedRoute.number}/${direction}`, 'stops')
  }

  selectStop = (name, id) => {
    this.setState({
      selectedStop: {name, id},
      searchItems: {}
    })
    this.getSearchItems(`${nowUrl}/api/predictions/${this.state.selectedRoute.number}/${id}`, 'prd')
  }

  refreshPredictions = () => {
    this.setState({
      searchItems: {}
    })
    this.getSearchItems(`${nowUrl}/api/predictions/${this.state.selectedRoute.number}/${this.state.selectedStop.id}`, 'prd')
  }

  noop = () => {}

  render() {
    return (
      <div className="App">
        <div className="details">
          <Route selectedRoute={this.state.selectedRoute} resetRoute={this.resetRoute} />
          <Direction selectedDirection={this.state.selectedDirection} resetDirection={this.resetDirection} />
          <Stop selectedStop={this.state.selectedStop} resetStop={this.resetStop} />
        </div>
        <Search searchItems={this.state.searchItems} selectFunc={!this.state.selectedRoute ? this.selectRoute : !this.state.selectedDirection ? this.selectDirection : !this.state.selectedStop ? this.selectStop : this.noop} searchType={this.state.searchType} refreshPredictions={this.refreshPredictions} />
      </div>
    );
  }
}

export default App;
