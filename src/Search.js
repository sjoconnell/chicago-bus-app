import React, { Component } from 'react';
import Items from './Items';
import spinner from '../public/loading.png'

class Search extends Component {
  state = {
    searchTerm: ''
  }

  handleSearchTermChange = (event) => {
    this.setState({searchTerm: event.target.value})
  }

  render () {
    const { searchItems } = this.props
    let searchArea = null
    if (searchItems.length >= 1) {
    searchArea =
      <div>
        {
          searchItems
            .filter((item) => `${item.rt || item.dir || item.stpnm || item.prdctdn}`.indexOf(this.state.searchTerm) >= 0)
            .map((item)=> <Items key={item.vid || item.rt || item.dir || item.stpnm} itemInfo={item} selectFunc={this.props.selectFunc} />)
        }
      </div>
    } else {
      searchArea =
      <div className="loading-image">
        <img src={spinner} alt='loading indicator' />
      </div>
    }

    return (
      <div className="list">
        <input onChange={this.handleSearchTermChange} value={this.searchTerm} type='text' placeholder='Search' disabled={this.props.selectFunc ? false : true }/>
        <ul>
        {searchArea}
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