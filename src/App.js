import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css"

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const { data: { data: { movies } } } = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating"); // this instead of movies.data.data.movies
    this.setState( { movies, isLoading: false }); // instead of { movies: movies }, thanks to ES6

    console.log(this.movies);
  };

  componentDidMount() {
    this.getMovies();
  }

  render(){
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        { isLoading ? ( 
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div> ) : (
            <div className="movies">
              {
                movies.map(movie => (
                  <Movie 
                    key={movie.id} id={movie.id} title={movie.title} year={movie.year} genres={movie.genres} summary={movie.summary} poster={movie.medium_cover_image} 
                  />
                ))
              }
            </div>
          )}
      </section>
    );
  }
}

export default App;