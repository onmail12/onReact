import { Link } from "react-router-dom";

const Card = ({ id, type, title, year, poster, rating }) => {
  return (
    <Link to={type === "movie" ? `/movie/${id}` : `/show/${id}`} className="item">
      <img src={poster} alt={title + "poster"} className="poster" />
      <div className="row">
        <p className="title">{title}</p>
        <div className="rating">
          <span>&#9733;</span> {rating}
        </div>
      </div>
      <p className="year">{year}</p>
    </Link>
  );
};

export default Card;
