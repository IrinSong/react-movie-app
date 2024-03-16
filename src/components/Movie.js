import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, coverImg, title, year, summary, genres, rating }) {
  return (
    <div className={styles.movie}>
      <img className={styles.img} src={coverImg} alt={title} />
      <div className={styles.detail}>
        <h2 className={styles.title}>
          <Link to={`${process.env.PUBLIC_URL}/movie/${id}`}>
            {title} ({year})
          </Link>
        </h2>
        <p>{summary.length > 250 ? `${summary.slice(0, 250)}...` : summary}</p>
        <ul className={styles.genres}>
          {genres.map((genre) => (
            <li key={genre}>{genre}</li>
          ))}
        </ul>
        <span className={styles.rating}>⭐️ {rating}</span>
      </div>
    </div>
  );
}

Movie.PropType = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
