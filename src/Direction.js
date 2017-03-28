import React, { Component } from 'react';

class Direction extends Component {
  render () {
    const { selectedDirection } = this.props
    let button
    if (selectedDirection) {
      button = <button className="reset" onClick={this.props.resetDirection}>Reset Direction</button>
    }
    return (
      <div className="detail-box Direction">
        <h1>Direction</h1>
        <h2>{selectedDirection}</h2>
        {button}
      </div>

    )
  }
}

export default Direction;