// Extended tests for user API workflows
const { fetchUserByUsername } = require('../src/services/userService');
const { expect } = require('chai');

describe('User API Tests', () => {
    it('Should fetch user Delphine successfully', async () => {
        const user = await fetchUserByUsername('Delphine');
        expect(user).to.be.an('array').that.is.not.empty;
        expect(user[0].username).to.equal('Delphine');
    });

    it('Should return empty array for non-existent user', async () => {
        const user = await fetchUserByUsername('NonExistentUser');
        expect(user).to.be.an('array').that.is.empty;
    });

    it('Should validate schema for user response', async () => {
        const user = await fetchUserByUsername('Delphine');
        expect(user[0]).to.have.all.keys(['id', 'name', 'username', 'email', 'address', 'phone', 'website', 'company']);
    });

    it('Should fail gracefully on network errors', async () => {
        try {
            await fetchUserByUsername(null);
        } catch (error) {
            expect(error.message).to.include('Error fetching user');
        }
    });
});