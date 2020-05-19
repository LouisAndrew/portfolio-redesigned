
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, getNode, actions }) => {

    const { createNodeField } = actions
    //for every markdown node
    if ( node.internal.type === 'MarkdownRemark' ) {

        const fileNode = getNode(node.parent)
        const relativePath = fileNode.relativePath

        const templateId = relativePath.indexOf('/') === -1 ? relativePath.split('.md')[0] : relativePath.split('/')[0]

        //create path based on slug provided!
        const slug = createFilePath({ node, getNode, basePath: 'pages' })
        if ( !slug.includes('techs/') && !slug.includes('social') ) {

            createNodeField({
                node, 
                name: `slug`,
                value: slug
            })

            createNodeField({
                node,
                name: `templateId`,
                value: templateId
            })
        }  
    }
}

exports.createPages = async ({ graphql, actions }) => {

    const { createPage } = actions

    const result = await graphql(`
        query MyQuery {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                            templateId
                        }
                    }
                }
            }
        }
    `)
    
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {

        if ( node.fields !== null ) {
        
            console.log(`creating ${node.fields.slug}`)

            createPage({
                path: node.fields.slug,
                component: path.resolve(`./src/templates/${node.fields.templateId}.js`),
                context: {
                    slug: node.fields.slug
                }
            })
        }
    })
}