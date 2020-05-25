import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import ProjectItem from './project-item-all'

const Container = styled.section`
        
        background-color: ${({ theme }) => theme.bg};
`

const ProjectCont = styled.div`
        
        display: flex;
        flex-flow: row wrap;
`
// TODO: pagination
// TODO: sorting
// TODO: map projects.
// TODO filter.
const AllProjects = ({ data }) => {

        return (
                <Container className='wrap'>
                        <ProjectCont>
                                {
                                        data && data.map( (dt, i) => <ProjectItem key={i} projectName={dt.node.frontmatter.projectName} snapshot={dt.node.frontmatter.snapshot} /> )
                                }
                        </ProjectCont>
                </Container>
        )
}

AllProjects.propTypes = {

        data: PropTypes.arrayOf(
                PropTypes.shape({
                        node: PropTypes.objectOf( PropTypes.object ).isRequired
                })
        ).isRequired
}

export default AllProjects
