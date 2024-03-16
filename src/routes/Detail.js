import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./Detail.module.css";

function Detail() {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    setMovie(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      <nav className={styles.nav}>
        <span>
          <Link to={`${process.env.PUBLIC_URL}/`}>Home</Link>
        </span>
      </nav>
      <div className={styles.container}>
        <h1>{movie.title}</h1>
        <img className={styles.img} src={movie.large_cover_image} alt={movie.title} />
        <div className={styles.detail}>
          <span>{movie.year}</span>
          <span>{movie.rating}</span>
          <p>{movie.description_full}</p>
        </div>
      </div>
    </div>
  );
}

export default Detail;
