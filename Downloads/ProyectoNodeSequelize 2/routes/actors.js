let express = require('express');
let router = express.Router();
let actorsController = require('../controllers/actorsController');



router.get('/actors', actorsController.list);

router.get('/actors/recommended', actorsController.recommended);

router.get('/actors/detail/:id', actorsController.detail);


module.exports =  router;