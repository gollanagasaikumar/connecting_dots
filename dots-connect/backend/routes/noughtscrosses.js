var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var noughtscrosses = require('../controllers/noughtscrosses.js')



router.post('/add', noughtscrosses.add)
router.get('/get', noughtscrosses.getMovies)
router.get('/getbyid/:gameid', noughtscrosses.getMovieById)
router.get('/watch',noughtscrosses.watchchanges)

module.exports = router
	

