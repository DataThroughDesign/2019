var Component = require('choo/component')
var html = require('choo/html')


module.exports = function (name, state, emit) {

  let toggleDropdown = function(e){
    e.preventDefault();
    console.log(e.target.childNodes[1])
    e.target.childNodes[1].classList.toggle("dn");
  }

  return html `
    <nav class="pa3 pa4-ns flex flex-row-ns flex-column">
      <section class="pa2 flex flex-column w-100 w-25-ns br-ns bt bb-ns flex-wrap f2 f-headline">Data ✕ Design <br> <span class="f4 i">Data Through Design</span></section>
      <section class="flex flex-column w-100 w-75-ns bt bb">
        <section class="flex flex-row w-100 justify-between pa2 bb">
          <div class="tl flex-1">March 01 - TBD, 2019</div>
          <div class="tr">An independently organized exhibition⁺ for data and cartography</div>
        </section>
        <section class="flex flex-row">
          <ul class="flex flex-row list justify-between-ns w-100 pa2 flex-wrap justify-start">
            <li onclick=${toggleDropdown} class="mr2">Program ▾
              <ul class="list outline bg-white pa2 dn">
                <li class="bt pa2">Exhibtion</li>
                <li class="bt pa2 pb2">Talks</li>
                <li class="bt pa2 pb2">Workshop(s)</li>
              </ul>
            </li>
            <li class="mr2">Schedule</li>
            <li class="mr2">About</li>
            <li onclick=${toggleDropdown} class="mr2">Past Events ▾
              <ul class="list outline bg-white pa2 dn">
              <li class="bt pa2">2018</li>
              </ul>
            </li>
            <li class="mr2">Submit</li>
          </ul>
        </section>
      </section>
    </nav>
  `
}

/** 

<nav class="pa3 pa4-ns ba bw1 b--white">
    <section class="flex flex-row items-end flex-wrap bb pb2 pt2 b--white">
        <div class="w-50-l w-40-m w-100 f3 f1-ns b f-headline lh-title"><span class="bg-white">Data ✕ Design</span></div>
        <div class="w-50-l w-60-m w-100 f4 f3-ns"><span class="bg-white">An independently organized exhibition⁺ for data and cartography </span></div>
      </section>
      <section class="flex flex-row flex-wrap mt1 bb pb2 pt2 b--white">
        <div class="w-50-l w-40-m w-100 f5"></div>
        <div class="w-25-l w-30-m w-100 f5"> In association with Open Data Week</div>
        <div class="w-25-l w-30-m w-100 f5">New York City, 2019</div>
      </section>
      <section class="flex flex-row flex-wrap mt1 bb pb2 pt2 b--white">
        <div class="w-50-l w-40-m w-100 f5"></div>
        <div class="w-25-l w-30-m w-100 f5">March 01 - TBD</div>
        <div class="w-25-l w-30-m w-100 f5">Location ABC <br> 123 Street Address <br> City, NY, Postal</div>
      </section>
    </nav>

 */

/** 
<nav class="pa3 pa4-ns">
      <a class="link dim white b f1 f-headline-ns tc db mb1 mb4-ns" href="#" title="Home"> <span class="bg-light-pink">DATA ✕ DESIGN </span> </a>
      <div class="tc pb3">
        <a class="link dim gray f6 f5-ns dib mr3" href="#" title="Home">Home</a>
        <a class="link dim gray f6 f5-ns dib mr3" href="#" title="About">About</a>
        <a class="link dim gray f6 f5-ns dib mr3" href="#" title="Submit">Submit</a>
        <a class="link dim gray f6 f5-ns dib" href="#" title="Contact">Contact</a>
      </div>
    </nav>
*/

// class Nav extends Component {
//   constructor (id, state, emit) {
//     super(id)
//     this.id = id;
//     this.state = state;
//     this.emit = emit;
//     this.local = state.components[id] = {}
//   }

//   createElement () {
//     return html`
//       <div>
//       </div>
//     `
//   }

//   update () {
//     return true
//   }
// }

// module.exports = Nav