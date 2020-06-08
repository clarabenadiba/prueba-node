let express = require('express');
let router = express.Router();
let genresController = require('../controllers/genresController');



router.get('/genres', genresController.list);

router.get('/genres/recommended', genresController.recommended);

router.get('/genres/detail/:id', genresController.detail);


module.exports =  router;