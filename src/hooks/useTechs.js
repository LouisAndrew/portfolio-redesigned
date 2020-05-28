import { useState, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const useTechs = techName => {

    const [ tech, setTech ] = useState({ })

    const result = useStaticQuery( graphql`
        query TechQuery {
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

    const edges = result && result.allMarkdownRemark.edges

    const filter = (name, array) => {

        return array.filter( nodeParent => nodeParent.node.frontmatter.name === name )
    }

    useEffect(() => {

        if ( !tech.node && edges ) {

            const temp = filter(techName, edges)
            setTech( temp.length > 0 ? temp[0] : false )
        }
    })

    return tech
}

export default useTechs