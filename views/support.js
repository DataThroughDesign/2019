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
        <h1>Interested to Support DTD?</h1>
        <p class="w-100 w-60-ns ">DTD is an independently organized exhibition and is made possible through the generosity, support, and interest of amazing organizations and institutions throughout New York City. By supporting DTD with funding, a venue, food and snacks, or whatever comes to your mind, you're instrumental in cultivating NYC's wonderful arts/media/technology/civic community.</p>
      </div>

      <div class="w-100">
          <h2>Sponsorship Opportunities</h2>
          <div class="overflow-auto">
            <table class="w-100 mw8" cellspacing="0">
              <thead>
                <tr class="stripe-dark">
                  <th class="fw6 tl pa3 bg-white">Level</th>
                  <th class="fw6 tl pa3 bg-white">Amount/Support</th>
                  <th class="fw6 tl pa3 bg-white">Reward</th>
                </tr>
              </thead>
              <tbody class="lh-copy">
                <tr class="stripe-dark">
                  <td class="pa3">1</td>
                  <td class="pa3">$2000</td>
                  <td class="pa3">1. Sponsorship acknowledgment in all Data Through Design Materials</td>
                </tr>
                <tr class="stripe-dark">
                  <td class="pa3">2</td>
                  <td class="pa3">$5000</td>
                  <td class="pa3">1. Sponsorship acknowledgment in all Data Through Design Materials, 2. Speaking spot during exhibition opening</td>
                </tr>
                <tr class="stripe-dark">
                  <td class="pa3">3</td>
                  <td class="pa3">$7000</td>
                  <td class="pa3">1. Sponsorship acknowledgment in all Data Through Design Materials, 2. Speaking spot during exhibition opening, 3. Organized workshop, talk, or other programming slot during exhibition.</td>
                </tr>
                <tr class="stripe-dark">
                  <td class="pa3">Other</td>
                  <td class="pa3">Food and Drink</td>
                  <td class="pa3">1. Sponsorship acknowledgment in all Data Through Design Materials</td>
                </tr>
                <tr class="stripe-dark">
                  <td class="pa3">Other</td>
                  <td class="pa3">Artist Stipends - Fund individual artist stipends ($600 each)</td>
                  <td class="pa3">1. Sponsorship acknowledgment in all Data Through Design Materials</td>
                </tr>
                <tr class="stripe-dark">
                  <td class="pa3">Other</td>
                  <td class="pa3">Fabrication and/or Materials</td>
                  <td class="pa3">1. Sponsorship acknowledgment in all Data Through Design Materials</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      <div class="w-100 dn">
          <h2>Date/Time Specific Events</h2>
        <div class="overflow-auto">
          <table class="w-100 mw8" cellspacing="0">
            <thead>
              <tr class="stripe-dark">
                <th class="fw6 tl pa3 bg-white">Date</th>
                <th class="fw6 tl pa3 bg-white">Event</th>
                <th class="fw6 tl pa3 bg-white">Location</th>
                <th class="fw6 tl pa3 bg-white">Time</th>
              </tr>
            </thead>
            <tbody class="lh-copy">
              <tr class="stripe-dark">
                <td class="pa3">March 1, 2019</td>
                <td class="pa3">Exhibition Opening</td>
                <td class="pa3">TBD</td>
                <td class="pa3">6:00 PM - 11:00 PM</td>
              </tr>
              <tr class="stripe-dark">
                <td class="pa3">March 2, 2019</td>
                <td class="pa3">Exhibition Opening</td>
                <td class="pa3">TBD</td>
                <td class="pa3">6:00 PM - 11:00 PM</td>
              </tr>
              <tr class="stripe-dark">
                <td class="pa3">March 3, 2019</td>
                <td class="pa3">Exhibition Opening</td>
                <td class="pa3">TBD</td>
                <td class="pa3">6:00 PM - 11:00 PM</td>
              </tr>
              <tr class="stripe-dark">
                <td class="pa3">March 4, 2019</td>
                <td class="pa3">Exhibition Opening</td>
                <td class="pa3">TBD</td>
                <td class="pa3">6:00 PM - 11:00 PM</td>
              </tr>
              <tr class="stripe-dark">
                  <td class="pa3">March 5, 2019</td>
                <td class="pa3">Exhibition Opening</td>
                <td class="pa3">TBD</td>
                <td class="pa3">6:00 PM - 11:00 PM</td>
              </tr>
            </tbody>
          </table>
        </div>
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