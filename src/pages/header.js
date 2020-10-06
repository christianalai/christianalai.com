import React, { useEffect } from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"
import AnimatedLinksObjs from "../animations/animatedLink"


export default function Header() {
	useEffect(() => {
			for (const el of [...document.querySelectorAll('a.menu__link')]) {
				const elPosition = [...el.parentNode.children].indexOf(el);
				const fxObj = AnimatedLinksObjs[elPosition];
				fxObj && new fxObj(el);
			}
	});

	const data = useStaticQuery(graphql`
		query {
			file(relativePath: { eq: "logo.png" }) {
				childImageSharp {
					fluid { ...GatsbyImageSharpFluid }
				}
			}
		}
	`)

	return (
		<header>
			<svg className="hidden">
        <defs>
          <filter id="filter-3">
            <feTurbulence type="fractalNoise" baseFrequency="0.15 0.02" numOctaves="3" result="warp" />
            <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="0" in="SourceGraphic" in2="warp" />
          </filter>
          <filter id="filter-4">
            <feTurbulence type="fractalNoise" baseFrequency="0" numOctaves="5" result="warp" />
            <feOffset dx="-90" result="warpOffset" />
            <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="35" in="SourceGraphic" in2="warpOffset" />
          </filter>
        </defs>
      </svg>
			<Link to="/">
				<Img className="logo"
					placeholderStyle={{ visibility: "hidden" }}
					fluid={data.file.childImageSharp.fluid}
					imgStyle={{ objectFit: "contain" }}
					alt="logo">
				</Img>
			</Link>
			<nav className="header header-menu menu--line">
				<Link className="menu__link menu__link--3" to="/">work</Link>
				<Link className="menu__link menu__link--4" to="/about">about</Link>
			</nav>
		</header>
	)
}
