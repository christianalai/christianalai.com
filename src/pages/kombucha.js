import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Header from "./header.js"
import Marquee from "./marquee.js"

export default function Home() {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {extension: {regex: "/png/"}}) {
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
        <div className="kombucha grid grid-3">
          { renderImage("kombucha-instructions-1.png")}
          { renderImage("kombucha-instructions-2.png")}
          { renderImage("kombucha-instructions-3.png")}
        </div>
      <Marquee/>
    </div>
  )
}
