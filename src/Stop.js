import React, { Component } from 'react';

class Stop extends Component {
  render () {
    const { name } = this.props.selectedStop
    let button
    if (this.props.selectedStop) {
      button = <button className="reset" onClick={this.props.resetStop}>Reset Stop</button>
    }
    return (
      <div className="detail-box Stop">
        <h1>Stop</h1>
        <h2>{name}</h2>
        {button}
      </div>
    )
  }
}

export default Stop;