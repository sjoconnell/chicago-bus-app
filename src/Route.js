import React, { Component } from 'react';

class Route extends Component {
  render () {
    const { name, number } = this.props.selectedRoute
    let button
    if (this.props.selectedRoute) {
      button = <button className="reset-button" onClick={this.props.resetRoute}>Reset Route</button>
    }
    return (
      <div className="detail-box route">
        <h1 className="detail-box-title">Route</h1>
        <h2 className="route-number">{number}</h2>
        <p className="route-name">{name}</p>
        {button}
      </div>
    )
  }
}

Route.propTypes = {
  name: React.PropTypes.string,
  number: React.PropTypes.string
}
export default Route;