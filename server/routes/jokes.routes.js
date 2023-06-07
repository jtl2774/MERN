const JokeController = require('../controllers/jokes.controller');

module.exports = app => {
    app.get('/api/jokes', JokeController.findAllJokes);
    app.get('/api/jokes/:id', JokeController.findOneSingleJoke);
    app.post('/api/new/joke', JokeController.createNewJoke);
    app.put('/api/updateJoke/:id', JokeController.updateExistingJoke);
    app.delete('/api/deleteJoke/:id', JokeController.deleteAnExistingJoke);
}
