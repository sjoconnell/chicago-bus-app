import React, { Component } from 'react';

class Items extends Component {
  // WHEN ITEM IS CLICKED SET STATE AND THEN MAKE AJAX CALL IN APP.JS TO GET NEW LIST OF SEARCHITEMS
  render () {
    const { itemInfo } = this.props
    return (
      <li className="items" onClick={() => this.props.selectFunc(itemInfo.rtnm || itemInfo.dir || itemInfo.stpnm, itemInfo.rt || itemInfo.stpid )}>
        <h2>{itemInfo.rt || itemInfo.dir || itemInfo.stpnm || itemInfo.prdctdn}</h2>
      </li>
    )
  }
}

Items.propTypes = {
  itemInfo: React.PropTypes.obj,
  selectFunc: React.PropTypes.func
};

export default Items;