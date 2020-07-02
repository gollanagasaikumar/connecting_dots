var noughtscrosses = require('../models/noughtscrosses')

add = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a movie',
        })
    }

    const nc = new noughtscrosses({	
	gameid: "123478463",
	playerturn: "X",
	playerwon: "O",
	playerone: "Naga",
	playertwo: "Sai"    
	})

    if (!nc) {
        return res.status(400).json({ success: false, error: err })
    }

    
        nc.save()
        .then(() => {
            return res.status(201).json({
                success: true,
                message: 'Movie created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Movie not created!',
            })
        })
}


getMovies = async (req, res) => {
    await noughtscrosses.find({}, (err, movies) => {
		
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!movies.length) {
            return res
                .status(404)
                .json({ success: false, error: `Movie not found` })
        }
        return res.status(200).json({ success: true, data: movies })
    }).catch(err => console.log(err))
}




getMovieById = async (req, res) => {
	var qname = req.params.gameid
	console.log(qname)
    await noughtscrosses.findOne({ gameid:qname}, (err, movie) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }


        return res.status(200).json({ success: true, data: movie })
    }).catch(err => console.log(err))
}

watchchanges = async(req,res) => {
	await noughtscrosses.watch().
    on('change', data => {
		return res.status(200).json({data})
	});
}

module.exports = {add,getMovies,getMovieById,watchchanges}