import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import Footer from "../components/footer"
import MenuBar from "../components/MenuBar"

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger)
}

const IndexPage = () => {
  const ref = useRef(null)

  useEffect(() => {
    let sections = gsap.utils.toArray("section")

    sections.forEach(function (element, index) {
      let tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "+=200px",
            scrub: true,
            markers: true,
            toggleActions: "restart none none reset",
          },
        })
        .to(element.querySelector("h1"), {
          backgroundImage:
            "linear-gradient(45deg, #eee -100%, #000 50%, #eee 100%)",
          opacity: 1,
          duration: 3,
          ease: "none",
        })
        .from(
          element.querySelectorAll("p"),
          {
            duration: 3,
            opacity: 0,
            y: 50,
            stagger: 0.3,
          },
          0.3
        )
    })
  }, [])
  return (
    <div id="scroll-container">
      <Layout pageInfo={{ pageName: "index" }}>
        <SEO title="Home" />
        <Hero />
        <MenuBar />
        <Wrapper>
          <div ref={ref} className="bg-white pt-20 pl-10">
            <section>
              <h1>GSAP 3 Express</h1>
              <p>
                The ultimate beginner's course designed to get you up and
                running with GSAP's most popular features quickly.
              </p>
              <p>
                Start your Free Trial today for a risk-free taste of my most
                popular course.
              </p>
            </section>
            <section>
              <h1>GSAP 3 Beyond the Basics</h1>
              <p>
                Learn features of the API the pros rely on to take their
                animations to the next level with precision timing, control, and
                flexibility.{" "}
              </p>
            </section>
            <section>
              <h1>B-Sides, Bonuses, and Oddities</h1>
              <p>
                Premium tutorials and demos that go beyond the fundamentals of
                the other courses. This is where we truly get creative with our
                code.{" "}
              </p>
            </section>
            <section>
              <h1>ScrollTrigger Express</h1>
              <p>
                Learn the many ways you can control your GreenSock animations
                with ScrollTrigger. Create awesome parallax effects, scrub
                through timelines, and trigger animations as they enter the
                viewport.{" "}
              </p>
            </section>
            <section>
              <h1>Special Eases</h1>
              <p>
                An ease can dramatically change the feel of an animation. Learn
                how GreenSock's proprietary eases (CustomEase, SlowMo,
                RoughEase) can drive truly unique and complex animation effects.{" "}
              </p>
            </section>
          </div>
        </Wrapper>
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
    </div>
  )
}

const Wrapper = styled.div`
  body {
    font-family: sans-serif;
    background: #000;
    margin: 50px;
    color: #eee;
    padding-top: 60vh;
  }

  section {
    margin-bottom: 10vw;
  }

  p {
    font-size: 24px;
    color: #000;
    width: 50vw;
    line-height: 34px;
  }

  h1 {
    width: 50%;
    margin-bottom: 20px;
    opacity: 0;
    margin-top: 60px;
    font-size: 4em;
    background-image: linear-gradient(45deg, #eee -200%, #000 -100%, #eee 0%);
    background-position: "100px 100px";
    background-clip: text;
    -webkit-background-clip: text;
    /* -webkit-text-fill-color: transparent; */
  }
`
export default IndexPage
