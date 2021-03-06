import React, { Component } from 'react';

class Direction extends Component {
  render () {
    const { selectedDirection } = this.props
    let button
    if (selectedDirection) {
      button = <button className="reset-button" onClick={this.props.resetDirection}>Reset Direction</button>
    }
    return (
      <div className="detail-box direction">
        <h1 className="detail-box-title">Direction</h1>
        <h2 className="selected-direction">{selectedDirection}</h2>
        {button}
      </div>

    )
  }
}

export default Direction;