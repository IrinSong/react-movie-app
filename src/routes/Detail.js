import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    setMovie(json.data.movie);
    console.log(movie);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={movie.large_cover_image} />
      <div>
        <small>{movie.year}</small>
        <small>{movie.rating}</small>
        <p>{movie.description_full}</p>
      </div>
    </div>
  );
}

export default Detail;
