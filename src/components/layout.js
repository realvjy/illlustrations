import React from "react"
import { Link } from "gatsby"
import "./layout.scss"
import Nav from "./nav"


class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header = (
      <>
        <div className="announce-wrapper designletter">

        </div>

      </>
    )
    return (
      <div className="illlustrations_main">
        <header>{header}</header>
        <main className="up_i">{children}</main>
        <div className="carbon-ads">
          <script async type="text/javascript" src="//cdn.carbonads.com/carbon.js?serve=CE7IT5QI&placement=illlustrationsco" id="_carbonads_js"></script>
        </div>
        <div className="ph-float">
          <a href="https://www.producthunt.com/posts/illlustrations?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-illlustrations" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=174656&theme=light" alt="illlustrations - Open source illustrations library for design projects | Product Hunt Embed" /></a>
        </div>

        <div className="ad-float">
          <a href="https://3dicons.co?ref=illlustrations">
            <img src="/3dicons.jpg" />
          </a>
        </div>


      </div>
    )
  }
}

export default Layout
