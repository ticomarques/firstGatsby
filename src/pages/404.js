import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <div className="row">
        
        <div className="col col-1-of-4">
          <p>Menu</p>
        </div>

        <div className="col col-3-of-4">
        <SEO title="404: Not found" />
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
          <Link to="/page-2/">Go to page 2</Link>
          <Link to="/testing">Go to testing page</Link>
        </div>    
      </div>
  </Layout>
)

export default NotFoundPage
