// backend/routes/locations.js

const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/locations', async (req, res) => {
  try {
    const locations = await db.any('SELECT * FROM locations');
    res.json(locations);
  } catch (error) {
    console.error('Error fetching locations:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
