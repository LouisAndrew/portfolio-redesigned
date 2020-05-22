import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Butt = styled.button`
        
        outline: none;
        padding: .5vw 1vw;
        border: none;
        width: fit-content;

        background: none;
        border-radius: 10px;

        background-color: ${props => {

                switch ( props.$bColor ) {
                        case 'bg':
                                return props.theme.bg
                        case 'ft':
                                return props.theme.ft
                        case 'dark':
                                return props.theme.dark
                        case 'red':
                                return props.theme.red
                        case 'blue':
                                return props.theme.blue
                        default:
                                return props.$bColor
                }
        }};

        color: ${props => {

                switch ( props.$color ) {
                        case 'bg':
                                return props.theme.bg
                        case 'ft':
                                return props.theme.ft
                        case 'dark':
                                return props.theme.dark
                        case 'red':
                                return props.theme.red
                        case 'blue':
                                return props.theme.blue
                        default:
                                return props.$color
                }
        }};

        &:hover {
                cursor: pointer;
        }

        @media screen and ( orientation: portrait ) {

                padding: 1vw 2vw;
        }
`

const Button = props => {

        return (
                // eslint-disable-next-line react/destructuring-assignment
                <Butt {...props} $bColor={props.bColor} $color={props.color} data-testid='button'>
                        {
                                // eslint-disable-next-line react/destructuring-assignment
                                props.children
                        }
                </Butt>
        )
}

Button.propTypes = {

        bColor: PropTypes.string,
        color: PropTypes.string,
        children: PropTypes.node.isRequired,
}

Button.defaultProps = {

        bColor: 'def',
        color: 'def',
}

export default Button
