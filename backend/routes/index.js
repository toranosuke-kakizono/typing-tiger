const express = require('express');
const router = express.Router();

router.use(express.json());

const usersRoutes = require('./usersRoutes');
router.use('/users', usersRoutes);

const recordsRoutes = require('./recordsRoutes');
router.use('/records', recordsRoutes);

const typeKeyCountRoutes = require('./typeKeyCountRoutes');
router.use('/typeKeyCount', typeKeyCountRoutes);

const typoKeyCountRoutes = require('./typoKeyCountRoutes');
router.use('/typoKeyCount', typoKeyCountRoutes);


module.exports = router;