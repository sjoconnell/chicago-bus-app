import React, { Component } from 'react';

class Stop extends Component {
  render () {
    const { name } = this.props.selectedStop
    let button
    if (this.props.selectedStop) {
      button = <button className="reset-button" onClick={this.props.resetStop}>Reset Stop</button>
    }
    return (
      <div className="detail-box stop">
        <h1 className="detail-box-title">Stop</h1>
        <h2 className="selected-stop">{name}</h2>
        {button}
      </div>
    )
  }
}

export default Stop;