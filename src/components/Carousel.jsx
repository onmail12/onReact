import { ArrowRightSquareFill } from "react-bootstrap-icons";
import Card from "./Card";
import { getMovies, getTrendingTvShows } from "../api/tmdb";
import { useState, useEffect } from "react";

const Carousel = ({ title, filters, type }) => {
  const [resCard, setResCard] = useState([]);
  const [page, setPage] = useState(1);
  const tmdbPosterPath = "https://image.tmdb.org/t/p/w342/";

  // pagination note
  // onClick={() => setPage((currentPage) => currentPage + 1)

  useEffect(() => {
    if (type === "movie") {
      getMovies([`page=${page}`, ...filters]).then((response) => {
        setResCard(response);
      });
    } else {
      getTrendingTvShows([`page=${page}`, filters]).then((response) => {
        setResCard(response);
      });
    }
  }, [page, filters]);

  return (
    <div>
      <div className="carousel">
        <div className="carousel-title">
          <h2 className="text">{title}</h2>
          <a href="#">
            <ArrowRightSquareFill className="icon" size={24} />
          </a>
        </div>
        <div className="carousel-box">
          {resCard.map((cardData) => {
            if (!cardData.poster_path) {
              return;
            }

            if (type === "movie") {
              return (
                <Card
                  id={cardData.id}
                  type="movie"
                  key={cardData.id}
                  title={
                    cardData.title.length > 30
                      ? cardData.title.slice(0, 27) + "..."
                      : cardData.title
                  }
                  year={cardData.release_date.slice(0, 4)}
                  poster={tmdbPosterPath + cardData.poster_path}
                  rating={cardData.vote_average.toString().slice(0, 3)}
                />
              );
            } else if (type === "tv") {
              return (
                <Card
                  id={cardData.id}
                  type="tv"
                  key={cardData.id}
                  title={
                    cardData.name.length > 30
                      ? cardData.name.slice(0, 27) + "..."
                      : cardData.name
                  }
                  year={cardData.first_air_date.slice(0, 4)}
                  poster={tmdbPosterPath + cardData.poster_path}
                  rating={cardData.vote_average.toString().slice(0, 3)}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
