import { reformat } from '../all-projects'

describe('reformat functions for all-project search and sort functionality', () => {

        const sampleSearchQuery = 'google.com?breaks=free&wow=wow'
        const sample = reformat( sampleSearchQuery ) 

        it('works as it should', () => {
                expect(sample).toEqual({ breaks: 'free', wow: 'wow' })
        })
})