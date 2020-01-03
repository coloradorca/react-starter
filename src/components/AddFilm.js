import React from 'react'

class AddFilm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ''
    }
    this.addTexttoValue = this.addTexttoValue.bind(this);
  }

  addTexttoValue (e){
    this.setState({ searchValue: e.target.value })
  }

  render() {

    return (

      <div className="p2-t">
        <input
          className="p0-a"
          type="text"
          placeholder="Add Film"
          value={this.state.searchValue}
          onChange={this.addTexttoValue}
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