const express = require('express');
const router = express.Router();
const pollController = require('../controllers/pollController.js');
const refController = require('../controllers/refController.js');

router.get('/school-list', refController.schoolList);
router.post('/results', pollController.results);

module.exports = router;
