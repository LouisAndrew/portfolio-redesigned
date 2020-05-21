import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Laser from '../../../static/assets/decorations/LaserBeam.svg'
import Hooman from '../../../static/assets/decorations/Hooman.svg'
import Button from '../Button'

const Container = styled.section`
        
        min-height: 100vh;
        position: relative;
        background-color: ${({ theme }) => theme.bg};

        display: flex;

        #laser {

                position: absolute;
                right: 0;
        }

        @media screen and ( max-width: 464px ) {
                
                overflow-x: hidden;
                flex-direction: column;
                justify-content: center;

                #laser {

                        transform: scale(.7);
                        right: -7%;
                }

                #hooman {

                        display: none;
                }
        }
`

const Items = styled.div`
        
        width: 50%;
        padding-right: 5%;

        z-index: 2;
        display: flex;
        flex-direction: column;
        justify-content: center;

        &:nth-child(2) {
                
                padding-right: 0;
                align-items: center;
        }

        @media screen and ( max-width: 464px ) {
                
                width: 100%;
                padding-right: 0;

                align-items: center;

                h1, p {
                        text-align: center;
                }
        }
`

const Hero = ({ heading, subheading, cta }) => {

        return (
                <Container className='wrap'>
                        <Items>
                                <h1>{heading}</h1>
                                <p>{subheading}</p>
                                <Button color='ft' bColor='red' >
                                        {cta}
                                </Button>
                        </Items>
                        <Items>
                                <Hooman id='hooman' />
                        </Items>
                        <Laser id='laser' />
                </Container>
          )
}

Hero.propTypes = {

        heading: PropTypes.string.isRequired,
        subheading: PropTypes.string.isRequired,
        cta: PropTypes.string.isRequired,
}

export default Hero
