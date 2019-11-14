import React from "react"
import { Link } from "gatsby"
import "./layout.scss"


class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header = (
      <>
      <div className="announce-wrapper ph">
        <div className="container">
          <div className="an-details">
          </div>
        </div>
      </div>
      <section className="header_section">
        <div className="container">
        <div className="hero_img">
          <img src="/notebook.png" />
        </div>
          <nav>
            <Link to={`/`} className="brand">
              <img src="/logo.svg" className="logo" />
            </Link>
            <ul className="buttons links">
              <li>
                <a className="btn-tw" href="https://twitter.com/intent/tweet?url=illlustrations.co&text=If%20you%20love%20to%20create%20beautifully%20landingpage%20onboarding%20get.%20free%20https%3A%2F%2Filllustrations.co%20by%20%40realvjy">Share on twitter <img src="/twitter.svg"/></a>
              </li>

            </ul>
          </nav>
          <div className="hero_wrapper">
            <div className="hero_details">
              <div className="texts">
                <h1>Opensource illustrations kit</h1>
                <p>Designed all <strong>100 awesome illustrations</strong> during 100 days of illustration challange. You can use these to design your - landing pages, mobile app or persentations.</p>
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
              <p>Free for <a href="https://raw.githubusercontent.com/realvjy/illlustrations/develop/LICENSE">Commercial and Personal Use</a>. No need to credit, license, or anything.</p>
              </div>
            </div>
          </div>

        </div>
      </section>
      </>
    )
    return (
      <div className="illlustrations_main">
        <header>{header}</header>
        <main className="up_i">{children}</main>
        <footer className="container footer">
          <div className="dev-credit">
          <div className="logo">
            <div className="nav">
              <a href="#"><img src="/logo-foot.svg"/></a>
            </div>
            <div className="menu">
              <a href="https://raw.githubusercontent.com/realvjy/illlustrations/develop/LICENSE">Free for Commercial and Personal Use</a>
            </div>
          </div>
          <h3>Design & devlop <a href="https://vijayverma.co">vijay verma</a> </h3>
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
