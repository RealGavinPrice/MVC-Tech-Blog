const Comment = require('./Comment');
const Post = require('./Post');
const User = require('./User');

// user-post 
User.hasMany(Post, {
    foreignKey: 'user_id'
});

// post-user
Post.belongsTo(User, {
    foreignKey: 'user_id'
});

// comment-user
Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'cascade',
    hooks:true
});

// comment-post
Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'cascade',
    hooks:true
});

// user-comment
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'cascade',
    hooks:true
});

// post-comment
Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'cascade',
    hooks:true
});


module.exports = { User, Post, Comment };