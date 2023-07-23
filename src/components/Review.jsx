import { PersonCircle } from "react-bootstrap-icons";
const Review = ({ movieReviews }) => {
  if (movieReviews.length === 0) {
    return <h2 className="title">No Reviews for this Item</h2>;
  }
  return (
    <div className="review">
      <h2 className="title">Reviews</h2>
      <div className="review-row">
        {movieReviews.map((review) => {
          return (
            <div className="review-item" key={review.id}>
              <div className="profile">
                <PersonCircle size={32} />
                <div className="col">
                  <div className="author">{review.author}</div>
                  <div className="username">
                    {review?.author_details?.username}
                  </div>
                </div>
              </div>
              <div className="content">{review.content.slice(0, 300)}...</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Review;
