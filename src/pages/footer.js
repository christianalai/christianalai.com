import React from "react"
import { Link } from "gatsby"
import "../styles/footer.css"

export default function Footer(props) {
  const { 
    nextProj } = props;

  return (
    <div className="footer">
      {
        (nextProj === "home" ? 
          <Link to="/">Go back <span role="img" aria-label="house">🏠</span></Link> :
          <Link to={"/" + nextProj}>Next project <span role="img" aria-label="right-arrow">➡️</span></Link>
        )
      }
    </div>
  )
}
