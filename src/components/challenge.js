

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"


const Challange = () => {
  return (
    <section className="challange">
      <div className="container">
        <div className="challange-wrap">
          <h1>#100daysChallenge</h1>
          <p>Back in 2016, I spent almost 2 hours a day for 100 days just for designing, illustrating and experimenting to get myself to the next level in illustration. All those illustrations were saved on my drive untouched for years. So, decided to shared with you guys for FREE</p>
          <div className="btn-lnks">
            <div className="dwn-links">
              <button className="btn btn-download">
                <h4>Download all</h4>
              </button>
              <ul className="dwn-list">
                <li><a href="https://github.com/realvjy/illlustrations/releases/download/1.0.1/illlustrations.co-1.0.1.zip">AI, SVG and PNG Files</a></li>
                <li><a href="https://www.dropbox.com/sh/wd9awx71rx5fr8z/AABATGMLfrM6d_kQLj__yaQga?dl=0">EPS Files</a></li>
              </ul>
            </div>
            <a href="https://dribbble.com/realvjy/projects/459862-100-Days-of-Illustration" target="__blank" className="btn btn-coffee"><h4>View on Dribbble</h4></a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Challange
