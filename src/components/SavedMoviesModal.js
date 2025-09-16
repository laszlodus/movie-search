export default function SavedMoviesModal({ watched, closeModal, setWatched }) {
  if (watched.length === 0) return null;
  function deleteMovie(id) {
    const newWatched = watched.filter((mov) => mov.movie.imdbID !== id);
    setWatched(newWatched);
    localStorage.setItem("watched", JSON.stringify(newWatched));
    if (newWatched.length === 0) {
      closeModal();
    }
  }

  return (
    <section className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={closeModal}>
          X
        </button>
        {watched.map((movie, index) => (
          <div className="modal-container" key={index}>
            <h1>{movie.movie.Title}</h1>
            <img src={movie.movie.Poster} alt={movie.movie.Title}></img>
            <p>Country: {movie.movie.Country}</p>
            <p>Director: {movie.movie.Director}</p>
            <p>Genre: {movie.movie.Genre}</p>
            <p>Language: {movie.movie.Language}</p>
            <p>Plot: {movie.movie.Plot}</p>
            <p>
              Imdb Rating: {movie.movie.imdbRating}⭐ Your Rating:
              {movie.userRating} ⭐
            </p>

            <button
              className="delete-btn"
              onClick={() => deleteMovie(movie.movie.imdbID)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
