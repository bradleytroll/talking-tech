const router = require('express').Router();

const authRoutes = require('./authRoutes');
const homeRoutes = require('./homeRoutes1');
const dashboardRoutes = require('./dashboardRoutes');
const commentRoutes = require('./api/commentRoutes');
const userRoutes = require('./api/userRoutes');
const postRoutes = require('./api/postRoutes');

router.use('/auth', authRoutes);
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api/comments', commentRoutes);
router.use('/api/users', userRoutes);
router.use('/api/posts', postRoutes);

module.exports = router;

