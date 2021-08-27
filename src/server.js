require("dotenv").config();
const express           = require("express")
const nunjucks          = require("nunjucks")
const routes            = require('./routes')

const porta         = 3000

const servidor = express()


servidor.use(express.urlencoded({ extended:true })) /* abilita a variavel req.body para os get e post*/
servidor.use(express.static("public"))


servidor.use(routes)

/* configuraçao da templeite engine */
servidor.set("view engine", "njk")
nunjucks.configure("src/app/views",{
    express: servidor,
    autoescape: true,
    noCache: true
})

servidor.listen(porta,()=>{
    console.log(`servido ligado na porta ${porta}`)
})
