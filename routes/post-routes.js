const express = require('express');
const { getPostId,
        deletePostId,
        getPosts,
        getEditPostId,
        putEditPostId,
        postAddPost,
        getAddPost } = require('../controllers/post-controller');

const router = express.Router();


router.get('/posts/:id', getPostId);
router.delete('/posts/:id', deletePostId);
router.get('/posts', getPosts);
router.get('/edit/:id', getEditPostId);
router.put('/edit/:id', putEditPostId);
router.post('/add-post', postAddPost);
router.get('/add-post', getAddPost);

module.exports = router;