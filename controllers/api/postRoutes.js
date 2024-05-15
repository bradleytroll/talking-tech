const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const newPost = await Post.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newPost);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!postData) {
            res.status(404).json({ message: 'No post found with this id!' });
            return;
        }

        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.update(req.body, {
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!postData[0]) {
            res.status(404).json({ message: 'No post found with this id!' });
            return;
        }

        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;


// const express = require('express');
// const router = express.Router();
// const { Post, User } = require('../../models');
// const withAuth = require('../../utils/auth');



// router.get('/:id', async (req, res) => {
//     try {
//         const postData = await Post.findOne({
//             where: { id: req.params.id },
//             include: [
//                 {
//                     model: User,
//                     attributes: ['username'],
//                 },
               
//             ],
//         });

//         if (postData) {
          
//             const post = postData.get({ plain: true });
//             res.render('onePost', { post });  
//         } else {
//             res.status(404).send('Post not found');
//         }
//     } catch (err) {
//         console.error('Error fetching post:', err);
//         res.status(500).send(err.toString());
//     }
// });




// router.post('/', withAuth, async (req, res) => {
//     try {
//         const newPost = await Post.create({
//             ...req.body,
//             user_id: req.session.user_id,
//         });
       
//         res.status(200).json(newPost);
//     } catch (err) {
//         console.error('Failed to create post:', err);
//         res.status(400).json(err);
//     }
// });

// // Route to serve the edit page for a post
// router.get('/:id/edit', async (req, res) => {
//     try {
//         const postData = await Post.findByPk(req.params.id, {
//             include: [{ model: User, attributes: ['username'] }]
//         });
//         if (!postData) {
//             res.status(404).send('Post not found');
//             return;
//         }

//         const post = postData.get({ plain: true });
//         res.render('editPost', { post }); 
//     } catch (err) {
//         console.error('Error fetching post for edit:', err);
//         res.status(500).send(err.toString());
//     }
// });

// // postRoutes.js
// router.post('/update/:id', async (req, res) => {
//     console.log("Received data for update:", req.body);
//     console.log("Post ID to update:", req.params.id)
//     try {
//         const { title, post_content: content } = req.body;
//         const updatedPost = await Post.update(
//             { title, post_content: content },
//             { where: { id: req.params.id } }
//         );
//         console.log("Update result:", updatedPost);
//         if (updatedPost[0] > 0) {
//             console.log("Post updated successfully.");
//             res.redirect('/dashboard'); 
//         } else {
//             console.log("No post found with the given ID.");
//             res.status(404).send('Post not found');
//         }
//     } catch (err) {
//         console.error('Error updating post:', err);
//         res.status(500).send('Error updating post');
//     }
// });




// router.post('/delete/:id', (req, res) => {
//     Post.destroy({
//         where: {
//             id: req.params.id,
//         },
//     })
//     .then(deleted => {
//         if (deleted) {
//             res.send('Post deleted successfully.');
//         } else {
//             res.status(404).send('Post not found');
//         }
//     })
//     .catch(err => {
//         console.error('Error deleting post:', err);
//         res.status(500).json(err);
//     });
// });




// module.exports = router;

// /