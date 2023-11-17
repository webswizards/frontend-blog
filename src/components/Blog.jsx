import React from "react";
import { Link, useLocation } from "react-router-dom";
import { formatDate } from "../services/formatDate";
import img from "../images/user.png"
const Blog = (blog) => {
  const calculateReadingTime = (content, wordsPerMinute) => {
    if (content) {
      const wordCount = content.split(/\s+/).length;
      const readingTime = Math.ceil(wordCount / wordsPerMinute);
      return readingTime;
    }
    return 0; // Return a default value or handle it accordingly
  };
  const wordsPerMinute = 400;

  return (
    <>
    
    <div className="col-md-6 col-xl-4">
    <Link to={`blog/${blog?.post?.postUrl}`}>
      <div className="card border-0 shadow-tiny rounded-4">
        <div className="card-body p-4">
          <div className="d-block">
            <img className="rounded-4 w-100" src={`${blog?.post?.image}`} alt="" />
          </div>
          <div
            className="badge px-3 py-2 mt-4 mb-3 text-bg-primary-soft fw-normal rounded-pill"
          >
           {blog?.post?.category?.name}
          </div>
          <h3>
            <div className="link-dark line-clamp-2">
             {blog?.post?.title}
            </div>
          </h3>
          <div className="d-flex pt-4">
            <div className="media media-lg media-middle media-lg rounded-pill">
              <img src={img} alt="" />
            </div>
            <div className="media-info ms-3">
              <h6 className="mb-1">{blog?.post?.postedBy}</h6>
              <ul className="list list-row gx-1">
                <li>
                  <div className="sub-text">{formatDate(blog?.post?.createdAt)}</div>
                </li>
                <li>
                  <em className="icon mx-0 ni ni-dot"></em>
                </li>
                <li>
                  <div className="sub-text">   avg read :{" "}
                        {calculateReadingTime(
                          blog?.post?.content,
                          wordsPerMinute
                        )}{" "}
                        min</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </Link>
    </div>
   
    </>
  );
};

export default Blog;
