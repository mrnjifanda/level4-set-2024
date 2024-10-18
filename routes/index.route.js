const { Router } = require('express');
const router = Router();

const indexController = require('../src/controllers/index.controller');
const indexMiddleware = require('../src/middlewares/index.middleware.js');

// Add your routes here

router.get('/', indexController.getCours);

router.put('/update/:id', indexController.updatedCours)

router.delete('/delete/:id', indexController.deleteCours)

router.post('/create', indexMiddleware.coursCreate, indexController.createCours)


module.exports = router;
