import React from 'react'
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const ConferenceHall = () => (
	<Layout pageInfo={{ pageName: "conference-hall" }}>
    <Seo title="Страница Конференц-зал" />
    <h1>Hi from the Конференц-зал</h1>
    <p>Welcome to page Конференц-зал</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ConferenceHall
