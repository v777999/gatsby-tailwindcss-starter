import * as React from "react"
import { useRef, useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import gsap from "gsap"
import { toRight } from "../components/animate"
import HeroImg from "../images/Hero-Slider-1.jpg"

const Hero = () => {
  let heroOpenImg = useRef(null)

  useEffect(() => {
    toRight(heroOpenImg)
  }, [])

  return (
    <div className="heroOpenImg" ref={le => (heroOpenImg = le)}
      style={{
        display: "grid",
        clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
      }}
    >
      {/* You can use a GatsbyImage component if the image is dynamic */}
      <StaticImage
        style={{
          gridArea: "1/1",
          width: "100%",
          height: "100vh",
					objectFit: "cover",
					placeHolder: "none",
          //clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
          // You can set a maximum height for the image, if you wish.
          // maxHeight: 600,
        }}
        layout="constrained"
        // You can optionally force an aspect ratio for the generated image
        //aspectRatio={3 / 1}
        // This is a presentational image, so the alt should be an empty string
        alt=""
        // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
        src={"../images/Hero-Slider-1.jpg"}
        formats={["auto", "webp", "avif"]}
      />
      <div
        style={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: "1/1",
          position: "relative",
          // This centers the other elements inside the hero component
          placeItems: "center",
          display: "grid",
        }}
      >
        {/* Any content here will be centered in the component */}
        <h1>Hero text</h1>
      </div>
    </div>
  )
}

export default Hero
