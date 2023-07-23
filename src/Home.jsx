import Carousel from "./components/carousel";
import Layout from "./Layout";

const Home = () => {
  return (
    <>
      <Layout>
        <Carousel
          type="movie"
          title="Popular Movies"
          filters={["sort_by=popularity.desc"]}
        />
        <Carousel
          type="movie"
          title="Top Rated Movies"
          filters={[
            "sort_by=vote_average.desc",
            "without_genres=99,10755",
            "vote_count.gte=200",
          ]}
        />
        <Carousel
          type="movie"
          title="Action Movies"
          filters={["with_genres=28"]}
        />
        <Carousel
          type="movie"
          title="Animation Movies"
          filters={["with_genres=16"]}
        />
        <Carousel type="tv" title="Popular Tv Shows" filters={[]} />
      </Layout>
    </>
  );
};

export default Home;
