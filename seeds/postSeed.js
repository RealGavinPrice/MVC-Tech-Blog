const { Post } = require('../model');


const postData = [
    {
        title: 'Handlebars',
        post_text: 'Handlebars is a front end templating layout engine',
        user_id: 1
    },
    {
        title: 'Bcrypt',
        post_text: 'Bcrypt is another package for protecting and hashing a users password',
        user_id: 2
    },
    {
        title: 'Sequelize',
        post_text: 'Sequelize allows for a wide variety of inputs and outputs to your databases',
        user_id: 3
    },
    {
        title: 'Sessions & Cookies',
        post_text: 'Sessions get established upon signing in and cookies with varied shelf lives can be stored in your pantry for authentication. Please do not eat.',
        user_id: 2
    },
    {
        title: 'Partials',
        post_text: 'Modular chunks of front end, but theres only so much that could be said',
        user_id: 2
    },
    {
        title: 'MVC',
        post_text: 'Model view controller, the prime example of separation of concerns',
        user_id: 1
    },
    
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;