const express = require('express');
const logger = require('morgan');
const port = process.env.PORT || 3001;
const cors = require('cors')

const app = express();

app.use(logger('dev'));
app.use(express.json())
app.use (cors())

// parse incoming JSON data
app.use(express.json());

app.get('/api/scores', function (req, res){
    res.json(scores);
});

app.listen(port, function() {
	console.log(`Express app running on port ${port}`)
});