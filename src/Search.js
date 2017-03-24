import React, { Component } from 'react';
import Items from './Items'

class Search extends Component {
  state = {
    searchTerm: ''
  }

  handleSearchTermChange = (event) => {
    this.setState({searchTerm: event.target.value})
  }

  render () {
    const { searchItems } = this.props
    return (
      <div className="list">
        <input onChange={this.handleSearchTermChange} value={this.searchTerm} type='text' placeholder='Search' disabled={this.props.selectFunc ? false : true }/>
        <ul>
        {
          searchItems
            .filter((item) => `${item.rt || item.dir || item.stpnm || item.prdctdn}`.indexOf(this.state.searchTerm) >= 0)
            .map((item)=> <Items key={item.rt || item.dir || item.stpnm || item.vid} itemInfo={item} selectFunc={this.props.selectFunc} />)
        }
        </ul>
      </div>
    )
  }
}

Search.propTypes = {
  searchItems: React.PropTypes.array,
  selectFunc: React.PropTypes.func
}

export default Search;