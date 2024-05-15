const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const newComment = await Comment.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newComment);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;


// const express = require('express');
// const router = express.Router();
// const { Comment } = require('../../models');
// const withAuth = require('../../utils/auth');


// router.get('/', (req, res) => {
//     Comment.findAll()
//         .then((commentData) => res.json(commentData))
//         .catch((err) => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// }
// );

// router.post('/', withAuth, (req, res) => {
//     Comment.create({
//         ...req.body,
//          user_id: req.session.user_id,
//      })
//         .then((commentData) => res.json(commentData))
//         .catch((err) => {
//             console.log(err);
//             res.status(400).json(err);
//          });
// });

// router.delete('/:id', withAuth, (req, res) => {
//     Comment.destroy({
//         where: {
//             id: req.params.id,
//         },
//     })
//        .then((commentData) => res.json(commentData))
//        .catch((err) => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });





// router.post('/', withAuth, async (req, res) => {
//     try {
//         const newComment = await Comment.create({
//             ...req.body,
//             user_id: req.session.user_id,
//         });

//         res.status(200).json(newComment);
//     } catch (err) {
//         res.status(400).json(err);
//     }
// });

// router.put('/:id', withAuth, async (req, res) => {
//     try {
//         const [affectedRows] = await Comment.update(req.body, {
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

// router.delete('/:id', withAuth, async (req, res) => {
//     try {
//         const affectedRows = await Comment.destroy({
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