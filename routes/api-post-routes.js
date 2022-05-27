const express = require('express');
const { getPostId,
        deletePostId,
        getPosts,
        putEditPostId,
        postAddPost
                    } = require('../controllers/api-post-controller');

const router = express.Router();


router.get('/api/posts', getPosts);
router.post('/api/post', postAddPost);
router.get('/api/posts/:id', getPostId);
router.delete('/api/posts/:id', deletePostId);
router.put('/api/edit/:id', putEditPostId);

// router.get('/api/edit/:id', getEditPostId);
// router.get('/api/add-post', getAddPost);

module.exports = router;