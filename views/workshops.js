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
        <h1>Workshops</h1>
      </div>
      <div class="w-100 w-50-ns pr2">
        <p><span class="i">Data Through Design</span> is as much about art as it is about education. We believe that civic engagement starts with building more ways to participate in shaping the city. </p>
      </div>
      <div class="w-100 w-50-ns">
        <p>As part of Open Data Week, we look forward to organizing a 1-2 workshops that speak to ways in which you can start working with NYC's open data, whether through visualization, analysis, data collection, and more!</p>
      </div>
    </section>
    <section class="flex flex-row-ns flex-column w-100 w-100-ns pa3 pa4-ns flex-wrap">
        <div class="w-100">
          <h1>2019 Workshops</h1>
        </div>
        <div class="w-100 w-80-ns pr2">
            <p>Workshops to be announced. Stay tuned!</p>
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