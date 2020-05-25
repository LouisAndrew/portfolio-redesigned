import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'

import Expertees from '../expertees'

describe('Expertee component on landing page.', () => {

        afterEach( cleanup )

        const headingList = [
                { h: 'My' },
                { h: 'Expertees' }
        ]

        const myExpertees = [
                {
                        heading: 'heading1',
                        desc: 'desc1',
                        image: 'mockimg1'
                },
                {
                        heading: 'heading2',
                        desc: 'desc2',
                        image: 'mockimg2'
                }
        ]

        it('renders without crashing', () => {

                const div = document.createElement('div')
                ReactDOM.render(<Expertees />, div )
        })

        it('renders correctly', () => {

                const { getByTestId } = render( <Expertees headingList={headingList} myExpertees={myExpertees} /> )
                const heading = getByTestId('exprt-heading')

                let i = 0
                heading.childNodes.forEach( child => {
                        expect(child).toHaveTextContent( headingList[i].h )
                        i++
                } )

                // TODO: create test for every exprt-item..

                // const exprtItems = getByTestId('exprt-item')

                // let j = 0
                // exprtItems.childNodes.forEach( child => {

                //         const innerElement = `
                //                 <div>
                //                         <h3>{myExpertees[j].heading}</h3>
                //                         <p>{myExpertees[j].desc}</p>
                //                 </div>
                //         `

                //         const img = document.createElement('img')
                //         img.src = myExpertees[j].image
                //         img.alt = myExpertees[j].heading

                //         expect(child).toContainHTML(innerElement)

                //         // expect(child).toContainElement(img)

                //         j++
                // } )
        })

        it('matches snapshot', () => {

                const tree = renderer.create( <Expertees headingList={headingList} myExpertees={myExpertees} /> ).toJSON()

                expect(tree).toMatchSnapshot()
        })
})