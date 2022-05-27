const Post = require('../models/post');
const createPath = require('../helpers/create-path');

const handleError = (res, error) => {
    console.log(error);
    res.render(createPath('error'), { title: 'error' });
};

const getPostId = (req, res) => {
    const title = 'Post';
    Post
    .findById(req.params.id)
    .then((post) => res.render(createPath('post'), { post, title}))
    .catch((error) => handleError (res, error));
};

const deletePostId = (req, res) => {
    const title = 'Posts';
    Post
    .findByIdAndDelete(req.params.id)
    .then((result) => res.sendStatus(200))
    .catch((error) => handleError (res, error));
};

const getPosts = (req, res) => {
    const title = 'Posts';
    Post
    .find()
    .sort({ createdAt: -1 })
    .then((posts) => res.render(createPath('posts'), {posts, title}))
    .catch((error) => handleError (res, error));
};

const getEditPostId = (req, res) => {
    const title = 'Edit post';
    Post
    .findById(req.params.id)
    .then((post) => res.render(createPath('edit-post'), { title, post }))
    .catch((error) => handleError (res, error));
};

const putEditPostId = (req, res) => {
    const { title, author, text } = req.body;
    const { id } = req.params;
    Post
    .findByIdAndUpdate(id, { title, author, text })
    .then((result) => res.redirect(`/posts/${id}`))
    .catch((error) => handleError (res, error));
};

const postAddPost = (req, res) => {
    const { title, author, text } = req.body;
    const post = new Post ({ title, author, text,});
    post
    .save()
    .then((post) => res.render(createPath('post'), { title, post }))
    .catch((error) => handleError (res, error));
};

const getAddPost = (req, res) => {
    const title = 'Add post';
    res.render(createPath('add-post'), { title } );
};


module.exports = {
    getPostId,
    deletePostId,
    getPosts,
    getEditPostId,
    putEditPostId,
    postAddPost,
    getAddPost
};