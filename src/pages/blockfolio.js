import React, { useEffect, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Carousel from 'react-bootstrap/Carousel'
import Header from "./header.js"
import Footer from "./footer.js"
import Marquee from "./marquee.js"
import ProjectHeader from "./project-header.js"
import InsightsContainer from "./insights-container.js"
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Blockfolio() {
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {extension: {regex: "/png/"}, relativeDirectory: {eq: "blockfolio"}}) {
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

  function ControlledCarousel1() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect} interval={null} role="listbox">
        <Carousel.Item>
          <Carousel.Caption>
            <p className="">gradient vs. flat</p>
          </Carousel.Caption>
          { renderImage("carousel-gradientflat.png") }
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption>
            <p className="">generic vs. novel theme</p>
          </Carousel.Caption>
          { renderImage("carousel-novelgeneric.png") }
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption>
            <p className="">market architecture</p>
          </Carousel.Caption>
          { renderImage("carousel-markets.png") }
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption>
            <p className="">peeking card vs. pagination</p>
          </Carousel.Caption>
          { renderImage("carousel-peekingpagination.png") }
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption>
            <p className="">separated news vs. combined news</p>
          </Carousel.Caption>
          { renderImage("carousel-separatecombined.png") }
        </Carousel.Item>
      </Carousel>
    );
  }
  
  function ControlledCarousel2() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel className="carousel-fade" activeIndex={index} onSelect={handleSelect} interval={null} role="listbox" slide="false">
        <Carousel.Item>
          <div className="before-image">
            { renderImage("comp-v1-1.png") }
          </div>
          <div className="after-image">
            { renderImage("comp-v2-1.png") }
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="before-image">
            { renderImage("comp-v1-2.png") }
          </div>
          <div className="after-image">
            { renderImage("comp-v2-2.png") }
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="before-image">
            { renderImage("comp-v1-3.png") }
          </div>
          <div className="after-image">
            { renderImage("comp-v2-3.png") }
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="before-image">
            { renderImage("comp-v1-4.png") }
          </div>
          <div className="after-image">
            { renderImage("comp-v2-4.png") }
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="before-image">
            { renderImage("comp-v1-5.png") }
          </div>
          <div className="after-image">
            { renderImage("comp-v2-5.png") }
          </div>
        </Carousel.Item>
      </Carousel>
    );
  }

