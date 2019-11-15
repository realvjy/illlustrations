import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"


const Hero = () => {
  return (
    <section className="hero_section">
      <div className="container">
        <div className="hero_wrapper">
          <div className="hero_img">
            <img src="/notebook.png" />
          </div>
          <div className="hero_details">
            <div className="texts">
              <h1>Opensource illustrations kit</h1>
              <p>Designed all <strong>100 awesome illustrations</strong> during 100 days of illustration challange. You can use these to design your - landing pages, mobile app or persentations.</p>
            </div>

            <div className="dwn-links">
                <button className="download_button">
                      Download <span className="d-arrow"><img src="/d-arrow.svg"/></span>
                </button>
                <ul className="dwn-list">
                  <li><a href="#">one</a></li>
                  <li><a href="#">two</a></li>
                </ul>
            </div>

            <div className="btn-lnks">
              <a href="https://github.com/realvjy/illlustrations/releases/download/v1.0/illlustrations.co-1.0.0.zip" className="btn btn-download">
                <h4>Download All</h4>
                <span>AI, EPS, SVG, PNG</span>
              </a>
              <a href="https://www.buymeacoffee.com/EOKTJR8" className="btn btn-coffee">
                <h4>Buy me a coffee</h4>
                <span>and show some love</span>
              </a>
            </div>
            <div className="license">
            <p>Free for <a href="/license">Commercial and Personal Use</a>. No need to credit, license, or anything.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
