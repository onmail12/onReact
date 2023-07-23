import { useState, useEffect } from "react";
import { FilterLeft } from "react-bootstrap-icons";
import { Link, useParams } from "react-router-dom";
import { getMovies, getTvShows } from "./api/tmdb";
import movieGenreList from "./api/movieGenreList";
import tvGenreList from "./api/tvGenreList";
import Layout from "./Layout";
import Modal from "./components/Modal";
import LoadMore from "./components/LoadMore";
import Grid from "./components/Grid";

const MovieList = ({ type, filters = [] }) => {
  const [resCard, setResCard] = useState([]);
  const [newResCard, setNewResCard] = useState([]);
  const [page, setPage] = useState(2);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const { genreId } = useParams();

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const ModalContent = () => {
    if (type === "movie") {
      return (
        <div className="genre-grid">
          {movieGenreList.map((genre) => {
            return (
              <Link
                key={genre.id}
                to={`/movies/genre/${genre.id}`}
                className="genre-button"
              >
                {genre.name}
              </Link>
            );
          })}
        </div>
      );
    } else {
      return (
        <div className="genre-grid">
          {tvGenreList.map((genre) => {
            return (
              <Link
                key={genre.id}
                to={`/shows/genre/${genre.id}`}
                className="genre-button"
                onClick={window.location.reload}
              >
                {genre.name}
              </Link>
            );
          })}
        </div>
      );
    }
  };

  filters.push(`with_genres=${genreId}`);

  const loadMore = () => {
    setPage((currentPage) => currentPage + 1);
  };

  const fetchNewData = () => {
    setLoading(true);
    if (type === "movie") {
      getMovies([`page=${page}`, ...filters]).then((response) => {
        setNewResCard(response);
      });
    } else {
      getTvShows([`page=${page}`, ...filters]).then((response) => {
        setNewResCard(response);
      });
    }
    setResCard(resCard.concat(newResCard));
    setLoading(false);
  };

  useEffect(() => {
    fetchNewData();
  }, [page]);

  useEffect(() => {
    if (type === "movie") {
      setResCard([]);
      getMovies([`page=1`, ...filters]).then((response) => {
        setResCard(response);
      });
    } else {
      getTvShows([`page=1`, ...filters]).then((response) => {
        setResCard(response);
      });
    }
  }, [window.location.pathname]);

  return (
    <Layout>
      <div className="filter">
        <button onClick={() => setModalIsOpen(true)} className="filter-btn">
          <FilterLeft size={32} />
        </button>
        <h2>Filter Items</h2>
      </div>
      <Modal
        isOpen={modalIsOpen}
        title="Filter"
        content={<ModalContent />}
        closeModalFunction={closeModal}
      />

      <Grid data={resCard} />
      <LoadMore isLoading={isLoading} loadMore={loadMore}></LoadMore>
    </Layout>
  );
};

export default MovieList;
