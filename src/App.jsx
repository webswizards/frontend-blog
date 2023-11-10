import Navbar from "./components/Navbar";

import Footer from "./components/Footer";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Login from "./components/Login";
import BlogDetails from "./components/BlogDetails";
import AddPost from "./pages/AddPost";
import AddCategory from "./pages/AddCategory";
import AllBlog from "./pages/AllBlog";
import EditPost from "./pages/EditPost";
import { showost } from "./services/operations/PostAPI";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Category from "./components/Category";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Submit from "./pages/Submit";
import Swipper from "./components/Swipper";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showost());
  }, []);
  const location = useLocation();
  const isBlogPath = location.pathname.includes("/blog");
  console.log(isBlogPath);

  return (
    <>
      <div className="nk-body" data-menu-collapse="lg">
        <div className="nk-app-root ">
          <Navbar />
          <Routes>
          <Route path="/" element={<Home />} />
            
            <Route path="/about-us" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/submit" element={<Submit />} />

            <Route path="*" element={<NotFound />} />
            <Route path="/blog/:url" element={<BlogDetails />} />
            <Route path="/category/:id/blog/:url" element={<BlogDetails />} />

            <Route path="/login" element={<Login />} />

            <Route path="/addpost" element={<AddPost />} />
            <Route path="/addcategory" element={<AddCategory />} />
            <Route path="/allblogs" element={<AllBlog />} />
            <Route path="/editpost/:id" element={<EditPost />} />
            <Route path="/category/:id" element={<Category />} />
          </Routes>

          {isBlogPath && <Swipper />}
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
