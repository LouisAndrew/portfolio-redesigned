import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'

import Footer from '../footer'

describe('Footer element on every layout renders correctly', () => {

        afterEach( cleanup )

        it('renders without crashing', () => {

                const div = document.createElement('div')
                ReactDOM.render(<Footer />, div)
        })

        it('renders correctly', () => {

                const { getByTestId } = render(<Footer />)
        })

        it('matches snapshot', () => {

                const tree = renderer.create(<Footer />).toJSON()
                expect(tree).toMatchSnapshot()
        })

})