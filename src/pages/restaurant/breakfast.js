import React from 'react'
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const Brekfast = () => (
	<Layout pageInfo={{ pageName: "breakfast" }}>
    <Seo title="Страница Завтраки" />
    <h1>Hi from the Breakfast</h1>
    <p>Welcome to page Breakfast</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Brekfast
