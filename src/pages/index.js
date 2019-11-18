import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Challange from "../components/challenge"
import Illustrations from "../components/100-illustrations"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Sponsored from "../components/sponsored"

class Index extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="illlustrations - open source illustrations kit" />
        <Hero />
        <Illustrations />
        <Sponsored />
        <Challange />
      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
query {
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }
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
`
