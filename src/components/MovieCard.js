import { useState } from "react";
import StarRating from "./StarRating";

export function MovieCard({ selectedMovieDetails, closeModal, saveMovie }) {
  const [userRating, setUserRating] = useState(0);

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
        <div className="modal-header">
          <h1>Title: {title}</h1>
          <img src={poster} alt={title}></img>
        </div>

        <p>Country: {country}</p>
        <p>Director: {director}</p>
        <p>Genre: {genre}</p>
        <p>Language: {language}</p>
        <p>Plot: {plot}</p>
        <p>
          Imdb Rating: {imdbRating}⭐ Your Rating: {userRating} ⭐
        </p>
        <p>Runtime: {runtime}</p>
        <p>Rate the movie!</p>
        <StarRating maxRating={10} size={24} onSetRating={setUserRating} />
        <div className="modal-button">
          <button onClick={() => saveMovie(selectedMovieDetails, userRating)}>
            Save
          </button>
        </div>
      </div>
    </section>
  );
}
