import React from 'react'
import styled, { keyframes } from 'styled-components'
import PropTypes from 'prop-types'
import { useNavigate } from '@reach/router'
import Particles from 'react-particles-js'
import { motion } from 'framer-motion'

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

const Items = styled(motion.div)`
        
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

const Hero = React.forwardRef( ({ heading, subheading, cta, canvas }, ref) => {

        const navigate = useNavigate()

        const animateHeading = {

                initial: {
                        x: -100,
                        opacity: 0,
                },
                animate: {
                        x: 0,
                        opacity: 1,
                        transition: {
                                duration: .5,
                                delay: .2,
                                easing: [ .5, -.6, 1 ]
                        }
                }
        }

        const stagger = {

                animate: {
                        opacity: 1,
                        transition: {
                                staggerChildren: .2
                        }
                },
                initial: {
                        opacity: 0
                }
        }

        const animateFadeIn = {

                initial: {
                        opacity: 0,
                        y: 100
                },
                animate: {
                        opacity: 1,
                        y: 0,
                        transition: {
                                duration: 1
                        }
                }
        }

        return (
                <Container ref={ref} id='particles-js' className='wrap'>
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
                        <Items variants={stagger} animate='animate' initial='initial'>
                                <motion.h1 
                                        data-testid='hero-heading' 
                                        id='hero-heading'
                                        variants={animateHeading}
                                >
                                        {heading}
                                </motion.h1>
                                <motion.p 
                                        data-testid='hero-par'
                                        variants={animateFadeIn}
                                >
                                        {subheading}
                                </motion.p>
                                <Button 
                                        color='ft' 
                                        bColor='red' 
                                        onClick={() => navigate('/projects?page=1')}
                                        variants={animateFadeIn}
                                >
                                        {cta}
                                </Button>
                        </Items>
                        {/* <Laser id='laser' /> */}
                </Container>
          )
})

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
