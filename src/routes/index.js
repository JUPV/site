"use estrito"; 
const express       = require('express')
const routes        = express.Router()
//const contato_index        = require('../services/email/contato_index')
const nodemailer         = require("nodemailer")


routes.get('/', (req, res) => res.render("index"))

routes.post('/contato-email', (req, res) => {
  const{nome, email, telefone, descricao} = req.body
  
  async function main(nome, email, telefone, descricao) {

    var transport = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_SENHA
      },tls: { rejectUnauthorized: false}
    })
  
    let info = await transport.sendMail({
      from: '"Mini Raiz 👻" <contato@miniraiz.com>', // Endereço do remetente
      to: email, // lista de receptores
      subject: `DE ${nome}`, // Linha de assunto
      text: "Hello world?", // corpo de texto simples
      html: `<b>telefone = ${telefone} Descrição = ${descricao}</b>`, // html body
    });
    console.log("Message sent: %s", info.messageId);
    
  }
  
  main(nome, email, telefone, descricao).catch(console.error);

  return res.redirect('/')

})

routes.get('/email', (req, res) => {

  async function main() {

    var transport = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_SENHA
      },tls: { rejectUnauthorized: false}
    })
  
    let info = await transport.sendMail({
      from: '"Mini Raiz 👻" <contato@miniraiz.com>', // Endereço do remetente
      to: "gutembergsouzadejesus@gmail.com, contato@miniraiz.com, paulapclima37@gmail.com", // lista de receptores
      subject: "teste6", // Linha de assunto
      text: "Hello world?", // corpo de texto simples
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