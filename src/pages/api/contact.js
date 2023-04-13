/* eslint-disable import/no-anonymous-default-export */
export default function (req, res) {
  require('dotenv').config()
  
  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: 'cmwa7853@gmail.com',
      pass: process.env.password,
    },
    secure: true,
  })
  const mailData = {
    from: 'cmwa7853@gmail.com',
    to: 'florianbroeks59@gmail.com',
    subject: `Message From ${req.body.name}` + ` Sujet: ${req.body.sujet}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email} ${req.body.num}</p>`
  }

  if (req.body.name && req.body.email && req.body.num && req.body.message && req.body.sujet) {
    transporter.sendMail(mailData, function (err, info) {
      if(err)
        console.log(err)
      else
        console.log(info)
    })
  }
  
  console.log(req.body)
  res.send('success')
}