import "./App.css";
import { Header } from "./components/SearchBar.js";
import { useApiRequest } from "./components/useApiRequest.js";
import { MovieList } from "./components/MovieList.js";
import { useEffect, useState } from "react";
import { MovieCard } from "./components/MovieCard.js";
import SavedMoviesModal from "./components/SavedMoviesModal.js";
import Footer from "./components/Footer.js";
import { API_KEY } from "./components/Config.js";

function App() {
  const { loading, error, data, fetchData } = useApiRequest();
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedMovieDetails, setSelectedMovieDetails] = useState(null);
  const [loadingDetails, setLoadingDetails] = useState(false);
  const [errorDetails, setErrorDetails] = useState(null);

  const [watched, setWatched] = useState(() => {
    const saved = localStorage.getItem("watched");
    return saved ? JSON.parse(saved) : [];
  });

  const [showSavedModal, setShowSavedModal] = useState(false);
  const isAlreadyWatched = selectedMovieDetails
    ? watched.some((item) => item.movie.imdbID === selectedMovieDetails.imdbID)
    : false;

  const alreadyRated = selectedMovieDetails
    ? watched.find((mov) => mov.movie.imdbID === selectedMovieDetails.imdbID)
    : null;

  function Loading({ loading, loadingDetails }) {
    if (!loading && !loadingDetails) return null;
    return <p className="loading-text">Loading...</p>;
  }

  function ErrorHandle({ error, errorDetails }) {
    if (!error && !errorDetails) return null;
    return (
      <p className="loading-text">
        {error ? error.message : errorDetails.message}!
      </p>
    );
  }

  function onSelectMovie(mov) {
    setSelectedMovie(mov.imdbID);
  }

  function closeModal() {
    setSelectedMovieDetails(null);
    setShowSavedModal(false);
    setSelectedMovie(null);
  }

  function saveMovie(movie, userRating) {
    const newMovie = { movie, userRating };
    const updateWatched = [...watched, newMovie];
    setWatched(updateWatched);
    localStorage.setItem("watched", JSON.stringify(updateWatched));
    setSelectedMovieDetails(null);
    setSelectedMovie(null);
  }

  useEffect(() => {
    if (selectedMovie === null) return;
    async function fetchMovieData() {
      setLoadingDetails(true);
      try {
        const res = await fetch(
          `https://www.omdbapi.com/?i=${selectedMovie}&apikey=${API_KEY}`
        );
        if (!res.ok) throw new Error("Movie details error!");
        const data = await res.json();
        setSelectedMovieDetails(data);
      } catch (error) {
        setErrorDetails(error.message);
      } finally {
        setLoadingDetails(false);
      }
    }
    fetchMovieData();
  }, [selectedMovie]);

  return (
    <div className="App">
      <Header
        onSearch={fetchData}
        openSavedModal={() => setShowSavedModal(true)}
      />
      {(loading || loadingDetails) && (
        <Loading loading={loading} loadingDetails={loadingDetails} />
      )}
      {(error || errorDetails) && (
        <ErrorHandle error={error} errorDetails={errorDetails} />
      )}
      {!loading && !error && (
        <MovieList data={data} onSelectMovie={onSelectMovie} />
      )}
      {selectedMovieDetails ? (
        <MovieCard
          selectedMovieDetails={selectedMovieDetails}
          closeModal={closeModal}
          saveMovie={saveMovie}
          isAlreadyWatched={isAlreadyWatched}
          alreadyRated={alreadyRated?.userRating}
        />
      ) : null}
      {showSavedModal ? (
        <SavedMoviesModal
          watched={watched}
          closeModal={closeModal}
          setWatched={setWatched}
        />
      ) : null}
      <Footer />
    </div>
  );
}

export default App;
