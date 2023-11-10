import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { BASE_URL } from "../services/apis";
import { createPost } from "../services/operations/PostAPI";
import Img from "../images/logo-dark.png";
const AddPost = () => {
  const [content, setContent] = useState("");
  const [categorydata, setCategorydata] = useState([]);
  const [thumbnailImage, setImageFile] = useState(null);
  const [loading, setLoading] = useState(true);
  const editor = useRef(null);
  const fileInputRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  useEffect(() => {
    fetch(`${BASE_URL}/showallcategory`)
      .then((response) => response.json())
      .then((data) => {
        setCategorydata(data?.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
    }
  };

  const [values, setValues] = useState({
    title: "",
    postedBy: "",
    seoTitle: "",
    seoDescription: "",
    canonical: "",
    postUrl: "",
    keywords: "",
    category: "", // Default category
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(thumbnailImage);
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("content", content);
    formData.append("postedBy", values.postedBy);
    formData.append("category", values.category);
    formData.append("seoTitle", values.seoTitle);
    formData.append("seoDescription", values.seoDescription);
    formData.append("canonical", values.canonical);
    formData.append("postUrl", values.postUrl);
    formData.append("keywords", values.keywords);
    formData.append("thumbnailImage", thumbnailImage);
    dispatch(createPost(formData, token, navigate));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <div>
      <div className="nk-app-root ">
        <main className="nk-pages">
          <div className="min-vh-100 d-flex flex-column has-mask">
            <div className="nk-mask bg-pattern-dot bg-blend-around"></div>
            <div className="text-center mt-6 mb-4">
              <a href="index.html" className="logo-link">
                <div className="logo-wrap">
                  <img className="logo-img logo-dark" src={Img} alt="" />
                </div>
              </a>
            </div>
            <div className="my-auto">
              <div className="container">
                <div className="row g-gs justify-content-center">
                  <div className="col-md-7 col-lg-6 col-xl-5">
                    <div className="card border-0 shadow-sm rounded-4">
                      <div className="card-body">
                        <h4 className="mb-3">Create an Post</h4>
                        <form onSubmit={handleSubmit}>
                          <div className="row g-4">
                            <div className="col-12">
                              <div className="form-group">
                                <label className="form-label">Title</label>
                                <div className="form-control-wrap">
                                  <input
                                    type="text"
                                    name="title"
                                    value={values.title}
                                    onChange={handleInputChange}
                                    placeholder="Title"
                                    className="form-control form-control-lg"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="form-group">
                                <label className="form-label">Content</label>
                                <div className="form-control-wrap">
                                  <JoditEditor
                                    className="editor"
                                    ref={editor}
                                    value={content}
                                    onChange={(newContent) =>
                                      setContent(newContent)
                                    }
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="form-group">
                                <label className="form-label">Posted By</label>
                                <div className="form-control-wrap">
                                  <input
                                    type="text"
                                    name="postedBy"
                                    value={values.postedBy}
                                    onChange={handleInputChange}
                                    placeholder="Posted By"
                                    className="form-control form-control-lg"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="form-group">
                                <label className="form-label">SEO Title</label>
                                <div className="form-control-wrap">
                                  <input
                                    type="text"
                                    name="seoTitle"
                                    value={values.seoTitle}
                                    onChange={handleInputChange}
                                    placeholder="SEO Title"
                                    className="form-control form-control-lg"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="form-group">
                                <label className="form-label">
                                  SEO Description
                                </label>
                                <div className="form-control-wrap">
                                  <input
                                    type="text"
                                    name="seoDescription"
                                    value={values.seoDescription}
                                    onChange={handleInputChange}
                                    placeholder="SEO Description"
                                    className="form-control form-control-lg"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="form-group">
                                <label className="form-label">
                                  Canonical URL
                                </label>
                                <div className="form-control-wrap">
                                  <input
                                    type="text"
                                    name="canonical"
                                    value={values.canonical}
                                    onChange={handleInputChange}
                                    placeholder="Canonical URL"
                                    className="form-control form-control-lg"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="form-group">
                                <label className="form-label">Post URL</label>
                                <div className="form-control-wrap">
                                  <input
                                    type="text"
                                    name="postUrl"
                                    value={values.postUrl}
                                    onChange={handleInputChange}
                                    placeholder="Post URL"
                                    className="form-control form-control-lg"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="form-group">
                                <label className="form-label">KeyWords</label>
                                <div className="form-control-wrap">
                                  <input
                                    type="text"
                                    name="keywords"
                                    value={values.keywords}
                                    onChange={handleInputChange}
                                    placeholder="keywords"
                                    className="form-control form-control-lg"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="form-group">
                                <label className="form-label">Category</label>
                                <div className="form-control-wrap">
                                  <select
                                    name="category"
                                    value={values.category}
                                    onChange={handleInputChange}
                                    className="form-control form-control-lg"
                                  >
                                    {categorydata.length > 0 ? (
                                      categorydata.map((category) => (
                                        <option
                                          key={category._id}
                                          value={category._id}
                                        >
                                          {category.name}
                                        </option>
                                      ))
                                    ) : (
                                      <option value="">Loading</option>
                                    )}
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="form-group">
                                <label className="form-label">
                                  Upload Thumbnail
                                </label>
                                <div className="form-control-wrap">
                                  <input
                                    type="file"
                                    onChange={(event) => {
                                      setImageFile(event.target.files[0]);
                                    }}
                                    className="form-control form-control-lg"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="form-group">
                                <button
                                  className="btn btn-primary btn-block"
                                  type="submit"
                                  id="submit-btn"
                                >
                                  Create a Post
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AddPost;
