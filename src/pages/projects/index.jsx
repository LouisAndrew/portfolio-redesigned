import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../../components/layout'
import AllProjects from '../../components/projects/all-projects'

const ProjectsPage = ({ data }) => {

        const { edges } = data.allMarkdownRemark

        return (
                <Layout>
                        <AllProjects data={edges} />
                </Layout>
        )
}

ProjectsPage.propTypes = {
        data: PropTypes.objectOf( PropTypes.object ).isRequired
}

export default ProjectsPage

export const query = graphql`
        query AllProjectsQuery {
                allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "projects"}}}) {
                        edges {
                                node {
                                        frontmatter {
                                                projectName
                                                snapshot
                                                techUsed
                                        }
                                }
                        }
                }
        }

`