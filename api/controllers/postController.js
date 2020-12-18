const Post = require('../models/postModel');

exports.getPosts = (req, res) => {

    const posts = Post.find()
        .select('_id title body')
        .then(posts => res.json({
            posts
        }))
        .catch(error => console.log(error));

};

exports.createPost = (req, res) => {

    const post = new Post(req.body);

    post.save().then(result => {
        return res.status(200).json({
            post: result
        });
    });
};