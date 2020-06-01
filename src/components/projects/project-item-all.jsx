import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { useNavigate } from '@reach/router'
import { motion } from 'framer-motion'

import useImages from '../../hooks/useImages'

// const Container = styled.div`
        
//         width: 30%;
// `

const Container = styled(motion.div)`
        
        width: 45%;
        /* margin-bottom: 10%; */
        position: relative;
        margin-bottom: 5%;

        ${({ theme }) => theme.center()};
        flex-direction: column;

        background-color: ${({ theme }) => theme.dark};

        .img {

                width: 100%;
        }

        &::after {

                content: '';
                height: 0;
                width: 100%;
                position: absolute;
                top: 0;
                left: 0;
                border-radius: 8px;

                transition: .2s;
                background-color: ${props => props.$hoverColor};
        }

        h3 {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);

                opacity: 0;

                z-index: 2;
        }

        &:hover {

                cursor: pointer;

                &::after {
                        height: 100%;
                }

                h3 {
                        opacity: 1;
                }
        }

        @media screen and ( max-width: 640px ) {
                
                width: 90%;

                h3 {
                        opacity: 1;
                }

                &::after {
                        height: 100%;
                }
        }
`

const Project = ({ projectName, snapshot, hoverColor, className, animate, initial, variants }) => {

        const navigate = useNavigate()
        const trimAssets = str => str && str.includes('assets/') ? str.split('assets/')[1] : str

        const img = useImages( trimAssets(snapshot) )
        const fluid = img && img.node ? img.node.childImageSharp.fluid : { }

        return (
                <Container
                        className={className} 
                        onClick={() => navigate(`/projects/${projectName.toLowerCase()}`)} 
                        $hoverColor={hoverColor}
                        variants={variants}
                        animate={animate}
                        initial={initial}
                >
                        <div className='img'>
                                <Img fluid={fluid} />
                        </div>
                        <h3>{projectName}</h3>
                </Container>
        )
}


Project.propTypes = {

        projectName: PropTypes.string.isRequired,
        snapshot: PropTypes.string.isRequired,
        hoverColor: PropTypes.string,
        className: PropTypes.string,
        animate: PropTypes.string,
        initial: PropTypes.string,
        variants: PropTypes.objectOf(
                PropTypes.object,
        ),
}

Project.defaultProps = {

        hoverColor: 'rgba( 0, 0, 0, .25 );',
        className: '',
        animate: '',
        initial: '',
        variants: { },
}

export default Project
