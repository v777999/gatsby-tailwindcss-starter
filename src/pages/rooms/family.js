import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const roomFamily = () => (
  <Layout pageInfo={{ pageName: "family" }}>
    <Seo title="Страница Номер Семейный" />
    <h1>Hi from the Room Family</h1>
    <p>Welcome to page Room Family</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default roomFamily
