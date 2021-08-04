import React from 'react'
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const AboutRestaurant = () => (
	<Layout pageInfo={{ pageName: "about-restaurant" }}>
    <Seo title="Страница Ресторан" />
    <h1>Hi from the Restaurant</h1>
    <p>Welcome to page Restaurant</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutRestaurant
