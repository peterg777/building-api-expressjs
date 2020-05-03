const express = require('express');
const chirpStore = require('../../chirpstore');
let router = express.Router();
//get request
router.get('/:id?', (req, res) => {
    let id = req.params.id;
    if (id) {
        res.json(chirpStore.GetChirp(id));
    } else {
    res.json(chirpStore.GetChirps());
    }
});
//post request
router.post('/', (req, res) => {
    chirpStore.CreateChirp(req.body);
    res.sendStatus(201);
});
// put request
router.put('/:id', (req, res) => {
    let id = req.params.id;
    chirpStore.UpdateChirp(id, req.body);
    res.sendStatus(204);
});
//delete request
router.delete('/:id', (req, res) => {
    let id = req.params.id;
    chirpStore.DeleteChirp(id);
    res.sendStatus(204);
});

module.exports = router;