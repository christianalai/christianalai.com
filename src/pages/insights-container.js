import React from "react"
import "../styles/insights-container.css"

export default function InsightsContainer(props) {
  const {
    insightOneTitle,
    insightOneSummary,
    insightTwoTitle,
    insightTwoSummary,
    insightThreeTitle,
    insightThreeSummary } = props;

  return (
    <div className="project-insights">
      <h5 className="project-heading">key insights</h5>
      <ul className="grid grid-auto-fit">
        <li>
          <p className="title">{insightOneTitle}</p>
          <p className="summary">{insightOneSummary}</p>
        </li>
        <li>
          <p className="title">{insightTwoTitle}</p>
          <p className="summary">{insightTwoSummary}</p>
        </li>
        <li>
          <p className="title">{insightThreeTitle}</p>
          <p className="summary">{insightThreeSummary}</p>
        </li> 
      </ul>
    </div>
	)
}