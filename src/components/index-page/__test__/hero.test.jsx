import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'

import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import { LocationProvider } from '@reach/router'

import Hero from '../hero'

describe('Hero component on landing page.', () => {
        
        afterEach( cleanup )
        
        const mainText = 'Hello'
        const parText = 'Test paragraph'

        const renderWithRouter = ui => <LocationProvider>{ui}</LocationProvider>

        const theme = { center: () => `` }
        const renderWithStyledTheme = ui => <ThemeProvider theme={theme}>{ui}</ThemeProvider>

        it('renders without crashing', () => {

                const div = document.createElement('div')
                ReactDOM.render(renderWithRouter( renderWithStyledTheme(<Hero />) ), div )
        })

        it('renders correctly', () => {

                const { getByTestId } = render( renderWithRouter( renderWithStyledTheme(<Hero heading={mainText} subheading={parText} />) ) )

                expect( getByTestId('hero-heading') ).toHaveTextContent(mainText)
                expect( getByTestId('hero-par') ).toHaveTextContent(parText)
        })

        it('matches snapshot', () => {

                const ref = React.createRef()
                const tree = renderer.create( renderWithRouter( renderWithStyledTheme( <Hero ref={ref} heading={mainText} subheading={parText} /> ) ) ).toJSON()

                expect(tree).toMatchSnapshot()
        })
})
