import React, { Component } from 'react';

class Stop extends Component {
  render () {
    const { name, id } = this.props.selectedStop
    return (
      <div className="detail-box Stop">
        <h1>Stop</h1>
        <h2>{name}</h2>
      </div>
    )
  }
}

export default Stop;