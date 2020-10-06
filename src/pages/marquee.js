import React from "react"
import downloadResume from "../images/Resume.pdf"
import "../styles/marquee.css"

export default function Marquee() {
	return (
		<div className="marquee">
      <div className="marquee-container">
        <div className="marquee-one">
          Looking for a cool product to work on but an even cooler team to work with. say what’s up<span role="img" aria-label="">&nbsp;🤙&nbsp;</span>
          hello@christianalai.com&nbsp;
          <a href="https://www.linkedin.com/in/christianalai">linkedin</a>
          <a href={downloadResume} download>resume</a>
          <a href="https://twitter.com/clai1018">twitter</a>
        </div>
        <div className="marquee-two">
          Looking for a cool product to work on but an even cooler team to work with. say what’s up<span role="img" aria-label="">&nbsp;🤙&nbsp;</span>
          hello@christianalai.com&nbsp;
          <a href="https://www.linkedin.com/in/christianalai">linkedin</a>
          <a href="../images/Resume.pdf" target="_blank">resume</a>
          <a href="https://twitter.com/clai1018">twitter</a>
        </div>
        <div className="marquee-three">
          Looking for a cool product to work on but an even cooler team to work with. say what’s up<span role="img" aria-label="">&nbsp;🤙&nbsp;</span>
          hello@christianalai.com&nbsp;
          <a href="https://www.linkedin.com/in/christianalai">linkedin</a>
          <a href="../images/Resume.pdf" target="_blank">resume</a>
          <a href="https://twitter.com/clai1018">twitter</a>
        </div>
        <div className="marquee-four">
          Looking for a cool product to work on but an even cooler team to work with. say what’s up<span role="img" aria-label="">&nbsp;🤙&nbsp;</span>
          hello@christianalai.com&nbsp;
          <a href="https://www.linkedin.com/in/christianalai">linkedin</a>
          <a href="../images/Resume.pdf" target="_blank">resume</a>
          <a href="https://twitter.com/clai1018">twitter</a>
        </div>
      </div>
    </div>
	)
}
