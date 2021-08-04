import React from 'react'
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const PavilionsAndBarbeques = () => (
	<Layout pageInfo={{ pageName: "pavilions-and-barbeques" }}>
    <Seo title="Страница Беседки и мангалы" />
    <h1>Hi from the Беседки и мангалы</h1>
    <p>Welcome to page Беседки и мангалы</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default PavilionsAndBarbeques
