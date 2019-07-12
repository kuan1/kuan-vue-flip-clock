const { buildLib: build } = require('kuan-pack')

const { resolve } = require('./utils')

build({
  extend(config) {
    config.output.path = resolve('lib')
    config.entry = resolve('src')
  }
})
