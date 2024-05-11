import React from "react";
import "./comments.css";
import lineImage from "../../images/line.png";
import "bootstrap/dist/css/bootstrap.min.css";

const CommentBox = ({ user, comment }) => {
  return (
    <div className="comment-box">
      <div className="comment-user">{user}</div>
      <div className="comment-text">{comment}</div>
    </div>
  );
};

const Related = () => {
  // Dummy data for comments
  const comments = [
    { user: "User1", comment: "This product is amazing!" },
    { user: "User2", comment: "I love it!" },
    { user: "User3", comment: "Not satisfied with the quality." },
    { user: "User4", comment: "Great value for the price." },
  ];

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
      <div className="row flex-column">
        {/* Map through comments and render each comment */}
        {comments.map((comment, index) => (
          <CommentBox
            key={index}
            user={comment.user}
            comment={comment.comment}
          />
        ))}
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

export default Related;
