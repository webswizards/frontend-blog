import React, { useEffect, useState } from "react";
import Blog from "./Blog";
import { useLocation, useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import {showpagepost,showallpost} from '../services/operations/categoryAPI';
import {useDispatch,useSelector} from 'react-redux'
import { Helmet } from "react-helmet";

const Category = () => {
  const dispatch = useDispatch()
  const location = useLocation();
  const { id } = useParams();
  const { loading, totalPages, currentPage, allcategories,pageCategories,categoriesSeo } = useSelector((state) => state.category);
  const [searchQuery, setSearchQuery] = useState("");
  const name = id.charAt(0).toUpperCase() + id.slice(1);
  const [page, setPage] = useState(1);
  const options = { name: name };
  const filterPosts = () => {
    if (!searchQuery) {
      return pageCategories;
    } else {
      return allcategories.filter((post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
  };
  const fetchblogs = async () => {
    try {
     await dispatch(showallpost(options))
  await    dispatch(showpagepost(page,options))
    } catch (error) {
      console.log(error);
    }
  };

  const nextPage = ()=>{
    setPage(page+ 1);
  }

  const previousPage = ()=>{
    setPage(page - 1)
  }

  useEffect(() => {
    fetchblogs();
  }, [dispatch, page,location]);

  return (
    
    <main className="nk-pages">
      <Helmet>
        <title>{categoriesSeo?.seoTitle}</title>
        <meta name="description" content={categoriesSeo?.seoDescription} />
        <meta name="keywords" content={categoriesSeo?.keywords} />
        <meta name="robots" content="index, follow" />
        <meta name="abstract" content={categoriesSeo?.seoTitle} />
        <meta property="og:title" content={categoriesSeo?.seoTitle} />
        <meta property="og:description" content={categoriesSeo?.seoDescription} />
        <meta property="og:type" content="Website" />
        <meta property="og:url" content={categoriesSeo?.canonical} />
        <meta property="og:image" content="https://www.webswizards.in/logo-dark.png" />
        <meta property="og:locale" content="India" />
        <meta property="og:street-address" content="Mumbai" />
        <meta property="og:locality" content="India" />
        <meta property="og:region" content="Mumbai" />
        <meta property="og:country-name" content="India" />
        <meta property="og:email" content="webswizards@gmail.com" />
        <meta property="og:phone_number" content="91 8446095023" />
        <meta name="twitter:card" content="Summary" />
        <meta name="twitter:site" content="@webswizards" />
        <meta name="twitter:title" content={categoriesSeo?.seoTitle} />
        <meta name="twitter:description" content={categoriesSeo?.seoDescription} />
        <meta name="twitter:image" content="https://www.webswizards.in/logo-dark.png" />
        <link rel="canonical" href={categoriesSeo?.canonical} />
        <meta itemprop="name" content={categoriesSeo?.seoTitle} />
        <meta itemprop="description" content={categoriesSeo?.seoDescription} />
        <meta itemprop="image" content="https://www.webswizards.in/logo-dark.png" />
      </Helmet>
      <section className="section section-bottom-0 has-shape has-mask">
        <div className="nk-shape bg-shape-blur-m mt-8 start-50 top-0 translate-middle-x"></div>
        <div className="nk-shape bg-shape-blur-m mt-8 start-50 top-50 translate-middle-x"></div>
        <div className="nk-mask bg-pattern-dot bg-blend-around mt-n5 mb-10p mh-50vh"></div>
        <div className="container">
          <div className="section-head">
            <div className="row justify-content-center text-center">
              <div className="col-lg-9 col-xl-7 col-xxl-6">
                <h6 className="overline-title text-primary">Blog</h6>
                <h1 className="title">{id.toUpperCase()}</h1>
                <label
                  id="blog-search"
                  className="d-flex align-items-center border rounded-3 py-2 px-4 mt-5 mt-lg-7 bg-white"
                >
                  <em className="icon me-3 fs-3 ni ni-search"></em>
                  <input
                    type="text"
                    name="blog-search"
                    className="form-control form-control-lg form-control-plaintext"
                    placeholder="Search for articles"
                    onChange={(e) => setSearchQuery(e.target.value)}
                    required
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="section-content">
          {loading ? ( // Display loading state
            <Shimmer />
          ) : (
            <div  className="row g-gs">
              { filterPosts().length > 0 ? (
                filterPosts().map((post) => (
                  <React.Fragment key={post._id}>
                    <Blog post={post} />
                  </React.Fragment>
                ))
              ) : (
               
                <p className="centerdiv">No articles found.</p>
              )}
            </div>
          )}
          </div>
          <div className="section-actions text-center">
            <ul className="btn-list btn-list-inline g-gs">
            {
                currentPage > 1 &&
                <li>
                <div onClick={previousPage} className="btn btn-primary btn-soft btn-lg">
                  <em className="icon ni ni-arrow-long-left"></em>
                  <span>Previous</span>
                </div>
              </li>
              }
              {
                currentPage < totalPages &&
                <li>
                <div onClick={nextPage} className="btn btn-primary btn-lg">
                  <span >Next</span>
                  <em className="icon ni ni-arrow-long-right"></em>
                </div>
              </li>}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Category;
