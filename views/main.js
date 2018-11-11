const html = require('choo/html');
const Nav = require('../components/Nav');


module.exports = view

function view (state, emit) {
  return html`
    <body class="avenir lh-copy bg-light-pink pa4">
      <header>
        ${state.cache(Nav, "Nav", state, emit)}
      </header>
      <main class="flex flex-column">
        <section class="flex flex-row w-100 pa4">
        <section class="flex flex-column w-100 w-50-l pa4 outline">
            <small class="b">DTD #002:</small>
            <h1 class="f4 f2-l fw7">NaN - <span class="i">Not a Number</span></h1>
            <p>In computing, NaN, standing for not a number, is a numeric data type value representing an undefined or unrepresentable value (Wikipedia). In many ways, data is meant to represent often unrepresentable features about the spaces, places, and people around us. This presents us with a problem - how are the fundamentally unquantifiable things, the things that should otherwise return a computational error statement - the NaN - actually being assigned numerical values that affect life in the city? Our theme this year is “Not a Number” to speak to the ways in which space and place are being transformed and shaped by the numbers that are meant to represent complexity in the everyday. We ask our artists to reflect on the stories within our city’s open data that speak to the undefined or unrepresentable value of the things that the data may be hiding.</p>
            <p><a> ↳ Submit a proposal</a></p>
        </section>
        <section class="flex flex-column w-100 w-50-l pa4 justify-center items-center">
          <h2 class="f3 f-subsubheadline i">...how are the fundamentally unquantifiable things, the things that should otherwise return a computational error statement - the NaN - actually being assigned numerical values that affect life in the city?</h2>
        </section>

        </section>
      </main>
      <footer></footer>
    </body>
  `
}