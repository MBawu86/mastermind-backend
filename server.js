const express = require('express');
const logger = require('morgan');
const port = process.env.PORT || 3001;
const cors = require('cors')

const app = express();

app.use(logger('dev'));
app.use(express.json())
app.use (cors())

// this piece of middleware allows us to parse incoming JSON data
app.use(express.json());

const scores = [{
    numGuesses: 2,
    initials: 'DJS',
    seconds: 62
},
{
    numGuesses: 4,
    initials: 'DJS',
    seconds: 90
},

]

app.get('/api/scores', function (req, res){
    res.json(scores);
});

app.listen(port, function() {
	console.log(`Express app running on port ${port}`)
});