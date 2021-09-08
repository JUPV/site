const nodemailer         = require("nodemailer")

async function main() {
      
    
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "imap.titan.email",
      port: 587,
      auth: {
        user: "contato@miniraiz.com", // generated ethereal user
        pass: "@Guto1402", // generated ethereal password
      },tls: { rejectUnauthorized: false} //########################################## tirar anteste de subir => ,tls: { rejectUnauthorized: false}
    });
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: `"Mini Raiz" <contato@miniraiz.com>`, // sender address
      to: "gutembergsouzadejesus@gmail.com", // list of receivers
      subject: "teste ✔", // Subject line
      //text: "teste 1", // plain text body
      html: "<b>Ola Ana Paula, bem vinda ao nosso servidor</b>", // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    console.log(info);
  
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    return res.send("OK, email enviado com sucesso")
    
}

const email = {
    async enviaEmail(para, html){
        
            // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: "imap.titan.email",
            port: 465,
            auth: {
            user: "contato@miniraiz.com", // generated ethereal user
            pass: "@Guto1402", // generated ethereal password
            }/* ,tls: { rejectUnauthorized: false} */ //########################################## tirar anteste de subir => ,tls: { rejectUnauthorized: false}
        });
        
        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: `"Mini Raiz" <contato@miniraiz.com>`, // sender address
            to: para, // list of receivers
            subject: "teste ✔", // Subject line
            //text: "teste 1", // plain text body
            html, // html body
        });

        
        console.log("Message sent: %s", info.messageId);
        console.log(info);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
       
    }
}

module.exports = email

