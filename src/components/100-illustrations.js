

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"


const Challange = () => {
  const data = useStaticQuery(graphql`
    query illlustrationQuery {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: ASC }
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
    <section className="illus">
      <div className="container">
        <div className="title">
          <h1>Explore all</h1>
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
      </div>
    </section>
  )
}

export default Challange
