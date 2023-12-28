const chai = require('chai')
const { ExtendedError } = require('../dist')

describe('Newer require', () => {
    it('should import ExtendedError ising brackets', () => {
        const app = new ExtendedError({})
        chai.expect(app).to.be.an('Error')
    })
})
