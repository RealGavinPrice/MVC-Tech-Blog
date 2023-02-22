// router and database connex
const router = require('express').Router();
const sequelize = require('../config/connection');

// import models
const { Post, User, Comment } = require('../model');



// auth middleware
const auth = require('../util/auth');

//
//
// GET the dashboard for chefs only
router.get('/', auth, (req,res) => {
    Post.findAll({
        where: {
            // using ID from session
            user_id: req.session.user_id
        },
        attributes: [
            'id',
            'post_text',
            'title',
            'created_at',
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('dashboard', { posts, loggedIn: true });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});



//
//
//EDIT POST

router.get('/edit/:id', auth, (req, res) => {

    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'post_text',
            'title',
            'created_at',
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'Hmm. This post does not exist!!!'})
                return;
            }
            const post = dbPostData.get({ plain: true });
            res.render('edit-post', { post, loggedIn: true });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    });


    // UPDATE user

    router.get('/edituser', auth, (req, res) => {
        User.findOne({
            attributes: { exclude: ['password'] },
            where: {
                id: req.session.user_id
            }
        })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'This user does not exist!?!'});
                return;
            }
            const user = dbUserData.get({ plain: true });
            res.render('edit-user', { user, loggedIn: true });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    });


    module.exports = router;