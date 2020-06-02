import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'

import Contact from '../contact-rd'

describe('Contact component on landing page', () => {

        afterEach( cleanup )

        const mock = {
                headingList: [
                        { h: 'Mock' },
                        { h: 'Text' },
                ],
                contactLists: [
                        {
                                social: 'email',
                                icon: 'asset/mock.png',
                                value: 'mock@mock.com',
                        }
                ]
        }

        it('renders without crashing', () => {

                const div = document.createElement('div')
                ReactDOM.render(<Contact {...mock} />, div)
        })

        it('renders image correctly', () => {

                const { getByTestId } = render( <Contact {...mock} /> )

                const leftDiv = getByTestId('left')

                // test images left div items!
                leftDiv.childNodes.forEach( (parentNode, i) => {

                        const actualImg = getByTestId(`ctc-img-${i}`)
                        expect( actualImg ).toHaveAttribute('src', `/${mock.contactLists[i].icon}`)
                        expect( actualImg ).toHaveAttribute('alt', mock.contactLists[i].social)
                } )
        })

        it('renders contact value correctly', () => {

                const { getByTestId } = render( <Contact {...mock} /> )

                const leftDiv = getByTestId('left')

                // test images left div items!
                leftDiv.childNodes.forEach( (parentNode, i) => {

                        const actualPar = getByTestId(`ctc-p-${i}`)
                        expect( actualPar ).toHaveTextContent( mock.contactLists[i].value )
                } )
        })
        it('renders heading correctly', () => {

                const { getByTestId } = render( <Contact {...mock} /> )

                const rightDiv = getByTestId('right')

                // test heading on section
                rightDiv.childNodes.forEach( parentNode => {

                        parentNode.childNodes.forEach( (node, i) => {

                                expect( node ).toHaveTextContent( mock.headingList[i].h )
                        } )
                } )
        })
        
        it('matches snapshot', () => {

                const tree = renderer.create(<Contact {...mock} />).toJSON()
                expect(tree).toMatchSnapshot()
        })

})