import { useState, useEffect } from "react";
import { searchMovies } from "./api/tmdb";
import Layout from "./Layout";
import Grid from "./components/Grid";
import LoadMore from "./components/LoadMore";
import { useParams } from "react-router-dom";

const SearchResult = () => {
  const [resCard, setResCard] = useState([]);
  const { query } = useParams();
  // const [newResCard, setNewResCard] = useState([]);
  // const [isLoading, setLoading] = useState(false);
  // const [page, setPage] = useState(1);

  // const loadMore = () => {
  //   setPage(page + 1);
  // };

  // const fetchNewData = () => {
  //   setLoading(true)
  //   searchMovies(query, page).then((response) => {
  //     setNewResCard(response);
  //   });
  //   setResCard(resCard.concat(newResCard));
  //   setLoading(false)
  // };

  // useEffect(() => {
  //   console.log(page);
  //   fetchNewData();
  // }, [page]);
  
  useEffect(() => {
    searchMovies(query, 1).then((response) => {
      setResCard(response);
    });
  }, []);

  return (
    <Layout>
      <h2>{`Search result for ${query}`}</h2>
      <Grid data={resCard} />
    </Layout>
  );
};

export default SearchResult;
