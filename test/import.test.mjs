import * as chai from 'chai'
import { ExtendedError } from '../dist/index.js'

describe('Importing using import from', () => {
    it('should import ExtendedError', () => {
        const app = new ExtendedError({})
        chai.expect(app).to.be.an('Error')
    })
})
