// Write your code here

import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchResult = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <h1 className="heading">Destination Search</h1>
        <div className="search-card-container">
          <input
            type="search"
            className="search-card"
            onChange={this.onChangeSearchInput}
            placeholder="Search"
            value={searchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="search-img"
          />
        </div>
        <div className="countries">
          <ul className="cards">
            {searchResult.map(eachItem => (
              <DestinationItem
                key={eachItem.id}
                destinationsListItem={eachItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default DestinationSearch
