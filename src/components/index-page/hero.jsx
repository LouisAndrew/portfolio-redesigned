import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Laser from '../../../static/assets/decorations/LaserBeam.svg'
import Hooman from '../../../static/assets/decorations/Hooman.svg'
import Button from '../button'

const Container = styled.section`
        
        min-height: 100vh;
        position: relative;
        background-color: ${({ theme }) => theme.bg};

        display: flex;

        #laser {

                position: absolute;
                right: 0;
                z-index: 1;
        }

        @media screen and ( max-width: 464px ) {
                
                overflow-x: hidden;
                flex-direction: column;
                justify-content: center;

                #laser {

                        transform: scale(.7) translateX(30%);
                }

                #hooman {

                        display: none;
                }
        }
`

const Items = styled.div`
        
        width: 50%;
        /* padding-right: 5%; */

        z-index: 2;
        display: flex;
        flex-direction: column;
        justify-content: center;

        &:nth-child(2) {
                
                padding-right: 0;
                align-items: center;
        }

        p {
                margin: 10% 0 5%;
        }

        #hooman {
                width: 80%;
        }

        @media screen and ( max-width: 464px ) {
                
                width: 100%;
                /* padding-right: 0; */

                align-items: center;

                h1, p {
                        text-align: center;
                }

                p {
                        padding: 0 2%;
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
