import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Challange from "../components/challenge"
import Nav from "../components/nav"
import Footer from "../components/footer"

class License extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="illlustrations - MIT License" />
        <Nav />
        <section className="license_section">
          <div className="container">
            <div className="license_box">
              <h1>The MIT License (MIT)</h1>
              <h4>Copyright © 2019 vijay verma for illlustrations</h4>
              <p>
                Permission is hereby granted, free of charge, to any person obtaining a copy
                of this software and associated documentation files (the "Software"), to deal
                in the Software without restriction, including without limitation the rights
                to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                copies of the Software, and to permit persons to whom the Software is
                furnished to do so, subject to the following conditions:
              </p>
              <h3 className="summary">Permissions</h3>
              <ul>
                <li className="per">✓ Private use</li>
                <li className="per">✓ Personal use</li>
                <li className="per">✓ Commercial use</li>
                <li className="per">✓ Modification</li>
                <li className="per">✓ Distribution</li>
              </ul>
              <p className="summary">The above copyright notice and this permission notice shall be included in all
                copies or substantial portions of the Software.</p>
              <p>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                SOFTWARE.</p>
              <h3 className="summary">Brand and Logos</h3>
              <ul>
                <li>All logos and brands are registered trademarks of their respected owners. </li>
                <li>All logos and brands are included on a promotional basis and do not represent an association with <strong>illlustrations.co</strong> or its users. </li>
                <li>It not indicate any kind of endorsement of the trademark holder towards illlustrations.co, nor vice versa. </li>
                <li>All logos are provided with the sole purpose to represent the actual brand/service/company that has registered the trademark and must not be used otherwise.</li>
              </ul>
            </div>
          </div>
        </section>
        <Challange />
        <Footer />
      </Layout>
    )
  }
}

export default License

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
