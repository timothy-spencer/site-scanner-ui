import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Scans from "../components/scans"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Scans />
    </div>
  </Layout>

)

export default IndexPage
