import React, { useState } from "react";
import "./comment.css";
import avatar from "../../assets/image/Ellipse 1.png";

const Comment = () => {
  const [comment, setComment] = useState("");
  const handleInputChange = (e) => setComment(e.target.value);

  const handleSubmit = () => {
    console.log("Submitted comment: ", comment);
  };

  return (
    <div className="comment-section">
      <div className="comment-header">
        <img src={avatar} alt="User" className="avatar" />
        <div className="comment-body">
          <h4>John Doe</h4>
          <hr width="970px" align="left" />
          <textarea
            placeholder="Sản phẩm này sẽ mua tặng cho gia đình sau ngày 15 nè!"
            value={comment}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="comment-toolbar">
        <button className="comment-btn">B</button>
        <button className="comment-btn">I</button>
        <button className="comment-btn">🔗</button>
        <button className="comment-submit" onClick={handleSubmit}>
          Comment
        </button>
      </div>
    </div>
  );
};

export default Comment;
