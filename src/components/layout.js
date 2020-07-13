import React from "react"
import { Link } from "gatsby"
import "./layout.scss"


class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header = (
      <>
      <div className="announce-wrapper designletter">
        <div className="container">
          <div className="an-details">
            <p><a href="https://designletter.co/?ref=illlustrations" target="_blank">Subscribe to <img src="/designletter-logo.png" /> <span>: A weekly newsletter for designers, developers and managers.</span></a></p>
          </div>
        </div>
      </div>

      <section className="header_section">
        <div className="container">
          <nav>
            <Link to={`/`} className="brand">
              <img src="/logo.svg" className="logo" />
            </Link>
            <ul className="buttons links">
              <li>
                <a className="btn-tw" href="https://twitter.com/intent/tweet?text=Design%20awesome%20landing%20page,%20mockup%20and%20presentations%20with%20this%20open-source%20illlustrations%20library.%20%20https://illlustrations.co%20@_illlustrations%20by%20@realvjy">Share on twitter <img src="/twitter.svg"/></a>
              </li>

            </ul>
          </nav>


        </div>
      </section>
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
          <a href="https://www.producthunt.com/posts/illlustrations?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-illlustrations" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=174656&theme=light" alt="illlustrations - Open source illustrations library for design projects | Product Hunt Embed"/></a>
        </div>
        <footer className="container footer">
          <div className="dev-credit">
          <div className="logo">
            <div className="nav">
              <a href="/"><img src="/logo-foot.svg"/></a>
            </div>
            <div className="menu">
              <a href="/license">Free for Commercial and Personal Use</a>
            </div>
          </div>
          <h3>Design & develop <a href="https://vijayverma.co/?ref=illlustrations">vijay verma</a> </h3>
          <ul className="scl-lnk">
            <li><a href="https://dribbble.com/realvjy" target="__blank"><img src="/dribbble.svg"/></a></li>
            <li><a href="https://twitter.com/realvjy" target="__blank"><img src="/twitter.svg"/></a></li>
            <li><a href="https://instagram.com/realvjy" target="__blank"><img src="/insta.svg"/></a></li>
          </ul>
          </div>
        </footer>
      </div>
    )
  }
}

export default Layout
