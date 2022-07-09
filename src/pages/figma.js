import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Challange from "../components/challenge"

class Figma extends React.Component {
    render() {
        const { data } = this.props
        const siteTitle = data.site.siteMetadata.title

        return (
            <Layout location={this.props.location} title={siteTitle}>
                <SEO title="illlustrations - Figma Plugin" />
                <section className="figma-section">
                    <div className="f-container">
                        <nav>
                            <div className="logo">
                                <a href="/"><img src="/logo-f.png" /></a>
                            </div>
                            <div className="menu">
                                <ul>

                                    <li><a href="https://www.buymeacoffee.com/realvjy" className="n-btn btn-text">donate</a></li>
                                    <li>
                                        <a className="n-btn btn-outline" href="https://twitter.com/intent/tweet?text=Design%20awesome%20landing%20page,%20mockup%20and%20presentations%20with%20this%20open-source%20illlustrations%20library.%20%20https://illlustrations.co%20@_illlustrations%20by%20@realvjy">Show Love<img src="/twitter.svg" /></a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </section>
                <section className="figma-section">
                    <div className="f-container">
                        <div className="f-header">
                            <div className="fig-img">
                                <img src="/figma-plugin.png" />
                            </div>
                            <div className="fig-text fig-head">
                                <div className="content-wrapper">
                                    <img src="/illlustration-plugin.svg" />
                                    <p>Now you can insert all 120+ illustrations from the <span>illustrations.co</span> open-source library, directly in your Figma and FigJam files as <span>SVG/Vector</span>. You can also change the color and shape after inserting because it's a svg.</p>
                                    <div className="fig-btn-box">
                                        <a href="https://www.figma.com/community/plugin/1124370159336948073/illlustrations" className="f-btn fig-btn-f">
                                            <img src="/figma.svg" /> <span>Install now on Figma</span>
                                        </a>
                                        <a href="https://www.buymeacoffee.com/realvjy" target={"_blank"} className="f-btn fig-btn-o">
                                            <img src="/bmc.svg" /> <span>Donate & Support</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="figma-section f-blue">
                    <div className="f-container">
                        <div className="f-search">
                            <div className="fig-text fig-search">
                                <div className="content-wrapper">
                                    <img src="/search.png" className="search-icon" />
                                    <h3>Search & Edit</h3>
                                    <p>This plugin allows you to search illustrations using any related keyword and it works like a charm. After searching, you can insert the illustration as an SVG/vector on Figma or Figjam, and you can also update the color and shape.</p>

                                </div>
                            </div>
                            <div className="fig-video">
                                <video autoPlay muted loop src="https://ik.imagekit.io/3dicons/illlustrations-search_PpM7wE6B6.mp4">
                                    <source src="https://ik.imagekit.io/3dicons/illlustrations-search_PpM7wE6B6.mp4"
                                        type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="figma-section f-black">
                    <div className="f-container">
                        <div className="fig-text fig-open">
                            <div className="content-wrapper">
                                <img src="/logo-f.png" className="open-logo" />
                                <h3>Open Source</h3>
                                <p>Yes, since everything about this project is shared publicly. You can grab the source code for this plugin on github. You are free to contribute or create your own plugin using it.</p>
                                <div className="fig-btn-box">
                                    <a href="https://github.com/realvjy/illlustrations-figma" target={"_blank"} className="f-btn fig-btn-f">
                                        <img src="/github.svg" /> <span>Check it on Github</span>
                                    </a>
                                    <a href="https://www.buymeacoffee.com/realvjy" target={"_blank"} className="f-btn fig-btn-o">
                                        <img src="/bmc.svg" /> <span>Donate & Support</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
                <section className="figma-section f-black">
                    <div className="f-container">
                        <div className="footer-wrap">
                            <div className="credit-box">
                                <div className="name">
                                    <p>Made with love and coffee by<a href="https://vijayverma.co/?ref=illlustrations-figma"> vijay verma</a> [<a href="https://twitter.com/realvjy">@realvjy</a>]</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </Layout>
        )
    }
}

export default Figma

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
