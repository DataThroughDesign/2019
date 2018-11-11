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
    <section class="flex flex-row-ns w-100 pa3 pa4-ns flex-column-reverse flex-wrap-reverse">
      <section class="flex flex-column w-100 w-50-l pa4-ns pa2 outline">
        <small class="b">DTD #002:</small>
        <h1 class="f4 f2-l fw7">NaN - <span class="i">Not a Number</span></h1>
        <p>In computing, NaN, standing for not a number, is a numeric data type value representing an undefined or
          unrepresentable value (Wikipedia). In many ways, data is meant to represent often unrepresentable features
          about the spaces, places, and people around us. This presents us with a problem - how are the fundamentally
          unquantifiable things, the things that should otherwise return a computational error statement - the NaN -
          actually being assigned numerical values that affect life in the city? Our theme this year is “Not a Number”
          to speak to the ways in which space and place are being transformed and shaped by the numbers that are meant
          to represent complexity in the everyday. We ask our artists to reflect on the stories within our city’s open
          data that speak to the undefined or unrepresentable value of the things that the data may be hiding.</p>
        <p><a> ↳ Submit a proposal</a></p>
      </section>
      <section class="flex flex-column w-100 w-50-l pa4-ns pa2 justify-center items-center">
        <h2 class="f5 f3-ns f-subsubheadline i">...how are the fundamentally unquantifiable things, the things that should
          otherwise return a computational error statement - the NaN - actually being assigned numerical values that
          affect life in the city?</h2>
      </section>
    </section>
  <section class="flex flex-row-ns flex-column w-100 pa3 pa4-ns justify-center items-center mb0">
      <p class="f4 f-subsubheadline w-100 w-60-ns tc-ns tl">In association with NYC's Mayor's Office of Data Analytics (MODA) and supported by these lovely organizations</p>
      </section>
    <section class="flex flex-row-ns flex-column w-100 w-100-ns pa2 pa2-ns">
      <div class="w-33-ns w-100 h5 flex flex-column justify-center items-center mr2">
        <p class="">MODA</p>
        <p class="f3 f2-ns f-headline b ma0 w4 h4"><img src="https://www1.nyc.gov/assets/operations/images/content/researchandanalytics/programs_Analytics.png" alt="MODA logo"></p>
      </div>
      <div class="w-33-ns w-100 h5 flex flex-column justify-center items-center outline mr2">
          <p class=""><a href="#">Your Organization Here!</a></p>
          <p class="f3 f2-ns f-headline b ma0">🦄</p>
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

/**

<!-- <section class="flex flex-row-ns flex-column w-100 pa3 pa4-ns">
        <div class="w-33-ns w-100 h5 flex flex-column justify-center items-center outline mr2">
            <p class="">events</p>
          <p class="f3 f2-ns f-headline b ma0">X</p>
        </div>
        <div class="w-33-ns w-100 h5 flex flex-column justify-center items-center outline mr2">
            <p class="">artists</p>
          <p class="f3 f2-ns f-headline b ma0">8-10</p>
          
        </div>
        <div class="w-33-ns w-100 h5 flex flex-column justify-center items-center outline">
            <p class="">in association with</p>
          <p class="f3 f2-ns f-headline b ma0">MODA</p>
        </div>
        <div class="w-33-ns w-100 h5 flex flex-column justify-center items-center outline">
            <p class="">in association with</p>
          <p class="f3 f2-ns f-headline b ma0">MODA</p>
        </div>
    </section> -->

    */