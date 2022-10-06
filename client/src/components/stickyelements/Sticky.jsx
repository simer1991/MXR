import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MessageIcon from "@mui/icons-material/Message";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import EastIcon from "@mui/icons-material/East";
import "./sticky.css";
import { Box, styled } from "@mui/material";
import { ExternalLink } from "react-external-link";
import { contactSchema } from "../../schema";
const StyledDiv = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down(1040)]: {
    display: "none",
    backgroundColor: "red",
  },
}));
const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  address: "",
  text: "",
};

function Sticky() {
  const [show, setShow] = useState("none");
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
    <StyledDiv style={{ display: "flex" }} onMouseLeave={() => setShow("none")}>
      <StyledDiv
        style={{
          right: "-195px",
          position: "fixed",
          top: "30%",
          zIndex: "2",
        }}
      >
        <div>
          <div className="box0">
            <div className="icon arrow">
              <EastIcon />
            </div>
          </div>

          <div className="box1" onMouseEnter={() => setShow("block")}>
            <div className="icon contactus">
              <span
                style={{
                  writingMode: "vertical-lr",
                  transform: "rotate(180deg)",
                }}
              >
                Contact Us
                <MailOutlineIcon
                  style={{
                    transform: "rotate(90deg)",
                    marginLeft: "-8px",
                    fontSize: "18px",
                    marginTop: "5px",
                  }}
                />
              </span>
            </div>
          </div>

          <div
            className="box boxWhatsApp"
            style={{ width: "250px" }}
            onMouseEnter={() => setShow("none")}
          >
            <ExternalLink
              href="https://api.whatsapp.com/send?phone=447534526135"
              target="_blank"
              rel="noreferrer"
            >
              <div className="icon whatsapp">
                <WhatsAppIcon />
              </div>
            </ExternalLink>

            <p
              style={{
                color: "white",
                justifyContent: "center",
                marginTop: "12px",
              }}
            >
              Whatsapp
            </p>
          </div>

          <div
            className="box boxfacebook"
            style={{ width: "250px", borderRadius: "0 0 0 15px" }}
          >
            <ExternalLink
              href="https://www.messenger.com"
              target="_blank"
              rel="noreferrer"
            >
              <div className="icon facebook">
                <MessageIcon />
              </div>
            </ExternalLink>
            <p
              style={{
                color: "white",
                justifyContent: "center",
                marginTop: "12px",
              }}
            >
              Facebook Messager
            </p>
          </div>
        </div>
      </StyledDiv>

      <div>
        <Form
          onSubmit={handleSubmit}
          autocomplete="off"
          style={{
            backgroundColor: "#f8f9fa",
            padding: "15px",
            boxShadow: "0px 0px 1px grey",
            borderRadius: "10px",
            display: `${show}`,
            position: "fixed",
            top: "30%",
            right: "50px",
            zIndex: 1,
          }}
        >
          <div>
            <p>Contact Us</p>
          </div>
          {errors.name && touched.name ? (
            <p className="error">{errors.name}</p>
          ) : null}
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Control
              autocomplete="off"
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              placeholder="name"
              style={{ borderRadius: "20px", width: "404px" }}
            />
          </Form.Group>
          {errors.phoneNumber && touched.phoneNumber ? (
            <p className="error">{errors.phoneNumber}</p>
          ) : null}
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              autocomplete="off"
              type="text"
              name="phoneNumber"
              value={values.phoneNumber}
              onChange={handleChange}
              placeholder="mobile"
              style={{ borderRadius: "20px" }}
            />
          </Form.Group>
          {errors.email && touched.email ? (
            <p className="error">{errors.email}</p>
          ) : null}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              autocomplete="off"
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="email"
              style={{ borderRadius: "20px" }}
            />
          </Form.Group>
          {errors.address && touched.address ? (
            <p className="error">{errors.address}</p>
          ) : null}
          <Form.Group className="mb-3" controlId="formBasicMessage">
            <Form.Control
              type="text"
              autocomplete="off"
              name="address"
              value={values.address}
              onChange={handleChange}
              placeholder="address"
              style={{ borderRadius: "20px", height: "100px" }}
            />
          </Form.Group>
          {errors.text && touched.text ? (
            <p className="error">{errors.text}</p>
          ) : null}
          <Form.Group className="mb-3" controlId="formBasicMessage">
            <Form.Control
              type="text"
              autocomplete="off"
              name="text"
              value={values.text}
              onChange={handleChange}
              placeholder="message"
              style={{ borderRadius: "20px", height: "100px" }}
            />
          </Form.Group>
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
                  width: "100%",
                  textAlign: "center",
                  marginTop: "10px",
                  borderRadius: "5px",
                }}
              >
                {msg}
              </p>
            ) : null}
          </div>
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
          <Button
            variant="contained"
            style={{
              width: " 100%",
              color: "#ffff",
              fontSize: "1rem",
              borderRadius: "11px",
              backgroundColor: "#3393ab",
              textTransform: "capitalize",
              marginTop: "50px",
              fontWeight: 600,
              paddind: "10px",
            }}
            type="submit"
          >
            submit
          </Button>
        </Form>
      </div>
    </StyledDiv>
  );
}

export default Sticky;
