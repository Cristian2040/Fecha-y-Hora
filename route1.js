const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Estás en la ruta 1');
});

module.exports = router;