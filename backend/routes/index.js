const express = require('express');
const usersRoutes = require('./usersRoutes');
const recordsRoutes = require('./recordsRoutes');
const typeKeyCountRoutes = require('./typeKeyCountRoutes');
const typoKeyCountRoutes = require('./typoKeyCountRoutes');

const router = express.Router();

router.use('/users', usersRoutes);
router.use('/records', recordsRoutes);
router.use('/typeKeyCount', typeKeyCountRoutes);
router.use('/typoKeyCount', typoKeyCountRoutes);

module.exports = router;