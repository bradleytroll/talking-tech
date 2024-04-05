const express = require('express');
const router = express.Router();
const { Post, User } = require('../models');

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });

        const posts = postData.map((post) => post.get({ plain: true }));

        res.render('home', {
            posts,
            loggedIn: req.session.loggedIn // Pass session info to view
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
