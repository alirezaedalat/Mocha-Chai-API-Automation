// Extended tests for comment email validation
const { fetchCommentsByPostId } = require('../src/services/postService');
const { validateEmail } = require('../src/services/emailValidator');
const { expect } = require('chai');

describe('Comment Email Validation Tests', () => {
    it('Should validate all emails for a specific post', async () => {
        const comments = await fetchCommentsByPostId(1); // Assuming post ID 1 exists
        comments.forEach(comment => {
            expect(validateEmail(comment.email)).to.be.true;
        });
    });

    it('Should handle empty comments gracefully', async () => {
        const comments = await fetchCommentsByPostId(9999); // Non-existent post ID
        expect(comments).to.be.an('array').that.is.empty;
    });

    it('Should detect invalid email formats', async () => {
        const invalidEmails = ['plainaddress', '@missingusername.com', 'username@.missingdomain'];
        invalidEmails.forEach(email => {
            expect(validateEmail(email)).to.be.false;
        });
    });
});