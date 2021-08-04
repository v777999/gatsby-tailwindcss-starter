import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const roomStandart = () => (
  <Layout pageInfo={{ pageName: "standart" }}>
    <Seo title="Страница Номер Стандарт" />
    <h1>Hi from the Room Standart</h1>
    <p>Welcome to page Room Standart</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default roomStandart
