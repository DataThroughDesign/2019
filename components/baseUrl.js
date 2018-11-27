var html = require('choo/html')

function BaseUrl(){
  return html`
  <head>
    <base href="/2019/">
  </head>  
  `
}

module.exports = BaseUrl