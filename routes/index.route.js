const { Router } = require('express');
const router = Router();

const indexController = require('../src/controllers/index.controller');
const indexMiddleware = require('../src/middlewares/index.middleware.js');

// Add your routes here

router.get('/', indexMiddleware, indexController.getCourse);
router.post('/create', indexMiddleware.create, indexController.createOne);
router.delete('/delete/:id', indexMiddleware, indexController.deleteOne);
router.put('/update/:id', indexMiddleware.create, indexController.updateOne);

module.exports = router;
