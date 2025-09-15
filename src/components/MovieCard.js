export function MovieCard({ selectedMovieDetails, closeModal }) {
  if (!selectedMovieDetails) return null;
  const {
    Title: title,
    Country: country,
    Director: director,
    Genre: genre,
    Language: language,
    Plot: plot,
    Poster: poster,
    imdbRating,
    Runtime: runtime,
  } = selectedMovieDetails;

  return (
    <section className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={closeModal}>
          X
        </button>
        <h1>Title: {title}</h1>
        <img src={poster} alt={title}></img>
        <p>Country: {country}</p>
        <p>Director: {director}</p>
        <p>Genre: {genre}</p>
        <p>Language: {language}</p>
        <p>Plot: {plot}</p>
        <p>Imdb Rating:{imdbRating}</p>
        <p>Runtime: {runtime}</p>
      </div>
    </section>
  );
}
