import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Circle = styled.div`
        
        height: 1vh;
        width: 1vh;

        border-radius: 50%;

        background-color: ${({ theme }) => theme.bg};
`

const CarouselPagin = ({ index, goToIndex }) => <Circle onClick={() => goToIndex(index)} />
CarouselPagin.propTypes = {

}

export default CarouselPagin
