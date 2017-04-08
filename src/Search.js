import React, { Component } from 'react';
import Items from './Items';
import spinner from '../public/loading.png'

class Search extends Component {
  state = {
    searchTerm: ''
  }

  handleSearchTermChange = (event) => {
    this.setState({searchTerm: event.target.value.toUpperCase()})
  }

  render () {
    const { searchItems, searchType } = this.props
    let listArea = null
    let searchArea = null
    if (searchItems.error) {
      listArea =
        <div>
          <h1>No service is scheduled for this stop at this time</h1>
        </div>
    } else if (searchItems[searchType]) {
      listArea =
        <div>
          {
            searchItems[searchType]
              .filter((item) => `${item.rt || item.dir || item.stpnm || item.prdctdn}`.toUpperCase().indexOf(this.state.searchTerm) >= 0)
              .map((item)=> <Items key={item.vid || item.rt || item.dir || item.stpid} itemInfo={item} selectFunc={this.props.selectFunc} />)
          }
        </div>
    } else {
      listArea =
      <div className="loading-image">
        <img src={spinner} alt='loading indicator' />
      </div>
    }

    if (searchType !== 'prd') {
      searchArea = <input className="search-bar" onChange={this.handleSearchTermChange} value={this.searchTerm} type='text' placeholder='Search' disabled={this.props.selectFunc ? false : true }/>
    } else if (searchItems.error) {
      searchArea = <div></div>
    } else {
      searchArea = <button className="refresh-button" onClick={this.props.refreshPredictions}>Refresh Times</button>
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
  searchItems: React.PropTypes.object,
  selectFunc: React.PropTypes.func,
  searchType: React.PropTypes.string
}

export default Search;