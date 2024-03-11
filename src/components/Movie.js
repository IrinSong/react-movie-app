import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ coverImg, title, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>
        <Link to="movie">{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.PropType = {
  coverImg: PropTypes.string.isRequire,
  title: PropTypes.string.isRequire,
  summary: PropTypes.string.isRequire,
  genres: PropTypes.arrayOf(PropTypes.string).isRequire,
};

export default Movie;
