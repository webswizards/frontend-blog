import React from "react";
import { Link } from "react-router-dom";
import submit from "../images/submit.png";
import { Helmet } from "react-helmet";
const Submit = () => {
  const divStyle = {
    marginTop: "20px",
    marginBottom: "0px",
  };
  return (
    <>
      <Helmet>
        <title>
          Contribute to Our Blog | Share Your Expertise - Webswizards
        </title>
        <meta
          name="description"
          content="We are accepting free guest posts, we welcome you to submit a guest post on our website. Share your insights with us! Submit your article today!"
        />
        <meta
          name="keywords"
          content="Submit a Blog Post, Blog Submission Page, Guest Blogging Opportunities, Submit Your Post"
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="abstract"
          content="Contribute to Our Blog | Share Your Expertise - Webswizards"
        />
        <meta
          property="og:title"
          content="Contribute to Our Blog | Share Your Expertise - Webswizards"
        />
        <meta
          property="og:description"
          content="We are accepting free guest posts, we welcome you to submit a guest post on our website. Share your insights with us! Submit your article today!"
        />
        <meta property="og:type" content="Website" />
        <meta property="og:url" content="https://www.webswizards.in/submit" />
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
        <meta
          name="twitter:title"
          content="Contribute to Our Blog | Share Your Expertise - Webswizards"
        />
        <meta
          name="twitter:description"
          content="We are accepting free guest posts, we welcome you to submit a guest post on our website. Share your insights with us! Submit your article today!"
        />
        <meta name="twitter:image" content="https://www.webswizards.in/logo-dark.png" />
        <link rel="canonical" href="https://www.webswizards.in/submit" />
        <meta
          itemprop="name"
          content="Contribute to Our Blog | Share Your Expertise - Webswizards"
        />
        <meta
          itemprop="description"
          content="We are accepting free guest posts, we welcome you to submit a guest post on our website. Share your insights with us! Submit your article today!"
        />
        <meta itemprop="image" content="https://www.webswizards.in/logo-dark.png" />
      </Helmet>
      <main class="nk-pages">
        <section class="section has-shape has-mask">
          <div class="nk-shape bg-shape-blur-m mt-8 start-50 top-0 translate-middle-x"></div>
          <div class="nk-mask bg-pattern-dot bg-blend-around mt-n5 mb-10p mh-50vh"></div>
          <div class="container">
            <div class="section-content">
              <div class="row g-gs justify-content-center align-items-center flex-lg-row-reverse">
                <div class="col-lg-6 col-md-11">
                  <div class="block-gfx ps-xxl-5">
                    <img class="w-100" src={submit} alt="" />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="block-text pe-xxl-7">
                    <h2 class="title">Do you have a Articles to Share?</h2>
                    <p class="lead">
                      Webswizards is accepting <b>Free Get Post.</b> Please send
                      your Articles in Word format if possible with a images to
                      webswizards@gmail.com.
                    </p>
                    <ul class="list gy-3 pe-xxl-7">
                      <li>
                        <em class="icon text-success fs-5 ni ni-check-circle-fill"></em>
                        <span>In-Depth Articles</span>
                      </li>
                      <li>
                        <em class="icon text-success fs-5 ni ni-check-circle-fill"></em>
                        <span>High Reach</span>
                      </li>
                      <li>
                        <em class="icon text-success fs-5 ni ni-check-circle-fill"></em>
                        <span>Trustworthy</span>
                      </li>
                    </ul>
                    <ul class="btn-list btn-list-inline gy-0">
                      <li>
                        <Link
                          to="mailto:webswizards@gmail.com"
                          class="btn btn-lg btn-primary"
                        >
                          <span>Get Started</span>
                          <em class="icon ni ni-arrow-long-right"></em>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div style={divStyle}>
                <h2>Guidelines to Guest Post Submission</h2>
                <ol>
                  <li>
                    1. The article should be relevant to the Non-destructive
                    testing.
                  </li>
                  <li>
                    2. The article should be original and not published
                    elsewhere. Plagiarism is not acceptable as well and the
                    content should not be AI Generator.
                  </li>
                  <li>
                    3. The preferred word count for articles is 500 – 1000
                    words.
                  </li>
                  <li>
                    4. Write an article in a natural, conversational tone.
                    Articles should have a clear structure with headings,
                    subheadings, and bullet points, and break up your content to
                    improve readability.
                  </li>
                  <li>
                    5. If you include images, ensure they are high quality &
                    royalty-free or provide proper attribution.
                  </li>
                  <li>
                    6. Use relevant keywords naturally in the content, but avoid
                    keyword stuffing.
                  </li>
                  <li>
                    7. A maximum of 2 relevant links (do-follow) can be
                    included.
                  </li>
                  <li>
                    8. Please ensure that the topic you provide or the content
                    you submit does not replicate or cover the same as articles
                    already published on our website.{" "}
                  </li>
                  <li>
                    9. We request that you do not publish the same article
                    elsewhere after it's published on our site.
                  </li>
                  <li>
                    10. We can proofread and edit the article for clarity,
                    grammar, and formatting. Any necessary changes will be made
                    in collaboration with you to ensure the final piece aligns
                    with our content standards.
                  </li>
                  <li>
                    11. By submitting your article, you grant us the right to
                    publish and promote it on our platform.
                  </li>
                </ol>
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
                          <div class="btn btn-lg btn-primary">
                            <span>Start writing for free</span>
                            <em class="icon ni ni-arrow-long-right"></em>
                          </div>
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

export default Submit;
