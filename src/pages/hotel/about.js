import React from 'react'

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const About = () => (
  <Layout pageInfo={{ pageName: "about" }}>
    <Seo title="Об отеле" />
    <h1>Hi from the About page</h1>
    <p>Welcome to page About</p>
  </Layout>
)

export default About
