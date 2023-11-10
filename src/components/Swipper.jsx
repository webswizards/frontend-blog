import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import RelatedBlog from "./RelatedBlog";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";
const Swipper = () => {
  const [relatedpostData, setrelatedPostData] = useState([]);
  const { posts, loading } = useSelector((state) => state.post);

  useEffect(() => {
    setrelatedPostData(posts);
  }, []);
  console.log(relatedpostData);
  return (
    <>
      <main className="nk-pages">
 
          <section className="section section-sm section-0">
            <div className="container">
              <div className="section-head">
                <div className="row justify-content-center text-center">
                  <div className="col-lg-9 col-xl-8 col-xxl-6">
                    <h2 className="title">Similar Posts</h2>
                  </div>
                </div>
              </div>
              <div className="section-content">
                <div>
                  <div className="swiper-wrapper">
                    <Swiper
                      breakpoints={{
                        340: {
                          slidesPerView: 2,
                          spaceBetween: 15,
                        },
                        700: {
                          slidesPerView: 3,
                          spaceBetween: 15,
                        },
                      }}
                      freeMode={true}
                      pagination={{
                        clickable: true,
                      }}
                      modules={[FreeMode, Pagination]}
                    >
                      {relatedpostData.length > 0 &&
                        relatedpostData.map((post) => (
                          <SwiperSlide key={post._id}>
                            <RelatedBlog post={post} />
                          </SwiperSlide>
                        ))}
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </section>
       
      </main>
    </>
  );
};

export default Swipper;
