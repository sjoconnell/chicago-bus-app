import React, { Component } from 'react';

class Route extends Component {
  render () {
    const { name, number } = this.props.selectedRoute
    let button
    if (this.props.selectedRoute) {
      button = <button className="reset" onClick={this.props.resetRoute}>Reset Route</button>
    }
    return (
      <div className="detail-box Route">
        <h1>Route</h1>
        <h2>{number}</h2>
        <p>{name}</p>
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