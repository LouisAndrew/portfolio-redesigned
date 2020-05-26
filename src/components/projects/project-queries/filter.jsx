import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import FilterBox from './filter-box'

const Container = styled.div`
        
`

const Filter = ({ filter, setFilter }) => {

        const result = useStaticQuery( graphql`
                query TechFilterQuery {
                        allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "techs"}}}) {
                                edges {
                                        node {
                                                frontmatter {
                                                name
                                                icon
                                                }
                                        }
                                }
                        }
                }
        ` )

        const { edges: data } = result.allMarkdownRemark
        const techs = data && data.map( dt => dt.node.frontmatter )

        return (
                <Container>
                        { techs && <FilterBox setFilter={setFilter} techs={techs} /> }
                </Container>
        )
}

Filter.propTypes = {

        filter: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.arrayOf(
                        PropTypes.string,
                ),
        ]).isRequired,
        setFilter: PropTypes.func.isRequired,
}

export default Filter
