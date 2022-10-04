const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: "nocountry719@gmail.com", // generated ethereal user
    pass: "nocountry", // generated ethereal password
  },
});

const sendEmail = async function (body) {
  const { from, to, subject, html } = body;

  let info = await transporter.sendMail({
    from: from, // sender address
    to: to, // list of receivers
    subject: subject, // Subject line
    html: html,
  });
};

module.exports = {
    sendEmail
  };