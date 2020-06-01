import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { useNavigate } from '@reach/router'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import Button from '../button'
import Blob from '../../../static/assets/decorations/Blob.svg'
import Project from '../projects/project-item-all'

const Container = styled(motion.div)`
        
        background-color: ${({ theme }) => theme.bg};

        display: flex;
        position: relative;

        & > div {

                width: 100%;
                display: flex;
                flex-direction: column;

                &.header {

                        align-items: flex-start;
                        justify-content: flex-start;
                        
                        z-index: 3;

                        h1 {
                                text-align: left;
                        }
                }

                &.projs {
                        
                        button {
                                align-self: flex-end;
                                margin-bottom: 5%;
                        }
                }
        }

        #blob {

                position: absolute;
                right: 0;
                bottom: 0;

                transform: scale(.7) translate(20%);

                @media screen and ( max-width: 1100px ) {
                        
                        transform: scale(.5) translate(45%, 50%);
                }

                @media screen and ( max-width: 640px ) {
                        
                        transform: scale(.3) translate(65%, -30%);
                        right: -5%;
                        bottom: -7%;
                }
        }

        @media screen and ( max-width: 840px ) {
                
                flex-direction: column;
                align-items: center;
                padding-top: 20%;
                padding-bottom: 20%;

                & > div {

                        &.header {
                                width: fit-content;
                        }

                        &.projs {
                                padding-top: 10%;
                        }
                }
        }
`

const Projects = styled.div`
        
        width: 100%;
        
        display: flex;
        flex-flow: row wrap;
        align-items: flex-start;
        justify-content: space-between;

        @media screen and ( max-width: 640px ) {

                flex-direction: column;
                align-items: center;
        }
`

const ProjectShowcase = () => {

        const data = useStaticQuery( graphql`
                query ProjectShowcaseQuery {
                        allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "projects"}}}, limit: 4) {
                                edges {
                                        node {
                                                frontmatter {
                                                        projectName
                                                        snapshot
                                                }
                                        }
                                }
                        }
                }
        ` )

        const navigate = useNavigate()
        const projects = data.allMarkdownRemark.edges
        const [ ref, inView ] = useInView({
                threshold: .5
        })

        const clickShowAll = () => {
                navigate('/projects?page=1')
        }

        const stagger = {

                initial: {

                },
                animate: {
                        transition: {
                                staggerChildren: .1
                        }
                }
        }

        const fadeIn = {

                initial: {
                        opacity: 0
                },
                animate: {
                        opacity: 1
                }
        }

        return (
                <Container ref={ref} className='wrap' variants={stagger} animate={inView ? 'animate' : 'initial'} initial='initial'>
                        <div data-testid='proj-heading' className='header'>
                                <h1>MY </h1>
                                <h1>PROJ</h1>
                                <h1>ECTS</h1>
                        </div>
                        <div className='projs'>
                                <Button onClick={clickShowAll}>SHOW ALL</Button>
                                <Projects>
                                        {
                                                projects.map( (project, i) => <Project variants={fadeIn} key={project} {...project.node.frontmatter} /> )
                                        }
                                </Projects>
                        </div>
                        <Blob id='blob' />
                </Container>
        )
}

export default ProjectShowcase
