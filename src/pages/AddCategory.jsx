import React, { useState } from "react";
import "./AddCategory.css";
import { createCategory } from "../services/operations/categoryAPI";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LOGO from "../images/logo-dark.png";
function AddCategory() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = () => {
    dispatch(createCategory(name,description,token,navigate))
  }

  return (
    // <div className="category-form">
    //   <h3>Add a New Category</h3>
    //   <form onSubmit={handleSubmit}>
    //     <div className="form-group">
    //       <label htmlFor="name">Category Name:</label>
    //       <input
    //         type="text"
    //         id="name"
    //         value={name}
    //         onChange={handleNameChange}
    //         placeholder="Enter category name"
    //       />
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="description">Category Description:</label>
    //       <textarea
    //         id="description"
    //         value={description}
    //         onChange={handleDescriptionChange}
    //         placeholder="Enter category description"
    //       />
    //     </div>
    //     <button id="btn"  type="submit">Add Category</button>
    //   </form>
    // </div>
    <div>
      <div className="nk-app-root ">
        <main className="nk-pages">
          <div className="min-vh-100 d-flex flex-column has-mask">
            <div className="nk-mask bg-pattern-dot bg-blend-around"></div>
            <div className="text-center mt-6 mb-4">
              <a href="index.html" className="logo-link">
                <div className="logo-wrap">
                  <img className="logo-img logo-dark" src={LOGO} alt="" />
                </div>
              </a>
            </div>
            <div className="my-auto">
              <div className="container">
                <div className="row g-gs justify-content-center">
                  <div className="col-md-7 col-lg-6 col-xl-5">
                    <div className="card border-0 shadow-sm rounded-4">
                      <div className="card-body">
                        <h4 className="mb-3">ADD CATEGORY!</h4>
                        <form onSubmit={handleSubmit}>
                          <div className="row g-4">
                            <div className="col-12">
                              <div className="form-group">
                                <label
                                  className="form-label"
                                >
                                Category Name:
                                </label>
                                <div className="form-control-wrap">
                                  <input
                                  type="text"
                                    id="name"
                                    value={name}
                                    onChange={handleNameChange}
                                    className="form-control form-control-lg"
                                    placeholder="Enter Email or Username"
                                    required
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="col-12">
                              <div className="form-group">
                                <label
                                  className="form-label"
                                >
                                Category Description
                                </label>
                                <div className="form-control-wrap">
                                  <input
                                  id="description"
            value={description}
            onChange={handleDescriptionChange}
            placeholder="Enter category description"
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
                                Add Category
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
}

export default AddCategory;
