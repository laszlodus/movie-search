import backgroundMovie from "../background_movie.webp";
export function MovieList({ data, onSelectMovie }) {
  if (!data)
    return (
      <div className="background-img">
        <img src={backgroundMovie} alt="background_image"></img>
      </div>
    );

  const movies = data.Search.map((mov) => {
    return (
      <div key={mov.imdbID} onClick={() => onSelectMovie(mov)}>
        <h1>{mov.Title}</h1>
        <img src={mov.Poster} alt={mov.Title}></img>
        <p className="movie-year">{mov.Year}</p>
      </div>
    );
  });
  return <main className="movie-list">{movies}</main>;
}
