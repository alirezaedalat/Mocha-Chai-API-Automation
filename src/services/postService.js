// Service to handle post and comment-related API calls
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

// Fetch posts by user ID
const fetchPostsByUserId = async (userId) => {
    try {
        const res = await chai.request('https://jsonplaceholder.typicode.com')
            .get(`/posts?userId=${userId}`);
        return res.body;
    } catch (error) {
        throw new Error('Error fetching posts: ' + error.message);
    }
};

// Fetch comments by post ID
const fetchCommentsByPostId = async (postId) => {
    try {
        const res = await chai.request('https://jsonplaceholder.typicode.com')
            .get(`/comments?postId=${postId}`);
        return res.body;
    } catch (error) {
        throw new Error('Error fetching comments: ' + error.message);
    }
};

module.exports = { fetchPostsByUserId, fetchCommentsByPostId };