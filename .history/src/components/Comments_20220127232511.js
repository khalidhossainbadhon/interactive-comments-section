import React, { useState } from "react";
import avatar from "../images/avatars/image-amyrobson.png";
// import { FaTrash } from "react-icons/fa";
import "../App.css";

const Comments = () => {
  const [comment, setComment] = useState([]);
  //   const [edit, setEdit] = useState("");
  //   const [delete, setDelete] = useState([]);

  return (
    <div className="comments shadow">
      <div className="profile-info">
        <img src={avatar} alt="" className="random-img" />
        <h4 className="name">@amyrobson</h4>
        <span className="time"> 1 Months ago</span>
        <div className="btn">
          <button className="delete">Delete</button>
          <button className="edit">Edit</button>
        </div>
      </div>

      <p className="single-comment">{comment}</p>
    </div>
  );
};

export default Comments;
