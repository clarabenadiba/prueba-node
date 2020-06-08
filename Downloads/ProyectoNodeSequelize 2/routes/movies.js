let express = require('express');
let router = express.Router();
let moviesController = require('../controllers/moviesController');



router.get('/movies', moviesController.list);

 router.get('/movies/recommended', moviesController.recommended);

 //router.get('/movies/totalTime', moviesController.totalTime);
 router.post('/movies/search', moviesController.search);

router.get('/movies/new', moviesController.new);

router.get('/movies/detail/:id', moviesController.detail);




module.exports =  router;