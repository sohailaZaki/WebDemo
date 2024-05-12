import React, { useState, useEffect,useRef } from "react";
import axios from "axios";
import "./comments.css";
import lineImage from "../../images/line.png";
import "bootstrap/dist/css/bootstrap.min.css";
import StarRatings from "react-star-ratings";
import Alert from '@mui/material/Alert';
const CommentBox = ({ user, comment,star }) => {
  const [UserName, setUserName] = useState(""); 
  const [UserEmail, setUserEmail] = useState(""); 
  const fetchUserName_Email = async (id) => {
    try { 
      const token = localStorage.getItem('user_data');
    const userData =  JSON.parse(localStorage.getItem('user_data')??'')
        const response = await fetch(`http://localhost:4000/${id}`, {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              Authorization: `Bearer ${userData.userToken}`
          },
        });
        if (response.ok) {
          const data = await response.json();
          setUserName(data.getaUser.name);
          setUserEmail(data.getaUser.email);
    
        } else {
            throw new Error('Failed to submit review');
        }
    } catch (error) {
        console.error("Error submitting review:", error);
    }
  };
  
 const UserData =  fetchUserName_Email(user);
  return (
    <div className="comment-box">
      <div className="comment-user">{UserName}</div>
      <div className="comment-user">{UserEmail}</div>
      <div className="comment-text">{comment}</div>
      <div className="comment-stars">
      <div className="stars" style={{marginBottom : "15px"}}>
      <StarRatings
      rating=   {star}
      starRatedColor="gold"
      numberOfStars={5}
      name='rating'
      starDimension="25px"
      starSpacing="5px"/>
    </div>
   </div>
    </div>
  );
};

const Comment = ( props ) => {
  const [rating, setRating] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState(""); // State for new comment
  const [successAlert, setSuccessAlert] = useState(false); // State for success alert

//   useEffect(() => {
//     const fetchComments = async () => {
//         try {
//             const response = await axios.get(`/product/${productId}/comments`);
//             setComments(response.data.comments);
//         } catch (error) {
//             console.error("Error fetching comments:", error);
//         }
//     };
//     fetchComments();
// }, [productId]);
const handleRatingChange = (newRating) => {
  setRating(newRating); // Update the selected rating
};
  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };
  const { product } = props;
  const [reviews, setReviews] = useState([]); // State to store product reviews
  const [newReview, setNewReview] = useState(""); // State to store new review text
  
  const reviewsRef = useRef(null); // Ref for reviews section

  useEffect(() => {
      // Fetch reviews for the product when the component mounts
      fetchReviews();
  }, []);

  const fetchReviews = async () => {
      try {
          const response = await fetch(`http://localhost:4000/product/${product._id}/ratings`);
          if (response.ok) {
              const data = await response.json();
              setReviews(data.ratings);
          } else {
              throw new Error('Failed to fetch reviews');
          }
      } catch (error) {
          console.error("Error fetching reviews:", error);
      }
  };



  const handleSubmitReview = async () => {
    try { 
      const token = localStorage.getItem('user_data');
    const userData =  JSON.parse(localStorage.getItem('user_data')??'')
        const response = await fetch(`http://localhost:4000/product/rating`, {
            method: 'PUT',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              Authorization: `Bearer ${userData.userToken}`
          },
            body: JSON.stringify({
                star: rating, // Include the rating in the request body
                prodId: product._id, // Include the product ID in the request body
                comment: newComment // Include the review comment in the request body
            }),
        });
        if (response.ok) {
          setSuccessAlert(true); 
          // Refresh reviews after submitting the new review
            fetchReviews();
            // Clear the new review input
            setNewReview("");
        } else {
            throw new Error('Failed to submit review');
        }
    } catch (error) {
        console.error("Error submitting review:", error);
    }
};


  return (
    <div className="populer container">
      <div className="line-img-container d-flex align-items-center mb-4">
        <div className="line-img">
          <img src={lineImage} alt="" />
        </div>
        <h4 className="text-uppercase mx-3">Reviews</h4>
        <div className="line-img">
          <img src={lineImage} alt="" />
        </div>
      </div>
      {/* Success alert */}
      {successAlert && (
        <Alert severity="success">
        Review posted successfully!
</Alert>
      )}
      {/* Review submission form */}
      <div className="row flex-column">
      <StarRatings
      rating={rating}
      starRatedColor="gold"
      changeRating={handleRatingChange}
      numberOfStars={5}
      name='rating'
      starDimension="25px"
      starSpacing="5px"
  />  
      <textarea
          value={newComment}
          onChange={handleCommentChange}
          className="form-control mb-3"
          rows="4"
          placeholder="Write your review here..."
        />
        <button
          onClick={handleSubmitReview}
          className="btn btn-primary mb-3"
          style={{
            width : "150px",
            margin : "auto"
          }}
        >
          Submit Review
        </button>
        {/* Map through comments and render each comment */}
        {reviews.map((review, index) => (
          <CommentBox
            key={index}
            user={review.postedby}
            comment={review.comment}
            star = {review.star}
          />
        ))}
        {reviews.length === 0 && <p>No reviews yet.</p>}
      </div>
      <div className="line-img-container d-flex align-items-center mb-4">
        <div className="line-img">
          <img src={lineImage} alt="" />
        </div>
        <div className="line-img">
          <img src={lineImage} alt="" />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Comment;
