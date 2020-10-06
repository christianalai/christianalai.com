import React, { useEffect } from "react"
import Header from "./header.js"
import Marquee from "./marquee.js"
import SEO from "./seo"
import "../styles/animated-link.css"
import "../styles/marquee.css"
import "../styles/global.css"
import "../styles/header.css"
import "../styles/index.css"
import "../styles/project-header.css"
import "../styles/insights-container.css"
import "../styles/blockfolio.css"
import "../styles/blockfolio-signal.css"
import "../styles/priceline.css"
import "../styles/get-together.css"
import "../styles/radar.css"
import "../styles/about.css"
import "../styles/kombucha.css"
import "../styles/link-styles.css"

import Cursor from '../animations/cursor';
// import {preloader} from '../animations/preloader';
// import LocomotiveScroll from 'locomotive-scroll';
// import Menu from '../animations/menu';

// TODO: FIX DOUBLE CLICK ON LINKS
export default function Index() {
  useEffect(() => {
    window.scrollTo(0, 0)
    // const menuEl = document.querySelector('.menu');
    // preload the images set as data attrs in the menu items
    
    // preloader('.menu__item').then(() => {
        // initialize the smooth scroll
        // const scroll = new LocomotiveScroll({el: menuEl, smooth: true});
    
        // initialize custom cursor
        const cursor = new Cursor(document.querySelector('.cursor'));

        // initialize menu
        // new Menu(menuEl);
    // });
  })


  return (
    <div>
      <SEO title="Christiana Lai" description="Portfolio of Christiana Lai, a Los Angeles-based product designer experienced with UX/UI design. Send an Email or connect on LinkedIn or Twitter." author="Christiana Lai" image="../images/gatsby-icon.png" />
      <Header/>
      <main>
        <div className="menu reveal">
          <a className="menu__item" href="/blockfolio">
            <span className="menu__item-text"><span className="menu__item-textinner">blockfolio</span></span>
            <span className="menu__item-sub">portfolio tracker</span>
          </a>
          <a className="menu__item" href="/blockfolio-signal">
            <span className="menu__item-text"><span className="menu__item-textinner">blockfolio signal</span></span>
            <span className="menu__item-sub">communications platform</span>
          </a>
          <a className="menu__item" href="/priceline">
            <span className="menu__item-text"><span className="menu__item-textinner">priceline</span></span>
            <span className="menu__item-sub">fare fam & seat selection</span>
          </a>
          <a className="menu__item" href="/get-together">
            <span className="menu__item-text"><span className="menu__item-textinner"><div className="concept">concept:</div>get together</span></span>
            <span className="menu__item-sub">professional networking IRL</span>
          </a>
          <a className="menu__item" href="/radar">
            <span className="menu__item-text"><span className="menu__item-textinner"><div className="concept">concept:</div>radar</span></span>
            <span className="menu__item-sub">Instagram x Trip planning</span>
          </a>
        </div>
      </main>
      <svg className="cursor" width="80" height="80" viewBox="0 0 80 80">
        <circle className="cursor__inner" cx="40" cy="40" r="20"/>
      </svg>
      <Marquee />
    </div>
  )
}