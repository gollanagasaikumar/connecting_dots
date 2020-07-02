var mongoose = require('mongoose');
const Schema = mongoose.Schema

	var noughtscrosses = new Schema({
	gameid: String,
	playerturn: String,
	playerwon: String,
	playerone: String,
	playertwo: String,
	datetime : Date
    });



module.exports = mongoose.model('noughts-crosses',noughtscrosses,'noughts-crosses');