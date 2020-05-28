import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'

import Contact from '../contact'

describe('Contact component on landing page', () => {

        afterEach( cleanup )

        const headingList = [
                { h: 'Mock' },
                { h: 'Text' }
        ]

        const contactLists = [
                { icon: 'assets/mock.png', social: 'social-media', value: 'val1' },
                { icon: 'assets/mock2.png', social: 'social-media', value: 'val12', redirect: true }
        ]
        
        it('renders without crashing', () => {

                const div = document.createElement('div')
                ReactDOM.render( <Contact />, div )
        })

        it('renders correctly', () => {

                const { getByTestId } = render( <Contact headingList={headingList} /> )
                const heading = getByTestId('con-heading').childNodes

                let i = 0
                heading.forEach( item => {

                        expect(item).toHaveTextContent( headingList[i].h )
                        i++
                } )
        })

        it('matches snapshot', () => {

                const tree = renderer.create( <Contact headingList={headingList} contactLists={contactLists} /> )
                expect(tree).toMatchSnapshot()
        })
})