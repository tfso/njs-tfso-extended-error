const chai = require('chai');
const ExtendedError    = require('../index.js');

describe('Basic Importing', () => {
    it ('should import ExtendedError', () => {
        const app = new ExtendedError({});
        chai.expect(app).to.be.an('Error');
    })
    it ('should import ExtendedError as default', () => {
        const app = new ExtendedError.default({});
        chai.expect(app).to.be.an('Error');
    })

})