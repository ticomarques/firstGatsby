import React from 'react';
import Layout from '../components/layout'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Menu from '../components/Menu'


const products = ({data}) => {
    //console.log(data);
    return (
    <Layout>
        <div className="row">
            <div className="col col-1-of-4">
                <Menu />
            </div>

            <div className="col col-3-of-4">
                <h1>Our products</h1>

                {data.allContentfulProdutos.edges.map(({node: product}) => {
                    return (
                        <div key={product.id} className="col col-1-of-3">
                            <div style={{padding:'1rem', margin: '1rem 0'}}>
                                <Img fixed={product.photos.fixed}/>
                                <h2 style={{textAlign: 'center'}}>{product.title}</h2>
                                <h3 style={{textAlign: 'center'}}>U$ {product.price}</h3>
                                <Link to={`/products/${product.title}`} style={{display:'block', textAlign: 'center',fontSize:'1.4rem', color:'red'}}>Buy</Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
        
    </Layout>
    )
};

export const query = graphql`
    {
    allContentfulProdutos{
    edges{
      node{
        id
        title
        description{
          description
        }
        price
        photos{
          fixed(width:220){
            ...GatsbyContentfulFixed
          }
        }
      }
    }
  }
}
`

export default products;
