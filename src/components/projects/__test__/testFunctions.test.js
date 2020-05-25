import { reformat } from '../all-projects'

describe('reformat functions for all-project search and sort functionality', () => {

        const sampleSearchQuery = 'google.com?breaks=free&wow=wow'
        const sample = reformat( sampleSearchQuery ) 

        const complexQuery = `${sampleSearchQuery}+wew`
        const complexSample = reformat( complexQuery )

        const queryWithSpace =`${sampleSearchQuery}&disney=donald_duck`
        const spaceSample = reformat( queryWithSpace )

        it('works as it should', () => {
                expect(sample).toEqual({ breaks: 'free', wow: 'wow' })
        })

        it('works with multiple queries', () => {
                expect(complexSample).toEqual({ breaks: 'free', wow: [ 'wow', 'wew' ] })
        })

        it('works with blank space', () => {
                expect(spaceSample).toEqual({ breaks: 'free', wow: 'wow', disney: 'donald duck' })
        })
})

// describe('filter function.. ')