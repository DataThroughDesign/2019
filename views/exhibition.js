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
        <h1>Exhibition: NaN - <span class="i">Not a Number</span></h1>
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
        <h1>2019 Artists</h1>
      </div>
      <div class="w-100 w-80-ns pr2">
        <p>Data Through Design 2019 will be supporting a total of 9 projects. The selections were made based on the artist's portfolio, the strength of their proposal, and the overall connection of their work with the other projects that were selected. We believe these projects offers a unique contribution to this year's DxD theme — Not a Number (NaN) - and are happy to support their work. The artists bios and their forthcoming project titles are shown below.</p>
        <ul class="">
          <li><b>Crystal Penalosa & Melissa De La Cruz</b>, <i>Temporal Views of the Bike Lane</i>
            <ul>
            <li><a class="link underline black" href="https://crystalpenalosa.info/Select-design-work-with-littleBits">Crystal Penalosa</a> & <a class="link underline black" href="http://www.bitsandatoms.net/">Melissa De La Cruz</a> : Crystal Penalosa (she/they) is an American artist and interdisciplinary designer based in New York. Their work as an artist focuses on queer identity, utilizing modular electronics and voice. She has performed collaboratively and solo in New York at Issue Project Room, Roulette Intermedium, Sediment Gallery, MoMA PS1, Experimental Intermedia, SPEKTRUM in Berlin, and the Golden Pudel in Hamburg. Crystal currently works at Stae as the community engineer, collaboratively developing hardware prototypes with cities to solve problems. They hold a Masters Degree in Urban Planning from NYU’s Wagner School of Public Service. </li>
            </ul>
          </li>
          <li><b>Karl Munstedt</b>, <i>Collision Course</i>
            <ul>
            <li><a class="link underline black" href="http://karlmunstedt.com/">Karl Munstedt</a>: Karl is digital artist and technologist living and working in Brooklyn, NY. He was born in Boston, MA and grew up spending much of his time on the internet befriending strangers and finding numerous cyber boyfriends. Using technologies like game engines, augmented reality, and the web, his work explores issues of queerness, future, and fantasy. Karl's work has previously exhibited at queertech.io and FILE festival. He received a BFA in Interactive Art from Pratt Institute in 2018. </li>
            </ul>
          </li>
          <li><b>Itay Niv</b>, <i>NYC Trees Soundscape</i>
            <ul>
            <li><a class="link underline black" href="http://www.itayniv.com/">Itay Niv</a>: Itay Niv is an interactive and visual designer with more than 10 years of experience in the intersections of motion and interaction design, working in a wide array of formats and domains, bridging the digital and the physical. He holds a bachelor's of design from Bezalel Academy of Arts and Design in Jerusalem. Currently based in NYC, attending NYU's Interactive Telecommunications Program (ITP) in Tisch school of arts where he explores intersections in the fields of augmented and virtual reality, music, machine learning and interactive media.</li>
            </ul>
          </li>
          <li><b>Ana Mengote</b>, <i>Exhausted New York</i>
            <ul>
              <li><a class="link underline black" href="https://www.instagram.com/stuffbyana/">Ana Mengote</a>: Ana Mengote is an Industrial Designer that spends her time between New York, Seattle, and Manila. She recently started school at Columbia University's GSAPP to marry her design background, to larger-scale urban needs.</li>
            </ul>
          </li>
          <li><b>Eric Forman</b>, <i>UnBuilding</i>
            <ul>
              <li><a class="link underline black" href="https://www.ericforman.com/" target="_blank">Eric Forman</a>: Eric Forman is a Brooklyn-based artist and designer working with interactive installations, responsive sculpture, and digital fabrication. His work is open-ended and exploratory, crossing boundaries between fine art, design, performance, and architecture. </li>
            </ul>
          </li>
          <li><b>Mollie Ruskin & Xena Ni</b>, <i>Tempo: Human Rhythm of a New York Day</i>
            <ul>
              <li><a class="link underline black" href="https://ru-design.org/" target="_blank">Mollie Ruskin</a> & <a class="link underline black" href="http://www.averyseriousdesigner.com/" target="_blank">Xena Ni</a>: Mollie Ruskin and Xena Ni are designers, artists, and organizers who design and build interactive experiences for the public good.  They believe in dignity and democracy at scale and that public institutions should work with and for the people they serve. Mollie and Xena work with government partners, community organizations, and art collectives to help their local communities become more representative, equitable, and just.</li>
            </ul>
          </li>
          <li> <b>Achim Koh & Wonyoung So</b>, <i>From Point A to Point B</i>
            <ul>
              <li><a class="link underline black" href="https://scalarvectortensor.net" target="_blank">Achim Koh</a>: Achim Koh is a researcher, software developer and translator. His work engages the technopolitics of machine learning, digital culture, musical interfaces, and the web. </li>
              <li><a class="link underline black" href="http://wonyoung.so" target="_blank">Wonyoung So</a>: Wonyoung So is a data visualization designer and researcher. His main interests are about bottom-up driven data movement, and he is interested in how the open-source and DIY movement will affect the urban space. He is currently a graduate student of the Department of Urban Studies and Planning at the Massachusetts Institute of Technology (MIT). </li>
            </ul>
          </li>
          <li> <b>Stephanie Luu & Andrew Lin</b>, <i>Cards Against Hate</i>
            <ul>
              <li>
              <a class="link underline black" href="https://www.skittishgame.com/" target="_blank">Stephanie Luu</a>: Stephanie graduated from the University of Texas at Austin with a bachelor’s degree in business and was a technology consultant before moving to NYC two years ago, where she fostered her career change to her current role as a visual designer for KPMG Innovation Labs. She enjoys opportunities where she can harness the synergy (old habits never die) from both her past and present focus areas: problem solving, visual design, and fun. She is also collaborating with Andrew to provide the graphic design for a fun, improv-based party game named Skittish!. 
              </li>
              <li>
              <a class="link underline black" href="https://www.skittishgame.com/" target="_blank">Andrew Lin</a>: Andrew holds a bachelor’s degree in business from the University of Michigan and an MBA from the University of North Carolina. He was a management consultant in the life sciences sector for 4 years before working on entrepreneurial ventures full-time. One of these ventures is Skittish Games LLC, which develops card-based board & party games. Andrew is currently working with Stephanie on Skittish, the flagship game for the company.
              </li>
            </ul>
          </li>
          <li> <b>Nicolas Grefenstette &  Pierre Depaz</b>, <i>Below, just a point</i>
            <ul>
              <li><a class="link underline black" href="https://pierredepaz.net/" target="_blank">Pierre Depaz</a>: Pierre is an educator, artist and programmer from France. He currently teaches at multiple NYU campuses. He is interested in the multiple ways computers are attempting to represent and interface with human concepts and emotions. His academic research revolves around simulation, semantics and public organization through technological means, while his artistic practice includes digital games, computer simulations, interactive installations, networked performances and experimental web projects, and has been exhibited in NYC, Paris, Cairo, Abu Dhabi, Brussels and Berlin. </li>
              <li><a class="link underline black" href="#" target="_blank">Nicolas Grefenstette</a> is a landscape designer and urban planner. His academic background in cultural and human geography at University College London (UCL) and his experiences living and observing cities across Europe, Asia and the United States have led him to complete his graduate studies at Cornell University in Ithaca, New York, where he focused on the reclamation of industrial and underutilized urban land. He currently works for Starr Whitehouse Landscape Architects and Planners, where he designs public space in New York City.</li>
            </ul>
          </li>

        </ul>
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
      <div class="w-100">
        <h1>Projects We Love</h1>
      </div>
      <div class="w-100 w-80-ns pr2">
        <p>This year's Data Through Design Theme, NaN - Not a Number - invites artists and creators to help tell the untold stories of NYC's open data. How might data illuminate as much as complicate our understanding of the social, cultural, and environmental processes that NYC's open data speak to? Below you'll find some projects that seek to create new discussions about the ways that data reflects or misrepresents the people and places around us. NOTE: We hope this list is inspiring!</p>
        <p>
          <ul>
            <li><a class="link underline black" href="http://mimionuoha.com/the-library-of-missing-datasets/">The Library of Missing Datasets</a>: An ongoing physical repository of things that have been excluded in a society where so much is collected.</li>
            <li><a class="link underline black" href="https://camd.northeastern.edu/news/dietmar-offenhuber-presents-dust-reverse-graffiti/">Dust</a>: Our cities are full of fine dust and are struggling with the phenomenon of microscopic particles. We can not detect fine dust with the naked eye. Although electronic sensors provide accurate measurement data, the numbers and units of measurement remain abstract for us. Dietmar Offenhuber’s “dust mark” makes the particulate matter pollution in Stuttgart visible and tangible, using the technique of reverse graffiti.</li>
            <li><a class="link underline black" href="https://canners.nyc/">Canners</a>: There is no accurate data on the activity of canning, but people involved in the sector claim that more than 10,000 people pick up empty cans on the streets of New York to make some money. We mapped the experience of eight of them.</li>
            <li><a class="link underline black" href="http://pmcruz.com/dendrochronology/">Simulated Dendrochronology of U.S. immigration</a>: The United States can be envisioned as a tree, with shapes and growing patterns influenced by immigration. The nation, the tree, is hundred years old, and its cells are made out of immigrants. As time passes, they are deposited in decennial rings that capture waves of immigration.</li>
            <li><a class="link underline black" href="https://vimeo.com/250393598">Herald / Harbinger</a>: Herald / Harbinger incorporates a collection of data feeds to illustrate the interrelationship between human activity in Calgary and the natural system of the Bow Glacier in the Canadian Rockies, which exists in a perpetual state of physical transformation.</li>
            <li><a class="link underline black" href="https://vimeo.com/103748794">Mapping Geotagged Photos in Public Spaces</a>: For any city, thousands of geotagged photos are available online. The project maps these photos in the places where they were taken..</li>
          </ul>
        </p>
        <p>Looking for last year's work? Examples of artist work from Data Through Design 2018 can be seen <a class="link underline black" href="http://2018.datathroughdesign.com/">here</a>.</p>
      </div>
    </section>
    <section class="flex flex-row-ns flex-column w-100 w-100-ns pa3 pa4-ns flex-wrap">
      <div class="w-100">
        <h1>Looking for Data?</h1>
      </div>
      <div class="w-100 w-80-ns pr2">
        <p>Data Through Design prompts the creative community to look into NYC's open data. Below we've curated a shortlist of datasets artists might be interested in exploring.</p>
        <p>
          <ul>
          <li><a class="link underline black" href="https://data.cityofnewyork.us/Environment/2015-Street-Tree-Census-Tree-Data/pi5s-9p35">NYC Street Trees</a>: Street tree data from the TreesCount! 2015 Street Tree Census, conducted by volunteers and staff organized by NYC Parks & Recreation and partner organizations. Tree data collected includes tree species, diameter and perception of health. Accompanying blockface data is available indicating status of data collection and data release citywide.</li>
            <li><a class="link underline black" href="https://data.cityofnewyork.us/Transportation/MTA-Data/mmu8-8w8b">MTA Data</a>: Information pertaining to MTA (Metropolitan Transportation Authority of the State of New York) subways, buses, commuter rail, bridges, and tunnels. See <a class="link underline black" href="https://datamine.mta.info/user/register">MTA API registration</a>.</li>
            <li><a class="link underline black" href="https://data.cityofnewyork.us/City-Government/Open-Parking-and-Camera-Violations/nc67-uf89">NYC Parking and Camera Violations</a>: NYC's Parking Violations.</li>
            <li><a class="link underline black" href="https://data.cityofnewyork.us/Education/Art-in-DOE-buildings/8a4n-zmpj">Art in DOE buildings</a>: List of art, artist, medium and DOE building that the art is located in schools.</li>
            <li><a class="link underline black" href="https://data.cityofnewyork.us/Housing-Development/Water-Consumption-And-Cost-2013-June-2018-/66be-66yr">Water Consumption And Cost (2013 - June 2018)</a>: Monthly consumption and cost data by borough and development. Data set includes utility vendor and meter information.</li>
            <li><a class="link underline black" href="https://data.cityofnewyork.us/Environment/Sea-Level-Rise-Maps-2020s-100-year-Floodplain-/ezfn-5dsb">Sea Level Rise Maps (2020s 100-year Floodplain)</a>: This is the 100-Year Floodplain for the 2020s based on FEMA's Preliminary Work Map data and the New York Panel on Climate Change's 90th Percentile Projects for Sea-Level Rise (11 inches). Please see the Disclaimer PDF for more information. Data Provided by the Mayor's Office of Long-Term Planning and Sustainability (OLTPS) on behalf of CUNY Institute for Sustainable Cities (CISC) and the New York Panel on Climate Change (NPCC).</li>
            <li><a class="link underline black" href="https://data.cityofnewyork.us/Environment/Inventory-of-New-York-City-Greenhouse-Gas-Emission/k3e2-emsq">Inventory of New York City Greenhouse Gas Emissions - Citywide GHG Emissions Summary (2016)</a>: Inventory of New York City Greenhouse Gas Emissions - Citywide GHG Emissions Summary (2016).</li>
          </ul>
        </p>
      </div>
    </section>

    <section class="flex flex-row-ns flex-column w-100 w-100-ns pa3 pa4-ns flex-wrap">
      <div class="w-100">
        <h1>Helpful References and Data How-Tos</h1>
      </div>
      <div class="w-100 w-80-ns pr2">
        <p>A general rule of thumb of working with data is that 80% of your time will be spent preparing your data to be used for analysis/visualization/materialization. Data preparation -- cleaning, munging, reformating, parsing, filtering, etc -- can be a real "can of worms", which is to say, that it can be tricky even for experts. Below you'll find some handy links and references that might help you along your data handling, analysis, and visualization journies:</p>
        <p>
          <ul>
            <li><a class="link underline black" href="https://beta.nyc/products/nyc-opendata-classes/">Beta NYC - Open Data 101</a>: Fundamentals of NYC Open Data.</li>
            <li><a class="link underline black" href="https://www.data2go.nyc/map/#10/40.7095/-73.9794">DATA2GO.NYC</a>: DATA2GO.NYC is a free, easy-to-use online mapping and data tool created by the nonprofit Measure of America of the Social Science Research Council with funding from The Leona M. and Harry B. Helmsley Charitable Trust. It brings together for the first time federal, state, and city data on a broad range of issues critical to the well-being of all New Yorkers.</li>
            <li><a class="link underline black" href="https://opendata.cityofnewyork.us/how-to/">Open Data NYC How To</a>: A Getting Started With Open Data Guide by the NYC Open Data.</li>
          </ul>
        </p>
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