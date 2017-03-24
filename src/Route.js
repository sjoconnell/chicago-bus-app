import React, { Component } from 'react';

class Route extends Component {
  render () {
    const { name, number } = this.props.selectedRoute
    return (
      <div className="detail-box Route">
        <h1>Route</h1>
        <h2>{number}</h2>
        <p>{name}</p>
      </div>
    )
  }
}

Route.propTypes = {
  name: React.PropTypes.string,
  number: React.PropTypes.string
}
export default Route;