import React, { useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { BASE_URL } from "../services/apis";
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

  // console.log(posts)
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
      <Table>
        <Thead>
          <Tr>
            <Th>Title</Th>
            <Th>Image</Th>
            <Th>Seo Title</Th>
            <Th>Seo Description</Th>
            <Th>Url</Th>
            <Th>Post By</Th>
            <Th>Options</Th>
          </Tr>
        </Thead>
        <Tbody>
          {allposts?.map((post) => (
            <Tr key={post._id}>
              <Td>{post?.title}</Td>
              <Td>
                <img
                  src={post?.image?.url}
                  height={100}
                  width={100}
                  alt="image"
                />
              </Td>
              <Td>{post?.seoTitle}</Td>
              <Td>{post?.seoDescription}</Td>
              <Td>{post?.postUrl}</Td>
              <Td>{post?.postedBy}</Td>
              <Td>
                <button
                  className="btnblog"
                  onClick={() => handleEditClick(post._id)}
                >
                  <BiEdit />
                </button>
                <button className="btnblog" onClick={()=>{handleDeleteClick(post._id)}}>
                  <AiFillDelete />
                </button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  );
};

export default AllBlog;
