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
        <h1>Schedule <span class="i">2019</span></h1>
        <p class="w-100 w-60-ns ">The schedule for 2019 is shown below. In addition to the DTD hosted events, we've also included
          some of the satellite events of Open Data Week that might also be of interest. Feel free to get in touch if
          you have any questions.</p>
      </div>
      
      <div class="w-100">
          <h2>Date/Time Specific Events</h2>
        <div class="overflow-auto">
          <table class="w-100 mw8" cellspacing="0">
            <thead>
              <tr class="stripe-dark">
                <th class="fw6 tl pa3 bg-white">Date</th>
                <th class="fw6 tl pa3 bg-white">Event</th>
                <th class="fw6 tl pa3 bg-white">Location</th>
                <th class="fw6 tl pa3 bg-white">Time</th>
                <th class="fw6 tl pa3 bg-white">Registration</th>
              </tr>
            </thead>
            <tbody class="lh-copy">
              <tr class="stripe-dark">
                <td class="pa3">March 1, 2019</td>
                <td class="pa3">Exhibition Opening</td>
                <td class="pa3">New Lab, 19 Morris Avenue, #building 128, Brooklyn, NY 11205 </td>
                <td class="pa3">6:30 PM - 10:00 PM</td>
                <td class="pa3"><a class="link underline black b" href="https://www.eventbrite.com/e/data-through-design-exhibit-opening-night-tickets-55657070797" target="_blank">Eventbrite Registration</a></td>
              </tr>
              <tr class="stripe-dark dn">
                <td class="pa3">March 4, 2019</td>
                <td class="pa3">Exhibition Opening</td>
                <td class="pa3">TBD</td>
                <td class="pa3">6:00 PM - 11:00 PM</td>
              </tr>
              <tr class="stripe-dark dn">
                  <td class="pa3">March 5, 2019</td>
                <td class="pa3">Exhibition Opening</td>
                <td class="pa3">TBD</td>
                <td class="pa3">6:00 PM - 11:00 PM</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="w-100">
          <h2>Free floating events</h2>
          <div class="overflow-auto">
            <table class="w-100 mw8" cellspacing="0">
              <thead>
                <tr class="stripe-dark">
                  <th class="fw6 tl pa3 bg-white">Date</th>
                  <th class="fw6 tl pa3 bg-white">Event</th>
                  <th class="fw6 tl pa3 bg-white">Location</th>
                  <th class="fw6 tl pa3 bg-white">Time</th>
                  <th class="fw6 tl pa3 bg-white">Registration</th>
                </tr>
              </thead>
              <tbody class="lh-copy">
                <tr class="stripe-dark">
                  <td class="pa3">March 1 - March 11, 2019</td>
                  <td class="pa3">Exhibition Open to Public with Registration</td>
                  <td class="pa3">New Lab, 19 Morris Avenue, #building 128, Brooklyn, NY 11205 </td>
                  <td class="pa3">6:30 PM - 10:00 PM</td>
                  <td class="pa3"><a class="link underline black b" href="https://www.eventbrite.com/e/data-through-design-exhibition-tickets-55667565186" target="_blank">Eventbrite Registration</a></td>
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