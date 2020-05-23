/* eslint-disable react/jsx-indent-props */

import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../components/layout'
import Project from '../components/projects/project'

export const ProjectPageTemplate = ({ desc, gitRepo, lastUpdated, projectName, siteName, snapshot, techUsed, preview }) => (
      <Layout>
            <Project 
                  projectName={projectName} 
                  desc={desc} 
                  gitRepo={gitRepo} 
                  lastUpdated={lastUpdated} 
                  snapshot={snapshot} 
                  siteName={siteName}
                  techUsed={techUsed}
                  preview={preview}
            />
      </Layout>
)

const ProjectPage = ({ data: result }) => {

      const data = result.markdownRemark.frontmatter

      return <ProjectPageTemplate {...data} />
}

ProjectPage.propTypes = {
      data: PropTypes.objectOf( PropTypes.object ).isRequired
}

ProjectPageTemplate.propTypes = {

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

ProjectPageTemplate.defaultProps = {
      
      desc: '',
      siteName: ''
}

export default ProjectPage

export const query = graphql`
      query ProjectQuery($slug: String) {
            markdownRemark(fields: {slug: {eq: $slug}}, frontmatter: {templateKey: {eq: "projects"}}) {
                  frontmatter {
                        desc
                        gitRepo
                        lastUpdated
                        projectName
                        siteName
                        snapshot
                        preview
                        techUsed
                  }
            }
      }
`