const { Router } = require('express');
const router = Router();

const indexController = require('../src/controllers/index.controller');
const indexMiddleware = require('../src/middlewares/index.middleware.js');

// Add your routes here

module.exports = router;
