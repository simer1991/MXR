import React, { useState } from "react";
import { Container, Row, Col, Card, ListGroup, Form } from "react-bootstrap-v5";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaComment,
} from "react-icons/fa";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import "./contact.css";
import { Helmet } from "react-helmet";
import Blogbanner from "../../components/blog/Blogbanner";
import { useFormik } from "formik";
import { contactSchema } from "../../schema";
// import Innerbanner from "../../components/innerbanner/Innerbanner";

const bannerdata = {
  img: "contact.png",
  title: "CONTACT MXR TODAY",
};
const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  address: "",
  text: "",
};

const Contact = () => {
  const [varified, setVarified] = useState(false);
  function onchange(value) {
    console.log("Captcha value:", value);
    setVarified(true);
  }

  const [msg, setMsg] = useState(null);
  const [errMsg, setErrMsg] = useState(null);

  const { values, errors, touched, handleSubmit, handleChange } = useFormik({
    initialValues: initialValues,
    validationSchema: contactSchema,
    onSubmit: async (values) => {
      console.log(values);
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/user/contact`,
          values,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        setMsg(response.data.message);
        setErrMsg(null);
      } catch (error) {
        setMsg(null);
        setErrMsg(error.response.data.message);
      }
    },
  });

  return (
    <div className="mxr__contact">
      <Helmet>
        <title>Contact Us | AR, VR and MR Technology | MXR</title>
        <meta
          name="description"
          content="MXR is UK based software development company delivering reliable and in-budget solutions for AR, VR, MR, Web and Mobile App development to clients globally."
        />
      </Helmet>
      <div>
        <Blogbanner banner={bannerdata} />
        <Container>
          <h3 className="mxr__section-title">{""}</h3>
          <Row>
            <Col sm={12} md={4} className="left_instruction">
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <div>
                      <FaMapMarkerAlt size={30} />
                    </div>
                    <div>
                      <h3 className="mxr__section-title">Our Location</h3>
                      <p>
                        20-22 Wenlock Road, <br />
                        London, N1 7GU, England
                      </p>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <div>
                      <FaPhoneAlt size={30} />
                    </div>
                    <div>
                      <h3 className="mxr__section-title">Call Us</h3>
                      <p>(+44) 20 7193 5407</p>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <div>
                      <FaEnvelope size={30} />
                    </div>
                    <div>
                      <h3 className="mxr__section-title">Email Address</h3>
                      <p>team@mxr.ai</p>
                    </div>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
            <Col sm={12} md={8}>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <div>
                        <Form.Label>Your Name *</Form.Label>
                      </div>
                      {errors.name && touched.name ? (
                        <p className="error">{errors.name}</p>
                      ) : null}
                      <input
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        placeholder="name"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <div>
                        <Form.Label>Your Email *</Form.Label>
                      </div>
                      {errors.email && touched.email ? (
                        <p className="error">{errors.email}</p>
                      ) : null}
                      <input
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        placeholder="email"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <div>
                        <Form.Label>Phone number *</Form.Label>
                      </div>
                      {errors.phoneNumber && touched.phoneNumber ? (
                        <p className="error">{errors.phoneNumber}</p>
                      ) : null}
                      <input
                        type="text"
                        name="phoneNumber"
                        value={values.phoneNumber}
                        onChange={handleChange}
                        placeholder="mobile"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <div>
                        <Form.Label>Your Address *</Form.Label>
                      </div>
                      {errors.address && touched.address ? (
                        <p className="error">{errors.address}</p>
                      ) : null}
                      <input
                        type="text"
                        name="address"
                        value={values.address}
                        onChange={handleChange}
                        placeholder="address"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={12}>
                    {errors.text && touched.text ? (
                      <p className="error">{errors.text}</p>
                    ) : null}
                    <label>Message</label>
                    <textarea
                      col={4}
                      name="text"
                      value={values.text}
                      onChange={handleChange}
                      placeholder="message"
                    ></textarea>
                  </Col>

                  <ReCAPTCHA
                    sitekey="6LebgowhAAAAAK6TU17d-_upiomgLDG4fEbGNwDe"
                    onChange={onchange}
                  />

                  <div>
                    {msg ? (
                      <p
                        style={{
                          color: "#fff",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "8px 0",
                          textTransform: "capitalize",
                          fontSize: ".9rem",
                          backgroundColor: "#2eb82e",
                          width: "50%",
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
                    <button type="submit">
                      <FaComment /> Submit
                    </button>
                  </div>
                </Row>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Contact;
