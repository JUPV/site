const express       = require('express')
const routes        = express.Router()

routes.get('/', (req, res) => res.render("index"))
routes.get('/aboutus', (req, res) => res.render("index"))
routes.get('/blog', (req, res) => res.render("index"))
routes.get('/blog_detalhes', (req, res) => res.render("index"))

module.exports = routes