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
    const { searchItems, allSelected } = this.props
    let listArea = null
    let searchArea = null
    if (searchItems.length >= 1) {
    listArea =
      <div>
        {
          searchItems
            .filter((item) => `${item.rt || item.dir || item.stpnm || item.prdctdn}`.indexOf(this.state.searchTerm) >= 0)
            .map((item)=> <Items key={item.vid || item.rt || item.dir || item.stpnm} itemInfo={item} selectFunc={this.props.selectFunc} />)
        }
      </div>
    } else {
      listArea =
      <div className="loading-image">
        <img src={spinner} alt='loading indicator' />
      </div>
    }

    if (!allSelected) {
      searchArea = <input onChange={this.handleSearchTermChange} value={this.searchTerm} type='text' placeholder='Search' disabled={this.props.selectFunc ? false : true }/>
    } else {
      searchArea = <button onClick={this.props.refreshPredictions}>Refresh Times</button>
    }

    return (
      <div className="list">
        {searchArea}
        <ul>
        {listArea}
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