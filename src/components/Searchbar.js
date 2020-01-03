import React, { Component }  from 'react';

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ''
    }
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleSearch(e) {
    this.setState({ searchValue: e.target.value })
  }
  render() {

    return (

      <div className="p2-t">
        <input
          className="p0-a"
          type="text"
          placeholder="Search Me"
          value={this.state.searchValue}
          onChange={this.handleSearch}
        />
        <button
         className="p0-a"
         onClick={() => this.props.searchForFilm(this.state.searchValue)}
         >Search!
         </button>
      </div>
    )
  }
}

export default Searchbar;