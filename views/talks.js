var html = require('choo/html')

const Nav = require('../components/Nav');

module.exports = view

function view (state, emit) {
return html`

<body class="avenir lh-copy bg-light-pink pa4">
  <header>
    ${state.cache(Nav, "Nav", state, emit)}
  </header>
  <main class="flex flex-column">
    <section class="flex flex-row-ns flex-column w-100 w-100-ns pa3 pa4-ns flex-wrap">
      <div class="w-100 w-100-ns">
        <h1>Talk Series: Everything is a Proxy</h1>
      </div>
      <div class="w-100 w-50-ns pr2">
        <p>As part of DTD, we invite speakers across disciplines to present and facilitate discussion about the theme
          <span class="i"> Everything is a Proxy</span>.</p>
          <p>Proxies in data models are used when we are unable to capture the complexity of a phenomenon of interest. It
              is difficult and quite often impossible, for example, to quantify (or even qualify) things like happiness or
              livability, yet we try to model those concepts with data like number of trees or household income. The ways
              that these proxies come together to score our cities, our neighborhoods, our friends, and ourselves can be
              dangerous and misleading, so much so that they are highlighted as a critical component of what Cathy O’Neill calls,
              “Weapons of Math Destruction”.</p>
      </div>
      <div class="w-100 w-50-ns">
          <p>Proxies can also be fun and make you smile and act as a bridge between unconnectable things. In this series of talks, we ask our speakers
            to reflect on and share with us their stories and data projects that speak to the proxies of the
            unrepresentable value of our city and its citizens.</p>
        </div>
    </section>
    <section class="flex flex-row-ns flex-column w-100 w-100-ns pa3 pa4-ns flex-wrap">
        <div class="w-100">
          <h1>2019 Talks</h1>
        </div>
        <div class="w-100 w-80-ns pr2">
          <p>Interested to give a talk for DTD'19? <a href="/submit">Submit a proposal!</a></p>
        </div>
  
        <div class="w-100 w-80-ns pr2 dn">
          <p>We are proud to present the work of the following artists. Our artists come from backgrounds ranging from
            fine arts, engineering, urban planning, and more.</p>
          <ul>
            <li><a href="">Artist</a> <a href="#">name of project</a></li>
            <li><a href="">Artist</a> <a href="#">name of project</a></li>
          </ul>
        </div>
  
      </section>
  </main>
  <footer class="flex flex-row-ns w-100 pa3 pa4-ns justify-between mt6 bt flex-wrap">
    <p class="f7">#DataThroughDesign19</p>
    <p class="f7">Built with ♥︎ by Joey Lee using Choo.js & Tachyons Css</p>
  </footer>
</body>
`
}