// TODO: A lot of one-off classes here; need to organize better
	return (
    <main>
      <Header/>
      <ProjectHeader
        title={"blockfolio portfolio tracker overview"}
        summary={"Created in 2014, Blockfolio was the premiere portfolio tracking app for retail investors in crypto. Its no-frills design initially satisfied the needs of its users but after the bull run in 2017, the savviness of its users required a more robust platform."}
        opportunity={"How might we be an easy-to-use resource for novice traders while still providing a robust feature set for experienced traders?"}
        tasks={"user research, testing, copywriting, visual design"}
      />
      <div className="blockfolio project">
        <div className="push-left">
          <h4 className="project-heading dark">bts</h4>
          <div className="affinity grid grid-auto-fit">
            <div className="image-caption--affinity-map">
              { renderImage("affinity-map.png") }
            </div>
            <p className="image-caption--caption">To gain insight into our current user base, I gathered findings through in-person user interviews and popular forums.</p>
          </div>
        </div>

        <InsightsContainer
          insightOneTitle={"Mind the gap"}
          insightOneSummary={"Experienced investors are finding gaps in our product offering so they’re either switching to another app or supplementing with another tool.\n\nHow do we become the mainstay while also maintaining app retention?"}
          insightTwoTitle={"Digest it for me"}
          insightTwoSummary={"Novice users rely heavily on people they trust or influencers they know because it’s easier than reading tech-heavy online resources and whitepapers.\n\nHow do we become the top resource for crypto experts?"}
          insightThreeTitle={"Safety first"}
          insightThreeSummary={"There are misconceptions and security concerns about Blockfolio and user data.\n\nHow do we further instill trust in current and potential users?"}
        />

        <div className="demographics-container grid grid-auto-fit">
          <p className="image-caption--caption caption--top">Based on stats provided by <a href="https://coin.dance/stats" target="_blank" rel="noreferrer">coin.dance</a> and my user research, I was able to come up with the personas that best represented our user base and the crypto community.</p>
          <div className="image-caption--demographics">
            { renderImage("demographics.png") }
          </div>
          <p className="image-caption--caption caption--bottom">Based on stats provided by <a href="https://coin.dance/stats" target="_blank" rel="noreferrer">coin.dance</a> and my user research, I was able to come up with the personas that best represented our user base and the crypto community.</p>
        </div>

        <div className="user-personas-container">
          <h5 className="project-heading dark push-left">user personas</h5>
          <div className="grid user-personas--images">
            <div>{ renderImage("user-persona-1.png") }</div>
            <div>{ renderImage("user-persona-2.png") }</div>
            <div>{ renderImage("user-persona-3.png") }</div>
            <div>{ renderImage("user-persona-4.png") }</div>
          </div>
        </div>
        <div className="solution-header">
          <h3 className="project-heading light">the goods</h3>
          <p>At a minimum, we needed to overhaul the look of the app to appeal to new entrants in crypto. To retain our more experienced traders, however, we needed to fill in the gaps with features that would round out the portfolio tracking experience.</p>
        </div>

        <div className="preference grid grid-4 offset-top push-left">
          <div className="image-caption--caption caption--top">
            <p>
              By issuing preference tests to our users, we were able to better identify the direction to take Blockfolio 2.0.
            </p>
            <p>
              Some tests are displayed here.
            </p>
          </div>
          <div className="carousel-preference-test">
            <ControlledCarousel1 />
          </div>
          <p className="image-caption--caption caption--bottom">
          By issuing preference tests to our users, we were able to better identify the direction to take Blockfolio 2.0. Some tests are displayed here.
          </p>
        </div>
        <div className="before-after-container">
          <h5 className="project-heading dark push-left">blockfolio 2.0</h5>
          <div className="carousel-before-after">
            <p className="before-caption">V1</p>
            <p className="after-caption">V2</p>
            <ControlledCarousel2 />
          </div>
        </div>
        <div fluid className="new-features-container push-left">
          <div className="feature-description">
            <p>After redesigning the interface of the app, our next step was to come up with ways to capture more-experienced investors and figuring out what functionality was needed to retain these users.</p>
            <p>Through user interviews and gathering details from customer service, the following features were implemented:</p>
          </div>
          <div className="new-features-images grid grid-auto-fit">
            <div>
              { renderImage("new-home.png") }
              <p>Multiple portfolios</p>
            </div>
            <div>
              { renderImage("new-exchange-connections.png") }
              <p>Exchange connections</p>
            </div>
            <div>
              { renderImage("new-signal.png") }
              <p>Technical digest</p>
            </div>
            <div>
              { renderImage("new-markets.png") }
              <p>Markets overview</p>
            </div>
          </div>
        </div>
        <div className="impact-container push-left">
          <h6 className="subheader">IMPACT</h6>
          <div className="quotation-mark">{ renderImage("quote.png") }</div>
          <div className="testimonials-container grid grid-auto-fit">
            <div className="testimonial">
              <h6>Blockfolio 2.0 Takes Crypto App Usability to New Levels</h6>
              <p>The beta app proves that the team has been working hard on the interface. Everything has been made cleaner, more efficient, and easier to read than the app’s predecessors, from the font choice to the shades used for candlesticks.</p>
              <p className="attribution">&mdash; Jon Rice from Crypto Briefing</p>
            </div>
            <div className="testimonial">
              <h6>Wow 2.0 is</h6>
              <p>Fantastic! I love this app and use it daily! They even asked the community over the past few months what we wanted for changes!</p>
              <p className="attribution">&mdash; B-S-G_JUD from App Store</p>
            </div>
            <div className="testimonial">
              <h6>Fantastic app</h6>
              <p>User interface is excellent. Super fast and with a lot of very interesting features. Just love it and recommend to anyone.</p>
              <p className="attribution">&mdash; LFCOHEN from App Store</p>
            </div>
          </div>
        </div>
        <div className="metrics-container mockup-container">
          <div className="metric">
            <h6 className="subheader">NEW USERS</h6>
            <p>The initial rollout of Blockfolio 2.0 saw a surge in new users and as expected, the numbers leveled out as we continued to iterate.
            </p>
            <div className="metric-graph">
              { renderImage("metric-new-users.png") }
            </div>
          </div>
          <div className="metric">
            <h6 className="subheader">DAU</h6>
            <p>With our existing user base, engagement held fairly steady which is a testament to strong brand recognition which drove retention as a result.
            </p>
            <div className="metric-graph">
              { renderImage("metric-daus.png") }
            </div>
          </div>
        </div>
      </div>
      <Footer nextProj={"blockfolio-signal"} />
      <Marquee/>
    </main>
	)
}