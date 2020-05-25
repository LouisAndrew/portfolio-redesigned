import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import { useNavigate } from '@reach/router'

import useImages from '../../hooks/useImages'
import Button from '../button'
import Blob from '../../../static/assets/decorations/Blob.svg'
import Project from '../projects/project-item-all'

const Container = styled.div`
        
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
                        
                        transform: scale(.5) translate(50%);
                }

                @media screen and ( max-width: 464px ) {
                        
                        transform: scale(.3) translate(70%);
                        right: -5%;
                        bottom: -7%;
                }
        }

        @media screen and ( max-width: 464px ) {
                
                flex-direction: column;
                align-items: center;

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

        @media screen and ( max-width: 464px ) {

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

        const clickShowAll = () => {
                navigate('/projects')
        }

        return (
                <Container className='wrap'>
                        <div data-testid='proj-heading' className='header'>
                                <h1>MY </h1>
                                <h1>PROJ</h1>
                                <h1>ECTS</h1>
                        </div>
                        <div className='projs'>
                                <Button onClick={clickShowAll}>SHOW ALL</Button>
                                <Projects>
                                        {
                                                projects.map( (project, i) => <Project key={i} {...project.node.frontmatter} /> )
                                        }
                                </Projects>
                        </div>
                        <Blob id='blob' />
                </Container>
        )
}

export default ProjectShowcase
