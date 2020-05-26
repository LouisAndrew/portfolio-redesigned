import React from 'react'
import styled, { keyframes } from 'styled-components'
import PropTypes from 'prop-types'
import { useNavigate } from '@reach/router'
import Particles from 'react-particles-js'

import Laser from '../../../static/assets/decorations/LaserBeam.svg'
import Button from '../button'

const Container = styled.section`
        
        min-height: 100vh;
        position: relative;
        background-color: ${({ theme }) => theme.bg};

        ${({ theme }) => theme.center()};

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
        }
`

const Background = styled(Particles)`
        
        position: absolute;
        left: 0;
        right: 0;
        height: 100%;
        width: 100%;
`

const animation = props => keyframes`

        0% {
                color: ${props.theme.ft};
        }

        33% {
                color: ${props.theme.red};
        }

        66% {
                color: ${props.theme.blue};
        }

        100% {
                color: ${props.theme.ft};
        }
`

const Items = styled.div`
        
        width: 50%;
        /* padding-right: 5%; */
        position: relative;
        z-index: 2;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        &:nth-child(2) {
                
                padding-right: 0;
                align-items: center;
        }

        /* do i need the animation? isn't it more of a distraction? */

        h1 {
                font-family: 'Racing Sans One' !important;
                /* animation-name: ${animation}; */
                animation-duration: 2s;
                animation-iteration-count: 2;
        }

        p {
                margin: 10% 0 5%;
        }

        
        h1, p {
                text-align: center;
                z-index: 2;
                position: relative;
        }

        @media screen and ( max-width: 464px ) {
                
                width: 100%;
                /* padding-right: 0; */

                align-items: center;

                p {
                        padding: 0 2%;
                }
        }
`

const Hero = ({ heading, subheading, cta, canvas }) => {

        const navigate = useNavigate()

        return (
                <Container id='particles-js' className='wrap'>
                        { canvas && (
                        <Background 
                                params={{
                                        polygon: {
                                                enable: true,
                                                move: {
                                                        radius: 200
                                                },
                                                draw: {
                                                        enable: false
                                                }
                                        },
                                        "interactivity": {
                                                "detect_on": "window",
                                                "events": {
                                                    "onhover": {
                                                        "enable": true,
                                                        "mode": "repulse"
                                                    },
                                                    "onclick": {
                                                        "enable": false,
                                                        "mode": "bubble"
                                                    },
                                                    "resize": true
                                                },
                                        }
                                }}
                        /> 
                        )}
                        <Items>
                                <h1 data-testid='hero-heading' id='hero-heading'>{heading}</h1>
                                <p data-testid='hero-par'>{subheading}</p>
                                <Button color='ft' bColor='red' onClick={() => navigate('/projects?page=1')}>
                                        {cta}
                                </Button>
                        </Items>
                        {/* <Laser id='laser' /> */}
                </Container>
          )
}

Hero.propTypes = {

        heading: PropTypes.string.isRequired,
        subheading: PropTypes.string.isRequired,
        cta: PropTypes.string.isRequired,
        canvas: PropTypes.bool,
}

Hero.defaultProps = {
        canvas: false
}

export default Hero
