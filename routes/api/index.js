const router = require('express').Router();
const apiRoutes = require('./api');
const userRoutes = require('./users');
const thoughtRoutes = require('./thoughts');

router.use('/api', apiRoutes);
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);