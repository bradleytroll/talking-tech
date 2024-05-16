const router = require('express').Router();
const { Post, User, Comment } = require('../models');

// Homepage route
router.get('/', async (req, res) => {
    console.log('Session at start of homepage route:', req.session);

    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
                {
                    model: Comment,
                    include: [
                        {
                            model: User,
                            attributes: ['username'],
                        },
                    ],
                },
            ],
        });

        const posts = postData.map((post) => post.get({ plain: true }));

        const context = {
            posts,
            logged_in: req.session.logged_in,
            logged_in_user_id: req.session.user_id
        };

        console.log('Data context passed to homepage:', context);

        res.render('homepage', context);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Login route
router.get('/login', (req, res) => {
    console.log('Rendering login page. Session:', req.session);
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }

    res.render('login');
});

// Signup route
router.get('/signup', (req, res) => {
    console.log('Rendering signup page. Session:', req.session);
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }

    res.render('signup');
});

module.exports = router;
