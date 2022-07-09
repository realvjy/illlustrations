

import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"


const Nav = () => {
    return (
        <section className="header_section">
            <div className="container">
                <nav>
                    <Link to={`/`} className="brand">
                        <img src="/logo.svg" className="logo" />
                    </Link>
                    <ul className="buttons links">
                        <li>
                            <a className="btn-tw" href="https://twitter.com/intent/tweet?text=Design%20awesome%20landing%20page,%20mockup%20and%20presentations%20with%20this%20open-source%20illlustrations%20library.%20%20https://illlustrations.co%20@_illlustrations%20by%20@realvjy">Share on twitter <img src="/twitter.svg" /></a>
                        </li>

                    </ul>
                </nav>


            </div>
        </section>
    )
}

export default Nav
