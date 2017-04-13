import React, { Component } from 'react';

class Items extends Component {
  render () {

    const { itemInfo, itemType } = this.props

    let itemList
    if (itemType === 'routes') {
      itemList =
      <h2>{itemInfo.rt} - {itemInfo.rtnm}</h2>
    } else if (itemType === 'prd') {
      itemList = 
      <h2>{itemInfo.prdctdn === 'DUE' ? 'Arriving Now' : itemInfo.prdctdn === 'DLY' ? 'Delayed' : `${itemInfo.prdctdn} Minutes`}</h2>
    } else {
      itemList = 
      <h2>{itemInfo.dir || itemInfo.stpnm}</h2>
    }

    return (
      <li className="items" onClick={() => this.props.selectFunc(itemInfo.rtnm || itemInfo.dir || itemInfo.stpnm, itemInfo.rt || itemInfo.stpid )}>
        {itemList}
      </li>
    )
  }
}

Items.propTypes = {
  itemInfo: React.PropTypes.object,
  selectFunc: React.PropTypes.func,
  itemType: React.PropTypes.string
};

export default Items;