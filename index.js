var css = require('sheetify')
var choo = require('choo')
var html = require('choo/html')

css('tachyons')

var app = choo()
if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')())
} else {
  app.use(require('choo-service-worker')())
}

app.use(require('./stores/clicks'))

app.route('/', require('./views/main'))
app.route('/about', require('./views/about'))
app.route('/schedule', require('./views/schedule'))
app.route('/exhibition', require('./views/exhibition'))
app.route('/talks', require('./views/talks'))
app.route('/workshops', require('./views/workshops'))
app.route('/submit', require('./views/submit'))
app.route('/ref', require('./views/ref'))
app.route('/support', require('./views/support'))
app.route('/*', require('./views/404'))


module.exports = app.mount('body')
