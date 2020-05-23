import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import { useNavigate } from '@reach/router'

import useImages from '../../hooks/useImages'
import Button from '../button'
import Blob from '../../../static/assets/decorations/Blob.svg'

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
        border-radius: 8px;

        ${({ theme }) => theme.center()};
        flex-direction: column;

        background-color: ${({ theme }) => theme.dark};

        .img {

                width: 100%;
                
                img {
                        border-radius: 8px;
                }
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

        const navigate = useNavigate()
        const projects = data.allMarkdownRemark.edges

        const clickShowAll = () => {
                navigate('/projects')
        }

        return (
                <Container className='wrap'>
                        <div className='header'>
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

Project.propTypes = {

        projectName: PropTypes.string.isRequired,
        snapshot: PropTypes.string.isRequired,
        hoverColor: PropTypes.string,
}

Project.defaultProps = {

        hoverColor: 'rgba( 0, 0, 0, .25 );'
}

export default ProjectShowcase
