const express = require('express');

const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  console.log('in the server test GET route');
  res.send('hello from the backend server!');
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
  console.log('in the server test POST route');
});

module.exports = router;
