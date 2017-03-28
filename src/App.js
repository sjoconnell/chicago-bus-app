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
    selectedRoute: false,
    selectedDirection: false,
    selectedStop: false
  };

  componentDidMount() {
    this.getSearchItems('https://server-proxy-oxehksffjs.now.sh/api/routes')
  }

  getSearchItems = (url) => {
    axios.get(url)
      .then((response) => {
        this.setState({searchItems: response.data})
      })
      .catch((error) => console.error('axios error', error))
  }

  resetRoute = () => {
    this.setState({
      selectedRoute: false,
      selectedDirection: false,
      selectedStop: false
    })
    this.getSearchItems('https://server-proxy-oxehksffjs.now.sh/api/routes')
  }

  resetDirection = () => {
    this.setState({
      selectedDirection: false,
      selectedStop: false
    })
    this.getSearchItems(`https://server-proxy-oxehksffjs.now.sh/api/directions/${this.state.selectedRoute.number}`)
  }

  resetStop = () => {
    this.setState({
      selectedStop: false
    })
    this.getSearchItems(`https://server-proxy-oxehksffjs.now.sh/api/stops/${this.state.selectedRoute.number}/${this.state.selectedDirection}`)
  }

  selectRoute = (name, number) => {
    this.setState({selectedRoute: {name, number}})
    this.getSearchItems(`https://server-proxy-oxehksffjs.now.sh/api/directions/${number}`)
  }

  selectDirection = (direction) => {
    this.setState({selectedDirection: direction})
    this.getSearchItems(`https://server-proxy-oxehksffjs.now.sh/api/stops/${this.state.selectedRoute.number}/${direction}`)
  }

  selectStop = (name, id) => {
    this.setState({selectedStop: {name, id}})
    this.getSearchItems(`https://server-proxy-oxehksffjs.now.sh/api/predictions/${this.state.selectedRoute.number}/${id}`)
  }

  render() {
    return (
      <div className="App">
        <div className="details">
          <Route selectedRoute={this.state.selectedRoute} resetRoute={this.resetRoute} />
          <Direction selectedDirection={this.state.selectedDirection} resetDirection={this.resetDirection} />
          <Stop selectedStop={this.state.selectedStop} resetStop={this.resetStop} />
        </div>
        <Search searchItems={this.state.searchItems} selectFunc={!this.state.selectedRoute ? this.selectRoute : !this.state.selectedDirection ? this.selectDirection : !this.state.selectedStop ? this.selectStop : false} />
      </div>
    );
  }
}

export default App;
