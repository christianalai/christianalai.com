import React, { useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Header from "./header.js"
import Footer from "./footer.js"
import Marquee from "./marquee.js"
import ProjectHeader from "./project-header.js"
import InsightsContainer from "./insights-container.js"

export default function Radar() {
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {extension: {regex: "/png/"}, relativeDirectory: {eq: "radar"}}) {
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
        title={"radar"}
        subtitle={"2018"}
        summary={"Planning trip itineraries doesn’t always start when you sit down to figure it all out. Oftentimes, discovery and planning can happen at any time. Radar is a personal conceptual exercise in figuring out how to ease the trip planning process using the widely used visual platform, Instagram."}
        opportunity={"Trip planning requires a lot of decision-making both before and during the trip and research indicates that people make quicker decisions based on visual information. So how might we leverage images sourced from Instagram to aid the trip planning process?"}
        tasks={"research, ideation, wireframing, prototyping, copywriting, user testing, visual design"}
      />
      <div className="radar project">
        <div className="behind-the-scenes grid grid-auto-fit">
          <div className="image-caption--caption">
            <h4 className="project-heading dark">bts</h4>
            <p>
            To get to know my target audience, I conducted user interviews with travelers that were in the 24-35 age range, had a limited disposable income, took at least one leisure trip per year, and either traveled solo or with a significant other.</p>
            <p>Based on their general travel experience, how they plan their itinerary, and their experience with technology, I was able to uncover insights based on common themes from my findings.</p>
          </div>
          { renderImage("affinity-map.png") }
        </div>

        <InsightsContainer
            insightOneTitle={"Be extra"}
            insightOneSummary={"Thinking back to their trip, users don’t regret their level of planning. Instead, all users wish that they had planned more."}
            insightTwoTitle={"Two types of people"}
            insightTwoSummary={"Active planners use multiple apps to plan the day-to-day while passive planners will just look at Instagram or blogs just prior to their trip."}
            insightThreeTitle={"Instagram influence"}
            insightThreeSummary={"Instagram is used as a travel planning solution for both the discovering and planning stage—as travel inspiration and to find out what to pack based on recent images. "}
          />
        <div className="description-container push-left">
          <h5 className="project-heading dark">competitive analysis</h5>
          <p className="feature-description">
          Based on the user interviews, I audited two apps that were frequently used for trip planning—TripAdvisor and Yelp. Lastly, although not an obvious competitor, I also took a look at Instagram and how it contributes to creating an itinerary.
          </p>
        </div>
        <div className="analysis-comparison">
          <div className="analysis-column">
            { renderImage("tripadvisor.png") }
            <div className="">
              <p>Pro</p>
              <p>LinkedIn is a popular and familiar company so any new feature would be an extension of its existing product and won’t require extensive user acquisition and orientation.</p>
            </div>
            <div className="con">
              <p>Con</p>
              <p>There’s no way to meet new people. Users can search for people but building a relationship requires several steps—the other person to accept the connection request, to respond to the message, and then to agree to meet. </p>
            </div>
          </div>

          <div className="analysis-column">
            { renderImage("yelp.png") }
            <div className="">
              <p>Pro</p>
              <p>LinkedIn is a popular and familiar company so any new feature would be an extension of its existing product and won’t require extensive user acquisition and orientation.</p>
            </div>
            <div className="con">
              <p>Con</p>
              <p>There’s no way to meet new people. Users can search for people but building a relationship requires several steps—the other person to accept the connection request, to respond to the message, and then to agree to meet. </p>
            </div>
          </div>

          <div className="analysis-column">
            { renderImage("instagram.png") }
            <div className="">
              <p>Pro</p>
              <p>LinkedIn is a popular and familiar company so any new feature would be an extension of its existing product and won’t require extensive user acquisition and orientation.</p>
            </div>
            <div className="con">
              <p>Con</p>
              <p>There’s no way to meet new people. Users can search for people but building a relationship requires several steps—the other person to accept the connection request, to respond to the message, and then to agree to meet. </p>
            </div>
          </div>
        </div>

        <div className="description-container push-left">
          <h4 className="project-heading dark">key opportunities</h4>
          <div className="feature-description">
          <p>
            With a particular user archetype in mind and understanding the journey a user goes through when planning a trip, I asked the following questions:
          </p>
          <p>
            1. What can be done with already-saved images?
            <br></br>
            2. What happens to a user’s itinerary when there’s a hitch?
            <br></br>
            3. What if the user needs more inspiration or just has no idea
          </p>
          </div>
        </div>
        
        <div className="user-persona grid">
          { renderImage("user-persona.png") }
        </div>

        <div className="user-journey grid">
          { renderImage("user-journey.png") }
        </div>

        <div className="task-flows">
          <h5 className="project-heading dark push-left">task flows</h5>
          { renderImage("task-flow-1.png") }
          { renderImage("task-flow-2.png") }
        </div>

        <div className="radar-goods push-left">
          <h4 className="project-heading dark">the goods</h4>
          <div className="radar-wires grid grid-2">
            { renderImage("wires-1.png") }
            { renderImage("wires-2.png") }
          </div>
        </div>
        <div className="radar-mockups mockup-container">
          <div className="grid grid-4">
              { renderImage("mockup-home.png") }
              { renderImage("mockup-search.png") }
              { renderImage("mockup-bookmarks.png") }
              { renderImage("mockup-profile-favorited.png") }
              { renderImage("mockup-profile-search.png") }
              { renderImage("mockup-profile-options.png") }
              { renderImage("mockup-site-1.png") }
              { renderImage("mockup-site-options.png") }
              { renderImage("mockup-itinerary.png") }
              { renderImage("mockup-itinerary-add-1.png") }
              { renderImage("mockup-itinerary-add-2.png") }
          </div>
        </div>
        <div className="conclusion-container">
          <div className="mockup-description"> 
            <h6 className="mockup-header">next steps</h6>
            <ul>
              <li>Sharing capabilities</li>
              <li>Connecting with friends and seeing what’s on their radar</li>
              <li>Using machine learning to generate more personalized itineraries based on what the user has already favorited or created</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer nextProj={"home"} />
      <Marquee/>
    </main>
	)
}