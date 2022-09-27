import React from "react";
import { Card } from "react-bootstrap-v5";
// import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Bloglist from "../../blogsdata.json";

function Posts() {
  return (
    <div className="mxr__blog-post-list">
      <div class="row align-items-center text-center my-5">
        {Bloglist.map((list) => {
          return (
            <div className="col-lg-4" key={list.id}>
              <Card>
                <Link to={list.slug}>
                  <img src={list.image} alt="list" />
                </Link>
                <div className="blog_content_info">
                  <div className="heading_para">
                    <Link to={list.slug}>
                      <h4 class="font-weight-light">{list.title}</h4>{" "}
                    </Link>
                    <span>{list.date}</span>
                  </div>
                  <p>{list.shortdesc}</p>
                  <Link to={list.slug}>
                    <button
                      className="mxr__section-btn"
                      style={{ width: "100%", padding: "10px" }}
                    >
                      {" "}
                      Read More
                    </button>
                  </Link>
                </div>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Posts;
