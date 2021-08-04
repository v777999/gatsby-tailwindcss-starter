import React from 'react'
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const Brekfast = () => (
	<Layout pageInfo={{ pageName: "childrens-menu" }}>
    <Seo title="Страница Детское меню" />
    <h1>Hi from the Childrens menu</h1>
    <p>Welcome to page Childrens menu</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Brekfast
