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
        <h1>Workshop Series</h1>
      </div>
      <div class="w-100 w-50-ns pr2">
        <p>We invite interested folks to come and give a 2-3 hour workshop on a topic of interest regarding open data.
          We particularly are interested host workshops that help people to better understand, work with, contribute
          to, and make sense of NYC's open data through various methods such as visualization, mapping (of course!), data analysis, and
          storytelling.</p>
      </div>
      <div class="w-100 w-50-ns">
          <p>Not sure if your idea fits? <a class="link black underline" href="/submit">Submit a proposal</a> anyways and we'll get back to you. We're happy to hear your ideas.</p>
        <p class="dn">This year we are happy to host the following people and their workshops:</p>
        <ul class="dn">
          <li><a href="">Person</a>, <a href="">Talk Title</a> </li>
        </ul>
      </div>
    </section>
    <section class="flex flex-row-ns flex-column w-100 w-100-ns pa3 pa4-ns flex-wrap">
        <div class="w-100">
          <h1>2019 Workshops</h1>
        </div>
        <div class="w-100 w-80-ns pr2">
          <p>Interested to give a wokrshop for DTD'19?  <a class="link black underline" href="/submit">Submit a proposal</a></p>
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