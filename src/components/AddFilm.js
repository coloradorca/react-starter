import React from 'react'

class AddFilm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addedfilm: ''
    }
    this.addMovie  = this.addMovie.bind(this);
  }

  addMovie (){

  }

  render() {

    return (

      <div className="p2-t">
        <input
          className="p0-a"
          type="text"
          placeholder="Add Film"
          value={this.state.searchValue}
          onChange={this.handleSearch}
        />
        <button
         className="p0-a"
         onClick={() => this.props.addMovie(this.state.searchValue)}
         >Add
         </button>
      </div>
    )
  }
}

export default AddFilm;