import React from "react"
import "../styles/project-header.css"

export default function ProjectHeader(props) {
  const { 
    title,
    subtitle,
    summary,
    opportunity,
    tasks } = props;

  return (
    <div className="project-header">
      <section className="project-header--title">
        <h4>{title}</h4>
        <h6>{subtitle}</h6>
      </section>
      <section className="project-header--summary">
        <p>{summary}</p>
      </section>
      <section className="project-header--sub">
        <div>
          <h6>OPPORTUNITY</h6>
          <p>{opportunity}</p>
        </div>
        <div>
          <h6>TASKS</h6>
          <p>{tasks}</p>
        </div>
      </section>
    </div>
	)
}