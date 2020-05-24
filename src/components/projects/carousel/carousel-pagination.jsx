import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Circle = styled.div`
        
        height: .8vh;
        width: .8vh;
        
        margin: 0 .5vh;
        border-radius: 50%;

        background-color: ${props => props.$active ? props.theme.ft : props.theme.bg };
        box-shadow: 2px 2px 2px rgba( 0, 0, 0, .25 );
        transition: .2s;

        &:hover {
                background-color: ${({ theme }) => theme.ft};
                cursor: pointer;
        }

        @media screen and ( max-width: 464px ) {
                
                height: .6vh;
                width: .6vh;
        }
`

const CarouselPagin = ({ index, goToIndex, inDisplay }) => <Circle $active={inDisplay === index} onClick={() => goToIndex(index)} />

CarouselPagin.propTypes = {
        
        index: PropTypes.number.isRequired,
        goToIndex: PropTypes.func.isRequired,
        inDisplay: PropTypes.number.isRequired,
}

export default CarouselPagin
