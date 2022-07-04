import React, { useEffect } from "react";
import { useParams } from "react-router";
import Bloglist from "../../blogsdata.json";
import { Row,Col, NavLink } from 'react-bootstrap-v5'
import {FacebookShareButton,FacebookIcon} from 'react-social-share-buttons'

function Post() {
    let { postSlug } = useParams();

    useEffect(() => {
        // Fetch post using the postSlug
    }, [postSlug]);

    return (
        <>
            <div className="mxr__blog-single-post">
                {Bloglist.map(list => {
                    if (list.slug === postSlug) {
                        return (
                            <>
                                <h1 className="mt-5" key={list.id}>{list.title}</h1>
                                {list.body.map((data, index) => {

                                    if (data.type === "para") {
                                        return (
                                            data.content.map((txt, pindex) => {
                                                return (<p key={pindex}> {txt}</p>);
                                            })
                                        )
                                    } else if (data.type === "title") {
                                        return (<h3 key={index}>{data.content}</h3>);
                                    } else if (data.type === "list") {
                                        return (
                                            <ul>
                                                {data.content.map((lis, lindex) => {
                                                    return (<li key={lindex}> {lis}</li>);
                                                })}
                                            </ul>
                                        )
                                    } else {
                                        return null;
                                    }

                                })}
                            </>
                        )
                    } else {
                        return null;
                    }
                })}
            </div>
            <div>
            <Row>
            <Col>
              <h4>Share The Virtual Reality Post!</h4>
            </Col>
            <Col>
            <FacebookShareButton url={url} >
                <FacebookIcon  size={40} round={true}/>
         </FacebookShareButton>
            </Col>
        </Row>
            </div>
            <div>
                <Row>
                    <Col>
                      <p>By <NavLink>admin</NavLink> |March 9th, 2021| <NavLink>blogs</NavLink> | <NavLink>0 Comments</NavLink> </p>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default Post;
