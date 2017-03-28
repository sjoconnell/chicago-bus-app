import React, { Component } from 'react';

class Direction extends Component {
  render () {
    const { selectedDirection } = this.props
    return (
      <div className="detail-box Direction">
        <h1>Direction</h1>
        <h2>{selectedDirection}</h2>
      </div>
    )
  }
}

export default Direction;