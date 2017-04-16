import React, { Component } from 'react';
import Items from './Items';
import spinner from '../public/loading.png'

class Search extends Component {
  state = {
    searchTerm: ''
  }

  componentDidUpdate(prevProps) {
    if (prevProps.searchType !== this.props.searchType) {
      this.setState({searchTerm: ''})
    }
  }

  handleSearchTermChange = (event) => {
    this.setState({searchTerm: event.target.value})
  }

  render () {
    const { searchItems, searchType } = this.props
    let listArea = null
    let searchArea = null
    if (searchItems.error) {
      listArea =
        <div className="listarea no-service">
          <h1>No service is scheduled for this stop at this time</h1>
        </div>
    } else if (searchItems[searchType]) {
      listArea =
        <div className="listarea">
          <ul>
            {
              searchItems[searchType]
                .filter((item) => `${item.rt || item.dir || item.stpnm || item.prdctdn} ${item.rtnm ? item.rtnm : ''}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)
                .map((item)=> <Items key={item.vid || item.rt || item.dir || item.stpid} itemInfo={item} selectFunc={this.props.selectFunc} itemType={this.props.searchType} />)
            }
          </ul>
        </div>
    } else {
      listArea =
      <div className="listarea loading-image">
        <img src={spinner} alt='loading indicator' />
      </div>
    }

    if (searchType !== 'prd') {
      searchArea = <input className="search-bar" onChange={this.handleSearchTermChange} value={this.state.searchTerm} type='text' placeholder='Search for Route/Direction/Stop' />
    } else {
      searchArea = <button className="refresh-button" onClick={this.props.refreshPredictions}>Refresh Times</button>
    }

    return (
      <div className="list">
        {searchArea}
        {listArea}
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