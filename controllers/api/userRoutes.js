const express = require('express');
const router = express.Router();
const { User, Post, Comment } = require('../../models');

router.get('/', (req, res) => {
    user.findAll({
        attributes: { exclude: ['password'] },
    })
    .then((userData) => res.json(userData))
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});
 
router.get('/id', (req, res) => {
    User.findOne({
        where: {
            id: req.params.id,
        },
        attributes: { exclude: ['password'] },
    })
       .then((userData) => res.json(userData))  
       .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    User.create({
        username: req.body.username,
        password: req.body.password
    })
       .then((userData) => {
        req.session.save(() => {
                req.session.user_id = userData.id;
                req.session.username = userData.username;
                req.session.loggedIn = true;
                res.status(200).json(userData);
            });
        })
   .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        });
});
       
       


// router.post('/', async (req, res) => {
//     try {
//         const userData = await User.create(req.body);

//         req.session.save(() => {
//             req.session.user_id = userData.id;
//             req.session.username = userData.username;
//             req.session.loggedIn = true;

//             res.status(200).json(userData);
//         });
//     } catch (err) {
//         res.status(400).json(err);
//     }
// });

router.post('/login', async (req, res) => {
    try {
    const userData = await User.findOne({
        where: {
            username: req.body.username
        }
    })
            if (!userData) {
                res
                   .status(400)
                   .json({ message: 'Incorrect username or password, please try again' });
                return;
            }

            const validPassword = userData.checkPassword(req.body.password);
            if (!validPassword) {
                res
                   .status(400)
                   .json({ message: 'Incorrect username or password, please try again' });
                return;
            }

            req.session.save(() => {
                req.session.user_id = userData.id;
                req.session.username = userData.username;
                req.session.loggedIn = true;
                res.status(200).json ({ user: userData, message: 'You are now logged in!' });
            });
        } catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
        });
    

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
//             req.session.loggedIn = true;

//             res.json({ user: userData, message: 'You are now logged in!' });
//         });

//     } catch (err) {
//         res.status(400).json(err);
//     }
// });

router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

// router.post('/logout', (req, res) => {
//     if (req.session.loggedIn) {
//         req.session.destroy(() => {
//             res.status(204).end();
//         });
//     } else {
//         res.status(404).end();
//     }
// });

// module.exports = router;

router.put('/:id', (req, res) => {
    User.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id,
        },
    })
       .then((userData) => {
            if (!userData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(userData);
        })
       .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
}   );

router.delete('/id', (req, res) => {
    User.destroy({
        where: {
            id: req.params.id,
        },
    })
       .then((userData) => {
            if (!userData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(userData);
        })
       .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});


// const { Post, User } = require('../../models');

// router.get('/', async (req, res) => {
//     try {
//         const postData = await Post.findAll({
//             include: [
//                 {
//                     model: User,
//                     attributes: ['username'],
//                 },
//             ],
//         });

//         const posts = postData.map((post) => post.get({ plain: true }));

//         res.render('home', {
//             posts,
//             loggedIn: req.session.loggedIn // Pass session info to view
//         });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

module.exports = router;
