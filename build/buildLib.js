const { buildLib: build } = require('kuan-pack')

const { resolve } = require('./utils')

build({
  extend(config) {
    config.output.path = resolve('lib')
    config.output.filename = '[name].js'
    config.output.library = '[name]'
    config.entry = resolve('src')
  }
})
