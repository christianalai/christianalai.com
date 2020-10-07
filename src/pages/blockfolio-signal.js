import React, { useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Header from "./header.js"
import Footer from "./footer.js"
import Marquee from "./marquee.js"
import ProjectHeader from "./project-header.js"

export default function BlockfolioSignal() {
  useEffect(() => {
    window.scrollTo(0, 0)
  })

  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {extension: {regex: "/png/"}, relativeDirectory: {eq: "signal"}}) {
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
        title={"blockfolio signal"}
        summary={"Blockfolio seeks to leverage its reach to support the crypto ecosystem and to become a resource for newcomers and experts alike. To achieve this, the team sought to align themselves with reputable token teams to promote Blockfolio’s value proposition while simultaneously reducing the noise and shilling that is notorious in the space."}
        opportunity={"How might we use our reach to improve the blockchain space?"}
        tasks={"user research, copywriting, visual design"}
      />
      <div className="signal project">
        <div className="signal-introduction grid grid-auto-fit">
          <div className="image-caption--intro-caption caption--top">
            <p>One way to help the blockchain ecosystem is to support token team and token holder relationships. With the most interconnections in the blockchain space, Blockfolio leverages this advantage with the Blockfolio Signal platform.</p>
            <p>Aside from providing a service to the crypto ecosystem, the platform would be able to solve two issues—How do we become the top resource for crypto experts? And how do we further instill trust in current and potential users?</p>
          </div>
          <div className="image-caption--token_graph">
            { renderImage("token_graph.png") }
          </div>
          <div className="image-caption--intro-caption caption--bottom">
            <p>One way to help the blockchain ecosystem is to support token team and token holder relationships. With the most interconnections in the blockchain space, Blockfolio leverages this advantage with the Blockfolio Signal platform.</p>
            <p>Aside from providing a service to the crypto ecosystem, the platform would be able to solve two issues—How do we become the top resource for crypto experts? And how do we further instill trust in current and potential users?</p>
          </div>
        </div>

        <div className="solution-header">
          <h4 className="project-heading light">the goods</h4>
          <p>Blockfolio Signal provides noise-free development and project updates directly from token teams. Token teams were initially limited in how they posted their Signals, largely relying on Blockfolio to post at a specific time. This wasn’t a sustainable strategy since Blockfolio supported many teams globally. I worked on creating the Blockfolio Signal dashboard on the browser and in the app.</p>
        </div>
        <div className="project-insights goals">
          <ul className="grid grid-auto-fit">
            <li className="goals-column">
              <p className="title">User goals</p>
              <p className="summary">For a first-time user, we wanted the dashboard to be:
                <ul>
                  <li>Intuitive and easy to use; familiar</li>
                  <li>Trustworthy and doesn’t induce anxiety when posting a Signal</li>
                </ul>
              </p>
              <p>For an experienced user:
                <ul>
                  <li>They can quickly use the dashboard</li>
                  <li>Draw inspiration; be able to compose Signals based on previous or other team’s Signals</li>
                </ul>
              </p>
            </li>
            <li className="goals-column">
              <p className="title">Business goals</p>
              <p className="summary">
                <ul>
                  <li>For users to post more frequently</li>
                  <li>For users to post quality content</li>
                  <li>Less dependant on Blockfolio; reduce handholding</li>
                  <li>Create a feedback loop</li>
                  <li>Create extensible posting module</li>
                  <li>Provide ability for users to broadcast across multiple platforms</li>
                  <li>Users can view metrics</li>
                </ul>
              </p>
            </li>
          </ul>
        </div>

        <div className="mockup-container newsfeed">
          <h6 className="mockup-header">Wireframe 1</h6>
          <p className="mockup-description">A layout that users would be familiar with is the Newsfeed architecture which would allow users to be able to view other Signals as they composed their own post.</p>
          <div className="mockup-images">
            { renderImage("signal-dashboard-mockup-1.png") }
            { renderImage("signal-dashboard-mockup-2.png") }
          </div>
        </div>

        <div className="mockup-container dashboard">
          <h6 className="mockup-header">Wireframe 2</h6>
          <p className="mockup-description">Another idea was to try a dashboard where the focus was on composing the Signal. With this layout, the idea was to create a wizard of sorts but if token teams were posting frequently, it would become tedious to have to go through the steps every time.</p>
          <div className="mockup-images">
            { renderImage("signal-dashboard-mockup-3.png") }
            { renderImage("signal-dashboard-mockup-4.png") }
          </div>
        </div>

        <div className="mockup-container prod-web">
          <h6 className="mockup-header">Blockfolio Signal on the web</h6>
          <p className="mockup-description">As we fleshed out what would be useful for the user, we settled on a dashboard design with the composer in a lightbox so that we keep the user in the context of the current screen; making the Signal-composing experience simple and continuous.</p>
          <div className="mockup-images prod">
            { renderImage("signal-dashboard-prod-1.png") }
            { renderImage("signal-dashboard-prod-1-mobile.png") }
          </div>
          <div className="mockup-images prod">
            { renderImage("signal-dashboard-prod-2.png") }
            { renderImage("signal-dashboard-prod-2-mobile.png") }
          </div>
          <div className="mockup-images prod">
            { renderImage("signal-dashboard-prod-3.png") }
            { renderImage("signal-dashboard-prod-3-mobile.png") }
          </div>
        </div>

        <div className="mockup-container prod-app">
          <h6 className="mockup-header">Blockfolio Signal in the app</h6>
          <p className="mockup-description">For the the in-app experience, the flow should mirror the web experience so that the user can simply start composing Signals without learning a new flow.</p>
          <div className="mobile-prod">
            <div className="row">
              { renderImage("mobile-signal-1.png") }
              { renderImage("mobile-signal-2.png") }
              { renderImage("mobile-signal-3.png") }
              { renderImage("mobile-signal-4.png") }
            </div>
            <div className="row">
              { renderImage("mobile-signal-5.png") }
              { renderImage("mobile-signal-6.png") }
              { renderImage("mobile-signal-7.png") }
              { renderImage("mobile-signal-8.png") }
            </div>
            <div className="row">
              { renderImage("mobile-signal-9.png") }
              { renderImage("mobile-signal-10.png") }
              { renderImage("mobile-signal-11.png") }
              { renderImage("mobile-signal-12.png") }
            </div>
          </div>
        </div>
      </div>
      <Footer nextProj={"priceline"} />
      <Marquee/>
    </main>
	)
}