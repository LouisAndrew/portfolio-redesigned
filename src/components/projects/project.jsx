import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

import useImages from '../../hooks/useImages'
import Github from '../../../static/assets/github_icon.svg'
import Web from '../../../static/assets/web_icon.svg'
import Button from '../button'
import Top from '../../../static/assets/decorations/ProjectTop.svg'
import Bot from '../../../static/assets/decorations/ProjectBot.svg'

const Container = styled.section`
        
        background-color: ${({ theme }) => theme.bg};

        p:last-child {
                margin-top: 5%;
        }

        @media screen and ( max-width: 464px ) {
                
                padding-top: 20%;
                ${({ theme }) => theme.center()};
                flex-direction: column;

                h1 {
                        margin-bottom: 5%;
                }
        }
`

const ButtonsWr = styled.div`
        
        display: flex;

        button {

                ${({ theme }) => theme.center()};

                &:first-child {
                        margin-right: 2vh;
                }

                svg {
                        margin-left: 1vh;
                }
        }
`

const ProjectImage = styled.div`
        
        margin: 8% 0;
        padding: 5%;
        border-radius: 8px;
        width: 100%;
        position: relative;

        display: flex;
        flex-flow: column wrap;

        background-color: ${({ theme }) => theme.dark};

        .img {
                width: 100%;

                img {
                        border-radius: 8px;
                }
        }

        #top {

                position: absolute;
                top: -6%;
                left: -3%;
        }

        #bot {

                position: absolute;
                bottom: -6%;
                right: -3%;
        }

        @media screen and ( max-width: 464px ) {

                margin: 15% 0;

                #top {
                        transform: scale(.7) translate(0, -30%);
                }
        }
`

const Techs = styled.div`
        
        width: 100%;
        background-color: red;
`

const Project = ({ desc, gitRepo: repoUnformatted, lastUpdated, projectName, siteName: siteUnformatted, snapshot, techUsed }) => {

        // adding http.// before sitename => if not, it's goint to redirect to this-page/siteName.
        // just asafe guard in case no http:// is added on cms.
        const httpAdder = str => str.includes('http://' || 'https://') ? str : `http://${str}`

        const assetSplitter = str => str.includes('assets/') && str.split('assets/')[1]

        const gitRepo = httpAdder(repoUnformatted)
        const siteName = httpAdder(siteUnformatted)

        const imgQuery = useImages( assetSplitter(snapshot) )
        const fluid = imgQuery.node ? imgQuery.node.childImageSharp.fluid : false

        const visitSite = e =>{

                if ( e.target.value )
                        window.location = e.target.value
        }

        return (
                <Container className='wrap'>
                        <h1>{projectName}</h1>
                        <ButtonsWr>
                                { siteName &&   (
                                                        <Button onClick={visitSite} value={siteName} bColor='red' color='ft'>
                                                                visit.
                                                                <Web id='web' />
                                                        </Button>
                                ) }
                                <Button onClick={visitSite} value={gitRepo} bColor='blue' color='ft'>
                                        check repo.
                                        <Github id='github' />
                                </Button>
                        </ButtonsWr>
                        <ProjectImage>
                                <Top id='top' />
                                { fluid && 
                                        (
                                                <div className='img'>
                                                        <Img fluid={fluid} />
                                                </div>
                                        )
                                }
                                <h3>Techs Used:</h3>
                                <Techs>
                                </Techs>
                                <Bot id='bot' />
                        </ProjectImage>
                        <h2>Description</h2>
                        <p>{desc}</p>
                </Container>
        )
}

Project.propTypes = {

        desc: PropTypes.string,
        gitRepo: PropTypes.string.isRequired,
        lastUpdated: PropTypes.string.isRequired,
        projectName: PropTypes.string.isRequired,
        siteName: PropTypes.string,
        snapshot: PropTypes.string.isRequired,
        techUsed: PropTypes.arrayOf(
              PropTypes.string.isRequired,
        ).isRequired,
  }
  
  Project.defaultProps = {

        desc: '',
        siteName: ''
  }

export default Project
