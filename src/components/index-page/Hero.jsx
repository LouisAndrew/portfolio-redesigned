import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.section`
        
        min-height: 100vh;
        background-color: ${({ theme }) => theme.bg};

        display: flex;
`

const Items = styled.div`
        
        width: 50%;
`

const Hero = ({ heading, subheading, cta }) => {

        return (
                <Container className='wrap'>
                        <Items>
                                <h1>{heading}</h1>
                                <p>{subheading}</p>
                        </Items>
                        <Items></Items>
                </Container>
          )
}

Hero.propTypes = {

        heading: PropTypes.string.isRequired,
        subheading: PropTypes.string.isRequired,
        cta: PropTypes.string.isRequired,
}

export default Hero
