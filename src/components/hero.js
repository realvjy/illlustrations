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
              <h1>Open source illustrations kit</h1>
              <p>Designed <strong>100 awesome illustrations</strong> during 100 days of illustration challenge (Now added more than <strong>120+ </strong>illustrations). You can download all illustrations completely <strong>free</strong> and <strong>use</strong> these to design awesome - landing pages, mobile app or presentations.</p>
            </div>

            <div className="btn-lnks">
              <div className="dwn-links">
                <button className="btn btn-download">
                  <h4>Download all</h4>
                  <span>AI, SVG, PNG, EPS and Figma</span>
                </button>
                <ul className="dwn-list">
                  <li><a href="https://github.com/realvjy/illlustrations/releases/download/1.0.3/illlustrations.co.1.0.3.zip">AI, SVG and PNG Files</a></li>
                  <li><a href="https://www.dropbox.com/sh/wd9awx71rx5fr8z/AABATGMLfrM6d_kQLj__yaQga?dl=0">EPS Files</a></li>
                  <li><a href="https://www.figma.com/community/file/810922307190314237">Get Figma File</a></li>
                </ul>
              </div>
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
