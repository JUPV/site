"use estrito"; 
const express       = require('express')
const routes        = express.Router()
//const email        = require('../services/email')
const nodemailer = require("nodemailer");

routes.get('/', (req, res) => res.render("index"))
routes.get('/email', (req, res) => {

  async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    //let testAccount = await nodemailer.createTestAccount();
  
    // create reusable transporter object using the default SMTP transport
    var transport = nodemailer.createTransport({
      host: "smtp.titan.email",
      port: 465,
      auth: {
        user: "contato@miniraiz.com",
        pass: "@Guto1402"
      }/* ,tls: { rejectUnauthorized: false} */
    });
  
    // send mail with defined transport object
    let info = await transport.sendMail({
      from: '"Mini Raiz 👻" <contato@miniraiz.com>', // Endereço do remetente
      to: "gutembergsouzadejesus@gmail.com, contato@miniraiz.com, paulapclima37@gmail.com", // lista de receptores
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    });
    console.log("Message sent: %s", info.messageId);
    
  }
  
  main().catch(console.error);
  return res.redirect('/')
})
routes.get('/blog', (req, res) => res.render("index"))
routes.get('/blog_detalhes', (req, res) => res.render("index"))

module.exports = routes