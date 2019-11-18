

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"


const Sponsored = () => {
  return (
    <section className="sponsore">
      <div className="container">
        <div className="sponsore-wrap">
          <div className="sponsore-box">
            <h4>SPONSORED</h4>
            <a href="http://bit.ly/37dp5zv" target="__blank">
              <img src="/iconscout-ad-1.jpg" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sponsored
