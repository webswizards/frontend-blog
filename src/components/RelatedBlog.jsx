import React from "react";
import img from "../images/user.png"
import { Link, useNavigate } from "react-router-dom";
import { formatDate } from "../services/formatDate";
const RelatedBlog = ({post}) => {
  
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
    
    <div>
    <Link to={`blog/${post?.postUrl}`}>
      <div className="swiper-slide">
        <div className="card border-0 shadow-tiny rounded-4">
          <div className="card-body p-4">
            <p className="d-block" >
              <img className="rounded-4 w-100" src={post?.image?.url} alt="" />
            </p>
            <div
              className="badge px-3 py-2 mt-4 mb-3 text-bg-primary-soft fw-normal rounded-pill"
            >
             {post?.category?.name}
            </div>
            <h3>
              <p className="link-dark line-clamp-2">
                {post?.title}
              </p>
            </h3>
            <div className="d-flex pt-4">
              <div className="media media-lg media-middle media-lg rounded-pill">
                <img src={img} alt="" />
              </div>
              <div className="media-info ms-3">
                <h6 className="mb-1">{post?.postedBy}</h6>
                <ul className="list list-row gx-1">
                  <li>
                    <div className="sub-text">{formatDate(post?.createdAt)}</div>
                  </li>
                  <li>
                    <em className="icon mx-0 ni ni-dot"></em>
                  </li>
                  <li>
                    <div className="sub-text"> avg read :{" "}
                        {calculateReadingTime(
                          post?.content,
                          wordsPerMinute
                        )}{" "}
                        min</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Link>
    </div>
    
  );
};

export default RelatedBlog;
