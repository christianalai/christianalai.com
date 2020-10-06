const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/christianalai/Personal/git/christianalai.com/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/christianalai/Personal/git/christianalai.com/src/pages/about.js"))),
  "component---src-pages-blockfolio-js": hot(preferDefault(require("/Users/christianalai/Personal/git/christianalai.com/src/pages/blockfolio.js"))),
  "component---src-pages-blockfolio-signal-js": hot(preferDefault(require("/Users/christianalai/Personal/git/christianalai.com/src/pages/blockfolio-signal.js"))),
  "component---src-pages-footer-js": hot(preferDefault(require("/Users/christianalai/Personal/git/christianalai.com/src/pages/footer.js"))),
  "component---src-pages-get-together-js": hot(preferDefault(require("/Users/christianalai/Personal/git/christianalai.com/src/pages/get-together.js"))),
  "component---src-pages-header-js": hot(preferDefault(require("/Users/christianalai/Personal/git/christianalai.com/src/pages/header.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/christianalai/Personal/git/christianalai.com/src/pages/index.js"))),
  "component---src-pages-insights-container-js": hot(preferDefault(require("/Users/christianalai/Personal/git/christianalai.com/src/pages/insights-container.js"))),
  "component---src-pages-kombucha-js": hot(preferDefault(require("/Users/christianalai/Personal/git/christianalai.com/src/pages/kombucha.js"))),
  "component---src-pages-marquee-js": hot(preferDefault(require("/Users/christianalai/Personal/git/christianalai.com/src/pages/marquee.js"))),
  "component---src-pages-priceline-js": hot(preferDefault(require("/Users/christianalai/Personal/git/christianalai.com/src/pages/priceline.js"))),
  "component---src-pages-project-header-js": hot(preferDefault(require("/Users/christianalai/Personal/git/christianalai.com/src/pages/project-header.js"))),
  "component---src-pages-radar-js": hot(preferDefault(require("/Users/christianalai/Personal/git/christianalai.com/src/pages/radar.js"))),
  "component---src-pages-seo-js": hot(preferDefault(require("/Users/christianalai/Personal/git/christianalai.com/src/pages/seo.js")))
}

