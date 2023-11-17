import { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { showost } from "./services/operations/PostAPI";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Swipper from "./components/Swipper";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Home = lazy(() => import("./pages/Home"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Login = lazy(() => import("./components/Login"));
const BlogDetails = lazy(() => import("./components/BlogDetails"));
const AddPost = lazy(() => import("./pages/AddPost"));
const AddCategory = lazy(() => import("./pages/AddCategory"));
const AllBlog = lazy(() => import("./pages/AllBlog"));
const EditPost = lazy(() => import("./pages/EditPost"));
const Category = lazy(() => import("./components/Category"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Submit = lazy(() => import("./pages/Submit"));

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showost());
  }, []);
  const location = useLocation();
  const isBlogPath = location.pathname.includes("/blog");
  const { role } = useSelector((state) => state.auth);
  const { posts } = useSelector((state) => state.post);

  const shouldRenderSwipper = posts.length > 2 && isBlogPath ;
  return (
    <>
      <div className="nk-body" data-menu-collapse="lg">
        <div className="nk-app-root ">
          <Navbar />
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/about-us" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/submit" element={<Submit />} />

              <Route path="*" element={<NotFound />} />
              <Route path="/blog/:url" element={<BlogDetails />} />
              <Route path="/category/:id/blog/:url" element={<BlogDetails />} />

              <Route path="/login" element={<Login />} />
              <Route path="/category/:id" element={<Category />} />
              {role === "admin" && (
                <>
                 
                  <Route path="/addpost" element={<AddPost />} />
                  <Route path="/addcategory" element={<AddCategory />} />
                  <Route path="/allblogs" element={<AllBlog />} />
                  <Route path="/editpost/:id" element={<EditPost />} />
                 
                </>
              )}
            </Routes>
          </Suspense>
          { shouldRenderSwipper && <Swipper />}
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
