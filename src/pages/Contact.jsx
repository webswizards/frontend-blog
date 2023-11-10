import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { Helmet } from "react-helmet";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const toastId = toast.loading("Loading...");
    emailjs
      .sendForm(
        "service_vn8eqz8",
        "template_dtswrk8",
        form.current,
        "WYlGQxgUMTvQyK_q5"
      )
      .then(
        (result) => {
          toast.dismiss(toastId);
          toast.success("Mail Sent Successfully")
          form.current.reset();
        },
        (error) => {
          toast.dismiss(toastId);
          toast.error("Something Went Wrong")
        }
      );
  };

  console.log(form)
  return (
    <>
      <main className="nk-pages">
      <Helmet>
        <title>Contact Us | Guest Posting Opportunities! - Webswizards</title>
        <meta name="description" content="Whether you work in SEO, Web development, writing content, or writing a blog, if you have something valuable to share with Webswizards, please get in touch!" />
        <meta name="keywords" content="Contact Us" />
        <meta name="robots" content="index, follow" />
        <meta name="abstract" content="Contact Us | Guest Posting Opportunities! - Webswizards" />
        <meta property="og:title" content="Contact Us | Guest Posting Opportunities! - Webswizards" />
        <meta property="og:description" content="Whether you work in SEO, Web development, writing content, or writing a blog, if you have something valuable to share with Webswizards, please get in touch!" />
        <meta property="og:type" content="Website" />
        <meta property="og:url" content="https://www.webswizards.in/contact" />
        <meta property="og:image" content="https://www.webswizards.in/logo-dark.png"/>
        <meta property="og:locale" content="India" />
        <meta property="og:street-address" content="Mumbai" />
        <meta property="og:locality" content="India" />
        <meta property="og:region" content="Mumbai" />
        <meta property="og:country-name" content="India" />
        <meta property="og:email" content="webswizards@gmail.com" />
        <meta property="og:phone_number" content="91 8446095023" />
        <meta name="twitter:card" content="Summary" />
        <meta name="twitter:site" content="@webswizards" />
        <meta name="twitter:title" content="Contact Us | Guest Posting Opportunities! - Webswizards" />
        <meta name="twitter:description" content="Whether you work in SEO, Web development, writing content, or writing a blog, if you have something valuable to share with Webswizards, please get in touch!"/>
        <meta name="twitter:image" content="https://www.webswizards.in/logo-dark.png" />
        <link rel="canonical" href="https://www.webswizards.in/contact" />
        <meta itemprop="name" content="Contact Us | Guest Posting Opportunities! - Webswizards" />
        <meta itemprop="description" content="Whether you work in SEO, Web development, writing content, or writing a blog, if you have something valuable to share with Webswizards, please get in touch!" />
        <meta itemprop="image" content="https://www.webswizards.in/logo-dark.png" />
      </Helmet>
        <section className="section section-bottom-0 has-shape has-mask">
          <div className="nk-shape bg-shape-blur-m mt-8 start-50 top-0 translate-middle-x"></div>
          <div className="nk-mask bg-pattern-dot bg-blend-around mt-n5 mb-10p mh-50vh"></div>
          <div className="container">
            <div className="section-head">
              <div className="row justify-content-center text-center">
                <div className="col-lg-11 col-xl-10 col-xxl-9">
                  <h6 className="overline-title text-primary">Contact us</h6>
                  <h1 className="title">
                    We love getting feedback, Questions, and hearing what you
                    have to say!
                  </h1>
                </div>
              </div>
            </div>
            <div className="section-content">
              <div className="row g-gs justify-content-center justify-content-lg-between">
                <div className="col-xl-5 col-lg-6 col-md-8 text-lg-start text-center">
                  <div className="block-text pt-lg-4">
                    <h3 className="title h2">Let's talk</h3>
                    <p>
                      Must explain to you how all this mistaken idea of
                      denouncing pleasure and praising born and I will give you
                      a complete account of the system.
                    </p>
                    <ul className="row gy-4 pt-4">
                      <li className="col-12">
                        <h5>Contact</h5>
                        <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-start">
                          <em className="icon text-base fs-5 mb-2 mb-lg-0 me-lg-2 ni ni-call-alt-fill"></em>
                          <span>+(91) 8446095023</span>
                        </div>
                      </li>
                      <li className="col-12">
                        <h5>Email</h5>
                        <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-start">
                          <em className="icon text-base fs-5 mb-2 mb-lg-0 me-lg-2 ni ni-mail-fill"></em>
                          <span>webswizards@gmail.com</span>
                        </div>
                      </li>
                      <li className="col-12">
                        <h5>Location</h5>
                        <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-start">
                          <em className="icon text-base fs-5 mb-2 mb-lg-0 me-lg-2 ni ni-map-pin-fill"></em>
                          <span>Mumbai, Maharashtra</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card border-0 shadow-sm rounded-4">
                    <div className="card-body">
                      <h3 className="title fw-medium mb-4">
                        Please feel free to contact us using form below
                      </h3>
                      <form
                        className="form-submit-init"
                        ref={form}
                        onSubmit={sendEmail}
                      >
                        <div className="row g-4">
                          <div className="col-12">
                            <div className="form-group">
                              <div className="form-control-wrap">
                                <input
                                  type="text"
                                  name="fullname"
                                  className="form-control form-control-lg"
                                  placeholder="Your Name"
                                  required
                                />
                              </div>
                            </div>
                          </div>

                          <div className="col-12">
                            <div className="form-group">
                              <div className="form-control-wrap">
                                <input
                                  type="email"
                                  name="email"
                                  className="form-control form-control-lg"
                                  placeholder="Your Email Address"
                                  required
                                />
                              </div>
                            </div>
                          </div>

                          <div className="col-12">
                            <div className="form-group">
                              <div className="form-control-wrap">
                                <input
                                  type="text"
                                  name="subject"
                                  className="form-control form-control-lg"
                                  placeholder="Subject"
                                  required
                                />
                              </div>
                            </div>
                          </div>

                          <div className="col-12">
                            <div className="form-group">
                              <div className="form-control-wrap">
                                <textarea
                                  name="message"
                                  className="form-control form-control-lg"
                                  placeholder="Enter your message"
                                  required
                                ></textarea>
                              </div>
                            </div>
                          </div>

                          <div className="col-12">
                            <div className="form-group">
                              <button
                                className="btn btn-primary"
                                type="submit"
                                id="submit-btn"
                              >
                                Send Message
                              </button>
                            </div>
                            <div className="form-result mt-4"></div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="section section-bottom-0">
          <div class="container">
            <div class="section-wrap bg-primary bg-opacity-10 rounded-4">
              <div class="section-content bg-pattern-dot-sm p-4 p-sm-6">
                <div class="row justify-content-center text-center">
                  <div class="col-xl-8 col-xxl-9">
                    <div class="block-text">
                      <h6 class="overline-title text-primary">
                        Boost your Articles
                      </h6>
                      <h2 class="title">Free Guest Post Submission</h2>
                      <p class="lead mt-3">
                        submit your free guest post with just one click.
                      </p>
                      <ul class="btn-list btn-list-inline">
                        <li>
                          <Link to={"/submit"} class="btn btn-lg btn-primary">
                            <span>Start writing for free</span>
                            <em class="icon ni ni-arrow-long-right"></em>
                          </Link>
                        </li>
                      </ul>
                      <ul class="list list-row gy-0 gx-3">
                        <li>
                          <em class="icon ni ni-check-circle-fill text-success"></em>
                          <span>High reach</span>
                        </li>
                        <li>
                          <em class="icon ni ni-check-circle-fill text-success"></em>
                          <span>Quality Content</span>
                        </li>
                        <li>
                          <em class="icon ni ni-check-circle-fill text-success"></em>
                          <span>Trustworthy</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;



