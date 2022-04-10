import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import AddMovie from "./components/AddMovie";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // //Using fetch function here to handle APIs
  // // We can also use other library like axios as well
  // function fetchMoviesHandler() {
  //   //default is GET request if not specified
  //   //retrieval is an asynchronous process, so will need to use promise
  //   fetch("https://swapi.dev/api/films/")
  //     .then((response) => {
  //       //help us to convert the data from json to js readable
  //       //the transformation will also returns a promise
  //       return response.json();
  //     })
  //     .then((data) => {
  //       //data.results get the results field in the json object
  //       const transformedMovies = data.results.map((movieData) => {
  //         return {
  //           id: movieData.episode_id,
  //           title: movieData.title,
  //           openingText: movieData.opening_crawl,
  //           releaseData: movieData.release_date,
  //         };
  //       });
  //       setMovies(transformedMovies);
  //     });
  // }

  //alternate way of writting asynchronous code by using async and await
  //need to useCallback here to remember the function so that the useEffect can recognize this function
  //as without useCallback, the function will be treated as a new function everytime component rerendered
  const fetchMoviesHandler = useCallback(async () => {
    setError(null);
    setIsLoading(true);
    try {
      const response = await fetch("https://swapi.dev/api/films/");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();

      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseData: movieData.release_date,
        };
      });

      setMovies(transformedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  async function addMovieHandler(movie) {
    //POST request to send data
    try {
      const response = await fetch("https://react-http-yourposturl", {
        method: "POST",
        //JSON.stringify helps to take JS object or array and turns into JSON format
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  }

  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
