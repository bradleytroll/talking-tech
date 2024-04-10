// const express = require('express');

// const router = express.Router();
// const bcrypt = require('bcrypt');
// const { User } = require('../models');

// // Route to sign up a new user
// router.post('/signup', async (req, res) => {
//     try {
//         const userData = await User.create({
//             username: req.body.username,
//             password: req.body.password,
//         });
//         req.session.save(() => {
//             req.session.user_id = userData.id;
//             req.session.username = userData.username;
//             req.session.logged_in = true;

//             res.status(200).json(userData);
//         });
//     } catch (err) {
//         res.status(400).json(err);
//     }
// });

// // Route to log in an existing user
// router.post('/login', async (req, res) => {
//     try {
//         const userData = await User.findOne({ where: { username: req.body.username } });

//         if (!userData) {
//             res
//                 .status(400)
//                 .json({ message: 'Incorrect username or password, please try again' });
//             return;
//         }

//         const validPassword = await userData.checkPassword(req.body.password);

//         if (!validPassword) {
//             res
//                 .status(400)
//                 .json({ message: 'Incorrect username or password, please try again' });
//             return;
//         }

//         req.session.save(() => {
//             req.session.user_id = userData.id;
//             req.session.username = userData.username;
//             req.session.logged_in = true;

//             res.json({ user: userData, message: 'You are now logged in!' });
//         });
//     } catch (err) {
//         res.status(400).json(err);
//     }
// });

// // Route to log out a user
// router.post('/logout', (req, res) => {
//     if (req.session.logged_in) {
//         req.session.destroy(() => {
//             res.status(204).end();
//         });
//     } else {
//         res.status(404).end();
//     }
// });

// module.exports = router;