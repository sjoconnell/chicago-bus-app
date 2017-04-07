import React, { Component } from 'react';

class Items extends Component {
  render () {
    const { itemInfo } = this.props
    return (
      <li className="items" onClick={() => this.props.selectFunc(itemInfo.rtnm || itemInfo.dir || itemInfo.stpnm, itemInfo.rt || itemInfo.stpid )}>
        <h2>{itemInfo.prdctdn || itemInfo.rt || itemInfo.dir || itemInfo.stpnm}</h2>
      </li>
    )
  }
}

Items.propTypes = {
  itemInfo: React.PropTypes.object,
  selectFunc: React.PropTypes.func
};

export default Items;