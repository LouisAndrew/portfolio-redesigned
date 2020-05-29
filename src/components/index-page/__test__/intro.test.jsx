import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'

import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import { intersectionMockInstance } from 'react-intersection-observer/test-utils'

import Intro from '../intro'

describe('Intro / about me element on landing page.', () => {

        afterEach( cleanup )

        const heading = 'About Me'
        const headingList = [
                { h: 'About' },
                { h: 'Me' }
        ]
        const image = 'assets/mock-image.png'

        const par = 'some mock text'
        
        const theme = { center: () => `` }

        const renderWithStyledTheme = ui => <ThemeProvider theme={theme}>{ui}</ThemeProvider> 

        // TODO create mock for intersection observer.

        it('renders without crashing', () => {

                const div = document.createElement('div')
                ReactDOM.render( renderWithStyledTheme(<Intro />), div )
        })

        it('renders correctly', () => {

                const { getByTestId } = render( renderWithStyledTheme(<Intro heading={heading} headingList={headingList} desc={par} image={image} />) )

                const hdList = getByTestId('intro-heading')

                let i = 0
                hdList.childNodes.forEach( child => {
                        expect(child).toHaveTextContent(headingList[i].h)
                        i++
                } )

                expect( getByTestId('intro-par') ).toHaveTextContent(par)
        })

        it('matches snapshot', () => {

                const ref = React.createRef()
                const tree = renderer.create( renderWithStyledTheme(<Intro ref={ref} heading={heading} headingList={headingList} desc={par} image={image} />) )

                expect(tree).toMatchSnapshot()
        })
})