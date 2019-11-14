import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"


const Hero = () => {
  return (
    <div className="hero_wrapper">
      <div className="hero_details">
        <div className="texts">
          <h1>Opensource illustrations kit</h1>
          <p>Designed all <strong>100 awesome illustrations</strong> during 100 days of illustration challange. You can use these to design your - landing pages, mobile app or persentations.</p>
        </div>
        <div className="btn-lnks">
          <a href="#" className="btn btn-download">
            <h4>Download All</h4>
            <span>AI, EPS, SVG, PNG</span>
          </a>
          <a href="#" className="btn btn-coffee">
            <h4>Buy me a coffee</h4>
            <span>and show some love</span>
          </a>
        </div>
        <div className="license">
        <p>Free for <a href="#">Commercial and Personal Use</a>. No need to credit, license, or anything.</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
