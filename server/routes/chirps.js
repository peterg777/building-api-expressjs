const express = require('express');
const chirpStore = require('../../chirpstore');
let router = express.Router();

router.get('/:id', (req, res) => {
    let id = req.params.id;
    if (id) {
        res.json(chirpStore.getChirp(id));
    } else {
    res.send(chirpStore.getChirps());
    }
});

router.post('/', (req, res) => {
    chirpStore.createChirp(req.body);
    res.sendStatus(200);
});

router.put('/:id', (req, res) => {
    let id = req.params.id;
    chirpStore.updateChirp(id, req.body);
    res.sendStatus(200);
});

router.delete('/:id', (req, res) => {
    let id = req.params.id;
    chirpStore.deleteChirp(id);
    res.sendStatus(200);
});

module.exports = router;