import Card from "./Card";
const tmdbPosterPath = "https://image.tmdb.org/t/p/w342/";

const Grid = ({ data }) => {
  if (data.length === 0) {
    return <h2>Not Found!</h2>
  }
  return (
    <div className="grid">
      {data.map((cardData) => {
        if (!cardData.poster_path) {
          return;
        }
        
        // movie data has no media_type
        if (!cardData.first_air_date) {
          return (
            <Card
              key={cardData.id}
              id={cardData.id}
              type="movie"
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
        } else {
          return (
            <Card
              key={cardData.id}
              id={cardData.id}
              type="tv"
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
  );
};

export default Grid;
