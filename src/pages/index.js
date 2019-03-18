import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Menu from "../components/Menu"

import Button, { DangerButton } from '../components/Button'
import { FaApple } from "react-icons/fa";


const IndexPage = ({ data }) => (
  <Layout>
      <div className="row">
        
        <div className="col col-1-of-4">
          <Menu />
        </div>

        <div className="col col-3-of-4">
          <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
          <h1>Hi people</h1>
          <p>Welcome to your new Gatsby site.</p>
          <p>Now go build something great.</p>
          <div>
            <Image />

            <FaApple size={36}/> 
            <Button>Component button</Button>
            <DangerButton>DangerButton extended from button</DangerButton>
          </div>
        </div>    
      </div>
  </Layout>
)

export const query = graphql`
  query {
    allFile{
      edges{
        node{
          relativePath
        }
      }
    }
  }
`

export default IndexPage
