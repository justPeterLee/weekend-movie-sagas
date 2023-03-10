import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App.js";
import { createStore, combineReducers, applyMiddleware } from "redux";
// Provider allows us to use redux within our react app
import { Provider } from "react-redux";
import logger from "redux-logger";
// Import saga middleware
import createSagaMiddleware from "redux-saga";
import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

// Create the rootSaga generator function
function* rootSaga() {
  yield takeEvery("FETCH_MOVIES", fetchAllMovies);
  yield takeEvery("FETCH_GENRE", fetchMovieGenre);
  yield takeEvery("FETCH_MOVIE_DETAIL", fetchMovieDetail);

  yield takeEvery("FETCH_ALL_GENRE", fetchAllGenre);
  yield takeEvery("POST_NEW_MOVIE", postNewMovie);

  yield takeEvery("FILTER_BY_GENRES", filterGenre);
}

function* fetchAllMovies() {
  // get all movies from the DB
  try {
    const movies = yield axios.get("/api/movie");
    //console.log("get all:", movies.data);
    yield put({ type: "SET_MOVIES", payload: movies.data });
  } catch {
    console.log("get all error");
  }
}

function* fetchMovieGenre(action) {
  try {
    const genre = yield axios.get(`/api/genre/${action.payload}`);
    yield put({ type: "SET_GENRES", payload: genre.data });
  } catch (err) {
    console.log("error with fetching genres ", err);
  }
}

function* fetchMovieDetail(action) {
  try {
    const movieDetail = yield axios.get(`/api/movie/${action.payload}`);
    yield put({ type: "SET_MOVIE_DETAIL", payload: movieDetail.data });
  } catch (err) {
    console.log("error with fetching movie detail, ", err);
  }
}

function* fetchAllGenre() {
  try {
    const genres = yield axios.get(`/api/genre`);
    console.log("asdf");
    console.log(genres.data);
    yield put({ type: "SET_ALL_GENRES", payload: genres.data });
  } catch (err) {
    console.log("Error with getting genres, ", err);
  }
}

function* postNewMovie(action) {
  try {
    console.log(action.payload);
    yield axios.post("/api/movie", action.payload);
    yield put({ type: "FETCH_MOVIES" });
  } catch (err) {
    console.log(err);
  }
}

function* filterGenre(action) {
  try {
    const filteredMovies = yield axios.get(
      `/api/genre/filter/${action.payload}`
    );
    yield put({ type: "SET_MOVIES", payload: filteredMovies.data });
  } catch (err) {
    console.log("Error with filtering genres, ", err);
  }
}
// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
  switch (action.type) {
    case "SET_MOVIES":
      state = [];
      return action.payload;
    default:
      return state;
  }
};

// Used to store the movie genres
const genres = (state = [], action) => {
  switch (action.type) {
    case "SET_GENRES":
      return action.payload;
    default:
      return state;
  }
};

const movieDetail = (state = [], action) => {
  switch (action.type) {
    case "SET_MOVIE_DETAIL":
      return action.payload;
    default:
      return state;
  }
};

const allGenres = (state = [], action) => {
  switch (action.type) {
    case "SET_ALL_GENRES":
      return action.payload;
    default:
      return state;
  }
};

const filteredGenre = (state = [], action) => {
  switch (action.type) {
    case "SET_GENRE_FILTER_TYPE":
      return action.payload;
    default:
      return state;
  }
};
// Create one store that all components can use
const storeInstance = createStore(
  combineReducers({
    movies,
    genres,
    movieDetail,
    allGenres,
    filteredGenre
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger)
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
