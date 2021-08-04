import React from 'react'
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const SaunaWithPool = () => (
	<Layout pageInfo={{ pageName: "sauna-with-pool" }}>
    <Seo title="Страница Сауна с бассейном" />
    <h1>Hi from the Сауна с бассейном</h1>
    <p>Welcome to page Сауна с бассейном</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SaunaWithPool
