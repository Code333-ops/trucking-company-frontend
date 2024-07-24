// backend/routes/schedules.js

const express = require('express');
const router = express.Router();
const db = require('../db');

// Define the route to get schedules
router.get('/schedules', async (req, res) => {
  try {
    const schedules = await db.any('SELECT * FROM schedules');
    res.json(schedules);
  } catch (error) {
    console.error('Error fetching schedules:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
