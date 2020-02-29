//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
// import data
import dummyData from "../../dummy-data.js";
import LikeSection from "./LikeSection";
const PostsPage = (props) => {
  // set up state for your data
  const [data, updateData] = useState(dummyData)
  return (
    <div className="posts-container-wrapper">
      {/data.map((elem,i) => {
        return <Post post = {elem} key = {i} />
      })}
    </div>
  );
};

export default PostsPage;
