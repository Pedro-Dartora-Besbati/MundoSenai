--Criação do banco de dados caso ele não exista
CREATE DATABASE IF NOT EXISTS MundoSenai;

--Criação da tabela dos dados dos usuários
CREATE TABLE usuarios(
    id BIGINT AUTO_INCREMENT NOT NULL,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    senha VARCHAR(255) NOT NULL
);