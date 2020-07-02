const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const publicPath = path.join(__dirname, '..', 'build');
const port = process.env.PORT || 3000;
const cors = require('cors')

const noughtscrosses = require('../routes/noughtscrosses.js')

const url = "mongodb+srv://admin:admin@noughts-crosses-zq9ru.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(url, {dbName:'noughts-crosses',useNewUrlParser: true, useUnifiedTopology: true});
	
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (error) => {
    console.log(error);
});	


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use((req, res, next) => {
     res.header("Access-Control-Allow-Origin", "*");
     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
     if (req.method === 'OPTIONS') {
         res.header("Access-Control-Allow-Methods", "PUT, POST, DELETE, GET");
         return res.status(200).json({});
     }
     next();
});
app.use('/api/noughtscrosses',noughtscrosses)
app.use(express.static(publicPath));
app.get('/', (req, res) => {
   res.sendFile(path.join(publicPath,'/index.html'));
});
app.listen(port, () => {
   console.log('Server is up!');
});
console.log('server listening on port 3000') 