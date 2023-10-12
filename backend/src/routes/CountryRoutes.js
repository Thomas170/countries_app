const express = require('express');
const router = express.Router();
const CountryController = require('../controllers/CountryController');

/**
 * @swagger
 * /api/countries/{name}:
 *   get:
 *     description: Get country details by name
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         description: Country name
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: Country not found
 */
router.get('/:name', CountryController.getCountryDetails);

module.exports = router;