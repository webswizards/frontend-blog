import React, { useState } from "react";
import { useEffect } from "react";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import "./AllBlog.css";
import { useNavigate } from "react-router-dom";
import {deletePost} from "../services/operations/PostAPI"
import { useDispatch,useSelector } from "react-redux";
const AllBlog = () => {
  const nevigate = useNavigate();
  const [allposts, setAllposts] = useState([]);
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth)
  const { posts } = useSelector((state) => state.post);


  useEffect(()=>{
    setAllposts(posts)
  },[])
  
  const handleEditClick = (postID) => {
    nevigate(`/editpost/${postID}`);
  };

  const handleDeleteClick = (postId) =>{
    const postData = { postId };
    dispatch(deletePost(postData, token));
  }
  return (
    <div className="allblogcontainer">
    

      <table>
  <thead>
    <tr>
      <th>Title</th>
      <th>Image</th>
      <th>Seo Title</th>
      <th>Seo Description</th>
      <th>Url</th>
      <th>Post By</th>
      <th>Options</th>
    </tr>
  </thead>
  <tbody>
  
    {allposts?.map((post) => (
            <tr key={post._id}>
              <td>{post?.title}</td>
              <td>
                <img
                  src={post?.image}
                  height={100}
                  width={100}
                  alt="image"
                />
              </td>
              <td>{post?.seoTitle}</td>
              <td>{post?.seoDescription}</td>
              <td>{post?.postUrl}</td>
              <td>{post?.postedBy}</td>
              <td>
                <button
                  className="btnblog"
                  onClick={() => handleEditClick(post._id)}
                >
                  <BiEdit />
                </button>
                <button className="btnblog" onClick={()=>{handleDeleteClick(post._id)}}>
                  <AiFillDelete />
                </button>
              </td>
            </tr>
          ))}
    
  </tbody>
</table>
    </div>
  );
};

export default AllBlog;
