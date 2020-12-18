const express = require('express');
const {
    validatePostAction
} = require('../validations/postValidator');
const {
    getPosts,
    createPost
} = require('../controllers/postController');

const router = express.Router();

router.get('/', getPosts);
router.post('/post', validatePostAction, createPost);

module.exports = router;