# CRUD API BÁSICO COM NODE.JS

![GitHub repo size](https://img.shields.io/github/repo-size/victor-luduvice/CrudApi-Basico-Nodejs)
![GitHub language count](https://img.shields.io/github/languages/count/victor-luduvice/CrudApi-Basico-Nodejs)
![GitHub last commit](https://img.shields.io/github/last-commit/victor-luduvice/CrudApi-Basico-Nodejs)

## 📌 Sobre o projeto
Este repositório contém um CRUD básico desenvolvido com Node.js e Express. O projeto serve como um exemplo prático para entender os fundamentos de uma API REST utilizando JavaScript no backend.

## 🚀 Tecnologias utilizadas
- **Node.js**
- **Express**
- **MongoDB (Mongoose)**
- **Postman (para testes)**

## 📂 Estrutura do projeto
```
CrudApi-Basico-Nodejs/
│-- src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── app.js
│-- .env
│-- package.json
│-- README.md
```

## 📦 Instalação e execução
### Clone o repositório:
```bash
git clone https://github.com/victor-luduvice/CrudApi-Basico-Nodejs.git
```
### Acesse o diretório do projeto:
```bash
cd CrudApi-Basico-Nodejs
```
### Instale as dependências:
```bash
npm install
```
### Configure as variáveis de ambiente
Crie um arquivo `.env` na raiz do projeto e defina as configurações necessárias, como a conexão com o banco de dados.

### Inicie o servidor:
```bash
npm start
```
A API estará rodando em `http://localhost:3000`.

## 📌 Rotas da API
- `GET /items` → Retorna todos os itens
- `GET /items/:id` → Retorna um item específico
- `POST /items` → Cria um novo item
- `PUT /items/:id` → Atualiza um item existente
- `DELETE /items/:id` → Remove um item

## 🤝 Contribuição
Sinta-se à vontade para contribuir! Faça um **fork** deste repositório e envie um **pull request** com suas melhorias.


