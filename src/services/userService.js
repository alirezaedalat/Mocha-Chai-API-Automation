// Service to handle user-related API calls
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

// Fetch user by username
const fetchUserByUsername = async (username) => {
    try {
        const res = await chai.request('https://jsonplaceholder.typicode.com')
            .get(`/users?username=${username}`);
        return res.body;
    } catch (error) {
        throw new Error('Error fetching user: ' + error.message);
    }
};

module.exports = { fetchUserByUsername };