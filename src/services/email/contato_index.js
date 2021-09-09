"use estrito"; 
const nodemailer         = require("nodemailer")

const email = {
  async enviaEmail(para, html){


    var transport = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      //secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_SENHA
      },tls: { rejectUnauthorized: false}
    })

    console.log("teste email")
    let info = await transport.sendMail({
      from: '"Mini Raiz 👻" <contato@miniraiz.com>', // Endereço do remetente
      to: "gutembergsouzadejesus@gmail.com, contato@miniraiz.com, paulapclima37@gmail.com", // lista de receptores
      subject: "Hello ✔", // Linha de assunto
      text: "Hello world?", // corpo de texto simples
      html: "<b>Hello world?</b>", // html body
    })

    console.log("Message sent: %s", info.messageId);
  }

}

module.exports = email

