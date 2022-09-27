import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MessageIcon from "@mui/icons-material/Message";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import EastIcon from "@mui/icons-material/East";
import "./sticky.css";
import { Box, styled } from "@mui/material";
import { Link } from "react-router-dom";

const StyledDiv = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down(1040)]: {
    display: "none",
    backgroundColor: "red",
  },
}));

function Sticky() {
  const [show, setShow] = useState("none");

  return (
    <StyledDiv style={{ display: "flex" }} onMouseLeave={() => setShow("none")}>
      <StyledDiv
        style={{ right: "-195px", position: "fixed", top: "30%", zIndex: "2" }}
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
            <a
              href="https://api.whatsapp.com/send?phone=447534526135"
              target="_blank"
              rel="noreferrer"
            >
              <div className="icon whatsapp">
                <WhatsAppIcon />
              </div>
            </a>

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
            <a
              href="https://www.messenger.com"
              target="_blank"
              rel="noreferrer"
            >
              <div className="icon facebook">
                <MessageIcon />
              </div>
            </a>
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

          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Control
              type="name"
              placeholder="Name"
              style={{ borderRadius: "20px", width: "404px" }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="Phone"
              placeholder="Phone"
              style={{ borderRadius: "20px" }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="email"
              style={{ borderRadius: "20px" }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicMessage">
            <Form.Control
              type="Message"
              placeholder="Message"
              style={{ borderRadius: "20px", height: "100px" }}
            />
          </Form.Group>

          <Button
            variant="contained"
            style={{
              width: " 100%",
              color: "#ffff",
              fontSize: "1rem",
              borderRadius: "11px",
              backgroundColor: "#ff7110",
              textTransform: "capitalize",
              marginTop: "50px",
            }}
          >
            Contained
          </Button>
        </Form>
      </div>
    </StyledDiv>
  );
}

export default Sticky;
