import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'

import Button from '../button'

afterEach( cleanup )

it('renders without crashing', () => {

        const div = document.createElement('div')
        ReactDOM.render(<Button>Test Button</Button>, div )
})

it('renders button correctly', () => {

        const text = 'Test'
        const { getByTestId } = render( <Button>{text}</Button> )
        expect( getByTestId('button') ).toHaveTextContent(text)
})

it('matches snapshot', () => {

        const text = 'Test'
        const tree = renderer.create( <Button>{text}</Button> ).toJSON()
        expect(tree).toMatchSnapshot()
})