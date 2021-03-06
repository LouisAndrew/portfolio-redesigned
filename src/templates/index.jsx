import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

import Hero from '../components/index-page/hero'
import Layout from '../components/layout'
import Expertees from '../components/index-page/expertees'
// import Contact from '../components/index-page/contact'
import ProjectShowcase from '../components/index-page/projects-index'
import Contact from '../components/index-page/contact-rd'
import Intro from '../components/index-page/intro'

export const IndexPageTemplate = ({ title, heading, subheading, cta, expertees, contact, intro }) => (
      <Layout>
            <motion.div
                  exit={{ opacity: 0 }}

                  style={{
                        overflowX: 'hidden',
                        overflowY: 'visible'
                  }}
            >
                  <Hero heading={heading} subheading={subheading} cta={cta} canvas />
                  <Expertees {...expertees} />
                  <ProjectShowcase />
                  <Intro {...intro} />
                  <Contact {...contact} />
            </motion.div>
      </Layout>
)

const IndexPage = ({ data: result }) => {

      const  data = result.markdownRemark.frontmatter
      
      return <IndexPageTemplate {...data}  />
}

IndexPage.propTypes = {

      data: PropTypes.objectOf( PropTypes.object ).isRequired
}

IndexPageTemplate.propTypes = {

      title: PropTypes.string,
      heading: PropTypes.string.isRequired,
      subheading: PropTypes.string.isRequired,
      cta: PropTypes.string,
      expertees: PropTypes.objectOf( PropTypes.object ).isRequired,
      contact: PropTypes.objectOf( PropTypes.object ).isRequired,
      Intro: PropTypes.objectOf( PropTypes.object, ).isRequired,
}

IndexPageTemplate.defaultProps = {

      title: 'Welcome to My Website!',
      cta: 'explore now!',
}

export default IndexPage

export const query = graphql`
      query MyQuery {
            markdownRemark(frontmatter: {templateKey: {eq: "index"}}) {
                  frontmatter {
                        cta
                        title
                        subheading
                        heading
                        expertees {
                              heading
                              myExpertees {
                                    desc
                                    heading
                                    image
                              }
                              headingList {
                                    h
                              }
                        }
                        contact {
                              contactLists {
                                    icon
                                    link
                                    redirect
                                    social
                                    value
                              }
                              heading
                              subheading
                              headingList {
                                    h
                              }
                        }
                        intro {
                              desc
                              heading
                              headingList {
                                    h
                              }
                              image
                        }
                  }
            }
      }
`