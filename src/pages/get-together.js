import React, { useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Header from "./header.js"
import Footer from "./footer.js"
import Marquee from "./marquee.js"
import ProjectHeader from "./project-header.js"
import InsightsContainer from "./insights-container.js"

export default function GetTogether() {
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {extension: {regex: "/png/"}, relativeDirectory: {eq: "get-together"}}) {
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
        title={"get together"}
        subtitle={"2018"}
        summary={"Get Together leverages LinkedIn’s existing product to create a new way for professionals to network, by transforming online connections into real-life relationships. This is a conceptual project that I completed as part of a team at Pratt in 2018."}
        opportunity={"Using LinkedIn to connect online is the simplest and quickest way to network, but frequently those relationships remain superficial. How might we create a LinkedIn feature to help users expand their networks in a meaningful way?"}
        tasks={"research, ideation, wireframing, prototyping, copywriting, user testing, visual design"}
      />
      <div className="get-together project">
        <div className="behind-the-scenes grid grid-auto-fit">
          <div className="image-caption--caption">
            <h4 className="project-heading dark">bts</h4>
            <p>
              To empathize with young professionals we conducted user interviews to understand how they network. We used an affinity map to plot our observations onto a timeline, group them into themes, and we extracted the following insights.
            </p>
          </div>
          { renderImage("affinity-map.png") }
        </div>

        <InsightsContainer
            insightOneTitle={"All about who you know"}
            insightOneSummary={"These days, professionals recognize that building relationships with relevant people is increasingly important but social media and networking events have their limitations."}
            insightTwoTitle={"Only skin deep"}
            insightTwoSummary={"Never before has connecting with people been so easy with the internet but how many of those relationships are meaningful? With social media, online connections are effortless but unless both parties are interested in meeting IRL, users just end up with a lot of superficial relationships."}
            insightThreeTitle={"In good company"}
            insightThreeSummary={"Since events happen in person, attendees are better positioned to engage in meaningful ways. However, the barrier to entry is high with interviewees expressing reservations about real-life networking; mentioning they would opt out of attending unless they had a companion to go with. "}
          />
        <div className="description-container push-left">
          <h5 className="project-heading dark">competitive analysis</h5>
          <p className="feature-description">
            To build a better solution, we looked at the pros and cons of LinkedIn’s current product, as well as that of a direct and indirect competitor—Shapr and Meetup. We focused on how people use these tools to expand their  network and whether it’s done online or in person.
          </p>
        </div>
        <div className="analysis-comparison grid grid-auto-fit">
          <div className="analysis-column">
            { renderImage("linkedin.png") }
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
            { renderImage("shapr.png") }
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
            { renderImage("meetup.png") }
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
          <h4 className="project-heading dark">user personas</h4>
          <p className="feature-description">
            We crafted two user personas to guide our design process—a young professional trying to switch careers and a more experienced professional looking to expand his network and provide advice to beginners.
          </p>
        </div>
        
        <div className="user-persona grid">
          { renderImage("user-persona-1.png") }
          { renderImage("user-persona-2.png") }
        </div>

        <div className="solution-header grid">
          <h4 className="project-heading light">the goods</h4>
          <div className="solution-summary">
            <p className="solution-summary--top">
              Get Together helps professionals discover and connect with new people rather than people they already know. We accomplish this in two steps:
            </p>
            <div className="solution-steps">
              <div className="step-container">
                <div className="number">1</div>
                <p>Help users connect with other people with similar interests and goals</p>
              </div>
              <div className="step-container">
                <div className="number">2</div>
                <p>Encourage meeting in person by promoting events relevant to their interests</p>
              </div>
            </div>
            <p className="solution-summary--bottom">
              By promoting an actionable activity after connecting online, the user should feel less overwhelmed about “real-life networking” because they’ll have a companion to attend the event with.
            </p>
          </div>
        </div>

        <div className="entry-point mockup-container grid grid-2">
          <div className="summary-container">
            <div className="mockup-description">
              <h6 className="mockup-header">entry point</h6>
              <p>Adhering to LinkedIn’s design system, we housed this feature inside the Dashboard. By making it an opt-in feature, users who choose to use it will enter with the intention of meeting new people, which should discourage empty connections.</p>
            </div>
          </div>
          <div className="mockup-images">
            { renderImage("mockup-1.png") }
          </div>
        </div>

        <div className="mockup-container triptych">
          <div className="mockup-images grid grid-3">
            { renderImage("mockup-2.png") }
            { renderImage("mockup-3.png") }
            { renderImage("mockup-4.png") }
          </div>
          <div className="mockup-description"> 
            <h6 className="mockup-header">preferences</h6>
            <p>When accessed for the first time, the user is asked to fill out their preferences. Designing the Interests section was particularly challenging because we needed to communicate to the user that the solution is not only asking for the traits that they possess but also for the traits of the people they want to meet.</p>
          </div>
        </div>

        <div className="entry-point mockup-container grid grid-2">
          <div className="summary-container">
            <div className="mockup-description"> 
              <h6 className="mockup-header">mentoring</h6>
              <p>If the user has two or more years of experience, the mentor option is enabled and turning it on adds a badge to their profile. This indicator lets young professionals see who is available to provide advice and allows experienced professionals the opportunity to show that they are willing to help.</p>
            </div>
          </div>
          <div className="mockup-images">
            { renderImage("mockup-5.png") }
          </div>
        </div>

        <div className="mockup-container triptych">
          <div className="mockup-images grid grid-3">
            { renderImage("mockup-6.png") }
            { renderImage("mockup-7.png") }
            { renderImage("mockup-8.png") }
          </div>
          <div className="mockup-description"> 
            <h6 className="mockup-header">discover people</h6>
            <p>Discover People is the core component of Get Together. Here is where the user can discover relevant people to start building a relationship with. The people shown here are based on the preferences the user set in the onboarding flow with the added personalization of showing people most similar to the user. Instead of implementing the “swipe, match, chat” flow, we decided to display multiple people to keep it professional.</p>
            <p>The profile contains information specific to Get Together and is where we start promoting events as a way to meet in real life. We make it as easy as possible for the user to make plans by providing suggestions based on mutual interests and prioritizing any event where the other party indicated they were interested in attending.</p>
          </div>
        </div>

        <div className="mockup-container triptych">
          <div className="mockup-images grid grid-3">
            { renderImage("mockup-9.png") }
            { renderImage("mockup-10.png") }
            { renderImage("mockup-11.png") }
          </div>
          <div className="mockup-description"> 
            <h6 className="mockup-header">discover people</h6>
            <p>Tapping “Start Conversation” opens a chat with a panel displaying the same suggested events as previous screens. This not only keeps them top-of-mind but also provides the user with a convenient way to view more information about the event or share it with the other party.</p>
          </div>
        </div>

        <div className="mockup-container triptych">
          <div className="mockup-images grid grid-3">
            { renderImage("mockup-12.png") }
            { renderImage("mockup-13.png") }
            { renderImage("mockup-14.png") }
          </div>
          <div className="mockup-description"> 
            <h6 className="mockup-header">discover events</h6>
            <p>Discover Events is the complement of Discover People where the user finds an event first and then a companion to attend with if they are anxious about going alone. We highlight users who are interested in the specific event and prioritize those most similar to the user to promote meeting in real life.</p>
          </div>
        </div>
        <div className="conclusion-container">
          <div className="mockup-description"> 
            <h6 className="mockup-header">next steps</h6>
            <p>Considering the importance of events, the next step is ensuring there’s enough of them for varying interests by building a tool for users to create their own events. We also want to strengthen the social aspect by integrating the groups feature so multiple users can stay in contact.</p>
          </div>
          <div className="mockup-description"> 
            <h6 className="mockup-header">conclusion</h6>
            <p>Working on Get Together has been an interesting exploration into how networking, an inherently social activity, has both changed and stayed the same in the face of technology. The most well-known example of such technology is LinkedIn, whose mission is to connect the world’s professionals. By most metrics, they’ve been successful but we believe helping users connect with people they’ve already met is only half the solution. The other half is helping users discover people worth meeting.</p>
          </div>
        </div>
      </div>
      <Footer nextProj={"radar"} />
      <Marquee/>
    </main>
	)
}