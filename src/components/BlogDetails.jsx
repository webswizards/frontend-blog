import React, { useState } from "react";
import { formatDate } from "../services/formatDate";
import { Helmet } from "react-helmet";
import { useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";
import { BASE_URL } from "../services/apis";
import axios from "axios";
import Shimmerbd from "./details/Shimmerbd";
import { AiFillInstagram } from "react-icons/ai";
const BlogDetails = () => {
  const [loading, setLoading] = useState(true);
  const { url } = useParams();
  const location = useLocation();
  const [postData, setPostData] = useState([]);
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    fetchSinglePost();

    if (location.pathname.includes("category")) {
      const newurl = location.pathname.replace(/\/category\/[^/]+\//, "/");
      window.history.pushState(null, null, newurl);
      scrollToTop();
    } else {
      scrollToTop();
    }
  }, [location, url]);

  const fetchSinglePost = async () => {
    const data = await axios.post(`${BASE_URL}/showsinglepost`, {
      url: url,
    });
    setPostData(data?.data?.post);
    setLoading(false);
  };

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
    <main className="nk-pages">
      <Helmet>
        <title>{postData?.seoTitle}</title>
        <meta name="description" content={postData?.seoDescription} />
        <meta name="keywords" content={postData?.keywords} />
        <meta name="robots" content="index, follow" />
        <meta name="abstract" content={postData?.seoTitle} />
        <meta property="og:title" content={postData?.seoTitle} />
        <meta property="og:description" content={postData?.seoDescription} />
        <meta property="og:type" content="Website" />
        <meta property="og:url" content={postData?.canonical} />
        <meta property="og:image" content={postData?.image?.url} />
        <meta property="og:locale" content="India" />
        <meta property="og:street-address" content="Mumbai" />
        <meta property="og:locality" content="India" />
        <meta property="og:region" content="Mumbai" />
        <meta property="og:country-name" content="India" />
        <meta property="og:email" content="webswizards@gmail.com" />
        <meta property="og:phone_number" content="91 8446095023" />
        <meta name="twitter:card" content="Summary" />
        <meta name="twitter:site" content="@webswizards" />
        <meta name="twitter:title" content={postData?.seoTitle} />
        <meta name="twitter:description" content={postData?.seoDescription} />
        <meta name="twitter:image" content={postData?.image?.url} />
        <link rel="canonical" href={postData?.canonical} />
        <meta itemprop="name" content={postData?.seoTitle} />
        <meta itemprop="description" content={postData?.seoDescription} />
        <meta itemprop="image" content={postData?.image?.url} />
      </Helmet>
      {loading ? (
        <Shimmerbd /> // Display a loading spinner while data is loading
      ) : (
        <section className="section has-mask">
          <div className="nk-mask bg-pattern-dot bg-blend-around mt-n5 mb-10p mh-50vh"></div>
          <div className="container">
            <div className="section-content">
              <div className="row g-gs justify-content-center">
                <div className="col-xxl-8 col-xl-9 col-lg-10">
                  <div className="text-center">
                    <h6 className="overline-title text-primary">WebWizards</h6>
                    <h1 className="title">{postData?.title}</h1>
                    <ul className="list list-row gx-2">
                      <li>
                        <div className="sub-text fs-5">
                          {formatDate(postData?.createdAt)}
                        </div>
                      </li>
                      <li>
                        <em className="icon mx-0 ni ni-dot"></em>
                      </li>
                      <li>
                        <div className="sub-text fs-5">
                          avg read :{" "}
                          {calculateReadingTime(
                            postData?.content,
                            wordsPerMinute
                          )}{" "}
                          min
                        </div>
                      </li>
                    </ul>
                    <div className="my-5">
                      <img
                        className="rounded-4 w-100"
                        src={postData?.image}
                        alt="thumbnail"
                      
                      />
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="block-typo">
                      <div
                        dangerouslySetInnerHTML={{ __html: postData?.content }}
                      />
                    </div>
                    <ul className="btn-list gy-3 ps-xl-6 ps-lg-4 ps-3">
                      <li>
                        <a className="link-secondary" href="https://www.facebook.com/profile.php?id=100089147380867">
                          <em className="icon fs-3 ni ni-facebook-circle"></em>
                        </a>
                      </li>
                      <li>
                        <a className="link-secondary" href="https://instagram.com/_webs_wizard_?igshid=OGQ5ZDc2ODk2ZA==">
                          <em className="icon fs-3 ni ">
                            <AiFillInstagram />
                          </em>
                        </a>
                      </li>
                      <li>
                        <a className="link-secondary" href="https://www.linkedin.com/in/webs-wizards/">
                          <em className="icon fs-3 ni ni-linkedin-round"></em>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default BlogDetails;
