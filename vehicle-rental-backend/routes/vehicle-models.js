const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/vehicle-models', async (req, res) => {
  const { type } = req.query;

  if (!type) {
    return res.status(400).json({ error: 'Vehicle type is required' });
  }

  try {
    const [rows] = await db.query(
      'SELECT id, model AS name FROM vehicles WHERE type = ?',
      [type]
    );
    res.json(rows);
  } catch (err) {
    console.error('Error fetching vehicle models:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
