import React, { useState } from "react";
import "./footer.css";
import logo from "../../assets/icons/footer/logo.png";
import { Col, Row, Container, Form } from "react-bootstrap-v5";
import { subscribeSchema } from "../../schema";
import { useFormik } from "formik";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";

const user = {
  email: "",
};
const Footer = () => {
  const [msg, setMsg] = useState(null);

  const [errMsg, setErrMsg] = useState(null);

  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: user,
    validationSchema: subscribeSchema,
    onSubmit: async (values) => {
      try {
        let response = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/user/subscribe`,
          values
        );
        console.log(response);
        setMsg(response.data.message);
        setErrMsg(null);
      } catch (error) {
        setErrMsg(error.response.data.message);
        setMsg(null);
      }
    },
  });

  return (
    <div className="mxr__footer mxr__section">
      <div className="mxr__footer-top">
        <Container>
          <Row>
            <Col lg={3} sm={6} xs={12}>
              <img src={logo} alt="logo" />
              <p>
                We build software that inspires people. We use transformational
                tools, such as AI, XR and IoT to provide businesses with the
                most innovative solutions.
              </p>
            </Col>
            <Col lg={3} sm={6} xs={12}>
              <h6>IMPORTANT LINKS</h6>

              <ul className="mxr__footer-links">
                <li>
                  <Link to="/mixed-reality">Mixed Reality</Link>
                </li>
                <li>
                  <Link to="/virtual-reality">Virtual Reality</Link>
                </li>
                <li>
                  <Link to="/augmented-reality">Augmented Reality</Link>
                </li>
                <li>
                  <Link to="/mobile-app-development">Mobile Development</Link>
                </li>
                <li>
                  <Link to="/web-design-and-development">
                    Web Design and Development
                  </Link>
                </li>
                <li>
                  <Link to="/research-and-innovation">
                    Research and Innovation
                  </Link>
                </li>
              </ul>
            </Col>
            <Col lg={3} sm={6} xs={12}>
              <h6>CONTACT US</h6>
              <div class="mxr_footer-social-icons d-flex">
                <span>
                  <a href="https://www.facebook.com/metaextendedreality.official">
                    <FaFacebookF size={17} />
                  </a>
                </span>
                <span>
                  <a href="https://twitter.com/MXR_Global">
                    <FaTwitter size={17} />
                  </a>
                </span>
                <span>
                  <a href="https://www.instagram.com/metaextendedreality.official/">
                    <FaInstagram size={17} />
                  </a>
                </span>
                <span>
                  <a href="https://www.linkedin.com/company/75859327/admin/">
                    <FaLinkedinIn size={17} />
                  </a>
                </span>
              </div>
              <div className="mxr__footer-contact">
                <p class="mxr__header-phone">Phone: (+44) 20 7193 5407</p>
                <p class="mxr__header-email">Email: team@mxr.ai</p>
              </div>
            </Col>
            <Col lg={3} sm={6} xs={12}>
              <h6>SUBSCRIBE TO OUR NEWSLETTER</h6>
              <div className="mxr__footer-subscribe">
                <Form onSubmit={handleSubmit}>
                  {errors.email && touched.email ? (
                    <label
                      className="error"
                      style={{
                        color: "#e60000",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "8px 0",
                        textTransform: "capitalize",
                        fontSize: ".9rem",
                        backgroundColor: "rgb(255 251 251)",
                        width: "100%",
                        textAlign: "center",
                        marginTop: "10px",
                        borderRadius: "5px",
                        marginBottom: "5px",
                      }}
                    >
                      {errors.email}
                    </label>
                  ) : null}
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address*"
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                    require
                  />
                  <button type="submit" className="mxr__section-btn">
                    SUBSCRIBE
                  </button>
                </Form>
                {msg ? (
                  <p
                    className="error"
                    style={{
                      color: "#fff",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "8px 0",
                      textTransform: "capitalize",
                      fontSize: ".9rem",
                      backgroundColor: "#2eb82e",
                      width: "100%",
                      textAlign: "center",
                      marginTop: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    {msg}
                  </p>
                ) : null}
                <div>
                  {errMsg ? (
                    <p
                      style={{
                        color: "#e60000",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "8px 0",
                        textTransform: "capitalize",
                        fontSize: ".9rem",
                        backgroundColor: "rgb(255 251 251)",
                        width: "100%",
                        textAlign: "center",
                        marginTop: "10px",
                        borderRadius: "5px",
                        marginBottom: "5px",
                      }}
                    >
                      {errMsg}
                    </p>
                  ) : null}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="mxr__footer-copyright">
        <Container>
          <Row>
            <Col>
              <p>
                &copy; Copyright {new Date().getFullYear()} MXR | All Rights
                Reserved |<Link to="/privacy-policy"> Privacy Policy</Link> |{" "}
                <Link to="/term-and-condition">Terms and Conditions</Link>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
