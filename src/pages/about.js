import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Header from "./header.js"
import Marquee from "./marquee.js"
import { Link } from "gatsby"

export default function Home() {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {extension: {regex: "/png/"}, relativeDirectory: {eq: "about"}}) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                aspectRatio
                base64
                sizes
                src
                srcSet
              }
            }
          }
        }
      }
    }
  `)


  const renderImage = (baseName) => {
    if (data) {
      return [...data.allFile.edges].map(({node}) => {
        if (node.base === baseName) {
          return ( <Img fluid={node.childImageSharp.fluid} key={baseName}/> );
        }
        return null;
      })
    }
  }

  return (
    <div>
      <Header/>
        <div className="about">
          <div className="about--copy">
            <div className="about--intro">
                i’m a product designer based in los angeles, california, focused on creating the best digital experience centered on user research. i’m currently identifying pain points for retail crypto investors at blockfolio.
            </div>
            <ul className="about--fun-facts">
              <div className="facts-title">fun facts</div>
              <li>I <span role="img" aria-label="heart">❤️</span> hotkeys and hot coffee</li>
              <li>Best way to get to know me is through <span role="img" aria-label="music-note">🎶</span>. <a href="https://open.spotify.com/playlist/2zzajkHZ6FFkXs6GBosdgp?si=lHRNzTF6SLauVqyPMkT2Ew" target="_blank" rel="noreferrer">Some favorites</a></li>
              <li>I'm trying to <a href="https://www.notion.so/f8d7bc3291994f44ba67fa1ef1978b83?v=f6012aede170404eb59f9128db8fcdb4" target="_blank" rel="noreferrer">read more</a></li>
              <li>Slowly learning Japanese for fun</li>
              <li>The social platform I use the most is Reddit</li>
              <li>Really into fermented foods; interested in brewing <Link to="/kombucha" target="_blank" rel="noreferrer">kombucha</Link></li>
            </ul>
          </div>
        </div>
        <div className="bitcoin-lengua">
              { renderImage("bitcoin-lengua.png") }
        </div>
        {/* <div className="about-image">
          { renderImage("coordinates.png") }
        </div> */}
      <Marquee/>
    </div>
  )
}
