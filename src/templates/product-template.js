import React from 'react';
import Layout from '../components/layout'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Menu from '../components/Menu'

const ProductTemplate = ({data}) => {

    const {title, price} = data.contentfulProdutos
    const {description} = data.contentfulProdutos.description
    const {fluid} = data.contentfulProdutos.photos
    

    return (
        <Layout>
            <div className="row">
                <div className="col col-1-of-4">
                    <Menu />
                </div>

                <div className="col col-3-of-4">
                    <h2>Single Product template</h2>
                    <Link to="/products"><h3>Back to Products</h3></Link>
                    <Img fluid={fluid} />
                    <h1>{title}</h1>
                    <h3>{price}</h3>
                    <p>{description}</p>
                </div>    
            </div>
        </Layout>
    )
};

export const query = graphql`
    query ($id: String!) {
        contentfulProdutos(id: {eq: $id}) {
            id
            title
            price
            description{
                description
            }
            photos{
                fluid{
                    ...GatsbyContentfulFluid
                }
            }
        }
    }
`

export default ProductTemplate;
