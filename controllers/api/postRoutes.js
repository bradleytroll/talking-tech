const express = require('express');
const router = express.Router();
const { Post, User } = require('../../models');
const withAuth = require('../../utils/auth');



router.get('/:id', async (req, res) => {
    try {
        const postData = await Post.findOne({
            where: { id: req.params.id },
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
                // Include any other relevant associations here
            ],
        });

        if (postData) {
            // Converting the sequelize object into a plain object
            const post = postData.get({ plain: true });
            res.render('onePost', { post });  
        } else {
            res.status(404).send('Post not found');
        }
    } catch (err) {
        console.error('Error fetching post:', err);
        res.status(500).send(err.toString());
    }
});




router.post('/', withAuth, async (req, res) => {
    try {
        const newPost = await Post.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.render('allPosts', {
            layout: 'dashboard',
            newPost,
        })
        //res.status(200).json(newPost);
    } catch (err) {
        console.error('Failed to create post:', err);
        res.status(400).json(err);
    }
});

// Route to serve the edit page for a post
router.get('/:id/edit', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [{ model: User, attributes: ['username'] }]
        });
        if (!postData) {
            res.status(404).send('Post not found');
            return;
        }

        const post = postData.get({ plain: true });
        res.render('editPost', { post }); 
    } catch (err) {
        console.error('Error fetching post for edit:', err);
        res.status(500).send(err.toString());
    }
});


// router.put('/:id', withAuth, (req, res) => {
//     Post.update(req.body, {
//         where: {
//             id: req.params.id,
//         },
//     })
//        .then((postData) => res.json(postData))
//        .catch((err) => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });

  

// router.put('/:id', withAuth, async (req, res) => {
//     try {
//         const [affectedRows] = await Post.update(req.body, {
//             where: {
//                 id: req.params.id,
//             },
//         });

//         if (affectedRows > 0) {
//             res.status(200).end();
//         } else {
//             res.status(404).end();
//         }
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

router.post('/delete/:id', (req, res) => {
    Post.destroy({
        where: {
            id: req.params.id,
        },
    })
    .then(deleted => {
        if (deleted) {
            res.send('Post deleted successfully.');
        } else {
            res.status(404).send('Post not found');
        }
    })
    .catch(err => {
        console.error('Error deleting post:', err);
        res.status(500).json(err);
    });
});



// router.delete('/:id', withAuth, async (req, res) => {
//     try {
//         const [affectedRows] = Post.destroy({
//             where: {
//                 id: req.params.id,
//             },
//         });

//         if (affectedRows > 0) {
//             res.status(200).end();
//         } else {
//             res.status(404).end();
//         }
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

module.exports = router;

// router.get('/', (req, res) => {
//     Post.findAll({
//         attributes: Post.postAttributes,
//         include: [
//             {
//                 model: User,
//                 attributes: ['username'],
//             },
//         ],
//     })
//        .then((postData) => res.json(postData))
//        .catch((err) => {
//             console.log(err);
//             res.status(500).json(err);
//         })
// });



// router.get('/', withAuth, async (req, res) => {
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

// router.post('/', withAuth, (req, res) => {
//     Post.create({
//         ...req.body,
//         user_id: req.session.user_id,
//     })
//         .then((postData) => res.json(postData))
//         .catch((err) => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// }   );

