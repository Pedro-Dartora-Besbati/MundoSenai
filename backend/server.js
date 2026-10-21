//Chamada da framework para poder estar criando uma aplicação web
const express = require("express");
//proteção da rota
const cors = require("cors");
//cookie contra ataques XSS
const cookieParser = require("cookie-parser");
//validação de login
const jwt = require("jsonwebtoken");
//hash de senhas
const bcrypt = require("bcrypt");
//criação da aplicação web
const app = express();

//para que os formatos dos textos estejam em JSON
app.use(express.json());
//proteção da rota http
app.use(cors({
    //link da URL para que possamos estar protegendo com credenciais
    origin: "http://localhost:3000",
    //dizer que as credenciais são necessárias
    credentials: true
}));

//rota para que os usuários possam estar se cadastrando
app.post('/cadastro', async (req, res) => {
    const {nome, email, senha} = req.body;
    const salt = process.env.SALT;
    const senhaCripitografada = await bcrypt.hash(senha, salt);
});

//iniciar o servidor local
app.listen(process.env.PORT, () => {
    //messagem de retorno de sucesso
    console.log("Servidor rodando na porta 3000 "+ process.env.PORT);
});