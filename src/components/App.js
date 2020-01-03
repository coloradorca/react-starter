import React from 'react';
import Movies from './Movies.js'
import Searchbar from './Searchbar.js'
import AddFilm from './AddFilm.js'
import '../main.css'


var films = [
  { title: 'Willy Wonka & The Chocolate Factory' },
  { title: 'Top Gun' },
  { title: 'The Grey' },
  { title: 'Sunshine' },
  { title: 'Ex Machina' },
];


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [...films],
      userFilms: []
    }
    this.lookForFilm = this.lookForFilm.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  addMovie (post){
    //adds movies to previous list
    // this.setState({searchResults: [...this.state.searchResults, {"title": post}]}
    // })

    //creates list of only user generated movies
    this.setState({userFilms: [...this.state.userFilms, {"title": post}]})
  }

  lookForFilm(query) {
    var results = films.filter(film => {
      return film.title.toLowerCase().indexOf(query.toLowerCase()) >= 0
    });

    this.setState({ searchResults: results });

  }

  render() {
    return (
      <div>
        <div className="navbar"><h2>Movie List</h2></div>
        <div className="m-rl">
          <AddFilm addMovie={this.addMovie} />
          <Searchbar searchForFilm={this.lookForFilm} />
          {/* <Movies films={this.state.searchResults} /> */}
          <Movies films={this.state.userFilms} />
        </div>
      </div>
    )
  }

}

export default App;

