const LoadMore = ({ isLoading, loadMore }) => {
  if (isLoading) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div className="loadmore-wrapper">
        <button className="item loadmore-btn" onClick={loadMore}>
          Load More
        </button>
      </div>
    );
  }
};

export default LoadMore;

