import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Menu from "../components/Menu"

const SecondPage = () => (
  <Layout>  
    <div className="row">
      <div className="col col-1-of-4">
        <Menu />
      </div>

      <div className="col col-3-of-4">
        <SEO title="Page two" />
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
      </div>
    </div>
  </Layout>
)

export default SecondPage
