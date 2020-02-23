

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"


const Featured = () => {
  const data = useStaticQuery(graphql`
    query featuredQuery {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { featured: { eq: true } } }
      ) {
        edges {
          node {
            excerpt(format: HTML)
            html
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              author
              category
              svg {
                publicURL
              }
              png {
                publicURL
              }
              png{
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const siteTitle = data.site.siteMetadata.title
  const illlus = data.allMarkdownRemark.edges

  return (
    <section className="illus chris">
      <div className="container">
        <div className="title">
          <h1>20 New Illustrations</h1>
        </div>
        <div className="illus-wrap">
        {illlus.map(({ node }) => {
          const title = node.frontmatter.title
          return (
            <div className="day-box">
              <div className="i-wrap">

                <div className="img">
                  <img src={node.frontmatter.png.childImageSharp.fluid.src}/>
                </div>

                <div className="info">
                  <h5>{node.frontmatter.title}</h5>
                  <div className="btns">
                    <a href={node.frontmatter.svg.publicURL} download className="btn-svg">SVG</a>
                    <a href={node.frontmatter.png.publicURL} download className="btn-png">PNG</a>
                  </div>
                </div>

              </div>
            </div>
          )
          })}
          </div>
          <div className="feature-dwn">
            <div className="btn-lnks">
              <a href="https://github.com/realvjy/illlustrations/releases/download/1.0.2/20.illustrations.pack.zip" className="btn btn-coffee"><h4>Download New Pack</h4></a>
              <div className="dwn-links">
                <button className="btn btn-download">
                  <h4>Download all</h4>
                </button>
                <ul className="dwn-list">
                  <li><a href="https://github.com/realvjy/illlustrations/releases/download/1.0.1/illlustrations.co-1.0.1.zip">AI, SVG and PNG Files</a></li>
                  <li><a href="https://www.dropbox.com/sh/wd9awx71rx5fr8z/AABATGMLfrM6d_kQLj__yaQga?dl=0">EPS Files</a></li>
                  <li><a href="https://www.figma.com/community/file/810922307190314237">Get Figma File</a></li>
                </ul>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Featured
