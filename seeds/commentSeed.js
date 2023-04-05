const { Comment } = require('../model');

const commentData = [
    {
        comment_text: "This is great stuff",
        post_id: 1,
        user_id: 1,
    },
    {
        comment_text: "Wow awesomess",
        post_id: 1,
        user_id: 2,
    },
    {
        comment_text: "Coolbeans",
        post_id: 1,
        user_id: 3,
    },
    {
        comment_text: "Hotbeans",
        post_id: 1,
        user_id: 4,
    },
    {
        comment_text: "Beans and rice",
        post_id: 2,
        user_id: 2,
    },
    {
        comment_text: "Rice and beans",
        post_id: 2,
        user_id: 4,
    },
    {
        comment_text: "Tastes like a good education!",
        post_id: 3,
        user_id: 5,
    },
    {
        comment_text: "This is great stuff",
        post_id: 3,
        user_id: 1,
    },
    {
        comment_text: "Love this stuff!",
        post_id: 4,
        user_id: 3,
    },
    {
        comment_text: "This is great stuff",
        post_id: 4,
        user_id: 4,
    },
    {
        comment_text: "Is there paprika in there",
        post_id: 4,
        user_id: 3,
    },
    {
        comment_text: "Papython spice",
        post_id: 4,
        user_id: 1,
    },
    {
        comment_text: "This is great stuff",
        post_id: 5,
        user_id: 5,
    },
    {
        comment_text: "Rice and beans",
        post_id: 5,
        user_id: 3,
    },
    {
        comment_text: "This is good stuff",
        post_id: 5,
        user_id: 4,
    },
    {
        comment_text: "Never heard about this",
        post_id: 5,
        user_id: 1,
    },
    {
        comment_text: "This is great stuff",
        post_id: 6,
        user_id: 5,
    },
    {
        comment_text: "This is great stuff 2",
        post_id: 6,
        user_id: 3,
    },
];

const commentSeed = () => Comment.bulkCreate(commentData);


// output
module.exports = commentSeed;