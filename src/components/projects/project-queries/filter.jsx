import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import FilterBox from './filter-box'

const Container = styled.div`
        
        align-self: flex-end;
        padding-top: 5%;

        @media screen and ( max-width: 640px ) {
                
                padding-top: 15%;
        }
`

const Filter = ({ setFilter }) => {

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
        setFilter: PropTypes.func.isRequired,
}

export default Filter
