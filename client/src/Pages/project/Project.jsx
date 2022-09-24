import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap-v5";
// import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
// import Slider from "./Slider";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import "./project.css";
// import { useEffect } from "react";
function Project(props) {
  const [varified, setVarified] = useState(false);
  function onChange(value) {
    console.log("Captcha value:", value);
    setVarified(true);
  }

  const [projectType, setProjectType] = useState("");
  // const [isSubmit, setisSubmit] = useState(false);
  const [formErrors, setFormErrrors] = useState({});
  const [errMsg, setErrMsg] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [project, setProject] = useState({
    firstName: "",
    lastName: "",
    homePhone: "",
    email: "",
    companyName: "",
    estimatedBudget: "",
  });
  // useEffect(() => {
  //   console.log(formErrors);
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //     console.log(project + projectType);
  //   }
  // }, [formErrors]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject((project) => {
      return { ...project, [name]: value };
    });
  };

  const hadleSubmit = async (e) => {
    e.preventDefault();
    setFormErrrors(validate(project));
    validateProjectType();
    // setisSubmit(true);
    const {
      firstName,
      lastName,
      homePhone,
      email,
      companyName,
      estimatedBudget,
    } = project;

    try {
      let response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/services/user/projects`,
        {
          firstName,
          lastName,
          homePhone,
          email,
          companyName,
          estimatedBudget,
          projectType,
        }
      );
      console.log(response.data.status);
      if (response.status === 201) {
        setErrorMsg("");
      }
    } catch (error) {
      setErrorMsg(error.response.data.message);
    }
  };
  const validate = (values) => {
    const regex =
      /^[A-Za-z]{1,}[A_Za-z_.0-9]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
    const errors = {};

    if (!values.firstName) {
      errors.firstName = "firstName is required";
    }
    if (!values.lastName) {
      errors.lastName = "lastName is required";
    }
    if (!values.homePhone) {
      errors.homePhone = "homePhone is required";
    }
    if (!values.email) {
      errors.email = "email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "please enter a valid email";
    }
    if (!values.estimatedBudget) {
      errors.estimatedBudget = "estimatedBudget is required";
    }
    if (!values.companyName) {
      errors.companyName = "companyName is required";
    }

    return errors;
  };

  const validateProjectType = () => {
    if (projectType.length === 0) {
      setErrMsg(true);
    } else {
      setErrMsg(false);
    }
  };

  return (
    <div className="mxr__project mxr__section">
      <Container>
        <form onSubmit={hadleSubmit}>
          <h3 className="mxr__section-title">READY TO DISCUSS YOUR PROJECT?</h3>
          <div>
            {errorMsg ? (
              <p
                style={{
                  fontSize: "1rem",
                  color: "#ef1515",
                  letterSpacing: "2px",
                  textTransform: "capitalize",
                }}
              >
                {errorMsg}
              </p>
            ) : null}
          </div>
          <div className="inputfild">
            <Row>
              <Col md={4} sm={12} className=" formCol">
                {<label>{formErrors.firstName}</label>}
                <input
                  type="text"
                  placeholder="First name*"
                  onChange={handleChange}
                  value={project.firstName}
                  name="firstName"
                />
              </Col>
              <Col md={4} sm={12} className="formCol">
                <label>{formErrors.lastName}</label>
                <input
                  type="text"
                  placeholder="Last name*"
                  onChange={handleChange}
                  value={project.lastName}
                  name="lastName"
                />
              </Col>
              <Col md={4} sm={12} className="phone formCol">
                <label>{formErrors.homePhone}</label>
                <input
                  type="text"
                  placeholder="Home phone*"
                  onChange={handleChange}
                  value={project.homePhone}
                  name="homePhone"
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col md={4} sm={12} className="email formCol">
                <label>{formErrors.email}</label>
                <input
                  type="email"
                  placeholder="Email"
                  onChange={handleChange}
                  value={project.email}
                  name="email"
                />
              </Col>
              <Col md={4} sm={12} className="formCol">
                <label>{formErrors.companyName}</label>
                <input
                  type="text"
                  placeholder="Company name"
                  onChange={handleChange}
                  value={project.companyName}
                  name="companyName"
                />
              </Col>
            </Row>
          </div>
          <Row>
            <Col className="project_type">
              <div>
                {props.form.map((data, index) => (
                  <>
                    {errMsg ? (
                      <p
                        style={{
                          color: "#ef1515",
                          fontSize: ".9rem",
                          textTransform: "capitalize",
                        }}
                      >
                        required
                      </p>
                    ) : null}
                    <div>{data.heading}</div>
                    <div>
                      {data.labels.map((projectType, index) => (
                        <p>
                          <input
                            type="radio"
                            name="projectType"
                            value={projectType}
                            onChange={(e) => setProjectType(e.target.value)}
                          />
                          {projectType}
                        </p>
                      ))}
                    </div>
                  </>
                ))}
              </div>
            </Col>
            <Col sm={12} md={6} className="recaptcha">
              <h6>
                Estimated Budget *
                <p
                  style={{
                    color: "#ef1515",
                    fontSize: ".9rem",
                    textTransform: "capitalize",
                  }}
                >
                  {formErrors.estimatedBudget}
                </p>
              </h6>
              <div className="value" style={{ color: "#fff" }}>
                {project.estimatedBudget === ""
                  ? 0
                  : `${project.estimatedBudget} k`}
              </div>
              <input
                type="range"
                min={0}
                max={100}
                value={project.estimatedBudget}
                name="estimatedBudget"
                className="slider"
                onChange={handleChange}
                style={{ width: "50%" }}
              />
              <ReCAPTCHA
                sitekey="6Lc4hYwhAAAAADxuPBNLjyH5aILUENJodF2aOpHN"
                onChange={onChange}
              />
              <button onChange={varified} type="submit">
                SEND
              </button>
            </Col>
          </Row>
        </form>
      </Container>
    </div>
  );
}

export default Project;
