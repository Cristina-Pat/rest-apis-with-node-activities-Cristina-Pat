import express from 'express';
import dotenv from 'dotenv';
// import the dotenv module configures it to load
// environment variables from the .env file
dotenv.config();

// declare a constant set to a require for express
//const express = require(\`express\`);
const app = express();

const port = process.env.PORT;
const host = process.env.HOST;

app.get(`/`, (req, res) => {res.send(`Hello Word`)});

const server = app.listen(port, host, () => {
  const SERVERHOST = server.address().address;
  const SERVERPORT = server.address().port;
  console.log(`Server is running on http// ${SERVERHOST}:${SERVERPORT}`);
});
