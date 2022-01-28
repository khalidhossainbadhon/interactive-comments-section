import React from "react";
import "../App.css";
import Avatar from "../images/avatars/image-juliusomo.png";
export default function Comments() {
  return (
    <div>
      <div className="comment ">
        <form action="" className="comment-section shadow">
          <img src={Avatar} alt="images" />
          <textarea name="" id="" rows="4" cols="50">
            Add a comment...
          </textarea>
          <button className="submit-btn">SEND</button>
        </form>{" "}
      </div>
    </div>
  );
}
