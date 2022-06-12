import MovieItem from './MovieItem';
import classes from './MovieList.module.css';

function MovieList(props) {
  return (
    <ul className={classes.list}>
      {props.movies.map((movie) => (
        <MovieItem
          key={movie.id}
          id={movie.id}
          image={movie.backdrop_path}
          title={movie.title}
          popularity={movie.popularity}
        />
      ))}
    </ul>
  );
}

export default MovieList;