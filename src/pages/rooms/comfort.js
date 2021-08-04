import React from 'react'
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const roomComfort = () => (
	<Layout pageInfo={{ pageName: "comfort" }}>
    <Seo title="Страница Номер Комфорт" />
    <h1>Hi from the Room Comfort</h1>
    <p>Welcome to page Room Comfort</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default roomComfort
