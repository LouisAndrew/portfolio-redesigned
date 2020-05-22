import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Github from '../../../static/assets/github_icon.svg'
import Web from '../../../static/assets/web_icon.svg'
import Button from '../button'

const Container = styled.section`
        
        background-color: ${({ theme }) => theme.bg};
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

const Project = ({ desc, gitRepo: repoUnformatted, lastUpdated, projectName, siteName: siteUnformatted, snapshot, techUsed }) => {

        // adding http.// before sitename => if not, it's goint to redirect to this-page/siteName.
        // just asafe guard in case no http:// is added on cms.
        const httpAdder = str => str.includes('http://' || 'https://') ? str : `http://${str}`

        const gitRepo = httpAdder(repoUnformatted)
        const siteName = httpAdder(siteUnformatted)

        console.log(siteName)

        const visitSite = e => {

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
