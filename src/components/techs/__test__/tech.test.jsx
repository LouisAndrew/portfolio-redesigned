import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'

import Tech from '../tech'

describe('tech small component.', () => {

        afterEach( cleanup )

        const techName = 'ReactJS'
        const techNameBroken = 'broken'
        const click = () => 'clicked!'

        it('renders without crashing', () => {

                const div = document.createElement('div')
                ReactDOM.render(<Tech techName={techName} />, div)
        })

        it('renders even when the provided techName is not valid', () => {

                const div = document.createElement('div')
                ReactDOM.render(<Tech techName={techNameBroken} />, div)
        })

        it('renders correctly', () => {

                const { getByTestId } = render( <Tech techName={techName} onClick={click} /> )
                const techComponent = getByTestId('tech')
        })

        it('matches snapshot', () => {

                const tree = renderer.create( <Tech techName={techName} onClick={click} /> ).toJSON()
                expect(tree).toMatchSnapshot()
        })

})