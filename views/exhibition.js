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
        <p>Interested to be be commissioned for DTD'19? <a class="link black underline hover-bg-white" href="/submit">Submit a proposal!</a></p>
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

    <section class="dn  flex-row-ns flex-column w-100 w-100-ns pa3 pa4-ns flex-wrap">
      <div class="w-100">
        <h1>Helpful References and Data How-Tos</h1>
      </div>
      <div class="w-100 w-80-ns pr2">
        <p>A general rule of thumb of working with data is that 80% of your time will be spent preparing your data to be used for analysis/visualization/materialization. Data preparation -- cleaning, munging, reformating, parsing, filtering, etc -- can be a real "can of worms", which is to say, that it can be tricky even for experts. Below you'll find some handy links and references that might help you along your data handling, analysis, and visualization journies:</p>
        <p>
          <ul>
            <li><a class="link underline black" href="#">Link to example #1</a>: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.</li>
            <li><a class="link underline black" href="#">Link to example #2</a>: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.</li>
            <li><a class="link underline black" href="#">Link to example #3</a>: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.</li>
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