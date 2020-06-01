import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import useImages from '../../hooks/useImages'
import Corner from '../../../static/assets/decorations/corner.svg'

const Container = styled.section`
        
        background-color: ${({ theme }) => theme.bg};
        display: flex;
        position: relative;

        #corner {

                position: absolute;
                top: 5vw;
                left: 6%;
        }

        @media screen and ( min-width: 1440px ) {

                #corner {
                        left: calc( (100vw - 1200px) / 2 - 4vw );
                }
        }

        @media screen and ( max-width: 840px ) {
                flex-direction: column;
                align-items: center;

                #corner {

                        transform: scale(.7) translate(-30%);
                        top: 3vw;
                        left: 32vw;
                }
        }

        @media screen and ( max-width: 604px ) {
                
                #corner {

                        transform: scale(.6) translate(-40%);
                        top: -3vw;
                        left: 22vw;
                }
        }
`

const Desc = styled(motion.div)`

        margin-left: 8vw;
        width: 50%;

        ${({ theme }) => theme.center()};
        flex-direction: column;

        p {
                text-align: center;
                padding: 5%;
        }
        
        .img {
                height: 250px;
                width: 250px;
                
                img {
                        border-radius: 50%;
                }
        }

        @media screen and ( max-width: 840px ) {

                width: 80%;
                margin-left: 0;

                .img {
                        margin-top: 10%;
                }

                p {
                        width: 100%;
                        padding: 5%;
                }
        }

        @media screen and ( max-width: 640px ) {
                width: 100%;
        }
`

const Intro = ({ desc, image, heading, headingList }) => {

        const imageSplitter = img => img.includes('assets/') ? img.split('assets/')[1] : img

        const img = image && useImages( imageSplitter(image) )
        const fluid = ( img && img.node )? img.node.childImageSharp.fluid : { }

        const [ ref, inView, entry ] = useInView({
                threshold: .6
        })

        const anim = {

                fadeIn: {
                        opacity: 1,
                        y: 0,
                },
                fadeOut: {
                        opacity: 0,
                        y: -100,
                }
        }

        return (
                <Container ref={ref} id='about' className='wrap'>
                        <Corner id='corner' />
                        <div data-testid='intro-heading' className='heading'>
                                {
                                        headingList && headingList.map( (head, i) => <h1 key={i}>{head.h}</h1> )
                                }
                        </div>
                        <Desc
                                variants={anim}
                                initial='fadeOut'
                                animate={inView ? 'fadeIn' : 'fadeOut'}
                        >
                                <div className='img'>
                                        { fluid && <Img fluid={fluid} /> }
                                </div>
                                <p data-testid='intro-par'>{desc}</p>
                        </Desc>
                </Container>
        )
}

Intro.propTypes = {

        heading: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        headingList: PropTypes.arrayOf( 
                PropTypes.string,
         ).isRequired,
}

export default Intro
