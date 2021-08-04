import React from 'react'
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const Laundry = () => (
	<Layout pageInfo={{ pageName: "laundry" }}>
    <Seo title="Страница Прачечная" />
    <h1>Hi from the Прачечная</h1>
    <p>Welcome to page Прачечная</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Laundry
