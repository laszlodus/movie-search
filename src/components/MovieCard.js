import { useState } from "react";
import StarRating from "./StarRating";

export function MovieCard({
  selectedMovieDetails,
  closeModal,
  saveMovie,
  isAlreadyWatched,
  alreadyRated,
}) {
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
    Year: year,
  } = selectedMovieDetails;

  return (
    <section className="modal-overlay">
      <div className="modal">
        <div className="modalButton">
          <button className="close-btn" onClick={closeModal}>
            X
          </button>
        </div>
        <div className="modal-header">
          <h1>Title: {title}</h1>
          <img src={poster} alt={title}></img>
        </div>
        <p>Country: {country}</p>
        <p>Year: {year}</p>
        <p>Director: {director}</p>
        <p>Genre: {genre}</p>
        <p>Language: {language}</p>
        <p>Plot: {plot}</p>
        {!isAlreadyWatched ? (
          <>
            <p>
              Imdb Rating: {imdbRating}⭐ Your Rating: {userRating} ⭐
            </p>
          </>
        ) : (
          <p>
            Imdb Rating: {imdbRating}⭐ Your Rating: {alreadyRated}⭐
          </p>
        )}
        <p>Runtime: {runtime}</p>
        {!isAlreadyWatched ? (
          <>
            <p>Rate the movie!</p>
            <StarRating maxRating={10} size={24} onSetRating={setUserRating} />
            <div className="moviecard-btn-container">
              <button
                className="moviecard-btn"
                onClick={() => saveMovie(selectedMovieDetails, userRating)}
              >
                Add to watchlist
              </button>
            </div>
          </>
        ) : (
          <p className="watched-message">You already watched a movie!</p>
        )}
      </div>
    </section>
  );
}
