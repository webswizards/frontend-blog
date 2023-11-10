import React from 'react'
import about from '../images/about.png'
import {Link} from 'react-router-dom'
import { Helmet } from "react-helmet";
const About = () => {
  return (
    <>
<main class="nk-pages">
<Helmet>
        <title>About Us | Digital Media Platform - Webswizards</title>
        <meta name="description" content="We are Webswizards, a team of tech-savvy professionals dedicated to providing you with the latest in tech trends, news, and insights. Read More!" />
        <meta name="keywords" content="About Us, SEO Content, Web Development Guest Posts, Testing Blogs, Testing Articles, Web Design Articles, SEO Blogs" />
        <meta name="robots" content="index, follow" />
        <meta name="abstract" content="About Us | Digital Media Platform - Webswizards" />
        <meta property="og:title" content="About Us | Digital Media Platform - Webswizards" />
        <meta property="og:description" content="We are Webswizards, a team of tech-savvy professionals dedicated to providing you with the latest in tech trends, news, and insights. Read More!"/>
        <meta property="og:type" content="Website" />
        <meta property="og:url" content="https://www.webswizards.in/about-us" />
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
        <meta name="twitter:title" content="About Us | Digital Media Platform - Webswizards" />
        <meta name="twitter:description" content="We are Webswizards, a team of tech-savvy professionals dedicated to providing you with the latest in tech trends, news, and insights. Read More!" />
        <meta name="twitter:image" content="https://www.webswizards.in/logo-dark.png" />
        <link rel="canonical" href="https://www.webswizards.in/about-us" />
        <meta itemprop="name" content="About Us | Digital Media Platform - Webswizards" />
        <meta itemprop="description" content="We are Webswizards, a team of tech-savvy professionals dedicated to providing you with the latest in tech trends, news, and insights. Read More!" />
        <meta itemprop="image" content="https://www.webswizards.in/logo-dark.png" />
      </Helmet>
            <section class="section has-shape has-mask">
                <div class="nk-shape bg-shape-blur-m mt-8 start-50 top-0 translate-middle-x"></div>
                <div class="nk-mask bg-pattern-dot bg-blend-around mt-n5 mb-10p mh-50vh"></div>
                <div class="container">
                    <div class="section-head">
                        <div class="row justify-content-center text-center">
                            <div class="col-lg-9 col-xl-8 col-xxl-7">
                                <h6 class="overline-title text-primary">About Us</h6>
                                <h2 class="title h1">Unlocking Tech's Infinite Possibilities</h2>
                            </div>
                        </div>
                    </div>
                    <div class="section-content">
                        <div class="row g-gs justify-content-center align-items-center flex-lg-row-reverse">
                            <div class="col-lg-6 col-md-11">
                                <div class="block-gfx ps-xxl-5">
                                    <img class="w-100" src={about} alt="about"/>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="block-text pe-xxl-7">
                                    <h2 class="title">Welcome to Webswizards - Where Technology Meets Innovation!</h2>
                                    <p class="lead">Webswizards are enthusiastic about everything technological. Our goal is to establish ourselves as your go-to resource for intelligent, interesting, and current content on the rapidly changing world of technology. We've got you covered whether you're a passionate techie, an aspiring entrepreneur, or just someone who wants to keep up with the newest technological developments.
</p>
                                    <ul class="list gy-3 pe-xxl-7">
                                        <li><em class="icon text-success fs-5 ni ni-check-circle-fill"></em><span>In-Depth Articles</span></li>
                                        <li><em class="icon text-success fs-5 ni ni-check-circle-fill"></em><span>How-To Guides</span></li>
                                        <li><em class="icon text-success fs-5 ni ni-check-circle-fill"></em><span>News and Updates</span></li>
                                    </ul>
                                    <ul class="btn-list btn-list-inline gy-0">
                                        <li><Link to={'/submit'}class="btn btn-lg btn-primary"><span>Get Started</span><em class="icon ni ni-arrow-long-right"></em></Link></li>
                                    </ul>
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
                                        <h6 class="overline-title text-primary">Boost your Articles</h6>
                                        <h2 class="title">Free Guest Post Submission</h2>
                                        <p class="lead mt-3">submit your free guest post with just one click.</p>
                                        <ul class="btn-list btn-list-inline">
                                            <li><Link to={'/submit'} class="btn btn-lg btn-primary"><span>Start writing for free</span><em class="icon ni ni-arrow-long-right"></em></Link></li>
                                        </ul>
                                        <ul class="list list-row gy-0 gx-3">
                                            <li><em class="icon ni ni-check-circle-fill text-success"></em><span>High reach</span></li>
                                            <li><em class="icon ni ni-check-circle-fill text-success"></em><span>Quality Content</span></li>
                                            <li><em class="icon ni ni-check-circle-fill text-success"></em><span>Trustworthy</span></li>
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
  )
}

export default About