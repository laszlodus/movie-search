export function MovieList({ data, onSelectMovie }) {
  if (!data)
    return (
      <div className="background-img">
        <img src="/background_movie.webp" alt="background_image" />
      </div>
    );

  const movies = data.Search.map((mov) => {
    return (
      <div key={mov.imdbID} onClick={() => onSelectMovie(mov)}>
        <h1>{mov.Title}</h1>
        <img src={mov.Poster} alt={mov.Title}></img>
        <p className="movie-info">More info</p>
      </div>
    );
  });
  return <main className="movie-list">{movies}</main>;
}
