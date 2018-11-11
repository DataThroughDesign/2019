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
      <h1>About <span class="i">Data Through Design</span></h1>
      </div>
      
      <div class="w-100 w-50-ns pr2">
      <p>As we rapidly evolve into a society of ‘digital natives’ who communicate, interact, and create in the realm
        of the ephemeral, the everyday realities of life in the city become less tangible and begin to loosen their
        hold in our psyche. The deluge and pervasiveness of data desensitizes us to the fact that, behind each data
        point is a story.</p>
      <p>Data Through Design is an annual alternative cartography exhibition held during New York City’s Open Data
        Week, an endeavor of the Mayor’s Office of Data Analytics. The objective of the exhibit is to enable curious
        makers such as technologist, artists, and designers to create
        novel methods of map-making, present new narrative perspectives, and develop a deeper understanding of life in
        the city using data as a medium.
      </p>
    </div>
      <div class="w-100 w-50-ns">
      <p>Each year, the exhibition takes on a new theme designed to challenge artists to consider ways in which they
        can
        surface the hidden stories that data can tell us, the absurdity underlying data, the connections that can be
        made through data, and the slippages that occurs when we use data as a heuristic for reality.</p>
      <p>We commission 8 - 10 installations based on a theme and provide each group with financial, technical, and
        design support. We encourage
        a diversity of backgrounds and media, while encouraging physical manifestations of data rather than screen
        based, digital media. Previously
        featured artists were software engineers, graphic designers, architects, urban technologists, map- makers, and
        other backgrounds all working with the city’s open datasets.</p>

      <p>The exhibition’s audience ranges from the civic technology community, to policy-makers, to the design
        community. Our hope is to enable a space for creative engagement with data and open new perspectives to our
        appreciation and understanding of data.</p>
        <p>- Jessie, Wenfei, Joey, Michelle, Abe, and Stuart</p>
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