import React from "react";
import { Col, Row } from "react-bootstrap-v5";
import { Outlet } from "react-router-dom";
import Innerbanner from "../innerbanner/Innerbanner";
import { useParams } from "react-router";
import { Helmet } from "react-helmet";
import Blogbanner from "./Blogbanner";

const bannerdata = {
    img: 'blog-page-main.jpg',
    title: "BLOG",
    text: "Discover how technology is transforming business."
}


const innerbanner = {
    img: 'blog-1.png',
}

const virtualreality = {
    img: 'big.png',
}

const augumentedreality = {
    img: '3.png',
}

function Blog() {
    let { postSlug } = useParams();
    let banner;
    let introtext = "";

    if (!postSlug) {
        banner = <Innerbanner banner={bannerdata} />
        introtext = "From virtual to augmented reality, we discuss how brands are innovating through the use of new technologies. We investigate emerging trends and prevalent use cases in order to give our readers with information that enables them to make more educated decisions. Additionally, we offer company news to keep you informed about how we operate and what we do.";
    } else if (postSlug === 'what-is-mixed-reality') {
        
        /*  banner = <Blogbanner banner={innerbanner} />;*/
        banner = "";
    } else if (postSlug === 'virtual-reality') {
       /*  banner = <Blogbanner banner={virtualreality} />; */
       banner = "";
    } else if (postSlug === 'augmented-reality-ar') {
       /*  banner = <Blogbanner banner={augumentedreality} />; */
       banner = "";
    }
    return (
        <>
         <div className="mxr__blog">
            <Helmet>
                <title>Blog - MXR</title>
            </Helmet>
                {banner}
                <div className="mxr__blog-content mxr__section">
                    <div className="container">
                        <Row>
                            <Col>
                                <p>{introtext}</p>
                            </Col>
                        </Row>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Blog;