/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')

module.exports.createPages = ({graphql, actions}) => {
    const {createPage} = actions

    return graphql(`
    {
        allContentfulProdutos{
            edges {
                node {
                    id
                    title
                }
            }
        }
    }
    `)
    .then((result) => {
        result.data.allContentfulProdutos.edges.forEach(({node}) => {
            createPage({
                path:`products/${node.title}`, 
                component: path.resolve('./src/templates/product-template.js'), 
                context: { 
                    id: node.id
                } 
            })
        })
    })
    .catch((e) => { console.log(e)})
};
