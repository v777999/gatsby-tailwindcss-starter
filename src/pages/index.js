import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import Footer from "../components/footer"

const IndexPage = () => {
  return (
    <Layout pageInfo={{ pageName: "index" }}>
      <SEO title="Home" />
      <Hero />
      <h1 className="bg-blue-400">Hi people</h1>
      <Footer />
      {/* <h1>Hi people</h1>
     <p>Welcome to your new Gatsby site.</p>
     <p>Now go build something great.</p>
     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
       <StaticImage
         src="../images/gatsby-astronaut.png"
         alt="gatsby astronaut"
       />
     </div>
     <Link className="notTarget" to="/page-2/">Go to page 2<br></br></Link>
     <Link className="notTarget" to="/using-typescript/">Go to "Using TypeScript"</Link> */}
    </Layout>
  )
}

export default IndexPage
