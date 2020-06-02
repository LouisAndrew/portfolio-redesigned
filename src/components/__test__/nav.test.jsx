import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ThemeProvider } from 'styled-components'

import Nav from '../nav'

describe('Navigation component on layout', () => {

        afterEach( cleanup )
        const theme = { center: () => { } }

        const renderWithStyles = ui => <ThemeProvider theme={theme}>{ui}</ThemeProvider>

        it('renders without crashing', () => {

                const div = document.createElement('div')
                ReactDOM.render( renderWithStyles(<Nav />), div )
        })

        it('renders correctly', () => {

                const { getByTestId } = render()
        })

        it('matches snapshot', () => {

                const tree = renderer.create().toJSON()
                expect(tree).toMatchSnapshot()
        })

})