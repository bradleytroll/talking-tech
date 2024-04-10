const express = require('express');
const router = express.Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    Post.findAll({
        attributes: Post.postAttributes,
        include: [
            {
                model: User,
                attributes: ['username'],
            },
        ],
    })
       .then((postData) => res.json(postData))
       .catch((err) => {
            console.log(err);
            res.status(50
    ).json(err);
        }
    );
});


router.get('/:id', (req, res) => {
    Post.fineOne({
        where: {
            id: req.params.id,
        },
        attributes: Post.postAttributes,
        include: [
            {
                model: User,
                attributes: ['username'],
            },
        ],
    })
        .then((postData) => res.json(postData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});


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

router.post('/', withAuth, (req, res) => {
    Post.create({
        ...req.body,
        user_id: req.session.user_id,
    })
        .then((postData) => res.json(postData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
}   );



// router.post('/', withAuth, async (req, res) => {
//     try {
//         const newPost = await Post.create({
//             ...req.body,
//             user_id: req.session.user_id,
//         });

//         res.status(200).json(newPost);
//     } catch (err) {
//         res.status(400).json(err);
//     }
// });

router.put('/:id', withAuth, (req, res) => {
    Post.update(req.body, {
        where: {
            id: req.params.id,
        },
    })
       .then((postData) => res.json(postData))
       .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

  

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

router.delete('/:id', withAuth, (req, res) => {
    Post.destroy({
        where: {
            id: req.params.id,
        },
    })
       .then((postData) => res.json(postData))
       .catch((err) => {
            console.log(err);
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