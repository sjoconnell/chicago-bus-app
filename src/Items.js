import React, { Component } from 'react';

class Items extends Component {
  render () {
    const { routeNumber, routeName } = this.props
    return (
      <li className="items" onClick={() => this.props.selectRoute(routeName, routeNumber)}>
        <h2>{routeNumber}</h2>
        <p>{routeName}</p>
      </li>
    )
  }
}

Items.propTypes = {
  routeNumber: React.PropTypes.string,
  routeName: React.PropTypes.string,
  index: React.PropTypes.number,
  selectRoute: React.PropTypes.func
};

export default Items;