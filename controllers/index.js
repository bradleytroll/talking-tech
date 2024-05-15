const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const dashboardRoutes = require('./dashboardRoutes');

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);

module.exports = router;

// const router = require('express').Router();

// const authRoutes = require('./authRoutes');
// const homeRoutes = require('./homeRoutes1');
// const dashboardRoutes = require('./dashboardRoutes');
// const commentRoutes = require('./api/commentRoutes');
// const userRoutes = require('./api/userRoutes');
// const postRoutes = require('./api/postRoutes');

// router.use('/auth', authRoutes);
// router.use('/', homeRoutes);
// router.use('/dashboard', dashboardRoutes);
// router.use('/api/comments', commentRoutes);
// router.use('/api/users', userRoutes);
// router.use('/api/posts', postRoutes);

// module.exports = router;

