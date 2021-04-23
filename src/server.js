const express = require("express")
const server = express()
const routes = require("./routes")

server.engine('html', require('ejs').renderFile);
server.set('view engine', 'ejs')

//habilitar arquivos statics
server.use(express.static("public"))

//routes
server.use(routes)

server.listen(3000, () => console.log('rodando em localhost:3000'))