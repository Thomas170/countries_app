const express = require('express');
const router = express.Router();
const CountryController = require('../controllers/CountryController');

router.get('/:name', CountryController.getCountryDetails);

module.exports = router;