import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import { useNavigate } from '@reach/router'

import useImages from '../../hooks/useImages'
import Button from '../button'

const Container = styled.div`
        
        background-color: ${({ theme }) => theme.bg};

        display: flex;

        & > div {

                width: 100%;
                display: flex;
                flex-direction: column;

                &.header {

                        align-items: flex-start;
                        justify-content: flex-start;
                        
                        z-index: 3;
                }

                &.projs {
                        
                        button {
                                align-self: flex-end;
                        }
                }
        }

        @media screen and ( max-width: 464px ) {
                
                flex-direction: column;

                & > div {

                        &.header {

                                align-items: center;
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

const ProjectItem = styled.div`
        
        width: 45%;
        margin-bottom: 10%;
        position: relative;

        ${({ theme }) => theme.center()};
        flex-direction: column;

        background-color: ${({ theme }) => theme.dark};

        .img {

                height: 150px;
                width: 75px;
        }

        &::after {

                content: '';
                height: 0;
                width: 100%;
                position: absolute;
                top: 0;
                left: 0;

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

        @media screen and ( max-width: 464px ) {
                
                width: 90%;

                h3 {
                        opacity: 1;
                }

                &::after {
                        height: 100%;
                }
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

        const projects = data.allMarkdownRemark.edges

        return (
                <Container className='wrap'>
                        <div className='header'>
                                <h1>MY </h1>
                                <h1>PROJ</h1>
                                <h1>ECTS</h1>
                        </div>
                        <div className='projs'>
                                <Button>SHOW ALL</Button>
                                <Projects>
                                        {
                                                projects.map( (project, i) => <Project key={i} {...project.node.frontmatter} /> )
                                        }
                                </Projects>
                        </div>
                </Container>
        )
}

const Project = ({ projectName, snapshot, hoverColor }) => {

        const navigate = useNavigate()

        const splittedImgPath = snapshot.includes('assets/') ? snapshot.split('assets/')[1] : snapshot

        const data = useImages(splittedImgPath)
        const fluid = data.node ? data.node.childImageSharp.fluid : { }

        return (
                <ProjectItem onClick={() => navigate(`/projects/${projectName.toLowerCase()}`)} $hoverColor={hoverColor}>
                        <div className='img'>
                                <Img fluid={fluid} />
                        </div>
                        <h3>{projectName}</h3>
                </ProjectItem>
        )
}

Project.defaultProps = {

        hoverColor: 'rgba( 225, 225, 225, .25 );'
}

export default ProjectShowcase
