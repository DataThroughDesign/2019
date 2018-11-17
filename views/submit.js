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
        <h1>Call for Proposals</h1>
        <p class="w-100 w-60-ns">Submit a proposal to give a talk, workshop, and/or project for DTD 2019.</p>
        <p class="w-100 w-60-ns">Please refer to the following sections for information about the themes for the open call</p>
        <ul>
          <li><a class="link black hover-bg-white underline" href="/exhibition">Exhibition</a></li>
          <li><a class="link black hover-bg-white underline" href="/talks">Talks</a></li>
          <li><a class="link black hover-bg-white underline" href="/workshops">Workshops</a></li>
        </ul>
        <p><a class="link black hover-bg-white outline pa2 bg-white" href="#">↳ Submit your proposal here</a></p>
      </div>

      <div class="w-100">
        <h2 class="w-100 w-60-ns">Grant Support for Participating Artists, Speakers, and Workshop Leaders</h2>
        <p class="w-100 w-60-ns">The DTD committee will award mini grants to support exhibition costs for the selected
          exhibiting artists. Support (TBD) will also be arranged for speakers and workshop facilitators.</p>
        <div class="overflow-auto">
          <table class="w-100 w-60-ns mw8" cellspacing="0">
            <thead>
              <tr class="stripe-dark">
                <th class="fw6 tl pa3 bg-white">Category</th>
                <th class="fw6 tl pa3 bg-white">Support Given</th>
              </tr>
            </thead>
            <tbody class="lh-copy">
              <tr class="stripe-dark">
                <td class="pa3">Exhibitor/Artist</td>
                <td class="pa3">$600 USD</td>
              </tr>
              <tr class="stripe-dark">
                <td class="pa3">Speaker/Talks</td>
                <td class="pa3">TBD</td>
              </tr>
              <tr class="stripe-dark">
                <td class="pa3">Workshop</td>
                <td class="pa3">TBD</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- <div class="w-100 w-50-ns pr2">
        <p>As part of DTD, we invite speakers across disciplines to present and facilitate discussion about the theme
          <span class="i"> Everything is a Proxy</span>.</p>
        <p>Proxies in data models are used when we are unable to capture the complexity of a phenomenon of interest. It
          is difficult and quite often impossible, for example, to quantify (or even qualify) things like happiness or
          livability, yet we try to model those concepts with data like number of trees or household income. The ways
          that these proxies come together to score our cities, our neighborhoods, our friends, and ourselves can be
          dangerous and misleading, so much so that they are highlighted as a critical component of what Cathy O’Neill
          calls,
          “Weapons of Math Destruction”.</p>
      </div>
      <div class="w-100 w-50-ns">
        <p>Proxies can also be fun and make you smile and act as a bridge between unconnectable things. In this series
          of talks, we ask our speakers
          to reflect on and share with us their stories and data projects that speak to the proxies of the
          unrepresentable value of our city and its citizens.</p>
        <p>We are lucky this year to have the following speakers share their experiences, insights, and work:</p>
        <ul class="">
          <li><a href="">Person</a>, <a href="">Talk Title</a> </li>
        </ul>
      </div> -->
    </section>
  </main>
  <footer class="flex flex-row-ns w-100 pa3 pa4-ns justify-between mt6 bt flex-wrap">
    <p class="f7">#DataThroughDesign19</p>
    <p class="f7">Built with ♥︎ by Joey Lee using Choo.js & Tachyons Css</p>
  </footer>
</body>
`
}