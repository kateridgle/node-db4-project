const express = require('exress');
const recipesRouter = require('./recipes/resicpes-router')
const server = express();

server.use(express.json());

server.use('/api/recipes', recipesRouter)

module.exports = server;