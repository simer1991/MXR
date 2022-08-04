const express = require("express");
const app = express();
const cors = require("cors");
const nodemailer = require('nodemailer');
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));

app.post('/users/',(req,res)=>{
 
  let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'damlashivani82@gmail.com',
      pass: 'ifipzqzeyvucvjwn'
    }
  });
  
  let mailDetails = {
    from: 'damlashivani82@gmail.com',// sender address
    to: req.body.to, // list of receivers
    html: `
    <div style="padding:10px;border-style: ridge">
    <p>Hello</p>
    <p>Welcome to our newsletter!</>
    <p>Please confirm your subscription to our list by clicking the link below:</p>
    <p>Click <a href="https://www.mxr.ai/?mailpoet_page=subscriptions&mailpoet_router&endpoint=subscription&action=confirm&data=eyJ0b2tlbiI6IjQwMThlYWU2NTkzZGZjYmM3NGQ0Yjc5ODc4MDFmNzI4IiwiZW1haWwiOiJkYW1sYXNoaXZhbmk4MkBnbWFpbC5jb20ifQ' + recovery_token + '">I confirm my subscription!</a></p>
    <p>Thank you,</p>
    <p>The Team</p>
    `,
  };
  
  mailTransporter.sendMail(mailDetails, function(err, data) {
    if(err)  {
      res.json({status: true, respMesg: 'Email not Sent '})
    } 
    else
        {
          res.json({status: true, respMesg: 'Email Sent Successfully'  + data.response})
        }
  });

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'damlashivani82@gmail.com',
        pass: 'ifipzqzeyvucvjwn'
    }
});

let mailOptions = {
    from: 'damlashivani82@gmail.com',// sender address
    to: "damlashivani82@gmail.com", // list of receivers
    html: `
    <div style="padding:10px;border-style: ridge">
    <p>You have a new contact request.</p>
    <h3>Contact Details</h3>
    <h5> <b>${req.body.to}</b> has success to subscribe mxr </h5>
    `
};
 
transporter.sendMail(mailOptions, function(error, info){
    if (error)
    {
      res.json({status: true, respMesg: 'Email Sent Successfully'})
    } 
    else
    {
      res.json({status: true, respMesg: 'Email Sent Successfully'})
    }
 
  });

});
// get driver connection
const dbo = require("./db/conn");
 
app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});