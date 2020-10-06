import React, { useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Header from "./header.js"
import Footer from "./footer.js"
import Marquee from "./marquee.js"
import ProjectHeader from "./project-header.js"

export default function Priceline() {
  useEffect(() => {
    window.scrollTo(0, 0)
  })

  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {extension: {regex: "/png/"}, relativeDirectory: {eq: "priceline"}}) {
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

// TODO: A lot of one-off classes here; need to organize better
	return (
    <main>
      <Header/>
      <ProjectHeader
        title={"priceline.com"}
        subtitle={"2017"}
        summary={"During the overhaul of the Flights experience, many features needed to be updated or to be designed from square one. Below are two production features where I was able to design or assist in the design decision-making process."}
        opportunity={"How might we help our customers decide on the best deal while also giving them the best Flights booking experience?"}
        tasks={"ideation, visual design, development"}
      />
      <div className="priceline project">
        <div className="feature-container">
          <div className="push-left">
            <p className="label dark">Feature 1</p>
            <h4 className="priceline-heading dark">fare families</h4>
            <div className="grid">
              <div className="summary-container">
                <p>
                  The Flights booking experience initially didn’t allow customers to choose between different fare families (Basic Economy, Main Cabin, First Class, etc.) for their flight. So the goal here was to give the customer the ability to choose, to inform them of what amenities were included in the package, and show them what was being offered in other packages (upsell).
                </p>
                <p>
                  So that the module didn’t disrupt the existing experience, the Fare Families module was designed inside the preexisting “Offers” tab with the different fares being displayed as pre-collapsed buckets.
                </p>
              </div>
            </div>
          </div>
          <div className="mockup-container">
            { renderImage("farefamilies-full.png") }
          </div>
          <div className="mockup-container">
            { renderImage("farefamilies-devices.png") }
          </div>
        </div>

        <div className="feature-container">
          <div className="push-left">
            <p className="label dark">Feature 2</p>
            <h4 className="priceline-heading dark">seat selection</h4>
            <div className="grid">
              <div className="summary-container">
                <p>
                  To create the best overall Flight booking experience, we had to solve for one of our customers’ greatest pain points—the seat selection experience. Previously they were only able to select seats on the desktop browser, were inundated with useless information, and just confused by the overall selection process. Until this redesign, there wasn’t a responsive experience with a mobile-first approach.
                </p>
                <p>
                  In this revamped experience, we got rid of information that wasn't necessary for the customer to make a decision and streamlined the process.
                </p>
              </div>
            </div>
          </div>
          <div className="mockup-container">
            { renderImage("seatmaps-browser-v1.png") }
            <p class="before-caption">V1</p>
          </div>
          <div className="mockup-container">
            { renderImage("seatmaps-browser-v2.png") }
            <p class="after-caption">V2</p>
          </div>
          <div className="mockup-container">
            { renderImage("seatmaps-devices.png") }
          </div>
        </div>
      </div>
      <Footer nextProj={"get-together"} />
      <Marquee/>
    </main>
	)
}