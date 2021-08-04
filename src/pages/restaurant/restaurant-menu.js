import React from 'react'
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const RestaurantMenu = () => (
	<Layout pageInfo={{ pageName: "restaurant-menu" }}>
    <Seo title="Страница Меню Ресторана" />
    <h1>Hi from the Меню Ресторана</h1>
    <p>Welcome to page Меню Ресторана</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default RestaurantMenu
