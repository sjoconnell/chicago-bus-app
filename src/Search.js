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
    const { routes } = this.props
    return (
      <div className="list">
        <input onChange={this.handleSearchTermChange} value={this.searchTerm} type='text' placeholder='Search' />
        <ul>
        {
          routes
            .filter((route) => `${route.rt}`.indexOf(this.state.searchTerm) >= 0)
            .map((route)=> <Items key={route.rt} routeNumber={route.rt} routeName={route.rtnm} selectRoute={this.props.selectRoute} />)
        }
        </ul>
      </div>
    )
  }
}

Search.propTypes = {
  routes: React.PropTypes.array,
  selectRoute: React.PropTypes.func
}

export default Search;