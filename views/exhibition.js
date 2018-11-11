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
      <div class="w-100">
        <h1>DTD #002:<span class="i">
            <h2>NaN - <span>Not a Number</span></h2>
          </span></h1>
      </div>

      <div class="w-100 w-50-ns pr2">
        <p>In computing, NaN, standing for not a number, is a numeric data type value representing an undefined or
          unrepresentable value (Wikipedia). In many ways, data is meant to represent often unrepresentable features
          about the spaces, places, and people around us. This presents us with a problem - how are the fundamentally
          unquantifiable things, the things that should otherwise return a computational error statement - the NaN -
          actually being assigned numerical values that affect life in the city?</p>
      </div>
      <div class="w-100 w-50-ns">
        <p>Our theme this year is “Not a Number”
          to speak to the ways in which space and place are being transformed and shaped by the numbers that are meant
          to represent complexity in the everyday. We ask our artists to reflect on the stories within our city’s open
          data that speak to the undefined or unrepresentable value of the things that the data may be hiding.</p>
      </div>
    </section>
    <section class="flex flex-row-ns flex-column w-100 w-100-ns pa3 pa4-ns flex-wrap">
      <div class="w-100">
        <h1>Commissioned Artists</h1>
      </div>
      <div class="w-100 w-80-ns pr2">
        <p>Interested to be be commissioned for DTD'19? <a href="/submit">Submit a proposal!</a></p>
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

    <section class="flex flex-row-ns flex-column w-100 w-100-ns pa3 pa4-ns flex-wrap">
      <div class="w-100 dn">
        <h1>Exhibition 2019</h1>
        <p>Images and video from opening night and project documentation.</p>
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